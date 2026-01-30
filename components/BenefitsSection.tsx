'use client';

import { Clock, CalendarCheck, Target, Megaphone, RefreshCw, TrendingDown } from 'lucide-react';
import { Card } from './ui';
import { useLanguage } from '@/lib/i18n/LanguageContext';

const icons = [Clock, CalendarCheck, Target, Megaphone, RefreshCw, TrendingDown];

export function BenefitsSection() {
  const { t } = useLanguage();

  return (
    <section id="beneficios" className="section-padding bg-gray-50">
      <div className="container-custom">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            {t.benefits.title} <span className="text-primary-500">{t.benefits.titleHighlight}</span>
          </h2>
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
            {t.benefits.subtitle}
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {t.benefits.items.map((benefit, index) => {
            const Icon = icons[index];
            return (
              <Card key={index} padding="lg" className="text-center group">
                <div className="w-14 h-14 mx-auto mb-5 bg-primary-100 rounded-2xl flex items-center justify-center group-hover:bg-primary-500 transition-colors duration-300">
                  <Icon className="w-7 h-7 text-primary-500 group-hover:text-white transition-colors duration-300" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{benefit.title}</h3>
                <p className="text-gray-600 leading-relaxed">{benefit.description}</p>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
