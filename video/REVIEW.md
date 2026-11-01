# Review: Radar launch film

Rendered `renders/radar-launch.mp4`: 1920x1080, 30 fps, 43.6 s, H.264 + AAC.

## Creative calls
- Storyline built: "The noise, then the signal". Hook on a wall of real tool names and a counter
  racing to 6,000+, the old way as forty browser tabs, the browser collapsing into the dot that
  becomes the radar, then three proofs in the real UI (Ask Radar, the news + trending models,
  the directory), the phones as the payoff, an orange claim, and the end card with the URL clicked.
- Not built: "A day of one maker" (a person's afternoon finding a podcast-clipping tool) and
  "One continuous zoom" (the camera dives through the radar into each feature). Either can reuse
  these scenes.
- Look is Radar's own site: #f2f2f2 ground, near-black ink, Inter, mono caps labels, and the
  site's "In Raunak's stack" orange as the one accent. One dark world for the news.
- All UI is rebuilt from the screenshots in `../assets/` with their real labels, numbers and
  logos (logos and thumbnails are cropped from those screenshots). Tool counts read "6,000+" and "growing every
  week" everywhere, because the real number changes weekly (6,436 at the time of the film).
- The radar mark on the end card is drawn for the film; the repo has no logo file. Swap in the
  real mark if there is one.

## What was measured vs. only looked at
- `hyperframes check`: lint, runtime, layout, motion, audio all pass. Remaining warnings are
  small UI labels (mono caps, tab titles) under the 28 px phone floor, and headline rows on
  screen shorter than a full read. Both are kept on purpose: they are texture, the titles carry
  the read.
- Frames checked at every beat and across every seam from the snapshots and the final MP4.
- Audio measured, not heard: music + effects mastered to -13.9 LUFS integrated, true peak
  -0.9 dBTP, no clipping (two-pass ffmpeg loudnorm on the rendered file, video stream copied).

## Weakest parts / next steps
- Music: "Polished Hit" (supplied by the author), 120 BPM, 44.8 s. It starts 0.5 s into the
  file so the full groove enters as the tabs collapse into the radar dot (7.75 s), the breakdown
  sits under the end of the phones beat, and the drop lands on "More building." (36.5 s). The
  synthetic riser was removed; the track builds on its own. Its natural tail rings out under
  the end card (last 0.8 s are near silent).
- Re-rendering: `npx hyperframes render -o renders/radar-launch.mp4 -q delivery`, then master:
  `ffmpeg -i in.mp4 -c:v copy -af loudnorm=I=-14:TP=-1:LRA=11 -c:a aac -b:a 256k out.mp4`.
- The tension beat (tabs) is typographic; an AI-generated shot of a person lost in tabs would
  make it human.
