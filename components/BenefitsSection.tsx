'use client';

import { Clock, CalendarCheck, Target, Megaphone, RefreshCw, TrendingDown } from 'lucide-react';
import { Card } from './ui';

const benefits = [
  {
    icon: Clock,
    title: 'Gana dinero mientras duermes',
    description: 'Tu bot responde a las 2am, fines de semana, feriados. Cada mensaje se contesta. Cada lead se captura.',
  },
  {
    icon: CalendarCheck,
    title: 'Llena tu agenda más rápido',
    description: 'Los clientes agendan citas directo en el chat. Sin llamadas, sin ping-pong de mensajes.',
  },
  {
    icon: Target,
    title: 'Solo habla con compradores serios',
    description: 'El bot filtra curiosos y te pasa solo los leads listos para comprar. Ahorra horas cada semana.',
  },
  {
    icon: Megaphone,
    title: 'Convierte clicks en conversaciones',
    description: 'Tus anuncios de Meta van directo a WhatsApp. Los leads empiezan a chatear al instante.',
  },
  {
    icon: RefreshCw,
    title: 'Recupera clientes antiguos',
    description: 'Campañas automáticas para re-enganchar a clientes que no han vuelto. Convierte tu lista en dinero.',
  },
  {
    icon: TrendingDown,
    title: 'Reduce las citas perdidas',
    description: 'Recordatorios automáticos antes de cada cita. Tus clientes llegan, tu calendario se mantiene lleno.',
  },
];

export function BenefitsSection() {
  return (
    <section id="beneficios" className="section-padding bg-gray-50">
      <div className="container-custom">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Más ingresos. <span className="text-primary-500">Menos estrés.</span>
          </h2>
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
            Nosotros manejamos tu WhatsApp para que tú te enfoques en cerrar ventas y crecer tu negocio.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {benefits.map((benefit, index) => {
            const Icon = benefit.icon;
            return (
              <Card key={index} padding="lg" className="text-center group">
                <div className="w-14 h-14 mx-auto mb-5 bg-primary-100 rounded-2xl flex items-center justify-center group-hover:bg-primary-500 transition-colors duration-300">
                  <Icon className="w-7 h-7 text-primary-500 group-hover:text-white transition-colors duration-300" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{benefit.title}</h3>
                <p className="text-gray-600 leading-relaxed">{benefit.description}</p>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
