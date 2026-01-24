'use client';

import { Star, Quote } from 'lucide-react';
import { Card } from './ui';

const testimonials = [
  {
    quote: 'Ahora el 80% de los mensajes se responde en automático y solo atendemos los casos importantes. Ganamos al menos 3 horas diarias.',
    author: 'María González',
    business: 'Salón de Belleza "Glamour"',
    rating: 5,
  },
  {
    quote: 'Dejamos de perder reservas por responder tarde. El bot contesta siempre, aunque estemos a full con el servicio.',
    author: 'Carlos Méndez',
    business: 'Restaurante "La Esquina"',
    rating: 5,
  },
  {
    quote: 'En la primera semana el bot agendó 42 citas nuevas sin que yo tocara el teléfono. Increíble.',
    author: 'Ana Ruiz',
    business: 'Clínica Dental "Sonrisa"',
    rating: 5,
  },
];

export function Testimonials() {
  return (
    <section id="testimonios" className="section-padding bg-white">
      <div className="container-custom">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Lo que dicen negocios <span className="text-primary-500">como el tuyo</span>
          </h2>
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
            Mira cómo la automatización está transformando sus resultados
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 md:gap-8 mb-12">
          {testimonials.map((testimonial, index) => (
            <Card key={index} padding="lg" className="relative">
              <Quote className="absolute top-6 right-6 w-8 h-8 text-primary-100" />

              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-amber-400 text-amber-400" />
                ))}
              </div>

              <p className="text-gray-700 text-lg leading-relaxed mb-6 italic">
                &ldquo;{testimonial.quote}&rdquo;
              </p>

              <div className="border-t border-gray-100 pt-4">
                <p className="font-semibold text-gray-900">{testimonial.author}</p>
                <p className="text-gray-500 text-sm">{testimonial.business}</p>
              </div>
            </Card>
          ))}
        </div>

        {/* Google Reviews Badge */}
        <div className="flex justify-center">
          <div className="inline-flex items-center gap-2 bg-gray-50 rounded-full px-6 py-3">
            <Star className="w-5 h-5 fill-amber-400 text-amber-400" />
            <span className="font-semibold text-gray-900">5.0</span>
            <span className="text-gray-500">en Google</span>
          </div>
        </div>
      </div>
    </section>
  );
}
