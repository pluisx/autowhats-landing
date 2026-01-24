'use client';

import { ButtonHTMLAttributes, ReactNode } from 'react';
import { MessageCircle } from 'lucide-react';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'whatsapp' | 'outline' | 'white';
  size?: 'sm' | 'md' | 'lg';
  children: ReactNode;
  icon?: ReactNode;
  showWhatsAppIcon?: boolean;
  href?: string;
}

const WHATSAPP_NUMBER = 'TUNUMERO';
const WHATSAPP_MESSAGE = 'Hola! Vi tu página y me interesa automatizar mi WhatsApp Business';

export function Button({
  variant = 'primary',
  size = 'md',
  children,
  icon,
  showWhatsAppIcon = false,
  href,
  className = '',
  ...props
}: ButtonProps) {
  const baseStyles = 'inline-flex items-center justify-center gap-2 font-semibold rounded-xl transform hover:scale-[1.02] transition-all duration-300';

  const variants = {
    primary: 'bg-gradient-to-r from-primary-500 to-primary-600 hover:from-primary-600 hover:to-primary-700 text-white shadow-button hover:shadow-lg',
    whatsapp: 'bg-gradient-to-r from-whatsapp to-whatsapp-dark hover:from-whatsapp-dark hover:to-green-600 text-white shadow-whatsapp hover:shadow-lg',
    outline: 'border-2 border-gray-300 text-gray-700 hover:border-primary-500 hover:text-primary-500 bg-transparent',
    white: 'bg-white text-gray-900 hover:bg-gray-50 shadow-lg hover:shadow-xl',
  };

  const sizes = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 py-3 text-base',
    lg: 'px-8 py-4 text-lg',
  };

  const combinedClassName = `${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`;

  const content = (
    <>
      {showWhatsAppIcon && <MessageCircle className="w-5 h-5" />}
      {icon}
      {children}
    </>
  );

  if (href || variant === 'whatsapp') {
    const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(WHATSAPP_MESSAGE)}`;
    const finalHref = href || whatsappUrl;

    return (
      <a
        href={finalHref}
        target="_blank"
        rel="noopener noreferrer"
        className={combinedClassName}
      >
        {content}
      </a>
    );
  }

  return (
    <button className={combinedClassName} {...props}>
      {content}
    </button>
  );
}
