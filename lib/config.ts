// Configuration file - Update these values with your actual information
export const CONFIG = {
  // WhatsApp Configuration
  whatsapp: {
    number: '17705899034',
    defaultMessage: 'Hola, soy dueño de ___ (mi negocio), recibo aprox ___ mensajes/día, quiero automatizar citas y atención.',
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

// Helper function to generate WhatsApp URL
export function getWhatsAppUrl(customMessage?: string): string {
  const message = customMessage || CONFIG.whatsapp.defaultMessage;
  return `https://wa.me/${CONFIG.whatsapp.number}?text=${encodeURIComponent(message)}`;
}
