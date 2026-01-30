'use client';

import { Scissors, UtensilsCrossed, ShoppingCart, Check } from 'lucide-react';
import { useLanguage } from '@/lib/i18n/LanguageContext';

const icons = [Scissors, UtensilsCrossed, ShoppingCart];

export function UseCases() {
  const { t } = useLanguage();

  return (
    <section id="casos-de-uso" className="section-padding bg-gray-800">
      <div className="container-custom">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
            {t.useCases.title}{' '}
            <span className="text-primary-400">{t.useCases.titleHighlight}</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-6 md:gap-8">
          {t.useCases.categories.map((useCase, index) => {
            const Icon = icons[index];
            return (
              <div
                key={index}
                className="bg-gray-700/50 rounded-2xl p-6 md:p-8 border border-gray-600 hover:border-primary-500 transition-colors duration-300"
              >
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 bg-primary-500/20 rounded-xl flex items-center justify-center">
                    <Icon className="w-6 h-6 text-primary-400" />
                  </div>
                  <h3 className="text-xl font-bold text-white">{useCase.title}</h3>
                </div>

                <ul className="space-y-4">
                  {useCase.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start gap-3">
                      <div className="flex-shrink-0 w-5 h-5 bg-whatsapp/20 rounded-full flex items-center justify-center mt-0.5">
                        <Check className="w-3 h-3 text-whatsapp" />
                      </div>
                      <span className="text-gray-300">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
