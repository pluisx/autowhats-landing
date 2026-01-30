'use client';

import { useState } from 'react';
import { Menu, X, MessageCircle } from 'lucide-react';
import { Button } from './ui';
import { LanguageSwitch } from './LanguageSwitch';
import { useWhatsAppUrl } from '@/lib/hooks';
import { useLanguage } from '@/lib/i18n/LanguageContext';

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const { t } = useLanguage();
  const whatsappUrl = useWhatsAppUrl();

  const navLinks = [
    { href: '#beneficios', label: t.navbar.benefits },
    { href: '#como-funciona', label: t.navbar.howItWorks },
    { href: '#casos-de-uso', label: t.navbar.useCases },
    { href: '#testimonios', label: t.navbar.testimonials },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <a href="#" className="flex items-center gap-2">
            <div className="w-10 h-10 bg-gradient-to-br from-primary-500 to-primary-600 rounded-xl flex items-center justify-center">
              <MessageCircle className="w-6 h-6 text-white" />
            </div>
            <span className="text-xl font-bold text-gray-900">AutoWhats</span>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-gray-600 hover:text-gray-900 font-medium transition-colors"
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* Desktop CTA + Language Switch */}
          <div className="hidden md:flex items-center gap-3">
            <LanguageSwitch />
            <Button variant="whatsapp" size="sm" showWhatsAppIcon>
              {t.common.chatOnWhatsApp}
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex items-center gap-2 md:hidden">
            <LanguageSwitch />
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-lg hover:bg-gray-100"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white border-t border-gray-100">
          <div className="px-4 py-4 space-y-3">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="block py-2 text-gray-600 hover:text-gray-900 font-medium"
              >
                {link.label}
              </a>
            ))}
            <div className="pt-3">
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-whatsapp w-full flex items-center justify-center gap-2"
              >
                <MessageCircle className="w-5 h-5" />
                {t.common.chatOnWhatsApp}
              </a>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
