'use client';

import { Button } from './ui';
import { useLanguage } from '@/lib/i18n/LanguageContext';

export function FinalCTA() {
  const { t } = useLanguage();

  return (
    <section className="section-padding bg-gradient-to-br from-primary-500 to-primary-600 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-72 h-72 bg-white rounded-full -translate-x-1/2 -translate-y-1/2" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-white rounded-full translate-x-1/2 translate-y-1/2" />
      </div>

      <div className="container-custom relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
            {t.finalCta.title}
          </h2>

          <p className="text-lg md:text-xl text-white/90 mb-8">
            {t.finalCta.subtitle}
          </p>

          <Button variant="white" size="lg" showWhatsAppIcon className="shadow-xl">
            {t.common.getDemo}
          </Button>

          <p className="text-white/70 text-sm mt-6">
            {t.finalCta.disclaimer}
          </p>
        </div>
      </div>
    </section>
  );
}
