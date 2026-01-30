'use client';

import { Globe } from 'lucide-react';
import { useLanguage } from '@/lib/i18n/LanguageContext';

export function LanguageSwitch() {
  const { locale, setLocale, t } = useLanguage();

  const toggleLanguage = () => {
    setLocale(locale === 'es' ? 'en' : 'es');
  };

  return (
    <button
      onClick={toggleLanguage}
      className="flex items-center gap-2 px-3 py-2 rounded-lg text-gray-600 hover:text-gray-900 hover:bg-gray-100 transition-colors text-sm font-medium"
      aria-label={`Switch to ${t.language.switchTo}`}
    >
      <Globe className="w-4 h-4" />
      <span className="hidden sm:inline">{t.language.switchTo}</span>
      <span className="sm:hidden">{locale === 'es' ? 'EN' : 'ES'}</span>
    </button>
  );
}
