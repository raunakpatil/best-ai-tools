// Builds README.md from Radar's open data (https://raunakpatil.com/ai-tools/radar.json), the same lists the site
// shows, refreshed there every week. The Update workflow runs this every Monday and Thursday; by hand:
//   node scripts/build-readme.mjs                 (from the live site)
//   node scripts/build-readme.mjs path/to/radar.json
import { readFileSync, writeFileSync } from 'node:fs';

const SRC = 'https://raunakpatil.com/ai-tools/radar.json';
const R = process.argv[2]
  ? JSON.parse(readFileSync(process.argv[2], 'utf8'))
  : await (await fetch(SRC, { signal: AbortSignal.timeout(30000) })).json();

const RADAR = 'https://raunakpatil.com/radar';
const PRICE = { free: 'Free', freemium: 'Free plan', paid: 'Paid', open: 'Open source', na: 'See site' };
const fmt = (n) => Number(n).toLocaleString('en-US');
const short = (n) => (n >= 1e6 ? `${(n / 1e6).toFixed(1)}M` : n >= 1e3 ? `${(n / 1e3).toFixed(n >= 1e4 ? 0 : 1)}k` : String(n));
// (a table cell: no pipes or line breaks)
const cell = (s) => String(s ?? '').replace(/\|/g, '\\|').replace(/\s+/g, ' ').trim();
const name = (t) => (t.page ? `[**${cell(t.name)}**](${t.page})` : `**${cell(t.name)}**`);
const site = (t) => `[↗](${t.url})`;
const what = (t) => cell(t.about);
const pop = (t) => (t.stars ? `★ ${short(t.stars)}` : t.likes ? `♥ ${short(t.likes)}` : t.upvotes ? `▲ ${short(t.upvotes)}` : PRICE[t.price] || '');
const anchor = (s) => s.toLowerCase().replace(/[^\w\- ]+/g, '').trim().replace(/\s+/g, '-');
const month = new Date(R.updated).toLocaleDateString('en-GB', { month: 'long', year: 'numeric' });
const day = new Date(R.updated).toLocaleDateString('en-GB', { day: 'numeric', month: 'long', year: 'numeric' });

const table = (items, { n = true, col = 'Price', val = (t) => PRICE[t.price] || '' } = {}) => [
  `| ${n ? '# | ' : ''}Tool | What it does | ${col} | |`,
  `|${n ? ' --: |' : ''} --- | --- | --- | :-: |`,
  ...items.map((t, k) => `| ${n ? `${k + 1} | ` : ''}${name(t)} | ${what(t)} | ${cell(val(t))} | ${site(t)} |`),
].join('\n');

const cats = Object.entries(R.categories);
const hand = (c) => c.tools.filter((t) => t.from === 'hand-picked');
const also = (c) => c.tools.filter((t) => t.from !== 'hand-picked').slice(0, 5);

const md = `<div align="center">

<a href="${RADAR}"><img src="https://raunakpatil.com/img/radar-og.png" alt="Radar: the best AI tools on the radar" width="720"></a>

# Radar

**The best AI tools on the radar, updated every week.**

${fmt(R.total)} AI tools ranked by category, a Top 50, new releases, free and open-source picks.<br>
Search them all, or describe what you need in plain words, on **[raunakpatil.com/radar](${RADAR})**.

[![Updated](https://img.shields.io/badge/updated-${encodeURIComponent(day.replace(/ /g, '_'))}-111?style=flat-square)](${RADAR})
[![AI tools](https://img.shields.io/badge/AI_tools-${fmt(R.total).replace(/,/g, '%2C')}-111?style=flat-square)](${R.pages.hub})
[![Open data](https://img.shields.io/badge/open_data-radar.json-111?style=flat-square)](https://raunakpatil.com/ai-tools/radar.json)

</div>

## What Radar looks like

**Ask Radar** in plain words, and it suggests the tools that fit, with a reason for each:

<a href="${RADAR}"><img src="assets/ask-radar.webp" alt="Ask Radar suggesting tools for turning a podcast into short clips"></a>

**The latest in AI**: the newest headlines from nine sources (TechCrunch, The Verge, The Decoder, the AI labs' blogs and more), and the open models trending on Hugging Face this week:

<a href="${RADAR}"><img src="assets/radar.webp" alt="Radar's latest AI news and trending open models"></a>

**The directory**: browse all of them, the Top 50 or the new releases, and filter by source, price and category:

<a href="${RADAR}"><img src="assets/directory.webp" alt="Radar's directory of AI tools"></a>

**On a phone**, and a page for every list and every well-known tool:

<a href="${RADAR}"><img src="assets/phones.webp" alt="Radar on a phone: the news, the tools and a tool's page"></a>

<a href="${R.pages.hub}"><img src="assets/ai-tools-page.webp" alt="Radar's page of the best AI video tools"></a>

## Contents

- [What Radar looks like](#what-radar-looks-like)
- [Top 50 AI tools](#top-50-ai-tools)
- [Best AI tools by category](#best-ai-tools-by-category)
${cats.map(([, c]) => `  - [${c.title}](#${anchor(c.title)})`).join('\n')}
- [New AI tools](#new-ai-tools)
- [Trending open-source AI](#trending-open-source-ai)
- [Alternatives to popular AI tools](#alternatives-to-popular-ai-tools)
- [Listed on Radar? Show it](#listed-on-radar-show-it)
- [Suggest a tool](#suggest-a-tool)
- [Open data](#open-data)

## Top 50 AI tools

The fifty worth knowing in ${month}, across every kind of work. Each name opens its page on Radar: what it does in plain words, what it costs, where it ranks and what's like it. [See them on Radar ↗](${R.pages.top50})

${table(R.top50)}

## Best AI tools by category

The hand-picked tools in each category, in Radar's order, then the most popular of the rest from GitHub, Hugging Face and Product Hunt.

${cats.map(([, c]) => `### ${c.title}

${table(hand(c))}
${also(c).length ? `\n<details><summary>Also popular in ${c.name}</summary>\n\n${table(also(c), { n: false, col: 'Popularity', val: pop })}\n\n</details>\n` : ''}
**[All ${fmt(c.size)} ${c.name} tools, ranked ↗](${c.page})**`).join('\n\n')}

## New AI tools

The newest on Radar, newest first: open-source projects, Hugging Face apps and Product Hunt launches. [More new releases ↗](${R.pages.new})

${table(R.new.slice(0, 25), { n: false, col: 'Released', val: (t) => (t.released ? new Date(t.released).toLocaleDateString('en-GB', { day: 'numeric', month: 'short', year: 'numeric' }) : '') })}

## Trending open-source AI

The most-starred AI projects on GitHub right now. [All open-source AI tools ↗](${R.pages.openSource})

${table(R.openSource.slice(0, 20), { col: 'Stars', val: (t) => `★ ${fmt(t.stars)}` })}

## Alternatives to popular AI tools

${Object.entries(R.pages.alternatives).map(([n, u]) => `[${n} alternatives](${u})`).join(' · ')}

## Listed on Radar? Show it

If your tool is on Radar, you're welcome to show it with this badge:

<a href="${RADAR}"><img src="https://raunakpatil.com/img/badges/listed-on-radar.svg" alt="Listed on Radar" height="32"></a>

\`\`\`html
<a href="${RADAR}"><img src="https://raunakpatil.com/img/badges/listed-on-radar.svg" alt="Listed on Radar" height="32"></a>
\`\`\`

\`\`\`markdown
[![Listed on Radar](https://raunakpatil.com/img/badges/listed-on-radar.svg)](${RADAR})
\`\`\`

## Suggest a tool

Know an AI tool that should be here? [Suggest it](../../issues/new?template=suggest-a-tool.yml) with a link and a line about what it does. Radar also picks up new open-source projects, Hugging Face apps and Product Hunt launches on its own every week.

## Open data

Everything in this list comes from [radar.json](https://raunakpatil.com/ai-tools/radar.json), refreshed every week. You're free to use it in your own projects with a link back to [Radar](${RADAR}).

---

<div align="center">

Kept by [Raunak Patil](https://raunakpatil.com) · Last updated ${day} · [raunakpatil.com/radar](${RADAR})

</div>
`;
writeFileSync(new URL('../README.md', import.meta.url), md);
console.log(`README.md: ${R.top50.length} in the Top 50, ${cats.length} categories, ${R.new.length} new; ${(md.length / 1024).toFixed(0)} KB`);
