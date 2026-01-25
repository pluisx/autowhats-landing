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

    // HowTo - Cómo hacer un bot de WhatsApp (optimizado para búsquedas informativas)
    {
      "@type": "HowTo",
      "@id": `${baseUrl}/#howto`,
      name: "Cómo hacer un bot de WhatsApp para tu negocio en 2026",
      description:
        "Guía completa paso a paso para crear un chatbot de WhatsApp con inteligencia artificial. Aprende cómo automatizar tu WhatsApp Business sin programar usando AutoWhats.",
      totalTime: "PT48H",
      estimatedCost: {
        "@type": "MonetaryAmount",
        currency: "MXN",
        value: "299",
      },
      step: [
        {
          "@type": "HowToStep",
          position: 1,
          name: "Define qué quieres que haga tu bot de WhatsApp",
          text: "Antes de crear tu bot, decide sus funciones: responder preguntas frecuentes, agendar citas, enviar información de productos/servicios, o atender pedidos. Esto determinará qué tipo de bot necesitas.",
          url: baseUrl,
        },
        {
          "@type": "HowToStep",
          position: 2,
          name: "Elige cómo crear tu bot de WhatsApp",
          text: "Tienes tres opciones: 1) Programarlo tú mismo con la WhatsApp Business API (requiere conocimientos técnicos), 2) Usar plataformas no-code (funcionalidad limitada), o 3) Contratar un servicio administrado como AutoWhats (la opción más rápida sin programar).",
        },
        {
          "@type": "HowToStep",
          position: 3,
          name: "Configura tu cuenta de WhatsApp Business",
          text: "Necesitas una cuenta de WhatsApp Business verificada. Si usas AutoWhats, te ayudamos con la verificación y conexión a la API oficial de Meta.",
        },
        {
          "@type": "HowToStep",
          position: 4,
          name: "Entrena tu bot con información de tu negocio",
          text: "Proporciona información sobre tus servicios, precios, horarios, y respuestas a preguntas frecuentes. Con AutoWhats usamos GPT-4 para que el bot entienda contexto y responda naturalmente.",
        },
        {
          "@type": "HowToStep",
          position: 5,
          name: "Integra con herramientas externas (opcional)",
          text: "Conecta tu bot con Google Calendar para agendar citas, sistemas de pago, o tu CRM. AutoWhats incluye estas integraciones listas para usar.",
        },
        {
          "@type": "HowToStep",
          position: 6,
          name: "Prueba y activa tu bot de WhatsApp",
          text: "Prueba el bot con conversaciones reales antes de activarlo. Una vez listo, tu chatbot comenzará a responder automáticamente 24/7. Con AutoWhats, el proceso completo toma 24-48 horas.",
        },
      ],
      tool: [
        {
          "@type": "HowToTool",
          name: "WhatsApp Business (cuenta verificada)",
        },
        {
          "@type": "HowToTool",
          name: "Número de teléfono dedicado",
        },
        {
          "@type": "HowToTool",
          name: "Información de tu negocio (servicios, precios, horarios)",
        },
      ],
    },

    // FAQPage - Preguntas frecuentes expandidas (optimizadas para búsquedas informativas)
    {
      "@type": "FAQPage",
      "@id": `${baseUrl}/#faq`,
      mainEntity: [
        // Preguntas informativas - "cómo hacer un bot de whatsapp"
        {
          "@type": "Question",
          name: "¿Cómo hacer un bot de WhatsApp para mi negocio?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Hay tres formas de crear un bot de WhatsApp: 1) Programarlo tú mismo usando la WhatsApp Business API (requiere conocimientos técnicos avanzados), 2) Usar plataformas no-code como ManyChat o Chatfuel (limitadas en español), o 3) Contratar un servicio administrado como AutoWhats que configura todo por ti con inteligencia artificial GPT-4. La opción más rápida y efectiva para negocios es usar un servicio administrado que no requiere programación.",
          },
        },
        {
          "@type": "Question",
          name: "¿Cómo crear un chatbot de WhatsApp gratis?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Puedes crear un chatbot básico gratis usando WhatsApp Business (la app gratuita) que permite respuestas rápidas y mensajes de ausencia. Sin embargo, para un bot inteligente con IA que responda automáticamente necesitas la WhatsApp Business API, que tiene costo. AutoWhats ofrece una demo gratis para que pruebes un bot con IA real antes de decidir.",
          },
        },
        {
          "@type": "Question",
          name: "¿Se puede hacer un bot de WhatsApp sin saber programar?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Sí, existen servicios como AutoWhats que crean y configuran el bot por ti sin necesidad de programar. Nosotros nos encargamos de toda la parte técnica: conexión con WhatsApp Business API, configuración de la inteligencia artificial, entrenamiento con tu información de negocio, y mantenimiento continuo. Solo necesitas decirnos qué quieres que responda el bot.",
          },
        },
        {
          "@type": "Question",
          name: "¿Qué se necesita para crear un bot de WhatsApp Business?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Para un bot profesional necesitas: 1) Una cuenta de WhatsApp Business verificada, 2) Acceso a la WhatsApp Business API (a través de un proveedor oficial como YCloud o Twilio), 3) Un servidor para hospedar el bot, 4) Integración con un modelo de IA como GPT-4, y 5) Base de datos para memoria de conversaciones. Con AutoWhats, nosotros proporcionamos todo esto - tú solo necesitas tu número de teléfono.",
          },
        },
        {
          "@type": "Question",
          name: "¿Cuánto cuesta hacer un bot de WhatsApp?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "El costo varía según la complejidad: Un bot básico DIY puede costar desde $0 (solo tiempo), pero requiere conocimientos técnicos. Usar la WhatsApp Business API directamente cuesta aproximadamente $50-200 USD/mes más desarrollo. Un servicio administrado como AutoWhats comienza desde $299 MXN/mes (~$17 USD) incluyendo todo: API, IA, configuración y soporte.",
          },
        },
        // Preguntas sobre el producto
        {
          "@type": "Question",
          name: "¿Qué es AutoWhats?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "AutoWhats es un servicio que crea bots de WhatsApp con inteligencia artificial (GPT-4) para negocios. A diferencia de hacerlo tú mismo, nosotros configuramos todo: la conexión con WhatsApp Business API, el entrenamiento de la IA con tu información, agendamiento de citas con Google Calendar, y derivación a humanos cuando sea necesario. Es la forma más fácil de tener un bot de WhatsApp profesional sin programar.",
          },
        },
        {
          "@type": "Question",
          name: "¿Para qué tipo de negocios sirve un bot de WhatsApp?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Un bot de WhatsApp es útil para cualquier negocio que reciba muchos mensajes: salones de belleza (agendar citas), restaurantes (reservaciones), clínicas (citas médicas), tiendas online (consultas de productos), inmobiliarias (información de propiedades), escuelas (inscripciones), y servicios profesionales. Es especialmente valioso si recibes las mismas preguntas repetidamente o necesitas atender fuera de horario.",
          },
        },
        {
          "@type": "Question",
          name: "¿El bot de WhatsApp puede agendar citas automáticamente?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Sí, un bot bien configurado puede agendar citas automáticamente. Con AutoWhats, el bot se integra con Google Calendar para mostrar disponibilidad en tiempo real, permite al cliente elegir fecha y hora, confirma la cita, y envía recordatorios automáticos. Todo sin intervención humana, incluso a las 3am.",
          },
        },
        {
          "@type": "Question",
          name: "¿Qué pasa si el bot no puede responder una pregunta?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Un buen bot de WhatsApp debe saber cuándo derivar a un humano. AutoWhats detecta automáticamente cuando la conversación requiere atención personal (preguntas complejas, quejas, negociaciones) y notifica al dueño del negocio por WhatsApp. También puedes configurar palabras clave que activen la derivación inmediata.",
          },
        },
        {
          "@type": "Question",
          name: "¿Es legal usar un bot de WhatsApp para mi negocio?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Sí, es completamente legal si usas la WhatsApp Business API oficial y cumples con las políticas de Meta. AutoWhats utiliza proveedores oficiales de la API y cumple con todas las regulaciones, incluyendo GDPR. Lo que NO es legal es usar bots no oficiales que violen los términos de servicio de WhatsApp, ya que pueden resultar en el baneo de tu número.",
          },
        },
        {
          "@type": "Question",
          name: "¿Cuánto tiempo toma crear un bot de WhatsApp?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Depende del método: Programarlo desde cero puede tomar semanas o meses. Usar plataformas no-code toma días pero con funcionalidad limitada. Con AutoWhats, tu bot está listo en 24-48 horas porque nosotros hacemos toda la configuración técnica. Solo necesitas proporcionarnos información sobre tu negocio.",
          },
        },
        {
          "@type": "Question",
          name: "¿AutoWhats funciona en México, España y Latinoamérica?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Sí, AutoWhats funciona en cualquier país donde WhatsApp Business esté disponible. Tenemos clientes en México, Estados Unidos, España, Colombia, Argentina, Chile, Perú y otros países hispanohablantes. El bot puede configurarse en español, inglés, o múltiples idiomas según tu audiencia.",
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
  title: "Cómo Crear un Bot de WhatsApp con IA | Automatiza tu Negocio 24/7",
  description: "Aprende cómo hacer un bot de WhatsApp para tu negocio. Chatbot con inteligencia artificial que responde automáticamente, agenda citas y atiende clientes 24/7. Sin programar.",
  keywords: [
    // Keywords principales - búsquedas informativas
    "cómo hacer un bot de whatsapp",
    "como crear un bot de whatsapp",
    "crear bot whatsapp",
    "hacer chatbot whatsapp",
    "bot de whatsapp para negocios",
    "chatbot whatsapp gratis",
    "whatsapp bot tutorial",
    "automatizar whatsapp",
    // Keywords comerciales
    "bot WhatsApp Business",
    "chatbot whatsapp con ia",
    "whatsapp business automatizado",
    "mensajes automáticos whatsapp",
    "respuestas automáticas whatsapp",
    // Keywords por industria
    "bot whatsapp para salones",
    "chatbot whatsapp restaurantes",
    "bot whatsapp clínicas",
    "agendar citas whatsapp automatico",
    // Keywords long-tail
    "como hacer un bot de whatsapp sin programar",
    "bot whatsapp inteligencia artificial",
    "chatbot whatsapp business api",
    "automatizar respuestas whatsapp business",
  ],
  authors: [{ name: "AutoWhats" }],
  creator: "AutoWhats",
  openGraph: {
    type: "website",
    locale: "es_MX",
    url: "https://autowhats.unitvent.com",
    siteName: "AutoWhats",
    title: "Cómo Crear un Bot de WhatsApp con IA para tu Negocio",
    description: "Guía completa para hacer un bot de WhatsApp. Chatbot con inteligencia artificial que responde 24/7, agenda citas y atiende clientes automáticamente.",
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
    title: "Cómo Hacer un Bot de WhatsApp con IA | Tutorial 2026",
    description: "Aprende a crear un chatbot de WhatsApp para tu negocio. Respuestas automáticas 24/7 sin programar.",
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
    // Bing verification - IMPORTANTE para aparecer en ChatGPT (usa Bing)
    other: {
      "msvalidate.01": "YOUR_BING_VERIFICATION_CODE",
    },
  },
  category: "technology",
  other: {
    // Meta tags para AI crawlers
    "ai-content-declaration": "original",
    "ai-generated": "false",
  },
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
