import { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  const baseUrl = 'https://autowhats.unitvent.com';

  return {
    rules: [
      // Regla general para todos los crawlers
      {
        userAgent: '*',
        allow: '/',
        disallow: ['/api/', '/_next/', '/admin/'],
      },
      // GPTBot (ChatGPT/OpenAI) - permitir acceso
      {
        userAgent: 'GPTBot',
        allow: '/',
      },
      // Google-Extended (Bard/Gemini) - permitir acceso
      {
        userAgent: 'Google-Extended',
        allow: '/',
      },
      // Anthropic Claude - permitir acceso
      {
        userAgent: 'anthropic-ai',
        allow: '/',
      },
      {
        userAgent: 'Claude-Web',
        allow: '/',
      },
      // Perplexity - permitir acceso
      {
        userAgent: 'PerplexityBot',
        allow: '/',
      },
      // Cohere - permitir acceso
      {
        userAgent: 'cohere-ai',
        allow: '/',
      },
      // Meta AI - permitir acceso
      {
        userAgent: 'FacebookBot',
        allow: '/',
      },
      // Common Crawl (usado para entrenar LLMs) - permitir acceso
      {
        userAgent: 'CCBot',
        allow: '/',
      },
    ],
    sitemap: `${baseUrl}/sitemap.xml`,
  };
}
