// One-off generator for the OpenGraph card (1200x630): corridor motif on navy
// plus the About portrait, so shared links carry the face.
import sharp from 'sharp';
import { fileURLToPath } from 'node:url';

const portraitSrc = fileURLToPath(new URL('../src/assets/portrait.jpg', import.meta.url));
// Head-and-shoulders crop from the tall portrait, rounded corners, gold keyline.
const portrait = await sharp(portraitSrc)
  .extract({ left: 0, top: 40, width: 505, height: 560 })
  .resize(300, 333)
  .composite([
    {
      input: Buffer.from(
        '<svg width="300" height="333"><rect x="0" y="0" width="300" height="333" rx="14" fill="#fff"/></svg>'
      ),
      blend: 'dest-in',
    },
  ])
  .png()
  .toBuffer();

const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="630">
  <rect width="1200" height="630" fill="#0C1626"/>
  <path d="M-10 500 H340 L460 380 H800 L910 270 H1220" stroke="#D9A441" stroke-width="2.5" opacity="0.55" fill="none"/>
  <circle cx="340" cy="500" r="6" fill="#D9A441" opacity="0.9"/>
  <circle cx="460" cy="380" r="6" fill="#D9A441" opacity="0.9"/>
  <circle cx="800" cy="380" r="6" fill="#D9A441" opacity="0.9"/>
  <circle cx="910" cy="270" r="6" fill="#D9A441" opacity="0.9"/>
  <text x="80" y="180" font-family="Arial, Helvetica, sans-serif" font-size="24" letter-spacing="5" fill="#D9A441" font-weight="600">INDEPENDENT ADVISORY — VIENNA</text>
  <text x="80" y="258" font-family="Arial, Helvetica, sans-serif" font-size="54" fill="#E8EAF0" font-weight="600">Ioan-Codrut Lazaroiu</text>
  <text x="80" y="322" font-family="Arial, Helvetica, sans-serif" font-size="30" fill="#A9B2C4">Strategy, risk, and capital</text>
  <text x="80" y="362" font-family="Arial, Helvetica, sans-serif" font-size="30" fill="#A9B2C4">for irreplaceable infrastructure.</text>
  <rect x="818" y="118" width="308" height="341" rx="16" fill="none" stroke="#D9A441" stroke-width="2" opacity="0.85"/>
</svg>`;

await sharp(Buffer.from(svg))
  .composite([{ input: portrait, left: 822, top: 122 }])
  .png()
  .toFile(fileURLToPath(new URL('../public/og.png', import.meta.url)));
console.log('og.png written');
