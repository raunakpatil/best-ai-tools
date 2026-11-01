// Renders the YouTube thumbnails (1280x720) from the AI images in this folder plus overlay text.
// Run: node thumbnails/src/make.mjs   (needs Playwright + Chromium)
import { createRequire } from "module";
const { chromium } = createRequire(import.meta.url)("playwright");
import { fileURLToPath } from "url";
import path from "path";
const here = path.dirname(fileURLToPath(import.meta.url));
const out = path.resolve(here, "..");
const base = `
@font-face{font-family:I;src:url(inter.woff2) format("woff2");font-weight:100 900}
*{margin:0;padding:0;box-sizing:border-box}
html,body{width:1280px;height:720px;overflow:hidden;font-family:I,sans-serif}
.bg{position:absolute;inset:0;background-size:cover;background-position:center}
.t{position:absolute;font-weight:900;letter-spacing:-0.055em;line-height:0.9}
.o{color:#fe7a19}.k{color:#111}.w{color:#fff}
.u{position:absolute;font-weight:700;letter-spacing:-0.02em;font-size:30px}
`;
const thumbs = {
  "1-which-one": `<div class="bg" style="background-image:url(flood.jpg)"></div>
    <div class="t k" style="right:70px;top:48px;font-size:150px;text-align:right">WHICH</div>
    <div class="t o" style="right:110px;bottom:52px;font-size:150px;text-align:right">ONE?</div>`,
  "2-forty-tabs": `<div class="bg" style="background-image:url(tabs.jpg)"></div>
    <div style="position:absolute;inset:0;background:radial-gradient(ellipse 640px 300px at 100% 0%,rgba(250,248,245,.94) 45%,rgba(250,248,245,0) 100%)"></div>
    <div class="t k" style="right:40px;top:40px;font-size:96px;text-align:right">40 TABS?</div>
    <div class="t o" style="right:40px;top:136px;font-size:96px;text-align:right">1 ANSWER.</div>`,
  "3-ask-it-anything": `<div class="bg" style="background-image:url(phone.jpg)"></div>
    <div class="t k" style="left:70px;top:170px;font-size:126px">ASK IT</div>
    <div class="t k" style="left:70px;top:285px;font-size:126px">ANYTHING<span class="o">.</span></div>
    <div class="u" style="left:76px;top:440px;color:#6e6e73">6,436 AI tools · <span class="o">raunakpatil.com/radar</span></div>`,
  "4-6436-ai-tools": `<div class="bg" style="background-image:url(creator.jpg)"></div>
    <div class="t k" style="left:56px;top:150px;font-size:190px">6,436</div>
    <div class="t o" style="left:62px;top:330px;font-size:112px">AI TOOLS.</div>
    <div class="t" style="left:64px;top:452px;font-size:64px;color:#6e6e73;letter-spacing:-0.04em">Which one?</div>`,
  "5-before-radar": `<div class="bg" style="background-image:url(split.jpg)"></div>
    <div style="position:absolute;left:0;top:0;width:640px;height:720px;background:linear-gradient(0deg,rgba(0,0,0,.72) 0%,rgba(0,0,0,0) 45%)"></div>
    <div class="t" style="left:48px;bottom:48px;font-size:120px;color:#d9d9dc">BEFORE</div>
    <div class="t w" style="left:688px;bottom:48px;font-size:120px">RADAR</div>`,
};
const browser = await chromium.launch();
const page = await browser.newPage({ viewport: { width: 1280, height: 720 } });
for (const [name, html] of Object.entries(thumbs)) {
  await page.setContent(`<!doctype html><html><head><base href="file://${here}/"><style>${base}</style></head><body>${html}</body></html>`);
  await page.evaluate(() => document.fonts.ready);
  await page.waitForTimeout(150);
  await page.screenshot({ path: path.join(out, name + ".jpg"), type: "jpeg", quality: 92 });
  console.log("wrote", name);
}
await browser.close();
