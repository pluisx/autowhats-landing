'use client';

import { useState, useEffect } from 'react';
import { Save, Loader2, Settings } from 'lucide-react';
import { useToast } from '@/components/admin/ToastProvider';
import type { ConfiguracionBot } from '@/lib/types/admin';

const inputClass = 'w-full px-4 py-3 bg-white border border-gray-300 rounded-xl text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent';
const textareaClass = 'w-full px-4 py-3 bg-white border border-gray-300 rounded-xl text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent resize-none';

export default function ConfiguracionPage() {
  const [config, setConfig] = useState<ConfiguracionBot | null>(null);
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const { addToast } = useToast();

  useEffect(() => {
    async function fetchConfig() {
      try {
        const res = await fetch('/api/admin/configuracion');
        if (!res.ok) throw new Error();
        const data = await res.json();
        setConfig(data);
      } catch {
        addToast('Error al cargar configuracion', 'error');
      } finally {
        setLoading(false);
      }
    }
    fetchConfig();
  }, [addToast]);

  async function handleSave() {
    if (!config) return;
    setSaving(true);
    try {
      const res = await fetch('/api/admin/configuracion', {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(config),
      });
      if (!res.ok) throw new Error();
      addToast('Configuracion guardada', 'success');
    } catch {
      addToast('Error al guardar configuracion', 'error');
    } finally {
      setSaving(false);
    }
  }

  function updateField(field: keyof ConfiguracionBot, value: string | boolean | null) {
    if (!config) return;
    setConfig({ ...config, [field]: value });
  }

  if (loading || !config) {
    return (
      <div className="flex items-center justify-center py-20">
        <Loader2 className="w-8 h-8 animate-spin text-primary-500" />
      </div>
    );
  }

  return (
    <div>
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-gray-900">Configuracion del Bot</h1>
        <p className="text-gray-500 text-sm mt-1">Personaliza como se comporta tu asistente virtual</p>
      </div>

      <div className="max-w-2xl space-y-6">
        {/* Business Info */}
        <div className="bg-white border border-gray-200 rounded-2xl p-6 shadow-sm">
          <div className="flex items-center gap-2 mb-4">
            <Settings className="w-5 h-5 text-primary-500" />
            <h2 className="font-semibold text-gray-900">Informacion del Negocio</h2>
          </div>
          <div className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1.5">Nombre del Negocio</label>
                <input
                  type="text"
                  value={config.nombre_negocio || ''}
                  onChange={(e) => updateField('nombre_negocio', e.target.value || null)}
                  className={inputClass}
                  placeholder="Ej: Gigi Nails Salon"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1.5">Ciudad</label>
                <input
                  type="text"
                  value={config.ciudad || ''}
                  onChange={(e) => updateField('ciudad', e.target.value || null)}
                  className={inputClass}
                  placeholder="Ej: Atlanta, GA"
                />
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1.5">Nombre del Asistente</label>
                <input
                  type="text"
                  value={config.nombre_asistente || ''}
                  onChange={(e) => updateField('nombre_asistente', e.target.value || null)}
                  className={inputClass}
                  placeholder="Ej: Gigi"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1.5">Instagram</label>
                <input
                  type="text"
                  value={config.instagram || ''}
                  onChange={(e) => updateField('instagram', e.target.value || null)}
                  className={inputClass}
                  placeholder="Ej: @gigi.nailart"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Tone & Style */}
        <div className="bg-white border border-gray-200 rounded-2xl p-6 shadow-sm">
          <h2 className="font-semibold text-gray-900 mb-4">Tono y Estilo</h2>
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1.5">Tono General</label>
              <input
                type="text"
                value={config.tono_general || ''}
                onChange={(e) => updateField('tono_general', e.target.value || null)}
                className={inputClass}
                placeholder="Ej: Amigable y cercano, como una amiga"
              />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1.5">Usar Emojis</label>
                <input
                  type="text"
                  value={config.usar_emojis || ''}
                  onChange={(e) => updateField('usar_emojis', e.target.value || null)}
                  className={inputClass}
                  placeholder="Ej: Si, moderados"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1.5">Emojis Favoritos</label>
                <input
                  type="text"
                  value={config.emojis_favoritos || ''}
                  onChange={(e) => updateField('emojis_favoritos', e.target.value || null)}
                  className={inputClass}
                  placeholder="Ej: 💅✨😊"
                />
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1.5">Longitud de Mensajes</label>
              <input
                type="text"
                value={config.longitud_mensajes || ''}
                onChange={(e) => updateField('longitud_mensajes', e.target.value || null)}
                className={inputClass}
                placeholder="Ej: Cortos, 1-3 oraciones"
              />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1.5">Palabras Carinosas</label>
                <input
                  type="text"
                  value={config.palabras_carinosas || ''}
                  onChange={(e) => updateField('palabras_carinosas', e.target.value || null)}
                  className={inputClass}
                  placeholder="Ej: amor, bella, reina"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1.5">Frecuencia Carinosas</label>
                <input
                  type="text"
                  value={config.frecuencia_carinosas || ''}
                  onChange={(e) => updateField('frecuencia_carinosas', e.target.value || null)}
                  className={inputClass}
                  placeholder="Ej: Moderada, 1 de cada 3 mensajes"
                />
              </div>
            </div>
            <div className="flex items-center gap-3">
              <button
                type="button"
                onClick={() => updateField('signos_exclamacion', !config.signos_exclamacion)}
                className={`relative w-12 h-7 rounded-full transition-colors ${
                  config.signos_exclamacion ? 'bg-primary-500' : 'bg-gray-300'
                }`}
              >
                <div className={`absolute top-0.5 w-6 h-6 bg-white rounded-full shadow transition-transform ${
                  config.signos_exclamacion ? 'translate-x-5' : 'translate-x-0.5'
                }`} />
              </button>
              <span className="text-sm text-gray-700">Usar signos de exclamacion de apertura</span>
            </div>
          </div>
        </div>

        {/* Examples */}
        <div className="bg-white border border-gray-200 rounded-2xl p-6 shadow-sm">
          <h2 className="font-semibold text-gray-900 mb-4">Ejemplos de Mensajes</h2>
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1.5">Ejemplos Buenos (como SI debe hablar)</label>
              <textarea
                value={config.ejemplos_buenos || ''}
                onChange={(e) => updateField('ejemplos_buenos', e.target.value || null)}
                rows={3}
                className={textareaClass}
                placeholder='Ej: "Hola bella! que bueno saber de ti 💅"'
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1.5">Ejemplos Malos (como NO debe hablar)</label>
              <textarea
                value={config.ejemplos_malos || ''}
                onChange={(e) => updateField('ejemplos_malos', e.target.value || null)}
                rows={3}
                className={textareaClass}
                placeholder='Ej: "Estimada cliente, es un placer..."'
              />
            </div>
          </div>
        </div>

        {/* Save */}
        <button
          onClick={handleSave}
          disabled={saving}
          className="w-full py-3 rounded-xl font-semibold text-white bg-gradient-to-r from-primary-500 to-primary-600 hover:from-primary-600 hover:to-primary-700 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-300 flex items-center justify-center gap-2 shadow-[0_4px_14px_0_rgba(249,115,22,0.39)] hover:shadow-lg"
        >
          {saving ? (
            <Loader2 className="w-5 h-5 animate-spin" />
          ) : (
            <Save className="w-5 h-5" />
          )}
          Guardar Configuracion
        </button>
      </div>
    </div>
  );
}
