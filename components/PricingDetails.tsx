'use client';

import { MessageCircle, Calendar, Users, Wrench, Clock, Headphones } from 'lucide-react';
import { Button } from './ui';
import { useLanguage } from '@/lib/i18n/LanguageContext';

const icons = [MessageCircle, Calendar, Users, Wrench, Clock, Headphones];

export function PricingDetails() {
  const { t } = useLanguage();

  return (
    <section className="section-padding bg-white">
      <div className="container-custom">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
              {t.pricing.title} <span className="text-primary-500">{t.pricing.titleHighlight}</span>
            </h2>
            <p className="text-lg text-gray-600">
              {t.pricing.subtitle}
            </p>
          </div>

          <div className="bg-gradient-to-br from-primary-50 to-white rounded-2xl border-2 border-primary-200 p-6 md:p-8">
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {t.pricing.features.map((feature, index) => {
                const Icon = icons[index];
                return (
                  <div key={index} className="flex items-start gap-3">
                    <div className="w-10 h-10 bg-whatsapp/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Icon className="w-5 h-5 text-whatsapp" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900">{feature.title}</h3>
                      <p className="text-sm text-gray-600">{feature.description}</p>
                    </div>
                  </div>
                );
              })}
            </div>

            <div className="mt-8 pt-6 border-t border-primary-200 flex flex-col sm:flex-row items-center justify-between gap-4">
              <div>
                <p className="text-2xl font-bold text-gray-900">
                  {t.pricing.price} <span className="text-lg font-normal text-gray-600">{t.pricing.priceUnit}</span>
                </p>
                <p className="text-sm text-gray-500">{t.pricing.noContracts}</p>
              </div>
              <Button variant="primary" size="lg" showWhatsAppIcon>
                {t.common.getDemo}
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
