# Radar launch film: spec

GOAL:    a viewer who is lost in the flood of AI tools feels relief, sees Radar answer a real
         question, and leaves wanting to open raunakpatil.com/radar.
OUTPUT:  HyperFrames, 1920 x 1080, 30 fps
TIME:    43 s x 30 = 1290 frames. No music bed yet (sound effects only); slot ready for a track.

LOOK:    Radar's own site, scaled for film. Ground #f2f2f2 (the site's), cards #fafafa / #ffffff,
         ink #111111, secondary #6e6e73, hairlines rgba(0,0,0,.06).
         One dark world (#0c0c0e) for the news and trending models.
         Accent #fe7a19 (the site's "In Raunak's stack" orange), only on: that badge, the claim
         flood, the end mark.
         Display: Inter 600/700, -0.04em tracking, titles 96 px (8.9% of height), hero words
         160-260 px. Labels: JetBrains Mono 500, 20-22 px, +0.12em, caps (the site's own labels).
         Medium: product UI rebuilt from the real screenshots in ../assets (real labels, real logos
         cropped from those screenshots), shown at 1.6-2x. Shadows 0 20px 60px rgba(0,0,0,.08).

OBJECTS: the search bar with the Ask button; the "Radar suggests" panel and its three cards;
         headline rows with real thumbnails and sources; trending open-model cards; the
         directory card grid; three phones (cropped from assets/phones.webp); a macOS cursor.

MOTION:  arrivals expo.out / power4.out 0.5-0.9 s; camera and floods power2.inOut 0.4-0.7 s;
         exits and zoom-throughs power3.in 0.3-0.4 s. Titles: per-word blur 8->0 in 0.16 s,
         0.07 s apart; landed titles hold dead still. Staggers: words 70 ms, cards 60-80 ms.
         Render-time motion blur on.

SHOTS:
  0.0-4.2   Hook. Wall of real tool names streams in 8 rows; a counter races to 6,436;
            "Which one is yours?" Whip left.
  4.2-8.0   Tension. A browser whose tabs keep multiplying; "Forty tabs later. Still guessing."
            The whole browser collapses to one dot.
  8.0-11.8  Reveal. The dot becomes a radar; real tool logos blip on the sweep; the radar slides
            left and "Radar" lands letter by letter. Zoom through.
  11.8-19.4 Proof 1, Ask. "Ask in plain words." The query types, the cursor clicks Ask, the
            suggestions panel opens out of the bar with OpusClip, Vizard, AI-Youtube-Shorts-Generator.
            Colour flood to dark.
  19.4-25.2 Proof 2, the latest. Headlines from nine sources roll in; camera rises to the
            trending open models. Flood back to light.
  25.2-30.6 Proof 3, the directory. Card grid assembles; 6,436 of 6,436; the cursor picks Cursor,
            whose card grows into the next world.
  30.6-35.0 Payoff. Three phones rise; "Fresh every week."
  35.0-37.4 Claim. Orange flood. "Less searching. More building."
  37.4-43.0 End card. Orange closes into the mark, "Radar" wipes in, the URL button is clicked,
            holds 3 s.

BANNED:  dark void with small floating things; glow, bloom, particles; purple/blue gradients;
         every element fading and sliding up; titles that drift after landing; logo docked in a
         corner; three cards in a row as a feature list; invented UI or numbers; "unlock",
         "seamless", "in seconds", "Introducing" as the first line.

QA:      t=0 (thumbnail reads), 2.5, 6.5, 10.5, 15.8, 21, 24, 28, 32.5, 36.2, 41.5.
