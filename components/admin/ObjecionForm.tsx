'use client';

import { useState, useEffect, FormEvent } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Save, Loader2 } from 'lucide-react';
import type { RespuestaObjecion } from '@/lib/types/admin';

interface ObjecionFormProps {
  open: boolean;
  objecion: RespuestaObjecion | null;
  onSave: (objecion: RespuestaObjecion) => Promise<void>;
  onClose: () => void;
}

const emptyObjecion: RespuestaObjecion = {
  objecion: '',
  respuesta_1: '',
  respuesta_2: null,
  derivar_a_gigi: false,
  activo: true,
};

export function ObjecionForm({ open, objecion, onSave, onClose }: ObjecionFormProps) {
  const [form, setForm] = useState<RespuestaObjecion>(emptyObjecion);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (objecion) {
      setForm(objecion);
    } else {
      setForm(emptyObjecion);
    }
  }, [objecion, open]);

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();
    setLoading(true);
    try {
      await onSave(form);
      onClose();
    } finally {
      setLoading(false);
    }
  }

  return (
    <AnimatePresence>
      {open && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/20 backdrop-blur-sm z-50"
            onClick={onClose}
          />
          <motion.div
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="fixed right-0 top-0 h-full w-full max-w-lg bg-white border-l border-gray-200 z-50 overflow-y-auto overflow-x-hidden"
          >
            <div className="p-6">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-xl font-bold text-gray-900">
                  {objecion ? 'Editar Objecion' : 'Nueva Objecion'}
                </h2>
                <button onClick={onClose} className="text-gray-400 hover:text-gray-600">
                  <X className="w-6 h-6" />
                </button>
              </div>

              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1.5">Objecion del cliente *</label>
                  <input
                    type="text"
                    value={form.objecion}
                    onChange={(e) => setForm({ ...form, objecion: e.target.value })}
                    className="w-full px-4 py-3 bg-white border border-gray-300 rounded-xl text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                    placeholder='Ej: "Es muy caro"'
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1.5">Respuesta 1 *</label>
                  <textarea
                    value={form.respuesta_1}
                    onChange={(e) => setForm({ ...form, respuesta_1: e.target.value })}
                    rows={3}
                    className="w-full px-4 py-3 bg-white border border-gray-300 rounded-xl text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent resize-none"
                    placeholder="Primera respuesta del bot..."
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1.5">Respuesta 2 (opcional)</label>
                  <textarea
                    value={form.respuesta_2 || ''}
                    onChange={(e) => setForm({ ...form, respuesta_2: e.target.value || null })}
                    rows={3}
                    className="w-full px-4 py-3 bg-white border border-gray-300 rounded-xl text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent resize-none"
                    placeholder="Segunda respuesta (se envia como mensaje separado)..."
                  />
                </div>

                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <button
                      type="button"
                      onClick={() => setForm({ ...form, derivar_a_gigi: !form.derivar_a_gigi })}
                      className={`relative w-12 h-7 rounded-full transition-colors ${
                        form.derivar_a_gigi ? 'bg-primary-500' : 'bg-gray-300'
                      }`}
                    >
                      <div className={`absolute top-0.5 w-6 h-6 bg-white rounded-full shadow transition-transform ${
                        form.derivar_a_gigi ? 'translate-x-5' : 'translate-x-0.5'
                      }`} />
                    </button>
                    <span className="text-sm text-gray-700">Derivar a Gigi</span>
                  </div>
                  <p className="text-xs text-gray-500 ml-15">
                    Si se activa, el bot tambien notificara a Gigi para que intervenga
                  </p>
                </div>

                <div className="flex items-center gap-3">
                  <button
                    type="button"
                    onClick={() => setForm({ ...form, activo: !form.activo })}
                    className={`relative w-12 h-7 rounded-full transition-colors ${
                      form.activo ? 'bg-primary-500' : 'bg-gray-300'
                    }`}
                  >
                    <div className={`absolute top-0.5 w-6 h-6 bg-white rounded-full shadow transition-transform ${
                      form.activo ? 'translate-x-5' : 'translate-x-0.5'
                    }`} />
                  </button>
                  <span className="text-sm text-gray-700">
                    {form.activo ? 'Activa' : 'Inactiva'}
                  </span>
                </div>

                <div className="pt-4 border-t border-gray-200">
                  <button
                    type="submit"
                    disabled={loading || !form.objecion || !form.respuesta_1}
                    className="w-full py-3 rounded-xl font-semibold text-white bg-gradient-to-r from-primary-500 to-primary-600 hover:from-primary-600 hover:to-primary-700 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-300 flex items-center justify-center gap-2 shadow-[0_4px_14px_0_rgba(249,115,22,0.39)] hover:shadow-lg"
                  >
                    {loading ? (
                      <Loader2 className="w-5 h-5 animate-spin" />
                    ) : (
                      <Save className="w-5 h-5" />
                    )}
                    {objecion ? 'Guardar Cambios' : 'Crear Objecion'}
                  </button>
                </div>
              </form>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
