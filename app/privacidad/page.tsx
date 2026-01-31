'use client';

import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';
import { useLanguage } from '@/lib/i18n/LanguageContext';
import { legalEs, legalEn } from '@/lib/i18n/translations/legal';

export default function PrivacyPolicy() {
  const { locale } = useLanguage();
  const t = locale === 'es' ? legalEs : legalEn;
  const p = t.privacy;

  return (
    <main className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white border-b border-gray-200">
        <div className="max-w-4xl mx-auto px-4 py-6">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-gray-600 hover:text-primary-500 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            {t.backToHome}
          </Link>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-4xl mx-auto px-4 py-12">
        <div className="bg-white rounded-2xl shadow-sm p-8 md:p-12">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">
            {p.title}
          </h1>
          <p className="text-gray-500 mb-8">{t.lastUpdated}</p>

          <div className="prose prose-gray max-w-none">
            <p className="text-lg text-gray-600 mb-8">{p.intro}</p>

            <h2 className="text-xl font-bold text-gray-900 mt-8 mb-4">{p.section1Title}</h2>
            <p className="text-gray-600 mb-4">{p.section1Intro}</p>

            <h3 className="text-lg font-semibold text-gray-800 mt-6 mb-3">{p.section1_1Title}</h3>
            <ul className="list-disc pl-6 text-gray-600 space-y-2 mb-4">
              {p.section1_1Items.map((item, i) => <li key={i}>{item}</li>)}
            </ul>

            <h3 className="text-lg font-semibold text-gray-800 mt-6 mb-3">{p.section1_2Title}</h3>
            <ul className="list-disc pl-6 text-gray-600 space-y-2 mb-4">
              {p.section1_2Items.map((item, i) => <li key={i}>{item}</li>)}
            </ul>

            <h3 className="text-lg font-semibold text-gray-800 mt-6 mb-3">{p.section1_3Title}</h3>
            <ul className="list-disc pl-6 text-gray-600 space-y-2 mb-4">
              {p.section1_3Items.map((item, i) => <li key={i}>{item}</li>)}
            </ul>

            <h2 className="text-xl font-bold text-gray-900 mt-8 mb-4">{p.section2Title}</h2>
            <p className="text-gray-600 mb-4">{p.section2Intro}</p>
            <ul className="list-disc pl-6 text-gray-600 space-y-2 mb-4">
              {p.section2Items.map((item, i) => <li key={i}>{item}</li>)}
            </ul>

            <h2 className="text-xl font-bold text-gray-900 mt-8 mb-4">{p.section3Title}</h2>
            <p className="text-gray-600 mb-4"><strong>{p.section3Text1.split('.')[0]}.</strong> {p.section3Text1.split('.').slice(1).join('.')}</p>
            <p className="text-gray-600 mb-4">{p.section3Text2}</p>

            <h2 className="text-xl font-bold text-gray-900 mt-8 mb-4">{p.section4Title}</h2>
            <p className="text-gray-600 mb-4">{p.section4Text1}</p>
            <p className="text-gray-600 mb-4">{p.section4Text2}</p>
            <ul className="list-disc pl-6 text-gray-600 space-y-2 mb-4">
              {p.section4Items.map((item, i) => <li key={i}>{item}</li>)}
            </ul>

            <h2 className="text-xl font-bold text-gray-900 mt-8 mb-4">{p.section5Title}</h2>
            <p className="text-gray-600 mb-4">{p.section5Intro}</p>
            <ul className="list-disc pl-6 text-gray-600 space-y-2 mb-4">
              {p.section5Items.map((item, i) => (
                <li key={i}><strong>{item.label}</strong> {item.text}</li>
              ))}
            </ul>

            <h2 className="text-xl font-bold text-gray-900 mt-8 mb-4">{p.section6Title}</h2>
            <p className="text-gray-600 mb-4">{p.section6Intro}</p>
            <ul className="list-disc pl-6 text-gray-600 space-y-2 mb-4">
              {p.section6Items.map((item, i) => (
                <li key={i}><strong>{item.label}</strong> {item.text}</li>
              ))}
            </ul>
            <p className="text-gray-600 mb-4">
              {p.section6Text}{' '}
              <a href="mailto:info@unitvent.com" className="text-primary-500 hover:underline">
                info@unitvent.com
              </a>
            </p>

            <h2 className="text-xl font-bold text-gray-900 mt-8 mb-4">{p.section7Title}</h2>
            <p className="text-gray-600 mb-4">{p.section7Text}</p>

            <h2 className="text-xl font-bold text-gray-900 mt-8 mb-4">{p.section8Title}</h2>
            <p className="text-gray-600 mb-4">{p.section8Text}</p>

            <h2 className="text-xl font-bold text-gray-900 mt-8 mb-4">{p.section9Title}</h2>
            <p className="text-gray-600 mb-4">{p.section9Text}</p>

            <h2 className="text-xl font-bold text-gray-900 mt-8 mb-4">{p.section10Title}</h2>
            <p className="text-gray-600 mb-4">{p.section10Text}</p>

            <h2 className="text-xl font-bold text-gray-900 mt-8 mb-4">{p.section11Title}</h2>
            <p className="text-gray-600 mb-4">{p.section11Text}</p>
            <div className="bg-gray-50 rounded-xl p-6 mt-4">
              <p className="text-gray-700 font-medium">{p.contactCompany}</p>
              <p className="text-gray-600">{p.contactEmail} <a href="mailto:info@unitvent.com" className="text-primary-500 hover:underline">info@unitvent.com</a></p>
              <p className="text-gray-600">{p.contactCountry}</p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
