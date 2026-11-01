# Review: Radar launch film

Rendered `renders/radar-launch.mp4`: 1920x1080, 30 fps, 43.6 s, H.264 + AAC.

## Creative calls
- Storyline built: "The noise, then the signal". Hook on a wall of real tool names and a counter
  racing to 6,436, the old way as forty browser tabs, the browser collapsing into the dot that
  becomes the radar, then three proofs in the real UI (Ask Radar, the news + trending models,
  the directory), the phones as the payoff, an orange claim, and the end card with the URL clicked.
- Not built: "A day of one maker" (a person's afternoon finding a podcast-clipping tool) and
  "One continuous zoom" (the camera dives through the radar into each feature). Either can reuse
  these scenes.
- Look is Radar's own site: #f2f2f2 ground, near-black ink, Inter, mono caps labels, and the
  site's "In Raunak's stack" orange as the one accent. One dark world for the news.
- All UI is rebuilt from the screenshots in `../assets/` with their real labels, numbers and
  logos (logos and thumbnails are cropped from those screenshots). Tool count is the README's
  current 6,436 (the screenshots show an older 6,383).
- The radar mark on the end card is drawn for the film; the repo has no logo file. Swap in the
  real mark if there is one.

## What was measured vs. only looked at
- `hyperframes check`: lint, runtime, layout, motion, audio all pass. Remaining warnings are
  small UI labels (mono caps, tab titles) under the 28 px phone floor, and headline rows on
  screen shorter than a full read. Both are kept on purpose: they are texture, the titles carry
  the read.
- Frames checked at every beat and across every seam from the snapshots and the final MP4.
- Audio measured, not heard: -16.4 LUFS integrated, true peak -1.5 dBTP, no clipping.

## Weakest parts / next steps
- No music bed: only sound effects (Pixabay licence, bundled with HyperFrames). A track is the
  single biggest upgrade. Drop an mp3 in `assets/` and add an `<audio id="music">` in index.html.
- The tension beat (tabs) is typographic; an AI-generated shot of a person lost in tabs would
  make it human.
