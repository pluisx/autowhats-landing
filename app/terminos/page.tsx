'use client';

import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';
import { useLanguage } from '@/lib/i18n/LanguageContext';
import { legalEs, legalEn } from '@/lib/i18n/translations/legal';

export default function TermsOfService() {
  const { locale } = useLanguage();
  const t = locale === 'es' ? legalEs : legalEn;
  const s = t.terms;

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
            {s.title}
          </h1>
          <p className="text-gray-500 mb-8">{t.lastUpdated}</p>

          <div className="prose prose-gray max-w-none">
            <p className="text-lg text-gray-600 mb-8">{s.intro}</p>

            <h2 className="text-xl font-bold text-gray-900 mt-8 mb-4">{s.section1Title}</h2>
            <p className="text-gray-600 mb-4">{s.section1Intro}</p>
            <ul className="list-disc pl-6 text-gray-600 space-y-2 mb-4">
              {s.section1Items.map((item, i) => <li key={i}>{item}</li>)}
            </ul>

            <h2 className="text-xl font-bold text-gray-900 mt-8 mb-4">{s.section2Title}</h2>
            <p className="text-gray-600 mb-4">{s.section2Intro}</p>
            <ul className="list-disc pl-6 text-gray-600 space-y-2 mb-4">
              {s.section2Items.map((item, i) => <li key={i}>{item}</li>)}
            </ul>

            <h2 className="text-xl font-bold text-gray-900 mt-8 mb-4">{s.section3Title}</h2>
            <p className="text-gray-600 mb-4">{s.section3Text1}</p>
            <p className="text-gray-600 mb-4">{s.section3Text2}</p>

            <h2 className="text-xl font-bold text-gray-900 mt-8 mb-4">{s.section4Title}</h2>

            <h3 className="text-lg font-semibold text-gray-800 mt-6 mb-3">{s.section4_1Title}</h3>
            <p className="text-gray-600 mb-4">{s.section4_1Text}</p>

            <h3 className="text-lg font-semibold text-gray-800 mt-6 mb-3">{s.section4_2Title}</h3>
            <p className="text-gray-600 mb-4">{s.section4_2Text}</p>

            <h3 className="text-lg font-semibold text-gray-800 mt-6 mb-3">{s.section4_3Title}</h3>
            <p className="text-gray-600 mb-4"><strong>{s.section4_3Text1.split('.')[0]}.</strong> {s.section4_3Text1.split('.').slice(1).join('.')}</p>
            <p className="text-gray-600 mb-4">{s.section4_3Text2}</p>

            <h2 className="text-xl font-bold text-gray-900 mt-8 mb-4">{s.section5Title}</h2>
            <p className="text-gray-600 mb-4">
              {s.section5Text1}{' '}
              <a href="mailto:info@unitvent.com" className="text-primary-500 hover:underline">
                info@unitvent.com
              </a>
            </p>
            <p className="text-gray-600 mb-4">{s.section5Text2}</p>
            <p className="text-gray-600 mb-4">{s.section5Text3}</p>

            <h2 className="text-xl font-bold text-gray-900 mt-8 mb-4">{s.section6Title}</h2>
            <p className="text-gray-600 mb-4">{s.section6Intro}</p>
            <ul className="list-disc pl-6 text-gray-600 space-y-2 mb-4">
              {s.section6Items.map((item, i) => <li key={i}>{item}</li>)}
            </ul>
            <p className="text-gray-600 mb-4">{s.section6Text}</p>

            <h2 className="text-xl font-bold text-gray-900 mt-8 mb-4">{s.section7Title}</h2>
            <p className="text-gray-600 mb-4">{s.section7Text1}</p>
            <p className="text-gray-600 mb-4">{s.section7Text2}</p>

            <h2 className="text-xl font-bold text-gray-900 mt-8 mb-4">{s.section8Title}</h2>
            <p className="text-gray-600 mb-4">{s.section8Text}</p>
            <ul className="list-disc pl-6 text-gray-600 space-y-2 mb-4">
              {s.section8Items.map((item, i) => <li key={i}>{item}</li>)}
            </ul>

            <h2 className="text-xl font-bold text-gray-900 mt-8 mb-4">{s.section9Title}</h2>
            <p className="text-gray-600 mb-4">{s.section9Intro}</p>
            <ul className="list-disc pl-6 text-gray-600 space-y-2 mb-4">
              {s.section9Items.map((item, i) => <li key={i}>{item}</li>)}
            </ul>

            <h2 className="text-xl font-bold text-gray-900 mt-8 mb-4">{s.section10Title}</h2>
            <p className="text-gray-600 mb-4">{s.section10Intro}</p>
            <ul className="list-disc pl-6 text-gray-600 space-y-2 mb-4">
              {s.section10Items.map((item, i) => <li key={i}>{item}</li>)}
            </ul>

            <h2 className="text-xl font-bold text-gray-900 mt-8 mb-4">{s.section11Title}</h2>
            <p className="text-gray-600 mb-4">{s.section11Text1}</p>
            <p className="text-gray-600 mb-4">{s.section11Text2}</p>

            <h2 className="text-xl font-bold text-gray-900 mt-8 mb-4">{s.section12Title}</h2>
            <p className="text-gray-600 mb-4">{s.section12Text}</p>

            <h2 className="text-xl font-bold text-gray-900 mt-8 mb-4">{s.section13Title}</h2>
            <ul className="list-disc pl-6 text-gray-600 space-y-2 mb-4">
              {s.section13Items.map((item, i) => (
                <li key={i}><strong>{item.label}</strong> {item.text}</li>
              ))}
            </ul>

            <h2 className="text-xl font-bold text-gray-900 mt-8 mb-4">{s.section14Title}</h2>
            <p className="text-gray-600 mb-4">{s.section14Text}</p>
            <div className="bg-gray-50 rounded-xl p-6 mt-4">
              <p className="text-gray-700 font-medium">{t.privacy.contactCompany}</p>
              <p className="text-gray-600">{t.privacy.contactEmail} <a href="mailto:info@unitvent.com" className="text-primary-500 hover:underline">info@unitvent.com</a></p>
              <p className="text-gray-600">{t.privacy.contactCountry}</p>
            </div>

            <div className="mt-8 p-6 bg-primary-50 rounded-xl border border-primary-100">
              <p className="text-gray-700">
                {s.acceptanceText}{' '}
                <Link href="/privacidad" className="text-primary-500 hover:underline">
                  {s.privacyPolicyLink}
                </Link>.
              </p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
