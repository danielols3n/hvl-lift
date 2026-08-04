// Minimal browser driver for hvl-lift, standing in for `chromium-cli`
// (not installed in this environment). Command vocabulary intentionally
// mirrors chromium-cli's so the skill reads the same either way.
//
// Reads one command per line from stdin — pipe a heredoc:
//   node driver.mjs <<'EOF'
//   nav http://localhost:5173
//   wait-for text=Lift HVL
//   screenshot home
//   console --errors
//   EOF
//
// Screenshots land in .claude/skills/run-hvl-lift/screenshots/
// (override with SCREENSHOT_DIR).
import { chromium } from "playwright";
import * as readline from "node:readline";
import * as fs from "node:fs";
import * as path from "node:path";

const SHOT_DIR =
  process.env.SCREENSHOT_DIR ||
  path.resolve(import.meta.dirname, "screenshots");
fs.mkdirSync(SHOT_DIR, { recursive: true });

const consoleMsgs = [];
let browser, page;

async function ensurePage() {
  if (page) return page;
  browser = await chromium.launch();
  page = await browser.newPage();
  page.on("console", (msg) =>
    consoleMsgs.push({ type: msg.type(), text: msg.text() }),
  );
  page.on("pageerror", (err) =>
    consoleMsgs.push({ type: "pageerror", text: err.message }),
  );
  return page;
}

const COMMANDS = {
  async nav(url) {
    await ensurePage();
    await page.goto(url, { waitUntil: "domcontentloaded" });
    console.log("nav ->", url);
  },

  async "wait-for"(sel) {
    await ensurePage();
    try {
      await page.waitForSelector(sel, { timeout: 10_000 });
      console.log("found:", sel);
    } catch {
      console.log("TIMEOUT:", sel);
    }
  },

  async screenshot(name) {
    await ensurePage();
    const f = path.join(SHOT_DIR, (name || `ss-${Date.now()}`) + ".png");
    await page.screenshot({ path: f, fullPage: true });
    console.log("screenshot:", f);
  },

  async click(sel) {
    await ensurePage();
    try {
      await page.click(sel, { timeout: 10_000 });
      console.log("click", sel, "-> OK");
    } catch (e) {
      console.log("click", sel, "-> ERROR:", e.message);
    }
  },

  async fill(args) {
    await ensurePage();
    const [sel, ...rest] = args.split(" ");
    const text = rest.join(" ");
    await page.fill(sel, text);
    console.log("fill", sel, "->", text);
  },

  async press(key) {
    await ensurePage();
    await page.keyboard.press(key);
    console.log("press", key);
  },

  async type(text) {
    await ensurePage();
    await page.keyboard.type(text, { delay: 20 });
    console.log("type", text);
  },

  async eval(expr) {
    await ensurePage();
    try {
      console.log(JSON.stringify(await page.evaluate(expr)));
    } catch (e) {
      console.log("ERROR:", e.message);
    }
  },

  async text(sel) {
    await ensurePage();
    console.log(
      await page.evaluate(
        (s) => (s ? document.querySelector(s) : document.body)?.innerText ?? "(null)",
        sel || null,
      ),
    );
  },

  async console(flag) {
    const msgs =
      flag === "--errors"
        ? consoleMsgs.filter((m) => m.type === "error" || m.type === "pageerror")
        : consoleMsgs;
    if (!msgs.length) console.log(flag === "--errors" ? "no console errors" : "(no console output)");
    else msgs.forEach((m) => console.log(`[${m.type}]`, m.text));
  },

  async viewport(args) {
    await ensurePage();
    const [w, h] = args.split(" ").map(Number);
    await page.setViewportSize({ width: w, height: h });
    console.log("viewport", w, h);
  },

  async quit() {
    if (browser) await browser.close();
    browser = null;
    page = null;
    console.log("closed");
  },

  help() {
    console.log("commands:", Object.keys(COMMANDS).join(", "));
  },
};

// Serialize commands: stdin lines can arrive faster than an async handler
// finishes, so queue them instead of letting handlers race.
let queue = Promise.resolve();

const rl = readline.createInterface({ input: process.stdin, terminal: false });
rl.on("line", (line) => {
  const trimmed = line.trim();
  if (!trimmed || trimmed.startsWith("#")) return;
  const [cmd, ...rest] = trimmed.split(/\s+/);
  const arg = trimmed.slice(cmd.length).trim();
  const fn = COMMANDS[cmd];
  queue = queue.then(async () => {
    if (!fn) return console.log("unknown command:", cmd, "- try: help");
    try {
      await fn(arg);
    } catch (e) {
      console.log("ERROR:", e.message);
    }
  });
});

rl.on("close", () => {
  queue = queue.then(async () => {
    if (browser) await browser.close();
    process.exit(0);
  });
});
