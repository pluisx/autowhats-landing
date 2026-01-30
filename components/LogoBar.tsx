'use client';

import { Calendar, Share2 } from 'lucide-react';
import { useLanguage } from '@/lib/i18n/LanguageContext';

export function LogoBar() {
  const { t } = useLanguage();

  const logos = [
    { name: t.logoBar.googleCalendar, icon: Calendar },
    { name: t.logoBar.metaAds, icon: Share2 },
  ];

  return (
    <section className="py-12 md:py-16 bg-gray-50 border-y border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <p className="text-center text-gray-500 text-sm md:text-base mb-8">
          {t.logoBar.title}
        </p>

        <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16">
          {logos.map((logo) => {
            const Icon = logo.icon;
            return (
              <div
                key={logo.name}
                className="flex items-center gap-2 text-gray-400 hover:text-gray-600 transition-colors"
              >
                <Icon className="w-6 h-6 md:w-8 md:h-8" />
                <span className="text-sm md:text-base font-medium">{logo.name}</span>
              </div>
            );
          })}
        </div>

        <p className="text-center text-gray-400 text-xs md:text-sm mt-6">
          {t.logoBar.otherIntegrations}
        </p>
      </div>
    </section>
  );
}
