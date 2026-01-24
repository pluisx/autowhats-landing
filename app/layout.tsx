import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://autowhats.loomia.net"),
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
    url: "https://autowhats.com",
    siteName: "AutoWhats",
    title: "Automatiza WhatsApp Business | Respuestas Automáticas 24/7",
    description: "Deja de perder clientes por no responder a tiempo. Configura mensajes automáticos en WhatsApp Business para tu negocio.",
    images: [
      {
        url: "/og-image.png",
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
    images: ["/og-image.png"],
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
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className="scroll-smooth">
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
