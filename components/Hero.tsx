'use client';

import { MessageCircle, Zap, TrendingUp, CheckCircle } from 'lucide-react';
import { Button, Badge } from './ui';

export function Hero() {
  return (
    <section className="pt-24 md:pt-32 pb-16 md:pb-24 px-4 md:px-6 lg:px-8 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Column - Text */}
          <div className="space-y-6 md:space-y-8">
            <Badge variant="warning" className="animate-pulse-slow">
              CADA MENSAJE SIN RESPONDER = CLIENTE PERDIDO
            </Badge>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
              Automatiza tus mensajes de WhatsApp Business y{' '}
              <span className="text-primary-500">responde 24/7</span> sin contratar más personal
            </h1>

            <p className="text-lg md:text-xl text-gray-600 leading-relaxed">
              Deja de perder clientes por responder tarde. Convierte WhatsApp en una máquina
              automática de agendar citas, cerrar ventas y atender consultas, incluso mientras
              duermes.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button variant="primary" size="lg" showWhatsAppIcon>
                Hablar por WhatsApp ahora
              </Button>
            </div>

            <div className="flex items-center gap-2 text-gray-600">
              <CheckCircle className="w-5 h-5 text-whatsapp" />
              <span className="text-sm md:text-base">
                Ideal para salones, clínicas y restaurantes que reciben decenas de mensajes al día
              </span>
            </div>
          </div>

          {/* Right Column - Phone Mockup */}
          <div className="relative flex justify-center lg:justify-end">
            {/* Floating Labels */}
            <div className="absolute -left-4 top-1/4 z-10 animate-float">
              <div className="bg-white rounded-xl shadow-lg px-4 py-3 flex items-center gap-2">
                <Zap className="w-5 h-5 text-amber-500" />
                <span className="text-sm font-medium">Respuesta en &lt;1 segundo</span>
              </div>
            </div>

            <div className="absolute -right-4 md:right-0 bottom-1/4 z-10 animate-float" style={{ animationDelay: '1s' }}>
              <div className="bg-white rounded-xl shadow-lg px-4 py-3 flex items-center gap-2">
                <TrendingUp className="w-5 h-5 text-whatsapp" />
                <span className="text-sm font-medium">Conversión 35%</span>
              </div>
            </div>

            {/* Phone Mockup */}
            <div className="relative phone-shadow">
              <div className="w-72 md:w-80 bg-gray-900 rounded-[3rem] p-3 shadow-2xl">
                <div className="bg-white rounded-[2.5rem] overflow-hidden">
                  {/* Phone Header */}
                  <div className="bg-whatsapp px-4 py-3 flex items-center gap-3">
                    <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
                      <MessageCircle className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <p className="text-white font-semibold text-sm">Tu Negocio</p>
                      <p className="text-white/80 text-xs">en línea</p>
                    </div>
                  </div>

                  {/* Chat Messages */}
                  <div className="bg-[#E5DDD5] p-4 space-y-3 min-h-[350px]">
                    {/* Customer Message */}
                    <div className="flex justify-start">
                      <div className="bg-white rounded-lg rounded-tl-none px-3 py-2 max-w-[80%] shadow-sm">
                        <p className="text-sm text-gray-800">Hola! Quiero agendar una cita para mañana</p>
                        <p className="text-[10px] text-gray-500 text-right mt-1">10:32 PM</p>
                      </div>
                    </div>

                    {/* Bot Response */}
                    <div className="flex justify-end">
                      <div className="bg-[#DCF8C6] rounded-lg rounded-tr-none px-3 py-2 max-w-[80%] shadow-sm">
                        <p className="text-sm text-gray-800">
                          ¡Hola! Claro, con gusto te ayudo. Tenemos estos horarios disponibles para mañana:
                        </p>
                        <p className="text-sm text-gray-800 mt-2">
                          09:00 AM<br />
                          11:30 AM<br />
                          03:00 PM<br />
                          05:30 PM
                        </p>
                        <p className="text-sm text-gray-800 mt-2">¿Cuál prefieres?</p>
                        <p className="text-[10px] text-gray-500 text-right mt-1">10:32 PM</p>
                      </div>
                    </div>

                    {/* Customer Reply */}
                    <div className="flex justify-start">
                      <div className="bg-white rounded-lg rounded-tl-none px-3 py-2 max-w-[80%] shadow-sm">
                        <p className="text-sm text-gray-800">El de las 3pm por favor</p>
                        <p className="text-[10px] text-gray-500 text-right mt-1">10:33 PM</p>
                      </div>
                    </div>

                    {/* Bot Confirmation */}
                    <div className="flex justify-end">
                      <div className="bg-[#DCF8C6] rounded-lg rounded-tr-none px-3 py-2 max-w-[80%] shadow-sm">
                        <p className="text-sm text-gray-800">
                          Perfecto! Tu cita está confirmada para mañana a las 3:00 PM. Te enviaremos un recordatorio 1 hora antes.
                        </p>
                        <p className="text-[10px] text-gray-500 text-right mt-1">10:33 PM</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
