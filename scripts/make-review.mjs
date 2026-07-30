// Generates the owner-review listing of all translations, side by side with
// the English source, from the i18n dictionaries (single source of truth).
import { writeFileSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import en from '../src/i18n/en.ts';
import de from '../src/i18n/de.ts';
import it from '../src/i18n/it.ts';
import ro from '../src/i18n/ro.ts';
import ar from '../src/i18n/ar.ts';
import ko from '../src/i18n/ko.ts';

function flatten(obj, prefix = '', out = new Map()) {
  for (const [k, v] of Object.entries(obj)) {
    const key = prefix ? `${prefix}.${k}` : k;
    if (typeof v === 'string') out.set(key, v);
    else if (Array.isArray(v)) v.forEach((item, i) => flatten(typeof item === 'string' ? { [i]: item } : item, `${key}.${i}`, out));
    else if (v && typeof v === 'object') flatten(v, key, out);
  }
  return out;
}

const SKIP = /^(locale|dir|siteName|.*\bhref|.*ssrnUrl|.*ssrnLabel)$/;
const enFlat = flatten(en);

function section(name, dict, note) {
  const flat = flatten(dict);
  let md = `\n## ${name}\n\n${note}\n\n| Key | English | Translation |\n|---|---|---|\n`;
  for (const [key, val] of flat) {
    if (SKIP.test(key)) continue;
    const src = enFlat.get(key) ?? '—';
    if (src === val) continue; // untranslated identical strings (names, labels) skipped
    md += `| \`${key}\` | ${esc(src)} | ${esc(val)} |\n`;
  }
  return md;
}

const esc = (s) => String(s).replaceAll('|', '\\|').replaceAll('\n', ' ');

let md = `# lazaroiu.at — Translation review (Checkpoint 2)

Generated from \`src/i18n/*.ts\` on 2026-07-28. Strings identical to English
(proper names, "LinkedIn", the paper's English title, etc.) are omitted.
DE and IT are full-site; AR and KO cover the core pages (Home, Advisory,
About, Contact) plus a translated abstract paragraph for the Research page,
which otherwise remains in English — per brief Section 4.
AR and KO are drafts pending native review and are not to be treated as final.
`;

md += section('German (DE) — full site', de, 'For owner review (Section 4).');
md += section('Italian (IT) — full site', it, 'For owner review (Section 4).');
md += section('Romanian (RO) — full site', ro, 'For owner review.');
md += section('Arabic (AR) — core pages', ar, 'Draft — pending native review.');
md += section('Korean (KO) — core pages', ko, 'Draft — pending native review.');

writeFileSync(fileURLToPath(new URL('../../translations-review.md', import.meta.url)), md);
console.log('translations-review.md written');
