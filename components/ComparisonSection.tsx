'use client';

import { X, Check, Clock, Calendar, DollarSign, Users, Zap, Sparkles } from 'lucide-react';

const manualData = [
  { metric: 'Tiempo de respuesta', value: '1-48 horas', icon: Clock },
  { metric: 'Disponibilidad', value: 'Solo horario laboral', icon: Calendar },
  { metric: 'Costo mensual', value: '$5,000-12,000 (salario)', icon: DollarSign },
  { metric: 'Leads perdidos', value: '40-60% (respuestas lentas)', icon: Users },
];

const automatedData = [
  { metric: 'Tiempo de respuesta', value: 'Instantáneo (<1 seg)', icon: Zap },
  { metric: 'Disponibilidad', value: '24/7 incluso fines de semana', icon: Calendar },
  { metric: 'Costo mensual', value: 'Desde $299/mes', icon: DollarSign },
  { metric: 'Leads perdidos', value: '0% (nunca pierdes un mensaje)', icon: Users },
];

export function ComparisonSection() {
  return (
    <section className="section-padding bg-white">
      <div className="container-custom">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Deja de perder tiempo y dinero con{' '}
            <span className="text-primary-500">respuestas manuales</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-6 md:gap-8 max-w-5xl mx-auto">
          {/* Manual Card */}
          <div className="bg-white rounded-2xl shadow-lg border border-gray-200 overflow-hidden">
            <div className="bg-gray-100 px-6 py-4 flex items-center gap-3">
              <div className="w-8 h-8 bg-red-100 rounded-full flex items-center justify-center">
                <X className="w-5 h-5 text-red-500" />
              </div>
              <h3 className="text-xl font-bold text-gray-900">WhatsApp Manual</h3>
            </div>
            <div className="p-6 space-y-4">
              {manualData.map((item, index) => {
                const Icon = item.icon;
                return (
                  <div key={index} className="flex items-center justify-between py-3 border-b border-gray-100 last:border-0">
                    <div className="flex items-center gap-3">
                      <Icon className="w-5 h-5 text-gray-400" />
                      <span className="text-gray-600">{item.metric}</span>
                    </div>
                    <span className="text-gray-900 font-medium">{item.value}</span>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Automated Card */}
          <div className="bg-white rounded-2xl shadow-lg border-2 border-primary-500 overflow-hidden relative">
            <div className="absolute top-0 right-0 bg-primary-500 text-white text-xs font-bold px-3 py-1 rounded-bl-lg">
              RECOMENDADO
            </div>
            <div className="bg-primary-50 px-6 py-4 flex items-center gap-3">
              <div className="w-8 h-8 bg-whatsapp rounded-full flex items-center justify-center">
                <Check className="w-5 h-5 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900">WhatsApp Automatizado</h3>
            </div>
            <div className="p-6 space-y-4">
              {automatedData.map((item, index) => {
                const Icon = item.icon;
                return (
                  <div key={index} className="flex items-center justify-between py-3 border-b border-gray-100 last:border-0">
                    <div className="flex items-center gap-3">
                      <Icon className="w-5 h-5 text-whatsapp" />
                      <span className="text-gray-600">{item.metric}</span>
                    </div>
                    <span className="font-medium text-gray-900">
                      {item.value}
                    </span>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* Savings Banner */}
        <div className="mt-8 md:mt-12 max-w-3xl mx-auto">
          <div className="bg-gradient-to-r from-whatsapp to-whatsapp-dark rounded-2xl px-6 py-5 flex items-center justify-center gap-3 text-white">
            <Sparkles className="w-6 h-6" />
            <span className="text-lg md:text-xl font-semibold">
              Ahorra más de $4,000/mes en personal
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
