'use client';

import { useState, useEffect, useCallback } from 'react';
import { Plus, Pencil, Trash2, Loader2 } from 'lucide-react';
import { useToast } from '@/components/admin/ToastProvider';
import { ServicioForm } from '@/components/admin/ServicioForm';
import { ConfirmDialog } from '@/components/admin/ConfirmDialog';
import type { Servicio } from '@/lib/types/admin';

const DIAS_LABELS: Record<number, string> = {
  1: 'Lun', 2: 'Mar', 3: 'Mie', 4: 'Jue', 5: 'Vie', 6: 'Sab', 7: 'Dom',
};

function formatHorario(horario?: string): string {
  if (!horario) return '—';
  try {
    const h = JSON.parse(horario);
    if (!h.dias?.length) return '—';
    const dias = (h.dias as number[]).map(d => DIAS_LABELS[d] || '').join(', ');
    const inicio = h.hora_inicio?.slice(0, 5) || '';
    const fin = h.hora_fin?.slice(0, 5) || '';
    return `${dias} / ${inicio} - ${fin}`;
  } catch {
    return horario;
  }
}

export default function ServiciosPage() {
  const [servicios, setServicios] = useState<Servicio[]>([]);
  const [loading, setLoading] = useState(true);
  const [formOpen, setFormOpen] = useState(false);
  const [editingServicio, setEditingServicio] = useState<Servicio | null>(null);
  const [deleteTarget, setDeleteTarget] = useState<Servicio | null>(null);
  const { addToast } = useToast();

  const fetchServicios = useCallback(async () => {
    try {
      const res = await fetch('/api/admin/servicios');
      if (!res.ok) throw new Error('Error al cargar servicios');
      const data = await res.json();
      setServicios(data);
    } catch {
      addToast('Error al cargar servicios', 'error');
    } finally {
      setLoading(false);
    }
  }, [addToast]);

  useEffect(() => {
    fetchServicios();
  }, [fetchServicios]);

  async function handleSave(servicio: Servicio) {
    const isEdit = !!servicio.id;
    const res = await fetch('/api/admin/servicios', {
      method: isEdit ? 'PUT' : 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(servicio),
    });

    if (!res.ok) {
      addToast('Error al guardar servicio', 'error');
      return;
    }

    addToast(isEdit ? 'Servicio actualizado' : 'Servicio creado', 'success');
    fetchServicios();
  }

  async function handleDelete() {
    if (!deleteTarget) return;

    const res = await fetch('/api/admin/servicios', {
      method: 'DELETE',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ id: deleteTarget.id }),
    });

    if (!res.ok) {
      addToast('Error al eliminar servicio', 'error');
      return;
    }

    addToast('Servicio eliminado', 'success');
    setDeleteTarget(null);
    fetchServicios();
  }

  function openCreate() {
    setEditingServicio(null);
    setFormOpen(true);
  }

  function openEdit(servicio: Servicio) {
    setEditingServicio(servicio);
    setFormOpen(true);
  }

  if (loading) {
    return (
      <div className="flex items-center justify-center py-20">
        <Loader2 className="w-8 h-8 animate-spin text-primary-500" />
      </div>
    );
  }

  return (
    <div>
      <div className="flex items-center justify-between mb-6">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Servicios</h1>
          <p className="text-gray-500 text-sm mt-1">{servicios.length} servicios</p>
        </div>
        <button
          onClick={openCreate}
          className="flex items-center gap-2 px-4 py-2.5 text-sm font-semibold text-white bg-gradient-to-r from-primary-500 to-primary-600 rounded-xl hover:from-primary-600 hover:to-primary-700 transition-all shadow-[0_4px_14px_0_rgba(249,115,22,0.39)] hover:shadow-lg"
        >
          <Plus className="w-4 h-4" />
          Agregar
        </button>
      </div>

      {servicios.length === 0 ? (
        <div className="text-center py-20 text-gray-500">
          <p className="text-lg mb-2">No hay servicios</p>
          <p className="text-sm">Agrega tu primer servicio</p>
        </div>
      ) : (
        <>
          {/* Desktop table */}
          <div className="hidden md:block bg-white border border-gray-200 rounded-2xl shadow-sm overflow-hidden">
            <table className="w-full">
              <thead>
                <tr className="border-b border-gray-200">
                  <th className="text-left px-6 py-4 text-xs font-medium text-gray-500 uppercase tracking-wider">Nombre</th>
                  <th className="text-left px-6 py-4 text-xs font-medium text-gray-500 uppercase tracking-wider">Precio</th>
                  <th className="text-left px-6 py-4 text-xs font-medium text-gray-500 uppercase tracking-wider">Duracion</th>
                  <th className="text-left px-6 py-4 text-xs font-medium text-gray-500 uppercase tracking-wider">Horario</th>
                  <th className="text-left px-6 py-4 text-xs font-medium text-gray-500 uppercase tracking-wider">Estado</th>
                  <th className="text-right px-6 py-4 text-xs font-medium text-gray-500 uppercase tracking-wider">Acciones</th>
                </tr>
              </thead>
              <tbody>
                {servicios.map((servicio) => (
                  <tr key={servicio.id} className="border-b border-gray-100 last:border-0 hover:bg-gray-50 transition-colors">
                    <td className="px-6 py-4">
                      <p className="text-gray-900 font-medium">{servicio.nombre}</p>
                      {servicio.descripcion && (
                        <p className="text-gray-500 text-xs mt-0.5 line-clamp-1">{servicio.descripcion}</p>
                      )}
                    </td>
                    <td className="px-6 py-4 text-gray-900">${servicio.precio}</td>
                    <td className="px-6 py-4 text-gray-600">{servicio.duracion_minutos} min</td>
                    <td className="px-6 py-4 text-gray-600 text-sm">{formatHorario(servicio.horario)}</td>
                    <td className="px-6 py-4">
                      <span className={`px-2.5 py-1 text-xs font-medium rounded-lg ${
                        servicio.activo
                          ? 'bg-green-100 text-green-700 border border-green-200'
                          : 'bg-red-100 text-red-700 border border-red-200'
                      }`}>
                        {servicio.activo ? 'Activo' : 'Inactivo'}
                      </span>
                    </td>
                    <td className="px-6 py-4">
                      <div className="flex items-center justify-end gap-2">
                        <button
                          onClick={() => openEdit(servicio)}
                          className="p-2 text-gray-400 hover:text-gray-700 hover:bg-gray-100 rounded-lg transition-all"
                        >
                          <Pencil className="w-4 h-4" />
                        </button>
                        <button
                          onClick={() => setDeleteTarget(servicio)}
                          className="p-2 text-gray-400 hover:text-red-600 hover:bg-red-50 rounded-lg transition-all"
                        >
                          <Trash2 className="w-4 h-4" />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Mobile cards */}
          <div className="md:hidden space-y-3">
            {servicios.map((servicio) => (
              <div key={servicio.id} className="bg-white border border-gray-200 rounded-xl p-4 shadow-sm">
                <div className="flex items-start justify-between mb-3">
                  <div>
                    <p className="text-gray-900 font-medium">{servicio.nombre}</p>
                    <p className="text-gray-500 text-xs mt-0.5">{formatHorario(servicio.horario) !== '—' ? formatHorario(servicio.horario) : servicio.categoria}</p>
                  </div>
                  <span className={`px-2 py-0.5 text-xs rounded-lg ${
                    servicio.activo
                      ? 'bg-green-100 text-green-700'
                      : 'bg-red-100 text-red-700'
                  }`}>
                    {servicio.activo ? 'Activo' : 'Inactivo'}
                  </span>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex gap-4 text-sm">
                    <span className="text-gray-900 font-semibold">${servicio.precio}</span>
                    <span className="text-gray-500">{servicio.duracion_minutos} min</span>
                  </div>
                  <div className="flex gap-1">
                    <button
                      onClick={() => openEdit(servicio)}
                      className="p-2 text-gray-400 hover:text-gray-700 rounded-lg"
                    >
                      <Pencil className="w-4 h-4" />
                    </button>
                    <button
                      onClick={() => setDeleteTarget(servicio)}
                      className="p-2 text-gray-400 hover:text-red-600 rounded-lg"
                    >
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </>
      )}

      <ServicioForm
        open={formOpen}
        servicio={editingServicio}
        onSave={handleSave}
        onClose={() => setFormOpen(false)}
      />

      <ConfirmDialog
        open={!!deleteTarget}
        title="Eliminar Servicio"
        message={`Estas segura que quieres eliminar "${deleteTarget?.nombre}"? Esta accion no se puede deshacer.`}
        onConfirm={handleDelete}
        onCancel={() => setDeleteTarget(null)}
      />
    </div>
  );
}
