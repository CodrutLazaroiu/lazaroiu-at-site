# lazaroiu.at — "Corridor" redesign handoff

Framework-free. Paste into your Astro project: tokens into your global CSS, effect CSS next to them, and the JS into one `<script>` in your base layout (Astro bundles it). Every effect respects `prefers-reduced-motion`.

Rules applied: no client or project names · name is "Ioan-Codrut Lazaroiu" with no titles anywhere (including metadata) · all figures exactly as on the live site · copy is short and factual, with no superlatives.

---

## 1. Fonts (in `<head>`)

```html
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Fraunces:opsz,wght@9..144,300;9..144,400;9..144,500&family=Instrument+Sans:wght@400;500;600&family=JetBrains+Mono:wght@400;500&display=swap">
```

## 2. Design tokens

```css
:root {
  /* colour */
  --bg:          oklch(0.19 0.02 255);   /* graphite-blue */
  --bg-card:     oklch(0.23 0.022 255);
  --fg:          oklch(0.95 0.012 85);   /* warm paper-white */
  --fg-muted:    oklch(0.70 0.02 250);   /* steel */
  --copper:      oklch(0.70 0.12 55);    /* single accent */
  --on-copper:   oklch(0.17 0.02 255);
  --line:        oklch(0.95 0.012 85 / 12%);
  --paper:       oklch(0.955 0.012 85);  /* light reading sections */
  --paper-fg:    oklch(0.20 0.02 255);
  --paper-muted: oklch(0.45 0.02 255);

  /* type */
  --font-display: "Fraunces", Georgia, serif;
  --font-sans:    "Instrument Sans", system-ui, sans-serif;
  --font-mono:    "JetBrains Mono", ui-monospace, monospace;
  --step-hero:  clamp(3rem, 7vw, 6rem);   /* line-height 1.02, tracking -0.02em */
  --step-h2:    clamp(2.25rem, 4vw, 3rem);
  --step-label: 0.75rem;                  /* mono, uppercase, tracking 0.2em */

  /* shape & motion */
  --radius: 4px;
  --ease-out: cubic-bezier(0.22, 1, 0.36, 1);
  --container: 80rem;
  --hero-veil: linear-gradient(to bottom, var(--bg) 0%, transparent 25%, transparent 55%, var(--bg) 100%);
}
body { background: var(--bg); color: var(--fg); font-family: var(--font-sans); -webkit-font-smoothing: antialiased; }
h1, h2, h3 { font-family: var(--font-display); font-weight: 400; letter-spacing: -0.02em; }
.label { font: 500 var(--step-label)/1 var(--font-mono); letter-spacing: .2em; text-transform: uppercase; color: var(--copper); }
::selection { background: var(--copper); color: var(--on-copper); }

@media (prefers-reduced-motion: reduce) {
  *, *::before, *::after { animation: none !important; transition: none !important; }
  .reveal, .mask-reveal { opacity: 1 !important; transform: none !important; clip-path: none !important; }
}
```

---

## 3. Effects

### 3.1 Load-in rise (hero text)
```css
@keyframes rise { from { opacity: 0; transform: translateY(30px); } to { opacity: 1; transform: none; } }
.rise { animation: rise 1.1s var(--ease-out) both; animation-delay: calc(var(--i, 0) * 120ms); }
```
```html
<p class="label rise" style="--i:0">Independent advisory · Vienna</p>
<h1 class="rise" style="--i:1">…</h1>
```

### 3.2 Scroll reveal with stagger
```css
.reveal { opacity: 0; transform: translateY(24px);
  transition: opacity .9s var(--ease-out), transform .9s var(--ease-out);
  transition-delay: calc(var(--i, 0) * 90ms); }
.reveal.is-in { opacity: 1; transform: none; }
```
JS is shared with 3.6 (see section 4, `initReveal`). Add `class="reveal" style="--i:N"`.

### 3.3 Sliding-fill button + arrow nudge
```css
.btn { position: relative; display: inline-flex; align-items: center; gap: .75rem; overflow: hidden; isolation: isolate;
  padding: .95rem 1.5rem; border: 1px solid var(--copper); color: var(--fg); text-decoration: none;
  font: .8rem var(--font-mono); letter-spacing: .08em; text-transform: uppercase;
  transition: color .4s var(--ease-out), transform .3s var(--ease-out); }
.btn::before { content: ""; position: absolute; inset: 0; z-index: -1; background: var(--copper);
  transform: scaleX(0); transform-origin: right; transition: transform .5s var(--ease-out); }
.btn:hover { color: var(--on-copper); }
.btn:hover::before { transform: scaleX(1); transform-origin: left; }
.btn .arrow { transition: transform .4s var(--ease-out); }
.btn:hover .arrow { transform: translateX(6px); }
.btn--solid { background: var(--copper); color: var(--on-copper); }
.btn--solid::before { background: var(--fg); }
```
```html
<a class="btn btn--solid" data-magnetic href="mailto:codrut@lazaroiu.at">Start a conversation <span class="arrow">→</span></a>
```

### 3.4 Magnetic pull (buttons)
Add `data-magnetic` to an element. JS: `initMagnetic` in section 4.

### 3.5 Card tilt + copper glow following the pointer
```css
.card { position: relative; overflow: hidden; border: 1px solid var(--line); border-radius: var(--radius);
  background: var(--bg-card); padding: 2rem; min-height: 20rem; display: flex; flex-direction: column; justify-content: space-between;
  transform: perspective(900px) rotateX(var(--rx, 0deg)) rotateY(var(--ry, 0deg));
  transition: transform .25s ease-out, border-color .4s; }
.card::after { content: ""; position: absolute; inset: 0; pointer-events: none; opacity: 0; transition: opacity .4s;
  background: radial-gradient(600px circle at var(--mx, 50%) var(--my, 50%), oklch(0.7 0.12 55 / 18%), transparent 40%); }
.card:hover { border-color: var(--copper); }
.card:hover::after { opacity: 1; }
```
Add `data-tilt` to `.card`. JS: `initTilt`.

### 3.6 Portrait mask reveal
```css
.mask-reveal { clip-path: inset(100% 0 0 0); transition: clip-path 1.4s var(--ease-out); }
.mask-reveal.is-in { clip-path: inset(0); }
.portrait img { width: 100%; height: 100%; object-fit: cover; filter: grayscale(1); transition: filter 1s, transform 1s; }
.portrait img:hover { filter: none; transform: scale(1.05); }
```
```html
<div class="portrait-wrap"><div class="portrait mask-reveal" style="aspect-ratio:4/5"><img src="…portrait.jpg" alt="Ioan-Codrut Lazaroiu"></div></div>
```
Note: an element clipped to zero is invisible to IntersectionObserver, so the JS watches the **parent**.

### 3.7 Drifting corridor lines (animated SVG background)
```css
@keyframes flow { to { stroke-dashoffset: -400; } }
.corridors { position: absolute; inset: 0; width: 100%; height: 100%; color: var(--fg); }
.corridors .base { fill: none; stroke: currentColor; stroke-opacity: .12; }
.corridors .flow { fill: none; stroke: var(--copper); stroke-dasharray: 6 14; animation: flow 18s linear infinite; }
```
```html
<svg class="corridors" viewBox="0 0 1440 900" preserveAspectRatio="xMidYMid slice" aria-hidden="true">
  <path class="base" d="M-50 520 C 200 480, 380 560, 620 430 S 1000 300, 1500 340"/>
  <path class="flow" style="animation-duration:14s;opacity:.75;stroke-width:1.6" d="M-50 520 C 200 480, 380 560, 620 430 S 1000 300, 1500 340"/>
  <path class="base" d="M-50 640 C 260 600, 420 650, 700 560 S 1100 470, 1500 520"/>
  <path class="flow" style="animation-duration:18s;opacity:.65;stroke-width:1.6" d="M-50 640 C 260 600, 420 650, 700 560 S 1100 470, 1500 520"/>
  <path class="base" d="M-50 380 C 180 420, 360 300, 640 320 S 1040 220, 1500 180"/>
  <path class="flow" style="animation-duration:22s;opacity:.55;stroke-width:1.6" d="M-50 380 C 180 420, 360 300, 640 320 S 1040 220, 1500 180"/>
  <path class="base" d="M120 900 C 260 700, 420 620, 620 430"/>
  <path class="flow" style="animation-duration:26s;opacity:.45" d="M120 900 C 260 700, 420 620, 620 430"/>
  <circle cx="620" cy="430" r="3" fill="var(--copper)"><animate attributeName="r" values="2;5;2" dur="3s" repeatCount="indefinite"/></circle>
  <circle cx="640" cy="320" r="3" fill="var(--copper)"><animate attributeName="r" values="2;5;2" dur="4s" repeatCount="indefinite"/></circle>
</svg>
```

### 3.8 Ambient hero video (optional, layered under the SVG)
A 6-second muted loop of light moving along pipeline corridors at dusk. Download it from the preview (or regenerate) and save it as `public/corridor.mp4`. It loads only after the page is ready, and never loads when reduced motion is on.
```html
<section class="hero">
  <video class="hero-video" muted loop playsinline preload="none" aria-hidden="true" data-src="/corridor.mp4"></video>
  <svg class="corridors">…</svg>
  <div class="hero-veil"></div>
  <div class="hero-content">…</div>
</section>
```
```css
.hero { position: relative; min-height: 100vh; display: flex; align-items: flex-end; overflow: hidden; padding: 8rem 0 5rem; }
.hero-video { position: absolute; inset: 0; width: 100%; height: 100%; object-fit: cover; opacity: .4; }
.hero-veil { position: absolute; inset: 0; background: var(--hero-veil); }
.hero-content { position: relative; }
```

### 3.9 Figures counter (ends on the exact figure)
```html
<span data-count="20" data-suffix="+">20+</span>
<span data-count="8.5" data-decimals="1" data-prefix="EUR ">EUR 8.5</span>
```
The HTML already contains the final value, so it reads correctly without JS. JS: `initCounters`.

### 3.10 Language marquee
```css
@keyframes marquee { to { transform: translateX(-50%); } }
.marquee-wrap { overflow: hidden; border-block: 1px solid var(--line); padding: 2.5rem 0; }
.marquee { display: flex; width: max-content; animation: marquee 28s linear infinite; }
.marquee span { font: 400 clamp(3rem, 6vw, 4.5rem) var(--font-display); padding-right: 2.5rem; }
.marquee b { color: var(--copper); font-weight: 400; padding-left: 2.5rem; }
```
```html
<div class="marquee-wrap" aria-label="Languages: English, Italian, German, Romanian">
  <div class="marquee" aria-hidden="true">
    <!-- the list repeated (at least twice) so the loop is seamless -->
    <span>English<b>·</b></span><span>Italian<b>·</b></span><span>German<b>·</b></span><span>Romanian<b>·</b></span>
    <span>English<b>·</b></span><span>Italian<b>·</b></span><span>German<b>·</b></span><span>Romanian<b>·</b></span>
  </div>
</div>
```

### 3.11 Underline-draw link
```css
.link-draw { color: inherit; text-decoration: none;
  background: linear-gradient(currentColor, currentColor) 0 100% / 0% 1px no-repeat;
  transition: background-size .5s var(--ease-out); }
.link-draw:hover { background-size: 100% 1px; }
```

### 3.12 Timeline (About)
```css
.timeline { position: relative; border-left: 1px solid var(--line); list-style: none; margin: 0; padding: 0; }
.timeline li { position: relative; display: grid; gap: 1rem; padding: 2.5rem 0 2.5rem 3rem; }
@media (min-width: 768px) { .timeline li { grid-template-columns: 3fr 9fr; } }
.timeline li::before { content: ""; position: absolute; left: -5px; top: 3rem; width: 10px; height: 10px; border-radius: 50%;
  background: var(--copper); box-shadow: 0 0 0 4px var(--bg); }
```

### 3.13 Paper-tone reading section
```css
.paper { background: var(--paper); color: var(--paper-fg); }
.paper .meta { color: var(--paper-muted); }
.paper li { border-top: 1px solid oklch(0.2 0.02 255 / 15%); padding: 2.5rem 0; }
.paper li h3 { transition: color .5s; }
.paper li:hover h3 { color: var(--copper); }
```

---

## 4. All JavaScript (one file, ~70 lines, no dependencies)

```html
<script>
  const reduce = matchMedia("(prefers-reduced-motion: reduce)").matches;

  function initReveal() {
    const map = new Map();
    document.querySelectorAll(".reveal, .mask-reveal").forEach((el) => {
      const watched = el.classList.contains("mask-reveal") && el.parentElement ? el.parentElement : el;
      map.set(watched, el);
    });
    const io = new IntersectionObserver((entries) => entries.forEach((e) => {
      if (!e.isIntersecting) return;
      map.get(e.target).classList.add("is-in");
      io.unobserve(e.target);
    }), { threshold: 0.15, rootMargin: "0px 0px -8% 0px" });
    map.forEach((_, w) => io.observe(w));
  }

  function initTilt() {
    document.querySelectorAll("[data-tilt]").forEach((el) => {
      el.addEventListener("pointermove", (e) => {
        const r = el.getBoundingClientRect();
        const x = (e.clientX - r.left) / r.width, y = (e.clientY - r.top) / r.height;
        el.style.setProperty("--mx", x * 100 + "%");
        el.style.setProperty("--my", y * 100 + "%");
        if (!reduce) { el.style.setProperty("--ry", (x - .5) * 6 + "deg"); el.style.setProperty("--rx", (.5 - y) * 6 + "deg"); }
      });
      el.addEventListener("pointerleave", () => { el.style.setProperty("--rx", "0deg"); el.style.setProperty("--ry", "0deg"); });
    });
  }

  function initMagnetic(strength = 0.22) {
    if (reduce) return;
    document.querySelectorAll("[data-magnetic]").forEach((el) => {
      el.addEventListener("pointermove", (e) => {
        const r = el.getBoundingClientRect();
        el.style.transform = `translate(${(e.clientX - r.left - r.width / 2) * strength}px, ${(e.clientY - r.top - r.height / 2) * strength}px)`;
      });
      el.addEventListener("pointerleave", () => { el.style.transform = ""; });
    });
  }

  function initCounters() {
    if (reduce) return;
    document.querySelectorAll("[data-count]").forEach((el) => {
      const to = parseFloat(el.dataset.count), dec = +(el.dataset.decimals || 0);
      const pre = el.dataset.prefix || "", suf = el.dataset.suffix || "";
      const io = new IntersectionObserver(([e]) => {
        if (!e.isIntersecting) return; io.disconnect();
        const t0 = performance.now();
        const step = (t) => {
          const p = Math.min(1, (t - t0) / 1600), v = to * (1 - Math.pow(1 - p, 3));
          el.textContent = pre + v.toFixed(dec) + suf;
          if (p < 1) requestAnimationFrame(step);
        };
        requestAnimationFrame(step);
      });
      io.observe(el);
    });
  }

  function initHeroVideo() {
    const v = document.querySelector(".hero-video[data-src]");
    if (!v || reduce) return;
    v.src = v.dataset.src; v.play().catch(() => {});
  }

  initReveal(); initTilt(); initMagnetic(); initCounters();
  addEventListener("load", initHeroVideo);
</script>
```

---

## 5. Page metadata (no titles in the name)

```html
<!-- Home -->
<title>Ioan-Codrut Lazaroiu — Strategy, risk and capital for infrastructure</title>
<meta name="description" content="Independent advisory and research on enterprise risk governance, asset integrity and cross-border infrastructure strategy. Vienna.">
<meta name="author" content="Ioan-Codrut Lazaroiu">
<!-- About -->
<title>About — Ioan-Codrut Lazaroiu</title>
<meta name="description" content="Energy infrastructure executive and independent advisor in Vienna. 20+ years across Europe, the Middle East, North and West Africa, and Central Asia.">
```
Copy the same text into og:title / og:description.

---

## 6. Copy: original vs suggested

Where the original contains a client or project name, it is replaced here with `[name removed]`.

### Home
| Block | Original | Suggested |
|---|---|---|
| Eyebrow | Independent Advisory — Vienna, Austria | Independent advisory · Vienna |
| Headline | Strategy, risk, and capital for irreplaceable infrastructure. | Strategy, risk and capital for infrastructure that cannot be replaced. |
| Intro | Senior advisor at the intersection of enterprise risk governance, asset integrity, and cross-border infrastructure strategy. Twenty years of executive delivery in energy infrastructure; now advising at board level and publishing independent research. | Enterprise risk governance, asset integrity and cross-border infrastructure strategy. Twenty years of executive delivery in energy infrastructure. Now advising boards and publishing independent research. |
| Product note | In development: [name removed], a Microsoft 365-native enterprise risk governance platform. Details on request. | Removed. |
| Map band | Fictitious country names (illustration) | Replaced by the animated corridor lines and a figures band (20+ · EUR 8.5 billion · regions) |
| 01 Advisory | Enterprise risk governance design, transformation mandates, and executive decision-support for operators and investors. | Risk governance design, transformation mandates and decision support for operators and investors. |
| 02 Research | Independent working papers on infrastructure, capital allocation & risk, transformation, and behavioral prediction in organisations and human-AI teams. | Working papers on infrastructure, capital and risk, transformation, and behaviour in organisations and human-AI teams. |
| 03 About | Twenty years of executive delivery across Europe, the Middle East, North and West Africa, and Central Asia. | Unchanged. |
| Papers | Titles, dates and quotes | Unchanged. The long subtitle is set smaller under a short title. |
| Closing CTA | Start a conversation → | Facing a decision on an infrastructure asset? Write with the context. |

### About
| Block | Original | Suggested |
|---|---|---|
| Intro | Energy infrastructure executive and independent advisor, Vienna. Research on behavioral prediction in organisations and human-AI teams. | Energy infrastructure executive and independent advisor based in Vienna. Researches how behaviour can be predicted in organisations and human-AI teams. |
| Experience | 20+ years in energy infrastructure across Europe, the Middle East, North and West Africa, and Central Asia. | Unchanged. |
| Portfolio | Capital-project portfolio exceeding EUR 8.5 billion — design, construction, commissioning, and turnaround of terminals, tank storage, refineries, and international pipeline systems. | Capital projects exceeding EUR 8.5 billion: design, construction, commissioning and turnaround of terminals, tank storage, refineries and international pipeline systems. |
| Senior roles | [name removed] (Austria, Romania, UAE, Tunisia) · [name removed] · [name removed] · [name removed]. | Integrated energy company (Austria, Romania, UAE, Tunisia) · international engineering and services group · cross-border pipeline venture · engineering consultancy. |
| Current | Enterprise governance and risk transformation for a European cross-border pipeline group, alongside advisory engagements in the Middle East and Central Asia. | Enterprise governance and risk transformation for a European pipeline operator. Advisory work in the Middle East and Central Asia. |
| Education | … MIT Sloan School of Management — Executive Programme in General Management, Cohort 15. | Same, with the dash replaced by a comma. Cohort 15 is kept. |
| Credentials | Institute of Risk Management · PMI · FIDIC · Lean Six Sigma Green Belt. | Unchanged. |
| Languages | English · Italian · German · Romanian. | Unchanged. Shown as a marquee. |
| Closing | — | Write with the decision you are facing. [Start a conversation →] |

The descriptions for Senior roles and Current are my wording. Please check that each one is accurate before you publish it.
