import type { Dictionary } from './types';
import en from './en';
import de from './de';
import it from './it';
import ar from './ar';
import ko from './ko';

export const locales = ['en', 'de', 'it', 'ar', 'ko'] as const;
export type Locale = (typeof locales)[number];

const dictionaries: Partial<Record<Locale, Dictionary>> = { en, de, it, ar, ko };

export function getDict(locale: string): Dictionary {
  return dictionaries[locale as Locale] ?? en;
}

/** Prefix a root-relative path with the locale segment ('' for the default locale). */
export function localePath(locale: string, path: string): string {
  return locale === 'en' ? path : `/${locale}${path}`;
}
