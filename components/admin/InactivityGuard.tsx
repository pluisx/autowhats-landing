'use client';

import { useEffect, useRef, useState, useCallback } from 'react';
import { useRouter } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import { LogOut } from 'lucide-react';

const INACTIVITY_TIMEOUT = 30 * 60 * 1000; // 30 minutes

export function InactivityGuard() {
  const router = useRouter();
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const [expired, setExpired] = useState(false);

  const logout = useCallback(async () => {
    setExpired(true);
    await fetch('/api/admin/logout', { method: 'POST' });
  }, []);

  const resetTimer = useCallback(() => {
    if (expired) return;
    if (timerRef.current) clearTimeout(timerRef.current);
    timerRef.current = setTimeout(logout, INACTIVITY_TIMEOUT);
  }, [expired, logout]);

  useEffect(() => {
    const events = ['mousedown', 'keydown', 'touchstart', 'scroll'];

    events.forEach((e) => window.addEventListener(e, resetTimer, { passive: true }));
    resetTimer();

    return () => {
      if (timerRef.current) clearTimeout(timerRef.current);
      events.forEach((e) => window.removeEventListener(e, resetTimer));
    };
  }, [resetTimer]);

  function handleRelogin() {
    router.push('/admin');
  }

  return (
    <AnimatePresence>
      {expired && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/20 backdrop-blur-sm z-[100]"
          />
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            className="fixed inset-0 z-[100] flex items-center justify-center px-4"
          >
            <div className="bg-white border border-gray-200 rounded-2xl shadow-xl p-6 max-w-sm w-full text-center">
              <div className="w-12 h-12 rounded-full bg-primary-50 flex items-center justify-center mx-auto mb-4">
                <LogOut className="w-6 h-6 text-primary-500" />
              </div>
              <h2 className="text-lg font-bold text-gray-900 mb-2">Sesion cerrada</h2>
              <p className="text-sm text-gray-500 mb-5">
                Tu sesion ha sido cerrada por inactividad. Vuelve a iniciar sesion.
              </p>
              <button
                onClick={handleRelogin}
                className="w-full py-3 rounded-xl font-semibold text-white bg-gradient-to-r from-primary-500 to-primary-600 hover:from-primary-600 hover:to-primary-700 transition-all shadow-[0_4px_14px_0_rgba(249,115,22,0.39)] hover:shadow-lg"
              >
                Iniciar sesion
              </button>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
