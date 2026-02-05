'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Scissors, GraduationCap, Settings, MessageSquareWarning, LayoutDashboard, X } from 'lucide-react';

const navItems = [
  { href: '/admin/dashboard', label: 'Inicio', icon: LayoutDashboard },
  { href: '/admin/dashboard/servicios', label: 'Servicios', icon: Scissors },
  { href: '/admin/dashboard/cursos', label: 'Cursos', icon: GraduationCap },
  { href: '/admin/dashboard/objeciones', label: 'Objeciones', icon: MessageSquareWarning },
  { href: '/admin/dashboard/configuracion', label: 'Configuracion', icon: Settings },
];

interface AdminSidebarProps {
  open: boolean;
  onClose: () => void;
}

export function AdminSidebar({ open, onClose }: AdminSidebarProps) {
  const pathname = usePathname();

  return (
    <>
      {/* Mobile overlay */}
      {open && (
        <div
          className="fixed inset-0 bg-black/20 backdrop-blur-sm z-40 lg:hidden"
          onClick={onClose}
        />
      )}

      <aside
        className={`fixed top-0 left-0 h-full w-64 bg-white border-r border-gray-200 z-50 transform transition-transform duration-300 lg:translate-x-0 ${
          open ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        <div className="flex items-center justify-between p-6 border-b border-gray-200">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-xl bg-gradient-to-r from-primary-500 to-primary-600 flex items-center justify-center shadow-[0_4px_14px_0_rgba(249,115,22,0.39)]">
              <span className="text-white font-bold text-sm">A</span>
            </div>
            <div>
              <p className="font-semibold text-gray-900 text-sm">AutoWhats</p>
              <p className="text-xs text-gray-500">Panel Admin</p>
            </div>
          </div>
          <button onClick={onClose} className="lg:hidden text-gray-400 hover:text-gray-600">
            <X className="w-5 h-5" />
          </button>
        </div>

        <nav className="p-4 space-y-1">
          {navItems.map((item) => {
            const isActive = pathname === item.href ||
              (item.href !== '/admin/dashboard' && pathname.startsWith(item.href));
            const Icon = item.icon;

            return (
              <Link
                key={item.href}
                href={item.href}
                onClick={onClose}
                className={`flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-medium transition-all ${
                  isActive
                    ? 'bg-primary-50 text-primary-700 border border-primary-200'
                    : 'text-gray-600 hover:text-gray-900 hover:bg-gray-50'
                }`}
              >
                <Icon className={`w-5 h-5 ${isActive ? 'text-primary-500' : ''}`} />
                {item.label}
              </Link>
            );
          })}
        </nav>
      </aside>
    </>
  );
}
