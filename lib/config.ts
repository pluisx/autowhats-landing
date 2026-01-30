// Configuration file - Update these values with your actual information
export const CONFIG = {
  // WhatsApp Configuration
  whatsapp: {
    number: '17705899034',
    defaultMessage: {
      es: 'Hola, soy dueño de ___ (mi negocio), recibo aprox ___ mensajes/día, quiero automatizar citas y atención.',
      en: 'Hi, I own ___ (my business), I receive approx ___ messages/day, I want to automate appointments and customer service.',
    },
  },

  // Business Information
  business: {
    name: 'AutoWhats',
    url: 'https://autowhats.unitvent.com',
    email: 'info@unitvent.com',
  },

  // Social Media Links
  social: {
    instagram: '#', // e.g., 'https://instagram.com/autowhats'
    linkedin: '#', // e.g., 'https://linkedin.com/company/autowhats'
  },
} as const;

type Locale = 'es' | 'en';

// Helper function to generate WhatsApp URL
export function getWhatsAppUrl(customMessage?: string, locale: Locale = 'es'): string {
  const message = customMessage || CONFIG.whatsapp.defaultMessage[locale];
  return `https://wa.me/${CONFIG.whatsapp.number}?text=${encodeURIComponent(message)}`;
}
