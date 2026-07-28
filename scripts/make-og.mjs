// One-off generator for the OpenGraph card (1200x630), corridor motif on navy.
import sharp from 'sharp';
import { fileURLToPath } from 'node:url';

const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="630">
  <rect width="1200" height="630" fill="#0C1626"/>
  <path d="M-10 500 H340 L460 380 H800 L910 270 H1220" stroke="#D9A441" stroke-width="2.5" opacity="0.55" fill="none"/>
  <circle cx="340" cy="500" r="6" fill="#D9A441" opacity="0.9"/>
  <circle cx="460" cy="380" r="6" fill="#D9A441" opacity="0.9"/>
  <circle cx="800" cy="380" r="6" fill="#D9A441" opacity="0.9"/>
  <circle cx="910" cy="270" r="6" fill="#D9A441" opacity="0.9"/>
  <text x="80" y="180" font-family="Arial, Helvetica, sans-serif" font-size="30" letter-spacing="7" fill="#D9A441" font-weight="600">INDEPENDENT ADVISORY — VIENNA, AUSTRIA</text>
  <text x="80" y="260" font-family="Arial, Helvetica, sans-serif" font-size="54" fill="#E8EAF0" font-weight="600">Ioan-Codrut Lazaroiu</text>
  <text x="80" y="330" font-family="Arial, Helvetica, sans-serif" font-size="32" fill="#A9B2C4">Strategy, risk, and capital for irreplaceable infrastructure.</text>
</svg>`;

await sharp(Buffer.from(svg)).png().toFile(fileURLToPath(new URL('../public/og.png', import.meta.url)));
console.log('og.png written');
