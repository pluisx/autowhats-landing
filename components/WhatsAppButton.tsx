'use client';

import { MessageCircle } from 'lucide-react';
import { useWhatsAppUrl } from '@/lib/hooks';
import { useLanguage } from '@/lib/i18n/LanguageContext';

export function WhatsAppButton() {
  const whatsappUrl = useWhatsAppUrl();
  const { locale } = useLanguage();

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 w-14 h-14 md:w-16 md:h-16 bg-whatsapp rounded-full flex items-center justify-center shadow-whatsapp hover:shadow-lg hover:scale-110 transition-all duration-300 animate-bounce-slow"
      aria-label={locale === 'es' ? 'Contactar por WhatsApp' : 'Contact via WhatsApp'}
    >
      <MessageCircle className="w-7 h-7 md:w-8 md:h-8 text-white" />

      {/* Pulse effect */}
      <span className="absolute w-full h-full bg-whatsapp rounded-full animate-ping opacity-20" />
    </a>
  );
}
