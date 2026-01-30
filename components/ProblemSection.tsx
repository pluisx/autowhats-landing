'use client';

import { X } from 'lucide-react';
import { Card } from './ui';
import { useLanguage } from '@/lib/i18n/LanguageContext';

export function ProblemSection() {
  const { t } = useLanguage();

  return (
    <section className="section-padding bg-white">
      <div className="container-custom">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            {t.problem.title}{' '}
            <span className="text-primary-500">{t.problem.titleHighlight}</span> {t.problem.titleEnd}
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {t.problem.problems.map((problem, index) => (
            <Card key={index} className="flex items-start gap-4">
              <div className="flex-shrink-0 w-10 h-10 bg-red-100 rounded-full flex items-center justify-center">
                <X className="w-5 h-5 text-red-500" />
              </div>
              <p className="text-gray-700 text-lg leading-relaxed">{problem}</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
