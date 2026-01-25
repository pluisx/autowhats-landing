'use client';

import { useState } from 'react';
import { ChevronDown } from 'lucide-react';

const faqs = [
  {
    question: '¿Qué es AutoWhats?',
    answer:
      'AutoWhats es un servicio que crea y configura un chatbot inteligente para tu WhatsApp Business. Nosotros nos encargamos de todo: la conexión con la API oficial de WhatsApp, la inteligencia artificial (GPT-4), y el mantenimiento continuo. Tu solo proporcionas información sobre tu negocio.',
  },
  {
    question: '¿Cuánto cuesta el servicio?',
    answer:
      'Los planes comienzan desde $299 USD al mes. El precio incluye la API de WhatsApp Business, el modelo de IA GPT-4, configuración inicial, y soporte técnico. Ofrecemos una demo gratuita para que veas cómo funciona antes de decidir.',
  },
  {
    question: '¿Cuánto tiempo toma tener mi bot funcionando?',
    answer:
      'Entre 24 y 48 horas. Una vez que nos proporcionas la información de tu negocio (servicios, precios, horarios, preguntas frecuentes), configuramos todo y lo dejamos listo para atender a tus clientes.',
  },
  {
    question: '¿Necesito saber programar?',
    answer:
      'No. AutoWhats es un servicio completamente administrado. Nosotros nos encargamos de toda la parte técnica. Tu solo necesitas decirnos cómo funciona tu negocio y qué tipo de respuestas quieres que dé el bot.',
  },
  {
    question: '¿Para qué tipo de negocios funciona?',
    answer:
      'AutoWhats funciona para cualquier negocio que reciba consultas por WhatsApp: salones de belleza, clínicas médicas y dentales, restaurantes, gimnasios, inmobiliarias, tiendas online, escuelas, servicios profesionales, y más.',
  },
  {
    question: '¿El bot puede agendar citas automáticamente?',
    answer:
      'Sí. El bot se integra con Google Calendar para mostrar tu disponibilidad real y confirmar citas sin intervención humana. También puede enviar recordatorios automáticos antes de cada cita.',
  },
  {
    question: '¿Qué pasa si un cliente necesita hablar con un humano?',
    answer:
      'El bot detecta automáticamente cuando es necesario transferir la conversación a una persona real. Te notifica por WhatsApp y puedes tomar el control de la conversación en cualquier momento.',
  },
  {
    question: '¿El bot entiende audios e imágenes?',
    answer:
      'Sí. Utilizamos GPT-4 Vision para entender imágenes y Whisper para transcribir mensajes de voz. Tu bot puede recibir fotos de referencia o notas de voz y responder apropiadamente.',
  },
  {
    question: '¿Es legal usar un bot en WhatsApp?',
    answer:
      'Sí, siempre que uses la API oficial de WhatsApp Business. AutoWhats trabaja exclusivamente con proveedores oficiales aprobados por Meta, por lo que tu cuenta está completamente segura.',
  },
  {
    question: '¿Ofrecen garantía?',
    answer:
      'Sí. Ofrecemos 14 días de garantía de devolución. Si no estás satisfecho con el servicio, te devolvemos tu dinero sin preguntas.',
  },
];

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="section-padding bg-gray-50">
      <div className="container-custom">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Preguntas <span className="text-primary-500">frecuentes</span>
          </h2>
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
            Todo lo que necesitas saber sobre AutoWhats
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="mb-4 bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full px-6 py-5 flex items-center justify-between text-left hover:bg-gray-50 transition-colors"
                aria-expanded={openIndex === index}
              >
                <span className="font-semibold text-gray-900 pr-4">
                  {faq.question}
                </span>
                <ChevronDown
                  className={`w-5 h-5 text-primary-500 flex-shrink-0 transition-transform duration-200 ${
                    openIndex === index ? 'rotate-180' : ''
                  }`}
                />
              </button>
              <div
                className={`overflow-hidden transition-all duration-200 ${
                  openIndex === index ? 'max-h-96' : 'max-h-0'
                }`}
              >
                <p className="px-6 pb-5 text-gray-600 leading-relaxed">
                  {faq.answer}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
