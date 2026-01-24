'use client';

import { X } from 'lucide-react';
import { Card } from './ui';

const problems = [
  {
    text: 'Pasas horas respondiendo las mismas preguntas una y otra vez',
  },
  {
    text: 'Pierdes citas y ventas por responder tarde o no responder',
  },
  {
    text: 'Tu equipo está saturado con mensajes y no llega a todo',
  },
  {
    text: 'Clientes que escriben fuera de horario nunca reciben respuesta',
  },
];

export function ProblemSection() {
  return (
    <section className="section-padding bg-white">
      <div className="container-custom">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            ¿Tu WhatsApp está siempre{' '}
            <span className="text-primary-500">explotando</span> de mensajes?
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {problems.map((problem, index) => (
            <Card key={index} className="flex items-start gap-4">
              <div className="flex-shrink-0 w-10 h-10 bg-red-100 rounded-full flex items-center justify-center">
                <X className="w-5 h-5 text-red-500" />
              </div>
              <p className="text-gray-700 text-lg leading-relaxed">{problem.text}</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
