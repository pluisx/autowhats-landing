'use client';

import { MessageCircle, Zap, TrendingUp, CheckCircle, Gift } from 'lucide-react';
import { Button, Badge } from './ui';
import { useLanguage } from '@/lib/i18n/LanguageContext';

export function Hero() {
  const { t } = useLanguage();

  return (
    <section className="pt-24 md:pt-32 pb-16 md:pb-24 px-4 md:px-6 lg:px-8 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Column - Text */}
          <div className="space-y-6 md:space-y-8">
            <Badge variant="warning" className="animate-pulse-slow">
              {t.hero.badge}
            </Badge>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
              {t.hero.title}{' '}
              <span className="text-primary-500">{t.hero.titleHighlight}</span> {t.hero.titleEnd}
            </h1>

            <p className="text-lg md:text-xl text-gray-600 leading-relaxed">
              {t.hero.subtitle}
            </p>

            {/* Pricing Badge */}
            <div className="flex flex-wrap items-center gap-3">
              <span className="bg-primary-100 text-primary-700 px-4 py-2 rounded-full font-semibold text-sm md:text-base">
                {t.hero.pricingBadge}
              </span>
              <span className="bg-whatsapp/10 text-whatsapp px-4 py-2 rounded-full font-semibold text-sm md:text-base flex items-center gap-2">
                <Gift className="w-4 h-4" />
                {t.hero.freeSetup}
              </span>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button variant="primary" size="lg" showWhatsAppIcon>
                {t.common.getDemo}
              </Button>
            </div>

            {/* Qualification Filter */}
            <div className="bg-gray-50 rounded-xl p-4 border border-gray-200">
              <p className="text-sm font-semibold text-gray-700 mb-3">{t.hero.idealFor}</p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {t.hero.qualifications.map((qualification, index) => (
                  <div key={index} className="flex items-center gap-2 text-gray-600">
                    <CheckCircle className="w-4 h-4 text-whatsapp flex-shrink-0" />
                    <span className="text-sm">{qualification}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column - Phone Mockup */}
          <div className="relative flex justify-center lg:justify-end">
            {/* Floating Labels */}
            <div className="absolute -left-4 top-1/4 z-10 animate-float">
              <div className="bg-white rounded-xl shadow-lg px-4 py-3 flex items-center gap-2">
                <Zap className="w-5 h-5 text-amber-500" />
                <span className="text-sm font-medium">{t.hero.floatingLabels.responseTime}</span>
              </div>
            </div>

            <div className="absolute -right-4 md:right-0 bottom-1/4 z-10 animate-float" style={{ animationDelay: '1s' }}>
              <div className="bg-white rounded-xl shadow-lg px-4 py-3 flex items-center gap-2">
                <TrendingUp className="w-5 h-5 text-whatsapp" />
                <span className="text-sm font-medium">{t.hero.floatingLabels.moreAppointments}</span>
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
                      <p className="text-white font-semibold text-sm">{t.hero.chat.businessName}</p>
                      <p className="text-white/80 text-xs">{t.hero.chat.online}</p>
                    </div>
                  </div>

                  {/* Chat Messages */}
                  <div className="bg-[#E5DDD5] p-4 space-y-3 min-h-[350px]">
                    {/* Customer Message */}
                    <div className="flex justify-start">
                      <div className="bg-white rounded-lg rounded-tl-none px-3 py-2 max-w-[80%] shadow-sm">
                        <p className="text-sm text-gray-800">{t.hero.chat.customer1}</p>
                        <p className="text-[10px] text-gray-500 text-right mt-1">10:32 PM</p>
                      </div>
                    </div>

                    {/* Bot Response */}
                    <div className="flex justify-end">
                      <div className="bg-[#DCF8C6] rounded-lg rounded-tr-none px-3 py-2 max-w-[80%] shadow-sm">
                        <p className="text-sm text-gray-800">
                          {t.hero.chat.bot1}
                        </p>
                        <p className="text-sm text-gray-800 mt-2 whitespace-pre-line">
                          {t.hero.chat.bot1Times}
                        </p>
                        <p className="text-sm text-gray-800 mt-2">{t.hero.chat.bot1Question}</p>
                        <p className="text-[10px] text-gray-500 text-right mt-1">10:32 PM</p>
                      </div>
                    </div>

                    {/* Customer Reply */}
                    <div className="flex justify-start">
                      <div className="bg-white rounded-lg rounded-tl-none px-3 py-2 max-w-[80%] shadow-sm">
                        <p className="text-sm text-gray-800">{t.hero.chat.customer2}</p>
                        <p className="text-[10px] text-gray-500 text-right mt-1">10:33 PM</p>
                      </div>
                    </div>

                    {/* Bot Confirmation */}
                    <div className="flex justify-end">
                      <div className="bg-[#DCF8C6] rounded-lg rounded-tr-none px-3 py-2 max-w-[80%] shadow-sm">
                        <p className="text-sm text-gray-800">
                          {t.hero.chat.bot2}
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
