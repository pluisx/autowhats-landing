'use client';

import Link from 'next/link';
import { MessageCircle } from 'lucide-react';
import { getWhatsAppUrl } from '@/lib/config';

export function Footer() {
  const whatsappUrl = getWhatsAppUrl();

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
              Política de privacidad
            </Link>
            <Link href="/terminos" className="hover:text-white transition-colors">
              Términos de servicio
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
            © 2026 AutoWhats. Todos los derechos reservados.
          </p>
          <p className="text-xs text-gray-600 mt-2">
            AutoWhats is a product of Unity Ventures Innovations LLC
          </p>
        </div>
      </div>
    </footer>
  );
}
