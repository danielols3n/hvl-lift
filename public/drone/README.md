# Drone hero background

Two ways to drive the scroll-scrubbed drone animation.

## Option A — Video (easiest)

Render one short rotation clip (2–5 s) and drop it here, e.g. `drone.mp4`.

- Render on a **dark background** (`#020617`), not transparent
- Encode with **dense keyframes** for smooth scrubbing, e.g.:
  `ffmpeg -i in.mp4 -c:v libx264 -g 1 -pix_fmt yuv420p -an drone.mp4`
- Turn it on in `app/pages/home/HomePage.tsx`:
  ```ts
  const DRONE_VIDEO = "/drone/drone.mp4";
  ```

## Option B — Frame sequence (smoothest)

Place the rendered rotation frames of the drone here.

## Naming

- `frame_0001.webp`, `frame_0002.webp`, … `frame_0090.webp`
- 4-digit, zero-padded numbers, starting at 0001
- WebP with a **transparent background** (or PNG if you prefer)

## Recommended render settings

- ~90 frames for a full smooth rotation
- ~1400 px wide
- Transparent background (Blender: Render Properties → Film → Transparent)
- Keep the drone roughly centered in the frame

## Turning it on

After the frames are in this folder, open
`app/pages/home/HomePage.tsx` and set:

```ts
const DRONE_FRAME_COUNT = 90; // = number of frames you added
```

The hero will then swap from the static team photo to the
scroll-scrubbed 3D drone animation automatically.
