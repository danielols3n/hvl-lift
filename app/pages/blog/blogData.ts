export type BlogProject = {
  slug: string;
  name: string;
  phase: string;
  summary: string;
  tags: string[];
  updates: Array<{
    title: string;
    date: string;
    author: string;
    summary: string;
    tags: string[];
  }>;
};

export const blogProjects: BlogProject[] = [
  {
    slug: "queen-bee",
    name: "Queen Bee",
    phase: "Planning",
    summary:
      "Building the first Lift HVL drone with focus on making the queen bee for our 2nd semester 2026 project.",
    tags: ["Battery Switching", "Telemetry", "Airframe"],
    updates: [
      {
        title: "Kickoff week: system architecture",
        date: "February 2026",
        author: "Hardware + Software",
        summary:
          "Mapped the power tree, avionics stack, and the battery switching control loops. Drafted the first block diagram.",
        tags: ["Planning", "Avionics"],
      },
      {
        title: "CAD sprint: frame outline locked",
        date: "Late February 2026",
        author: "Mechanical",
        summary:
          "Locked the overall airframe outline and printed first-fit section tests for the battery bay.",
        tags: ["CAD", "Prototype"],
      },
    ],
  },
  {
    slug: "swarm-relay",
    name: "Swarm Relay",
    phase: "Research",
    summary:
      "Exploring how a lead drone can coordinate small scout units with low-latency telemetry relays.",
    tags: ["Networking", "Autonomy", "Telemetry"],
    updates: [
      {
        title: "Link budget experiments",
        date: "January 2026",
        author: "Software",
        summary:
          "Bench-tested mesh radio ranges and packet loss across indoor and outdoor setups.",
        tags: ["RF", "Telemetry"],
      },
      {
        title: "Simulation harness ready",
        date: "February 2026",
        author: "Autonomy",
        summary:
          "Created a swarm simulation harness with replayable scenarios for failure testing.",
        tags: ["Simulation"],
      },
    ],
  },
  {
    slug: "field-ops-toolkit",
    name: "Field Ops Toolkit",
    phase: "Prototype",
    summary:
      "Building a portable ground control kit for field missions: logging, checklists, and battery health.",
    tags: ["Ground Control", "Ops", "Data"],
    updates: [
      {
        title: "Mission checklist v1",
        date: "December 2025",
        author: "Operations",
        summary:
          "Defined a portable checklist for pre-flight checks and emergency procedures.",
        tags: ["Ops", "Safety"],
      },
      {
        title: "Telemetry dashboard mock",
        date: "January 2026",
        author: "Software",
        summary:
          "Drafted a live dashboard layout for mission status and battery telemetry.",
        tags: ["UX", "Telemetry"],
      },
    ],
  },
];
