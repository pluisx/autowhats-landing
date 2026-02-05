'use client';

import { useState, useEffect, FormEvent } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Save, Loader2, Plus, Trash2 } from 'lucide-react';
import type { Curso, CursoModulo } from '@/lib/types/admin';

interface CursoFormProps {
  open: boolean;
  curso: Curso | null;
  onSave: (curso: Curso) => Promise<void>;
  onClose: () => void;
}

const emptyCurso: Curso = {
  nombre: '',
  descripcion: '',
  precio: 0,
  duracion_dias: 0,
  duracion_descripcion: '',
  fechas_descripcion: '',
  hora_inicio: '',
  horario: '',
  ubicacion: '',
  cupos_disponibles: 0,
  deposito_porcentaje: null,
  deposito_monto: 0,
  descuento_hoy: 0,
  restante_sin_descuento: 0,
  restante_con_descuento: 0,
  incluye_materiales: true,
  incluye_certificacion: true,
  incluye_almuerzo: true,
  proxima_fecha: null,
  edad_minima: 13,
  activo: true,
  modulos: null,
  metodos_pago: null,
  politica_reembolso: null,
  nota_licencia: null,
  link_deposito: null,
  link_restante: null,
  link_restante_descuento: null,
  link_completo: null,
  link_completo_descuento: null,
};

const inputClass = 'w-full px-4 py-3 bg-white border border-gray-300 rounded-xl text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent';
const textareaClass = `${inputClass} resize-none`;

function Toggle({ value, onChange, label }: { value: boolean; onChange: (v: boolean) => void; label: string }) {
  return (
    <div className="flex items-center gap-3">
      <button
        type="button"
        onClick={() => onChange(!value)}
        className={`relative w-12 h-7 rounded-full transition-colors ${value ? 'bg-primary-500' : 'bg-gray-300'}`}
      >
        <div className={`absolute top-0.5 w-6 h-6 bg-white rounded-full shadow transition-transform ${value ? 'translate-x-5' : 'translate-x-0.5'}`} />
      </button>
      <span className="text-sm text-gray-700">{label}</span>
    </div>
  );
}

function SectionTitle({ children }: { children: React.ReactNode }) {
  return <h3 className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-3">{children}</h3>;
}

function Label({ children }: { children: React.ReactNode }) {
  return <label className="block text-sm font-medium text-gray-700 mb-1.5">{children}</label>;
}

export function CursoForm({ open, curso, onSave, onClose }: CursoFormProps) {
  const [form, setForm] = useState<Curso>(emptyCurso);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (curso) {
      setForm(curso);
    } else {
      setForm(emptyCurso);
    }
  }, [curso, open]);

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

  function addModulo() {
    const modulos = form.modulos || [];
    const nextClase = modulos.length > 0 ? Math.max(...modulos.map(m => m.clase)) + 1 : 1;
    setForm({ ...form, modulos: [...modulos, { clase: nextClase, nombre: '', temas: [''] }] });
  }

  function updateModulo(index: number, field: keyof CursoModulo, value: string | string[]) {
    const modulos = [...(form.modulos || [])];
    modulos[index] = { ...modulos[index], [field]: value };
    setForm({ ...form, modulos });
  }

  function removeModulo(index: number) {
    const modulos = (form.modulos || []).filter((_, i) => i !== index);
    setForm({ ...form, modulos: modulos.length > 0 ? modulos : null });
  }

  function updateMetodosPago(value: string) {
    const metodos = value.split(',').map(m => m.trim()).filter(Boolean);
    setForm({ ...form, metodos_pago: metodos.length > 0 ? metodos : null });
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
            className="fixed right-0 top-0 h-full w-full max-w-2xl bg-white border-l border-gray-200 z-50 overflow-y-auto overflow-x-hidden"
          >
            <div className="p-6">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-xl font-bold text-gray-900">
                  {curso ? 'Editar Curso' : 'Nuevo Curso'}
                </h2>
                <button onClick={onClose} className="text-gray-400 hover:text-gray-600">
                  <X className="w-6 h-6" />
                </button>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Basic Info */}
                <div>
                  <SectionTitle>Informacion Basica</SectionTitle>
                  <div className="space-y-4">
                    <div>
                      <Label>Nombre *</Label>
                      <input
                        type="text"
                        value={form.nombre}
                        onChange={(e) => setForm({ ...form, nombre: e.target.value })}
                        className={inputClass}
                        placeholder="Ej: Curso Intensivo de Unas"
                        required
                      />
                    </div>
                    <div>
                      <Label>Descripcion</Label>
                      <textarea
                        value={form.descripcion}
                        onChange={(e) => setForm({ ...form, descripcion: e.target.value })}
                        rows={4}
                        className={textareaClass}
                        placeholder="Descripcion del curso..."
                      />
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <Label>Duracion (dias)</Label>
                        <input
                          type="number"
                          value={form.duracion_dias || ''}
                          onChange={(e) => setForm({ ...form, duracion_dias: parseInt(e.target.value) || 0 })}
                          className={inputClass}
                          min="0"
                        />
                      </div>
                      <div>
                        <Label>Edad Minima</Label>
                        <input
                          type="number"
                          value={form.edad_minima || ''}
                          onChange={(e) => setForm({ ...form, edad_minima: parseInt(e.target.value) || 0 })}
                          className={inputClass}
                          min="0"
                        />
                      </div>
                    </div>
                    <div>
                      <Label>Descripcion de duracion</Label>
                      <input
                        type="text"
                        value={form.duracion_descripcion}
                        onChange={(e) => setForm({ ...form, duracion_descripcion: e.target.value })}
                        className={inputClass}
                        placeholder="Ej: Entre 7 a 8 horas cada clase"
                      />
                    </div>
                  </div>
                </div>

                {/* Schedule */}
                <div>
                  <SectionTitle>Fechas y Horarios</SectionTitle>
                  <div className="space-y-4">
                    <div>
                      <Label>Proxima fecha</Label>
                      <input
                        type="date"
                        value={form.proxima_fecha || ''}
                        onChange={(e) => setForm({ ...form, proxima_fecha: e.target.value || null })}
                        className={inputClass}
                      />
                    </div>
                    <div>
                      <Label>Descripcion de fechas</Label>
                      <input
                        type="text"
                        value={form.fechas_descripcion}
                        onChange={(e) => setForm({ ...form, fechas_descripcion: e.target.value })}
                        className={inputClass}
                        placeholder="Ej: 21 y 22 de febrero, 28 y 1 (sabados y domingos)"
                      />
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <Label>Hora de inicio</Label>
                        <input
                          type="text"
                          value={form.hora_inicio}
                          onChange={(e) => setForm({ ...form, hora_inicio: e.target.value })}
                          className={inputClass}
                          placeholder="Ej: 9:30am"
                        />
                      </div>
                      <div>
                        <Label>Horario general</Label>
                        <input
                          type="text"
                          value={form.horario || ''}
                          onChange={(e) => setForm({ ...form, horario: e.target.value })}
                          className={inputClass}
                          placeholder="Ej: Sabados y domingos, 9:30am a 5pm"
                        />
                      </div>
                    </div>
                  </div>
                </div>

                {/* Location */}
                <div>
                  <SectionTitle>Ubicacion</SectionTitle>
                  <input
                    type="text"
                    value={form.ubicacion}
                    onChange={(e) => setForm({ ...form, ubicacion: e.target.value })}
                    className={inputClass}
                    placeholder="Ej: 1585 Old Norcross Rd, Lawrenceville, GA"
                  />
                </div>

                {/* Pricing */}
                <div>
                  <SectionTitle>Precios</SectionTitle>
                  <div className="space-y-4">
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <Label>Precio ($) *</Label>
                        <input
                          type="number"
                          value={form.precio || ''}
                          onChange={(e) => setForm({ ...form, precio: parseFloat(e.target.value) || 0 })}
                          className={inputClass}
                          min="0"
                          step="0.01"
                          required
                        />
                      </div>
                      <div>
                        <Label>Deposito ($)</Label>
                        <input
                          type="number"
                          value={form.deposito_monto || ''}
                          onChange={(e) => setForm({ ...form, deposito_monto: parseFloat(e.target.value) || 0 })}
                          className={inputClass}
                          min="0"
                          step="0.01"
                        />
                      </div>
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <Label>Descuento hoy ($)</Label>
                        <input
                          type="number"
                          value={form.descuento_hoy || ''}
                          onChange={(e) => setForm({ ...form, descuento_hoy: parseFloat(e.target.value) || 0 })}
                          className={inputClass}
                          min="0"
                          step="0.01"
                        />
                      </div>
                      <div>
                        <Label>Cupos disponibles</Label>
                        <input
                          type="number"
                          value={form.cupos_disponibles || ''}
                          onChange={(e) => setForm({ ...form, cupos_disponibles: parseInt(e.target.value) || 0 })}
                          className={inputClass}
                          min="0"
                        />
                      </div>
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <Label>Restante sin descuento ($)</Label>
                        <input
                          type="number"
                          value={form.restante_sin_descuento || ''}
                          onChange={(e) => setForm({ ...form, restante_sin_descuento: parseFloat(e.target.value) || 0 })}
                          className={inputClass}
                          min="0"
                          step="0.01"
                        />
                      </div>
                      <div>
                        <Label>Restante con descuento ($)</Label>
                        <input
                          type="number"
                          value={form.restante_con_descuento || ''}
                          onChange={(e) => setForm({ ...form, restante_con_descuento: parseFloat(e.target.value) || 0 })}
                          className={inputClass}
                          min="0"
                          step="0.01"
                        />
                      </div>
                    </div>
                  </div>
                </div>

                {/* Payment Links */}
                <div>
                  <SectionTitle>Links de Pago</SectionTitle>
                  <div className="space-y-4">
                    <div>
                      <Label>Link Deposito</Label>
                      <input
                        type="url"
                        value={form.link_deposito || ''}
                        onChange={(e) => setForm({ ...form, link_deposito: e.target.value || null })}
                        className={inputClass}
                        placeholder="https://..."
                      />
                    </div>
                    <div>
                      <Label>Link Restante</Label>
                      <input
                        type="url"
                        value={form.link_restante || ''}
                        onChange={(e) => setForm({ ...form, link_restante: e.target.value || null })}
                        className={inputClass}
                        placeholder="https://..."
                      />
                    </div>
                    <div>
                      <Label>Link Restante con Descuento</Label>
                      <input
                        type="url"
                        value={form.link_restante_descuento || ''}
                        onChange={(e) => setForm({ ...form, link_restante_descuento: e.target.value || null })}
                        className={inputClass}
                        placeholder="https://..."
                      />
                    </div>
                    <div>
                      <Label>Link Completo</Label>
                      <input
                        type="url"
                        value={form.link_completo || ''}
                        onChange={(e) => setForm({ ...form, link_completo: e.target.value || null })}
                        className={inputClass}
                        placeholder="https://..."
                      />
                    </div>
                    <div>
                      <Label>Link Completo con Descuento</Label>
                      <input
                        type="url"
                        value={form.link_completo_descuento || ''}
                        onChange={(e) => setForm({ ...form, link_completo_descuento: e.target.value || null })}
                        className={inputClass}
                        placeholder="https://..."
                      />
                    </div>
                  </div>
                </div>

                {/* Metodos de Pago */}
                <div>
                  <SectionTitle>Metodos de Pago</SectionTitle>
                  <div>
                    <Label>Metodos aceptados (separados por coma)</Label>
                    <input
                      type="text"
                      value={(form.metodos_pago || []).join(', ')}
                      onChange={(e) => updateMetodosPago(e.target.value)}
                      className={inputClass}
                      placeholder="Ej: Zelle, Visa, Cash App, Efectivo"
                    />
                  </div>
                </div>

                {/* Modulos */}
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <SectionTitle>Modulos del Curso</SectionTitle>
                    <button
                      type="button"
                      onClick={addModulo}
                      className="flex items-center gap-1 px-3 py-1.5 text-xs font-medium text-primary-700 bg-primary-50 border border-primary-200 rounded-lg hover:bg-primary-100 transition-colors"
                    >
                      <Plus className="w-3 h-3" />
                      Agregar Modulo
                    </button>
                  </div>
                  {(form.modulos || []).length === 0 ? (
                    <p className="text-gray-500 text-sm">No hay modulos configurados</p>
                  ) : (
                    <div className="space-y-4">
                      {(form.modulos || []).map((modulo, idx) => (
                        <div key={idx} className="bg-gray-50 border border-gray-200 rounded-xl p-4">
                          <div className="flex items-center justify-between mb-3">
                            <span className="text-xs font-medium text-gray-500">Clase {modulo.clase}</span>
                            <button
                              type="button"
                              onClick={() => removeModulo(idx)}
                              className="p-1 text-gray-400 hover:text-red-600 transition-colors"
                            >
                              <Trash2 className="w-3.5 h-3.5" />
                            </button>
                          </div>
                          <div className="space-y-3">
                            <input
                              type="text"
                              value={modulo.nombre}
                              onChange={(e) => updateModulo(idx, 'nombre', e.target.value)}
                              className={inputClass}
                              placeholder="Nombre del modulo"
                            />
                            <div>
                              <Label>Temas (uno por linea)</Label>
                              <textarea
                                value={modulo.temas.join('\n')}
                                onChange={(e) => updateModulo(idx, 'temas', e.target.value.split('\n'))}
                                rows={3}
                                className={textareaClass}
                                placeholder="Un tema por linea..."
                              />
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  )}
                </div>

                {/* Policies */}
                <div>
                  <SectionTitle>Politicas</SectionTitle>
                  <div className="space-y-4">
                    <div>
                      <Label>Politica de Reembolso</Label>
                      <textarea
                        value={form.politica_reembolso || ''}
                        onChange={(e) => setForm({ ...form, politica_reembolso: e.target.value || null })}
                        rows={3}
                        className={textareaClass}
                        placeholder="Politica de reembolso del curso..."
                      />
                    </div>
                    <div>
                      <Label>Nota sobre Licencia</Label>
                      <textarea
                        value={form.nota_licencia || ''}
                        onChange={(e) => setForm({ ...form, nota_licencia: e.target.value || null })}
                        rows={3}
                        className={textareaClass}
                        placeholder="Nota sobre licencia..."
                      />
                    </div>
                  </div>
                </div>

                {/* Includes */}
                <div>
                  <SectionTitle>Incluye</SectionTitle>
                  <div className="space-y-3">
                    <Toggle
                      value={form.incluye_materiales}
                      onChange={(v) => setForm({ ...form, incluye_materiales: v })}
                      label="Materiales"
                    />
                    <Toggle
                      value={form.incluye_certificacion}
                      onChange={(v) => setForm({ ...form, incluye_certificacion: v })}
                      label="Certificacion"
                    />
                    <Toggle
                      value={form.incluye_almuerzo}
                      onChange={(v) => setForm({ ...form, incluye_almuerzo: v })}
                      label="Almuerzo / Snacks"
                    />
                  </div>
                </div>

                {/* Status */}
                <div>
                  <SectionTitle>Estado</SectionTitle>
                  <Toggle
                    value={form.activo}
                    onChange={(v) => setForm({ ...form, activo: v })}
                    label={form.activo ? 'Curso activo' : 'Curso inactivo'}
                  />
                </div>

                <div className="pt-4 border-t border-gray-200">
                  <button
                    type="submit"
                    disabled={loading || !form.nombre || !form.precio}
                    className="w-full py-3 rounded-xl font-semibold text-white bg-gradient-to-r from-primary-500 to-primary-600 hover:from-primary-600 hover:to-primary-700 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-300 flex items-center justify-center gap-2 shadow-[0_4px_14px_0_rgba(249,115,22,0.39)] hover:shadow-lg"
                  >
                    {loading ? (
                      <Loader2 className="w-5 h-5 animate-spin" />
                    ) : (
                      <Save className="w-5 h-5" />
                    )}
                    {curso ? 'Guardar Cambios' : 'Crear Curso'}
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
