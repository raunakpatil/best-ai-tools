# Radar launch film: YouTube kit

## Title options

1. 6,000+ AI tools. Which one is yours? Meet Radar
2. Stop guessing which AI tool to use: Radar
3. Radar: every AI tool, ranked and updated every week
4. Describe what you need. Radar finds the AI tool.
5. 40 tabs later, still guessing? Try Radar

## Description

```text
There are over 6,000 AI tools out there, and more launch every week. Which one is yours?

Radar is the best AI tools on the radar, updated every week. Search all of them, or just describe what you need in plain words, and Radar suggests the tools that fit, with a reason for each.

👉 Try it: https://raunakpatil.com/radar

What's inside:
• Ask Radar: type "turn my podcast into short clips" and get OpusClip, Vizard and more, each with a reason
• The latest in AI: headlines from nine sources, plus the open models trending on Hugging Face this week
• The directory: every tool (6,000+ and growing) ranked by category, with a Top 50, new releases, and free and open-source picks
• A page for every list and every well-known tool: what it does in plain words, what it costs, where it ranks and what's like it
• Works on your phone

Chapters
0:00 Too many AI tools
0:12 Ask Radar in plain words
0:25 Every tool, ranked by category

Open data: https://raunakpatil.com/ai-tools/radar.json
GitHub list: https://github.com/raunakpatil/best-ai-tools
Made by Raunak Patil: https://raunakpatil.com

#AITools #ArtificialIntelligence #Radar
```

## Tags

Paste as one comma-separated line (about 480 characters, under YouTube's 500 limit):

```text
ai tools, best ai tools, ai tools 2026, ai tool finder, ai tools directory, list of ai tools, new ai tools, free ai tools, open source ai, ai tools for creators, ai video tools, ai coding tools, chatgpt alternatives, claude, gemini, cursor, perplexity, opusclip, hugging face trending, ai news, top 50 ai tools, which ai tool should i use, ai productivity, ai search, radar, raunak patil, best ai tools list, ai tools ranked, ai launch video
```

## Finished thumbnails

Ready to upload (1280 x 720 JPEG, under 2 MB) in `thumbnails/`. Rebuild from `video/` with
`NODE_PATH=/opt/node-tools/node_modules node thumbnails/src/make.mjs`.

| File | Overlay | Pair with title |
| --- | --- | --- |
| `1-which-one.jpg` | 6,000+ AI TOOLS / **WHICH** / ONE?! | 2. Stop guessing which AI tool to use |
| `2-40-tabs-vs-1-search.jpg` | 40 TABS -> 1 SEARCH (before/after) | 3. Radar: every AI tool, ranked and updated every week |
| `3-stop-guessing.jpg` | STOP / **GUESSING**, tab bar circled | 1. 6,000+ AI tools. Which one is yours? |
| `4-find-yours.jpg` | FIND -> (orange tile) -> YOURS | 1. 6,000+ AI tools. Which one is yours? |
| `5-just-ask.jpg` | JUST / ASK. + a real query and Radar's real top picks | 4. Describe what you need. Radar finds the AI tool. |

Run `1`, `2` and `3` together in YouTube Studio's Test & Compare (3 variants; it picks by watch-time share).

### What the design is based on

There is no reliable public study showing that one design feature *causes* higher CTR; the 1of10
analysis of 11,223 covers from 100K+ channels found "no single feature" that stood out on each
channel's winning covers. So these follow what top-performing covers have in common, and leave the
final call to an A/B test:

- **Text:** 77% of covers carry designed text, median four words, usually white caps with an
  outline, shadow or box. Every thumbnail here is four words or fewer, in caps, boxed or outlined.
- **Warm accent:** 56% carry red, orange or yellow over at least 15% of the frame. Each one uses
  Radar's orange over a large area (box, sweater, split, tile).
- **Faces:** on 71% of covers but no proven lift, so only one variant (`1`) leans on a face. The
  "shocked face" is on just ~11% of face covers; hers is puzzled, which fits the question.
- **Curiosity gap and contrast:** the text poses the problem or the question and the title answers
  it, never repeating it; dark panels, outlines and boxes keep it readable at phone size.
- **Before/after** works when the difference is obvious at a glance (`2`).
- No invented claims: only real numbers and Radar's real output.

Sources: [1of10 study via Net Influencer](https://www.netinfluencer.com/youtube-thumbnail-study-of-100k-channels-finds-shocked-faces-on-just-1-in-10-covers/),
[vidIQ breakout thumbnail study](https://vidiq.com/research/youtube-thumbnail-study/),
[Eden, 507,478 videos](https://eden.so/blog/what-makes-a-good-youtube-thumbnail/),
[MrBeast closed-mouth test](https://www.creatorhandbook.net/mrbeast-claims-closing-his-mouth-in-thumbnails-is-better-for-views/),
[YouTube Test & Compare expansion](https://www.tubefilter.com/2025/07/16/youtube-feature-test-and-compare-titles-thumbnails/).

## Thumbnail prompts

Thumbnails are 1280 x 720. AI image models often garble lettering, so generate the picture without
text and add the overlay text in Canva, Figma or Photoshop (bold sans-serif such as Inter Black,
near-black #111111 on light ground, or white on orange). Keep the text to three words or fewer
so it reads at phone size.

### 1. The flood and the one
- Overlay text: **WHICH ONE?**
- Prompt:
  > A clean studio composition, 16:9, light grey background (#f2f2f2). Dozens of small, glossy, rounded-square app icons in muted greys tumbling and piling chaotically on the left two-thirds of the frame, slightly motion-blurred. On the right, one single app icon glowing warm orange (#fe7a19), sharp, perfectly lit and floating upright in empty space. Apple product photography style, soft top light, gentle contact shadows, high detail, minimal, no text, no logos.

### 2. Forty tabs
- Overlay text: **40 TABS?** (top) and **1 ANSWER** (bottom, orange)
- Prompt:
  > Close-up of a laptop screen at a slight angle with an absurd number of browser tabs crammed into the tab bar, each tab a tiny sliver. Out-of-focus, unreadable page content. A person's hand on the trackpad, frustrated. Light, airy, minimal desk, soft daylight, shallow depth of field, Apple commercial look, muted neutral palette with one warm orange accent object on the desk, no readable text, no logos.

### 3. The radar
- Overlay text: **FOUND IT.**
- Prompt:
  > A minimal, elegant radar screen rendered as a physical object: a matte white circular dial with thin concentric dark-grey rings and a single dark sweep line, lying on a light grey seamless surface. Small rounded app-icon tiles sit on the rings like detected blips, one of them bright orange. Top-down product shot, soft studio light, crisp shadows, Apple-style, clean negative space on the right for text, no text, no logos.

### 4. Shocked creator, big number
- Overlay text: **6,000+ AI TOOLS** (huge), with the face on the right
- Prompt:
  > Portrait of a young content creator on the right third of the frame, eyebrows raised in disbelief, looking at the camera, holding a phone. Bright, clean, light grey studio background, soft key light, slight rim light, crisp focus, YouTube thumbnail framing with empty space on the left, warm orange accent clothing, photorealistic, no text, no logos.

### 5. Orange split: before and after
- Overlay text: **BEFORE** (left, grey) and **RADAR** (right, white on orange)
- Prompt:
  > Split-screen composition, 16:9. Left half: a cluttered, desaturated grey desk covered in sticky notes, scattered papers and a laptop with a messy screen, dim and chaotic. Right half: a vivid orange (#fe7a19) background with one clean smartphone floating upright, its screen softly glowing and out of focus, calm and minimal. Hard vertical split down the middle, studio lighting, high contrast, photorealistic, no text, no logos.

### 6. Phone hero
- Overlay text: **ASK IT ANYTHING**
- Prompt:
  > A hand holding a modern smartphone at a slight angle against a soft light grey gradient background. The phone screen shows a softly blurred, minimal white interface with a single search bar. Apple product advertisement style, soft diffuse lighting, realistic skin tones, crisp phone edges, lots of negative space on the left, one warm orange accent, no readable text, no logos.

Tip: for the most honest thumbnail, put a real screenshot (the Ask Radar panel from
`assets/ask-radar.webp`) on the phone in prompt 6, or on the laptop in prompt 2.
