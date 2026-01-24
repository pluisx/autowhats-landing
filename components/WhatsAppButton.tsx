'use client';

import { MessageCircle } from 'lucide-react';

const WHATSAPP_NUMBER = 'TUNUMERO';
const WHATSAPP_MESSAGE = 'Hola! Vi tu página y me interesa automatizar mi WhatsApp Business';

export function WhatsAppButton() {
  const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(WHATSAPP_MESSAGE)}`;

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 w-14 h-14 md:w-16 md:h-16 bg-whatsapp rounded-full flex items-center justify-center shadow-whatsapp hover:shadow-lg hover:scale-110 transition-all duration-300 animate-bounce-slow"
      aria-label="Contactar por WhatsApp"
    >
      <MessageCircle className="w-7 h-7 md:w-8 md:h-8 text-white" />

      {/* Pulse effect */}
      <span className="absolute w-full h-full bg-whatsapp rounded-full animate-ping opacity-20" />
    </a>
  );
}
