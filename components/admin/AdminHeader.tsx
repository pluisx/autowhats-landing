'use client';

import { useRouter } from 'next/navigation';
import { LogOut, Menu } from 'lucide-react';

interface AdminHeaderProps {
  onMenuClick: () => void;
}

export function AdminHeader({ onMenuClick }: AdminHeaderProps) {
  const router = useRouter();

  async function handleLogout() {
    await fetch('/api/admin/logout', { method: 'POST' });
    router.push('/admin');
  }

  return (
    <header className="h-16 bg-white border-b border-gray-200 flex items-center justify-between px-6">
      <button
        onClick={onMenuClick}
        className="lg:hidden text-gray-500 hover:text-gray-700"
      >
        <Menu className="w-6 h-6" />
      </button>

      <div className="hidden lg:block" />

      <button
        onClick={handleLogout}
        className="flex items-center gap-2 px-4 py-2 text-sm text-gray-500 hover:text-gray-700 hover:bg-gray-50 rounded-xl transition-all"
      >
        <LogOut className="w-4 h-4" />
        Salir
      </button>
    </header>
  );
}
