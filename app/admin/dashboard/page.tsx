'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Scissors, GraduationCap, Settings, MessageSquareWarning, ArrowRight, Loader2 } from 'lucide-react';

interface Stats {
  servicios: number;
  cursos: number;
  objeciones: number;
}

export default function DashboardPage() {
  const [stats, setStats] = useState<Stats>({ servicios: 0, cursos: 0, objeciones: 0 });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchStats() {
      try {
        const [serviciosRes, cursosRes, objecionesRes] = await Promise.all([
          fetch('/api/admin/servicios'),
          fetch('/api/admin/cursos'),
          fetch('/api/admin/objeciones'),
        ]);

        const servicios = serviciosRes.ok ? await serviciosRes.json() : [];
        const cursos = cursosRes.ok ? await cursosRes.json() : [];
        const objeciones = objecionesRes.ok ? await objecionesRes.json() : [];

        setStats({
          servicios: servicios.filter((s: { activo: boolean }) => s.activo).length,
          cursos: cursos.filter((c: { activo: boolean }) => c.activo).length,
          objeciones: objeciones.filter((o: { activo: boolean }) => o.activo).length,
        });
      } catch {
        // silently fail
      } finally {
        setLoading(false);
      }
    }
    fetchStats();
  }, []);

  const cards = [
    {
      title: 'Servicios',
      description: 'Administra los servicios del salon, precios y disponibilidad.',
      icon: Scissors,
      href: '/admin/dashboard/servicios',
      stat: `${stats.servicios} activos`,
    },
    {
      title: 'Cursos',
      description: 'Gestiona cursos, fechas, precios y cupos disponibles.',
      icon: GraduationCap,
      href: '/admin/dashboard/cursos',
      stat: `${stats.cursos} activos`,
    },
    {
      title: 'Objeciones',
      description: 'Respuestas automaticas a objeciones comunes de clientes.',
      icon: MessageSquareWarning,
      href: '/admin/dashboard/objeciones',
      stat: `${stats.objeciones} activas`,
    },
    {
      title: 'Configuracion',
      description: 'Personaliza el tono, estilo y datos del bot.',
      icon: Settings,
      href: '/admin/dashboard/configuracion',
      stat: 'Bot',
    },
  ];

  if (loading) {
    return (
      <div className="flex items-center justify-center py-20">
        <Loader2 className="w-8 h-8 animate-spin text-primary-500" />
      </div>
    );
  }

  return (
    <div>
      <div className="mb-8">
        <h1 className="text-2xl font-bold text-gray-900">Panel de Administracion</h1>
        <p className="text-gray-500 text-sm mt-1">Administra tu negocio desde aqui</p>
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        {cards.map((card) => {
          const Icon = card.icon;
          return (
            <Link
              key={card.href}
              href={card.href}
              className="group bg-white border border-gray-200 rounded-2xl p-6 shadow-sm hover:border-primary-300 hover:shadow-md transition-all"
            >
              <div className="flex items-start justify-between mb-4">
                <div className="w-12 h-12 rounded-xl bg-primary-50 flex items-center justify-center">
                  <Icon className="w-6 h-6 text-primary-500" />
                </div>
                <ArrowRight className="w-5 h-5 text-gray-400 group-hover:text-primary-500 transition-colors" />
              </div>

              <h2 className="text-lg font-semibold text-gray-900 mb-1">{card.title}</h2>
              <p className="text-gray-500 text-sm mb-3">{card.description}</p>

              <span className="text-xs font-medium text-primary-700 bg-primary-50 px-2.5 py-1 rounded-lg border border-primary-200">
                {card.stat}
              </span>
            </Link>
          );
        })}
      </div>
    </div>
  );
}
