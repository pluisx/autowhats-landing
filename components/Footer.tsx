'use client';

import Link from 'next/link';
import { MessageCircle } from 'lucide-react';
import { useWhatsAppUrl } from '@/lib/hooks';
import { useLanguage } from '@/lib/i18n/LanguageContext';

export function Footer() {
  const whatsappUrl = useWhatsAppUrl();
  const { t } = useLanguage();

  return (
    <footer className="bg-gray-900 text-white py-12 md:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 bg-gradient-to-br from-primary-500 to-primary-600 rounded-xl flex items-center justify-center">
              <MessageCircle className="w-6 h-6 text-white" />
            </div>
            <span className="text-xl font-bold">AutoWhats</span>
          </div>

          {/* Links */}
          <div className="flex flex-wrap justify-center gap-6 text-sm text-gray-400">
            <Link href="/privacidad" className="hover:text-white transition-colors">
              {t.footer.privacyPolicy}
            </Link>
            <Link href="/terminos" className="hover:text-white transition-colors">
              {t.footer.termsOfService}
            </Link>
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-4">
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 bg-whatsapp rounded-full flex items-center justify-center hover:bg-whatsapp-dark transition-colors"
              aria-label="WhatsApp"
            >
              <MessageCircle className="w-5 h-5" />
            </a>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p className="text-sm text-gray-500">
            {t.footer.copyright}
          </p>
          <p className="text-xs text-gray-600 mt-2">
            {t.footer.company}
          </p>
        </div>
      </div>
    </footer>
  );
}
