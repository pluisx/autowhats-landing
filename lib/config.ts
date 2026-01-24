// Configuration file - Update these values with your actual information
export const CONFIG = {
  // WhatsApp Configuration
  whatsapp: {
    number: 'TUNUMERO', // Replace with your WhatsApp Business number (include country code, e.g., 521234567890)
    defaultMessage: 'Hola! Vi tu página y me interesa automatizar mi WhatsApp Business',
  },

  // Business Information
  business: {
    name: 'AutoWhats',
    url: 'https://autowhats.com',
    email: 'contacto@autowhats.com',
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
