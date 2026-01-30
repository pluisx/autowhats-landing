'use client';

import { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { es, en, type TranslationKeys, type Locale, defaultLocale } from './index';

type LanguageContextType = {
  locale: Locale;
  setLocale: (locale: Locale) => void;
  t: TranslationKeys;
};

const translations: Record<Locale, TranslationKeys> = { es, en };

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

const STORAGE_KEY = 'autowhats-locale';

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [locale, setLocaleState] = useState<Locale>(defaultLocale);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    // Check localStorage for saved preference
    const savedLocale = localStorage.getItem(STORAGE_KEY) as Locale | null;

    if (savedLocale && (savedLocale === 'es' || savedLocale === 'en')) {
      setLocaleState(savedLocale);
    } else {
      // Detect browser language
      const browserLang = navigator.language.split('-')[0];
      if (browserLang === 'en') {
        setLocaleState('en');
      }
    }
    setMounted(true);
  }, []);

  useEffect(() => {
    if (mounted) {
      // Update html lang attribute
      document.documentElement.lang = locale;
      // Save to localStorage
      localStorage.setItem(STORAGE_KEY, locale);
    }
  }, [locale, mounted]);

  const setLocale = (newLocale: Locale) => {
    setLocaleState(newLocale);
  };

  const t = translations[locale];

  // Prevent hydration mismatch by not rendering until mounted
  if (!mounted) {
    return (
      <LanguageContext.Provider value={{ locale: defaultLocale, setLocale, t: translations[defaultLocale] }}>
        {children}
      </LanguageContext.Provider>
    );
  }

  return (
    <LanguageContext.Provider value={{ locale, setLocale, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}
