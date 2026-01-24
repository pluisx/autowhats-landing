'use client';

import { ClipboardList, Palette, Settings, Rocket, Sparkles } from 'lucide-react';
import { Button } from './ui';

const steps = [
  {
    number: '01',
    icon: ClipboardList,
    title: 'Analizamos tu negocio',
    description: 'Revisamos tus mensajes actuales y definimos qué quieres automatizar: citas, reservas, ventas, soporte...',
  },
  {
    number: '02',
    icon: Palette,
    title: 'Diseñamos tus flujos',
    description: 'Creamos los mensajes automáticos y la lógica de conversación adaptada a tu negocio.',
  },
  {
    number: '03',
    icon: Settings,
    title: 'Configuramos todo',
    description: 'Conectamos WhatsApp Business, probamos con casos reales y ajustamos hasta que quede perfecto.',
  },
  {
    number: '04',
    icon: Rocket,
    title: 'Tú solo cierras ventas',
    description: 'El bot atiende las consultas repetitivas. Tú solo intervienes en los casos importantes.',
  },
];

export function HowItWorks() {
  return (
    <section id="como-funciona" className="section-padding bg-white">
      <div className="container-custom">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Así de <span className="text-primary-500">simple</span> es empezar
          </h2>
        </div>

        {/* Steps */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <div key={index} className="relative">
                {/* Connector Line (hidden on mobile, first item on larger screens) */}
                {index < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-12 left-[60%] w-full h-0.5 bg-gray-200" />
                )}

                <div className="relative bg-white rounded-2xl p-6 text-center">
                  {/* Step Number */}
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 w-8 h-8 bg-primary-500 rounded-full flex items-center justify-center text-white font-bold text-sm">
                    {index + 1}
                  </div>

                  <div className="pt-4">
                    <div className="w-16 h-16 mx-auto mb-5 bg-gray-100 rounded-2xl flex items-center justify-center">
                      <Icon className="w-8 h-8 text-primary-500" />
                    </div>
                    <h3 className="text-lg font-bold text-gray-900 mb-3">{step.title}</h3>
                    <p className="text-gray-600 text-sm leading-relaxed">{step.description}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <div className="text-center">
          <div className="flex items-center justify-center gap-2 text-whatsapp mb-6">
            <Sparkles className="w-5 h-5" />
            <span className="font-medium">Todo el proceso puede estar listo en pocos días</span>
          </div>
          <Button variant="primary" size="lg" showWhatsAppIcon>
            Quiero ver cómo funciona en mi negocio
          </Button>
        </div>
      </div>
    </section>
  );
}
