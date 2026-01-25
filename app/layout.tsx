import type { Metadata } from "next";
import "./globals.css";

const baseUrl = "https://autowhats.unitvent.com";

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    // Organization - Información de la empresa
    {
      "@type": "Organization",
      "@id": `${baseUrl}/#organization`,
      name: "AutoWhats",
      legalName: "Echo Haven Holdings LLC",
      url: baseUrl,
      logo: {
        "@type": "ImageObject",
        "@id": `${baseUrl}/#logo`,
        url: `${baseUrl}/icon.svg`,
        width: 512,
        height: 512,
        caption: "AutoWhats Logo",
      },
      image: `${baseUrl}/og-image.svg`,
      description:
        "AutoWhats es una plataforma de automatización de WhatsApp Business con inteligencia artificial. Ofrecemos chatbots que responden mensajes automáticamente 24/7, agendan citas, y atienden clientes para salones de belleza, clínicas, restaurantes y cualquier negocio.",
      slogan: "Nunca pierdas un cliente por no responder a tiempo",
      foundingDate: "2024",
      contactPoint: [
        {
          "@type": "ContactPoint",
          email: "info@unitvent.com",
          contactType: "customer service",
          availableLanguage: ["Spanish", "English"],
          areaServed: ["MX", "US", "ES", "CO", "AR", "CL", "PE"],
        },
        {
          "@type": "ContactPoint",
          email: "info@unitvent.com",
          contactType: "sales",
          availableLanguage: ["Spanish", "English"],
        },
      ],
      address: {
        "@type": "PostalAddress",
        addressCountry: "US",
      },
      sameAs: [],
      knowsAbout: [
        "WhatsApp Business API",
        "Chatbots",
        "Inteligencia Artificial",
        "Automatización de mensajes",
        "Atención al cliente automatizada",
        "Agendamiento de citas",
      ],
    },

    // WebSite - Información del sitio web
    {
      "@type": "WebSite",
      "@id": `${baseUrl}/#website`,
      url: baseUrl,
      name: "AutoWhats",
      alternateName: "AutoWhats - Chatbot WhatsApp con IA",
      publisher: {
        "@id": `${baseUrl}/#organization`,
      },
      description:
        "Automatiza tu WhatsApp Business con inteligencia artificial. Respuestas instantáneas 24/7, agendamiento automático de citas, y atención al cliente sin intervención humana para salones, clínicas, restaurantes y más.",
      inLanguage: "es",
      potentialAction: {
        "@type": "SearchAction",
        target: {
          "@type": "EntryPoint",
          urlTemplate: `${baseUrl}/?search={search_term_string}`,
        },
        "query-input": "required name=search_term_string",
      },
    },

    // WebPage - Página principal
    {
      "@type": "WebPage",
      "@id": `${baseUrl}/#webpage`,
      url: baseUrl,
      name: "AutoWhats - Automatiza tu WhatsApp Business con IA",
      description:
        "Deja de perder clientes por no responder a tiempo. AutoWhats es un chatbot con inteligencia artificial que responde WhatsApp automáticamente 24/7, agenda citas y atiende a tus clientes.",
      isPartOf: {
        "@id": `${baseUrl}/#website`,
      },
      about: {
        "@id": `${baseUrl}/#organization`,
      },
      primaryImageOfPage: {
        "@type": "ImageObject",
        url: `${baseUrl}/og-image.svg`,
      },
      datePublished: "2024-01-01",
      dateModified: new Date().toISOString().split("T")[0],
      inLanguage: "es",
      breadcrumb: {
        "@id": `${baseUrl}/#breadcrumb`,
      },
    },

    // BreadcrumbList - Navegación
    {
      "@type": "BreadcrumbList",
      "@id": `${baseUrl}/#breadcrumb`,
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          name: "Inicio",
          item: baseUrl,
        },
      ],
    },

    // SoftwareApplication - El producto como software
    {
      "@type": "SoftwareApplication",
      "@id": `${baseUrl}/#software`,
      name: "AutoWhats",
      alternateName: "AutoWhats Chatbot",
      applicationCategory: "BusinessApplication",
      applicationSubCategory: "Customer Service Software",
      operatingSystem: "Web, iOS, Android (via WhatsApp)",
      description:
        "Chatbot de WhatsApp Business con inteligencia artificial (GPT-4) para automatizar la atención al cliente. Responde mensajes automáticamente 24/7, agenda citas, envía recordatorios, y deriva conversaciones complejas a humanos. Ideal para salones de belleza, clínicas, restaurantes, consultorios médicos y cualquier negocio que reciba mensajes por WhatsApp.",
      featureList: [
        "Respuestas automáticas con IA 24/7",
        "Agendamiento automático de citas",
        "Integración con Google Calendar",
        "Envío de recordatorios automáticos",
        "Derivación inteligente a humanos",
        "Procesamiento de imágenes y audio",
        "Memoria de conversaciones",
        "Dashboard de métricas",
        "Soporte multiidioma",
        "Configuración sin código",
      ],
      screenshot: `${baseUrl}/og-image.svg`,
      softwareVersion: "2.0",
      releaseNotes: "Versión con GPT-4 y memoria de conversaciones mejorada",
      offers: {
        "@type": "AggregateOffer",
        lowPrice: "299",
        highPrice: "999",
        priceCurrency: "MXN",
        priceValidUntil: "2026-12-31",
        availability: "https://schema.org/InStock",
        offerCount: 3,
        offers: [
          {
            "@type": "Offer",
            name: "Plan Básico",
            price: "299",
            priceCurrency: "MXN",
            description: "Ideal para negocios pequeños con bajo volumen de mensajes",
            priceValidUntil: "2026-12-31",
          },
          {
            "@type": "Offer",
            name: "Plan Profesional",
            price: "599",
            priceCurrency: "MXN",
            description: "Para negocios en crecimiento con múltiples servicios",
            priceValidUntil: "2026-12-31",
          },
          {
            "@type": "Offer",
            name: "Plan Empresarial",
            price: "999",
            priceCurrency: "MXN",
            description: "Solución completa con integraciones avanzadas",
            priceValidUntil: "2026-12-31",
          },
        ],
      },
      aggregateRating: {
        "@type": "AggregateRating",
        ratingValue: "4.9",
        ratingCount: "50",
        bestRating: "5",
        worstRating: "1",
        reviewCount: "50",
      },
      review: [
        {
          "@type": "Review",
          author: {
            "@type": "Person",
            name: "María González",
          },
          reviewRating: {
            "@type": "Rating",
            ratingValue: "5",
            bestRating: "5",
          },
          reviewBody:
            "AutoWhats transformó mi salón. Antes perdía clientes porque no podía responder rápido, ahora el bot agenda citas automáticamente incluso a las 2am.",
        },
        {
          "@type": "Review",
          author: {
            "@type": "Person",
            name: "Carlos Rodríguez",
          },
          reviewRating: {
            "@type": "Rating",
            ratingValue: "5",
            bestRating: "5",
          },
          reviewBody:
            "Increíble para mi restaurante. Los clientes hacen reservaciones por WhatsApp y el bot confirma todo automáticamente.",
        },
      ],
      provider: {
        "@id": `${baseUrl}/#organization`,
      },
    },

    // Service - El servicio que ofrecen
    {
      "@type": "Service",
      "@id": `${baseUrl}/#service`,
      name: "Automatización de WhatsApp Business",
      alternateName: "Chatbot WhatsApp con IA",
      description:
        "Servicio de automatización de WhatsApp Business usando inteligencia artificial. Configuramos un chatbot personalizado que responde mensajes automáticamente, agenda citas, envía recordatorios y atiende a tus clientes 24/7 sin intervención humana.",
      provider: {
        "@id": `${baseUrl}/#organization`,
      },
      serviceType: "Automatización de atención al cliente",
      category: "Software as a Service (SaaS)",
      areaServed: [
        {
          "@type": "Country",
          name: "México",
        },
        {
          "@type": "Country",
          name: "Estados Unidos",
        },
        {
          "@type": "Country",
          name: "España",
        },
        {
          "@type": "Country",
          name: "Colombia",
        },
        {
          "@type": "Country",
          name: "Argentina",
        },
      ],
      hasOfferCatalog: {
        "@type": "OfferCatalog",
        name: "Planes de AutoWhats",
        itemListElement: [
          {
            "@type": "OfferCatalog",
            name: "Chatbot para Salones de Belleza",
            description: "Automatización especializada para salones, spas y estéticas",
          },
          {
            "@type": "OfferCatalog",
            name: "Chatbot para Clínicas y Consultorios",
            description: "Agendamiento automático de citas médicas y recordatorios",
          },
          {
            "@type": "OfferCatalog",
            name: "Chatbot para Restaurantes",
            description: "Reservaciones automáticas y atención de pedidos",
          },
        ],
      },
      termsOfService: `${baseUrl}/terminos`,
      audience: {
        "@type": "BusinessAudience",
        audienceType: "Pequeñas y medianas empresas",
        numberOfEmployees: {
          "@type": "QuantitativeValue",
          minValue: 1,
          maxValue: 100,
        },
      },
    },

    // Product - Producto comercial
    {
      "@type": "Product",
      "@id": `${baseUrl}/#product`,
      name: "AutoWhats - Chatbot WhatsApp con IA",
      description:
        "Chatbot inteligente para WhatsApp Business que usa GPT-4 para responder mensajes automáticamente. Incluye agendamiento de citas, recordatorios, procesamiento de imágenes/audio, y derivación a humanos. Configuración sin código en menos de 24 horas.",
      brand: {
        "@type": "Brand",
        name: "AutoWhats",
        logo: `${baseUrl}/icon.svg`,
      },
      image: `${baseUrl}/og-image.svg`,
      sku: "AUTOWHATS-001",
      mpn: "AW-2024-001",
      category: "Software > Business Software > Customer Service",
      aggregateRating: {
        "@type": "AggregateRating",
        ratingValue: "4.9",
        ratingCount: "50",
        bestRating: "5",
        worstRating: "1",
      },
      offers: {
        "@type": "Offer",
        url: baseUrl,
        priceCurrency: "MXN",
        price: "299",
        priceValidUntil: "2026-12-31",
        availability: "https://schema.org/InStock",
        seller: {
          "@id": `${baseUrl}/#organization`,
        },
      },
    },

    // HowTo - Cómo funciona
    {
      "@type": "HowTo",
      "@id": `${baseUrl}/#howto`,
      name: "Cómo automatizar tu WhatsApp Business con AutoWhats",
      description:
        "Guía paso a paso para configurar un chatbot de WhatsApp con inteligencia artificial para tu negocio usando AutoWhats.",
      totalTime: "PT24H",
      estimatedCost: {
        "@type": "MonetaryAmount",
        currency: "MXN",
        value: "299",
      },
      step: [
        {
          "@type": "HowToStep",
          position: 1,
          name: "Agenda una demo gratis",
          text: "Contacta por WhatsApp para agendar una demostración gratuita de AutoWhats y ver cómo funciona con tu tipo de negocio.",
          url: baseUrl,
        },
        {
          "@type": "HowToStep",
          position: 2,
          name: "Configuración personalizada",
          text: "Nuestro equipo configura el chatbot con las respuestas, servicios y horarios específicos de tu negocio. Sin necesidad de conocimientos técnicos.",
        },
        {
          "@type": "HowToStep",
          position: 3,
          name: "Conexión con WhatsApp Business",
          text: "Conectamos el chatbot a tu número de WhatsApp Business existente. El proceso es seguro y cumple con las políticas de Meta.",
        },
        {
          "@type": "HowToStep",
          position: 4,
          name: "Activación y monitoreo",
          text: "Tu chatbot comienza a responder automáticamente 24/7. Puedes monitorear conversaciones y ajustar respuestas en cualquier momento.",
        },
      ],
      tool: [
        {
          "@type": "HowToTool",
          name: "WhatsApp Business",
        },
        {
          "@type": "HowToTool",
          name: "Número de teléfono",
        },
      ],
    },

    // FAQPage - Preguntas frecuentes expandidas
    {
      "@type": "FAQPage",
      "@id": `${baseUrl}/#faq`,
      mainEntity: [
        {
          "@type": "Question",
          name: "¿Qué es AutoWhats?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "AutoWhats es una plataforma de automatización de WhatsApp Business que usa inteligencia artificial (GPT-4) para responder mensajes automáticamente 24/7. El chatbot puede agendar citas, responder preguntas frecuentes, enviar recordatorios, procesar imágenes y audios, y derivar conversaciones complejas a un humano cuando sea necesario.",
          },
        },
        {
          "@type": "Question",
          name: "¿Para qué tipo de negocios funciona AutoWhats?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "AutoWhats funciona para cualquier negocio que reciba mensajes de clientes por WhatsApp: salones de belleza, spas, clínicas médicas, consultorios dentales, restaurantes, gimnasios, escuelas, inmobiliarias, tiendas online, y servicios profesionales. Es especialmente útil para negocios que reciben muchos mensajes repetitivos o que necesitan agendar citas.",
          },
        },
        {
          "@type": "Question",
          name: "¿Cuánto cuesta AutoWhats?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Los planes de AutoWhats comienzan desde $299 MXN mensuales para negocios pequeños. El precio varía según el volumen de mensajes, funcionalidades requeridas e integraciones necesarias. Ofrecemos una demo gratis y garantía de devolución de 14 días.",
          },
        },
        {
          "@type": "Question",
          name: "¿El chatbot puede agendar citas automáticamente?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Sí, AutoWhats puede agendar citas automáticamente integrándose con Google Calendar u otros sistemas de reservas. El bot muestra disponibilidad en tiempo real, permite al cliente elegir horario, confirma la cita, y envía recordatorios automáticos antes de la cita.",
          },
        },
        {
          "@type": "Question",
          name: "¿Qué pasa si el cliente tiene una pregunta que el bot no puede responder?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "AutoWhats tiene un sistema inteligente de derivación. Cuando detecta que la conversación requiere atención humana (preguntas complejas, quejas, o solicitudes especiales), notifica automáticamente al dueño del negocio por WhatsApp y puede transferir la conversación. También puedes configurar palabras clave específicas que activen la derivación.",
          },
        },
        {
          "@type": "Question",
          name: "¿Necesito conocimientos técnicos para usar AutoWhats?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "No, AutoWhats es un servicio completamente administrado. Nosotros nos encargamos de toda la configuración técnica, entrenamiento del bot con tu información, y mantenimiento. Solo necesitas proporcionarnos información sobre tu negocio, servicios, precios y horarios.",
          },
        },
        {
          "@type": "Question",
          name: "¿Es seguro usar AutoWhats con mi WhatsApp Business?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Sí, AutoWhats utiliza la API oficial de WhatsApp Business y cumple con todas las políticas de Meta. Tus datos y conversaciones están protegidos con encriptación, y nunca compartimos tu información con terceros. Además, cumplimos con regulaciones de privacidad como GDPR.",
          },
        },
        {
          "@type": "Question",
          name: "¿Cuánto tiempo toma configurar AutoWhats?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "La configuración típica toma entre 24 y 48 horas. Después de la demo inicial, recopilamos información sobre tu negocio, configuramos el bot, y lo activamos. Para negocios con necesidades más complejas (muchos servicios, integraciones especiales), puede tomar hasta una semana.",
          },
        },
        {
          "@type": "Question",
          name: "¿Puedo ver las conversaciones que tiene el bot?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Sí, tienes acceso completo al historial de conversaciones. Puedes revisar qué preguntan tus clientes, cómo responde el bot, y las métricas de rendimiento (mensajes respondidos, citas agendadas, tiempo de respuesta). Esta información te ayuda a mejorar tu negocio.",
          },
        },
        {
          "@type": "Question",
          name: "¿AutoWhats funciona en otros países además de México?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Sí, AutoWhats funciona en cualquier país donde WhatsApp Business esté disponible. Tenemos clientes en México, Estados Unidos, España, Colombia, Argentina, Chile, Perú y otros países de habla hispana. El bot puede configurarse en español, inglés, o múltiples idiomas.",
          },
        },
      ],
    },

    // ItemList - Lista de características/beneficios
    {
      "@type": "ItemList",
      "@id": `${baseUrl}/#features`,
      name: "Características de AutoWhats",
      description: "Funcionalidades principales del chatbot de WhatsApp con IA",
      numberOfItems: 8,
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          name: "Respuestas automáticas 24/7",
          description: "El chatbot responde mensajes instantáneamente a cualquier hora del día, incluyendo fines de semana y días festivos.",
        },
        {
          "@type": "ListItem",
          position: 2,
          name: "Inteligencia Artificial GPT-4",
          description: "Usa el modelo de IA más avanzado para entender contexto, responder naturalmente y manejar conversaciones complejas.",
        },
        {
          "@type": "ListItem",
          position: 3,
          name: "Agendamiento automático de citas",
          description: "Integración con Google Calendar para mostrar disponibilidad y confirmar citas sin intervención humana.",
        },
        {
          "@type": "ListItem",
          position: 4,
          name: "Recordatorios automáticos",
          description: "Envía recordatorios antes de las citas para reducir ausencias y mejorar la asistencia.",
        },
        {
          "@type": "ListItem",
          position: 5,
          name: "Procesamiento de imágenes y audio",
          description: "El bot puede recibir y procesar fotos (usando GPT-4 Vision) y mensajes de voz (usando Whisper).",
        },
        {
          "@type": "ListItem",
          position: 6,
          name: "Derivación inteligente a humanos",
          description: "Detecta cuando una conversación necesita atención humana y notifica automáticamente.",
        },
        {
          "@type": "ListItem",
          position: 7,
          name: "Memoria de conversaciones",
          description: "Recuerda conversaciones anteriores para dar contexto y continuidad a la atención.",
        },
        {
          "@type": "ListItem",
          position: 8,
          name: "Sin conocimientos técnicos requeridos",
          description: "Configuración completamente administrada, no necesitas programar ni conocer de tecnología.",
        },
      ],
    },
  ],
};

export const metadata: Metadata = {
  metadataBase: new URL("https://autowhats.unitvent.com"),
  icons: {
    icon: "/icon.svg",
  },
  title: "Automatiza WhatsApp Business | Respuestas Automáticas 24/7 para tu Negocio",
  description: "Deja de perder clientes por no responder a tiempo. Configura mensajes automáticos en WhatsApp Business para salones, clínicas y restaurantes. Agenda tu demo gratis.",
  keywords: [
    "WhatsApp Business automatizado",
    "mensajes automáticos WhatsApp",
    "bot WhatsApp Business",
    "automatización WhatsApp",
    "respuestas automáticas WhatsApp",
    "agendar citas WhatsApp",
    "WhatsApp para salones",
    "WhatsApp para clínicas",
    "WhatsApp para restaurantes",
  ],
  authors: [{ name: "AutoWhats" }],
  creator: "AutoWhats",
  openGraph: {
    type: "website",
    locale: "es_MX",
    url: "https://autowhats.unitvent.com",
    siteName: "AutoWhats",
    title: "Automatiza WhatsApp Business | Respuestas Automáticas 24/7",
    description: "Deja de perder clientes por no responder a tiempo. Configura mensajes automáticos en WhatsApp Business para tu negocio.",
    images: [
      {
        url: "/og-image.svg",
        width: 1200,
        height: 630,
        alt: "AutoWhats - Automatiza tu WhatsApp Business",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Automatiza WhatsApp Business | Respuestas Automáticas 24/7",
    description: "Deja de perder clientes por no responder a tiempo. Configura mensajes automáticos en WhatsApp Business.",
    images: ["/og-image.svg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: "https://autowhats.unitvent.com",
    languages: {
      "es": "https://autowhats.unitvent.com",
    },
  },
  verification: {
    google: "YOUR_GOOGLE_VERIFICATION_CODE",
  },
  category: "technology",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className="scroll-smooth">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
