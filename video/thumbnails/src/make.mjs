// Renders the YouTube thumbnails (1280x720 JPEG) from the AI images in this folder plus overlay text.
// Run from video/:  NODE_PATH=/opt/node-tools/node_modules node thumbnails/src/make.mjs
import { createRequire } from "module";
import { fileURLToPath } from "url";
import fs from "fs";
import path from "path";
const { chromium } = createRequire(import.meta.url)("playwright");
const here = path.dirname(fileURLToPath(import.meta.url));
const out = path.resolve(here, "..");

const css = `
@font-face{font-family:I;src:url(inter.woff2) format("woff2");font-weight:100 900}
*{margin:0;padding:0;box-sizing:border-box}
html,body{width:1280px;height:720px;overflow:hidden;font-family:I,sans-serif;background:#111}
.bg{position:absolute;inset:0;background-size:cover;background-position:center;filter:contrast(1.12) saturate(1.25)}
.t{position:absolute;font-weight:900;letter-spacing:-0.045em;line-height:.86;text-transform:uppercase;white-space:nowrap}
.w{color:#fff}.k{color:#111}.o{color:#fe7a19}
.sh{text-shadow:0 6px 0 rgba(0,0,0,.35),0 14px 40px rgba(0,0,0,.45)}
.st{-webkit-text-stroke:10px #111;paint-order:stroke fill}
.box{display:inline-block;padding:14px 26px 18px;border-radius:18px}
.ob{background:#fe7a19;color:#111}.kb{background:#111;color:#fff}.wb{background:#fff;color:#111}
.chip{display:flex;align-items:center;gap:16px;background:#fff;border-radius:20px;padding:12px 28px 12px 12px;font-weight:800;font-size:40px;letter-spacing:-0.02em;color:#111;box-shadow:0 10px 30px rgba(0,0,0,.35)}
.chip img{width:70px;height:70px;border-radius:16px}
`;

const arrow = (x, y, rot, scale = 1, color = "#fe7a19") => `
<svg style="position:absolute;left:${x}px;top:${y}px;transform:rotate(${rot}deg) scale(${scale});transform-origin:0 0;filter:drop-shadow(0 6px 10px rgba(0,0,0,.35))" width="260" height="120" viewBox="0 0 260 120">
  <path d="M10 70 C 80 20, 160 20, 215 52" fill="none" stroke="${color}" stroke-width="20" stroke-linecap="round"/>
  <path d="M190 18 L240 60 L178 84 Z" fill="${color}" stroke="${color}" stroke-width="8" stroke-linejoin="round"/>
</svg>`;

const thumbs = {
  // Face + big question. Warm accent over a large area (sweater + box).
  "1-which-one": `
    <div class="bg" style="background-image:url(creator.jpg);background-position:70% 30%"></div>
    <div style="position:absolute;inset:0;background:linear-gradient(90deg,rgba(17,17,17,.92) 0%,rgba(17,17,17,.75) 38%,rgba(17,17,17,0) 60%)"></div>
    <div class="t w sh" style="left:54px;top:150px;font-size:84px">6,000+ AI tools</div>
    <div class="t" style="left:46px;top:262px;font-size:170px"><span class="box ob">Which</span></div>
    <div class="t w sh" style="left:54px;top:462px;font-size:170px">one?!</div>`,

  // Before / after: the clearest format when the difference is obvious.
  "2-40-tabs-vs-1-search": `
    <div class="bg" style="background-image:url(split.jpg)"></div>
    <div style="position:absolute;left:0;top:0;width:640px;height:720px;background:rgba(0,0,0,.35)"></div>
    <div class="t" style="left:40px;top:44px;font-size:104px"><span class="box kb">40 tabs</span></div>
    <div class="t" style="left:684px;top:44px;font-size:104px"><span class="box wb">1 search</span></div>
    <div style="position:absolute;left:574px;top:300px;width:132px;height:132px;border-radius:50%;background:#fff;box-shadow:0 10px 40px rgba(0,0,0,.4);display:flex;align-items:center;justify-content:center">
      <svg width="70" height="70" viewBox="0 0 24 24" fill="none" stroke="#111" stroke-width="3.2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 12h15M13 6l6 6-6 6"/></svg>
    </div>`,

  // The problem, circled.
  "3-stop-guessing": `
    <div class="bg" style="background-image:url(tabs.jpg);filter:contrast(1.15) saturate(1.2) brightness(.72)"></div>
    <div style="position:absolute;left:150px;top:62px;width:560px;height:84px;border:9px solid #fe7a19;border-radius:50%;transform:rotate(-7deg);box-shadow:0 0 0 4px rgba(0,0,0,.25)"></div>
    <div class="t w st" style="right:48px;bottom:206px;font-size:150px;text-align:right">Stop</div>
    <div class="t" style="right:44px;bottom:44px;font-size:150px;text-align:right"><span class="box ob">guessing</span></div>`,

  // One stands out from the noise.
  "4-find-yours": `
    <div class="bg" style="background-image:url(flood.jpg);filter:contrast(1.25) saturate(1.35) brightness(.9)"></div>
    <div style="position:absolute;inset:0;background:radial-gradient(ellipse 900px 600px at 76% 50%,rgba(0,0,0,0) 30%,rgba(0,0,0,.55) 100%)"></div>
    <div class="t k" style="left:770px;top:40px;font-size:150px;-webkit-text-stroke:0"><span class="box wb">Find</span></div>
    <div class="t w st" style="left:760px;top:534px;font-size:128px">Yours</div>
    ${arrow(560, 250, 18, 1.1)}`,

  // The answer, shown: one plain-words question and Radar's real top picks.
  "5-just-ask": `
    <div class="bg" style="background-image:url(phone.jpg);background-position:80% 50%"></div>
    <div style="position:absolute;left:0;top:0;width:760px;height:720px;background:#111;clip-path:polygon(0 0,100% 0,82% 100%,0 100%)"></div>
    <div class="t w" style="left:56px;top:70px;font-size:150px">Just</div>
    <div class="t o" style="left:56px;top:196px;font-size:150px">ask.</div>
    <div style="position:absolute;left:56px;top:364px;padding:18px 30px;border-radius:44px;background:#fff;font-size:36px;font-weight:600;color:#111;letter-spacing:-0.02em">“turn my podcast into clips”</div>
    <div style="position:absolute;left:56px;top:476px;display:flex;flex-direction:column;gap:14px">
      <div class="chip"><img src="logo-opusclip.png">OpusClip</div>
      <div class="chip" style="margin-left:40px"><img src="logo-vizard.png">Vizard</div>
    </div>`,
};

const browser = await chromium.launch();
const page = await browser.newPage({ viewport: { width: 1280, height: 720 } });
for (const f of fs.readdirSync(out)) if (f.endsWith(".jpg")) fs.unlinkSync(path.join(out, f));
for (const [name, html] of Object.entries(thumbs)) {
  // Load from a real file:// page so the local images and font resolve.
  const tmp = path.join(here, "_render.html");
  fs.writeFileSync(tmp, `<!doctype html><html><head><meta charset="utf-8"><style>${css}</style></head><body>${html}</body></html>`);
  await page.goto("file://" + tmp);
  await page.evaluate(() => document.fonts.ready);
  await page.waitForFunction(() => [...document.images].every((i) => i.complete));
  await page.waitForTimeout(200);
  await page.screenshot({ path: path.join(out, name + ".jpg"), type: "jpeg", quality: 92 });
  fs.unlinkSync(tmp);
  console.log("wrote", name);
}
await browser.close();
process.exit(0);
