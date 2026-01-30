'use client';

import { useLanguage } from '@/lib/i18n/LanguageContext';
import { getWhatsAppUrl } from '@/lib/config';

export function useWhatsAppUrl(customMessage?: string): string {
  const { locale } = useLanguage();
  return getWhatsAppUrl(customMessage, locale);
}
