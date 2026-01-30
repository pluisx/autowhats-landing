export { es } from './translations/es';
export { en } from './translations/en';
export type { TranslationKeys } from './translations/types';

export type Locale = 'es' | 'en';

export const defaultLocale: Locale = 'es';

export const locales: Locale[] = ['es', 'en'];

export const localeNames: Record<Locale, string> = {
  es: 'Español',
  en: 'English',
};
