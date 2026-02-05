'use client';

import { useState, useEffect, useCallback } from 'react';
import { Plus, Pencil, Trash2, Loader2, ArrowRightLeft } from 'lucide-react';
import { useToast } from '@/components/admin/ToastProvider';
import { ObjecionForm } from '@/components/admin/ObjecionForm';
import { ConfirmDialog } from '@/components/admin/ConfirmDialog';
import type { RespuestaObjecion } from '@/lib/types/admin';

export default function ObjecionesPage() {
  const [objeciones, setObjeciones] = useState<RespuestaObjecion[]>([]);
  const [loading, setLoading] = useState(true);
  const [formOpen, setFormOpen] = useState(false);
  const [editingObjecion, setEditingObjecion] = useState<RespuestaObjecion | null>(null);
  const [deleteTarget, setDeleteTarget] = useState<RespuestaObjecion | null>(null);
  const { addToast } = useToast();

  const fetchObjeciones = useCallback(async () => {
    try {
      const res = await fetch('/api/admin/objeciones');
      if (!res.ok) throw new Error();
      const data = await res.json();
      setObjeciones(data);
    } catch {
      addToast('Error al cargar objeciones', 'error');
    } finally {
      setLoading(false);
    }
  }, [addToast]);

  useEffect(() => {
    fetchObjeciones();
  }, [fetchObjeciones]);

  async function handleSave(objecion: RespuestaObjecion) {
    const isEdit = !!objecion.id;
    const res = await fetch('/api/admin/objeciones', {
      method: isEdit ? 'PUT' : 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(objecion),
    });

    if (!res.ok) {
      addToast('Error al guardar objecion', 'error');
      return;
    }

    addToast(isEdit ? 'Objecion actualizada' : 'Objecion creada', 'success');
    fetchObjeciones();
  }

  async function handleDelete() {
    if (!deleteTarget) return;

    const res = await fetch('/api/admin/objeciones', {
      method: 'DELETE',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ id: deleteTarget.id }),
    });

    if (!res.ok) {
      addToast('Error al eliminar objecion', 'error');
      return;
    }

    addToast('Objecion eliminada', 'success');
    setDeleteTarget(null);
    fetchObjeciones();
  }

  function openCreate() {
    setEditingObjecion(null);
    setFormOpen(true);
  }

  function openEdit(objecion: RespuestaObjecion) {
    setEditingObjecion(objecion);
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
          <h1 className="text-2xl font-bold text-gray-900">Respuestas a Objeciones</h1>
          <p className="text-gray-500 text-sm mt-1">{objeciones.length} objeciones configuradas</p>
        </div>
        <button
          onClick={openCreate}
          className="flex items-center gap-2 px-4 py-2.5 text-sm font-semibold text-white bg-gradient-to-r from-primary-500 to-primary-600 rounded-xl hover:from-primary-600 hover:to-primary-700 transition-all shadow-[0_4px_14px_0_rgba(249,115,22,0.39)] hover:shadow-lg"
        >
          <Plus className="w-4 h-4" />
          Agregar
        </button>
      </div>

      {objeciones.length === 0 ? (
        <div className="text-center py-20 text-gray-500">
          <p className="text-lg mb-2">No hay objeciones</p>
          <p className="text-sm">Agrega respuestas para objeciones comunes</p>
        </div>
      ) : (
        <div className="space-y-3">
          {objeciones.map((obj) => (
            <div key={obj.id} className="bg-white border border-gray-200 rounded-xl p-5 shadow-sm hover:border-gray-300 transition-colors">
              <div className="flex items-start justify-between mb-3">
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2 mb-1">
                    <h3 className="text-gray-900 font-semibold">&ldquo;{obj.objecion}&rdquo;</h3>
                    {obj.derivar_a_gigi && (
                      <span className="shrink-0 flex items-center gap-1 px-2 py-0.5 text-xs font-medium rounded-lg bg-amber-100 text-amber-700 border border-amber-200">
                        <ArrowRightLeft className="w-3 h-3" />
                        Deriva
                      </span>
                    )}
                  </div>
                </div>
                <div className="flex items-center gap-2 ml-3 shrink-0">
                  <span className={`px-2 py-0.5 text-xs rounded-lg ${
                    obj.activo
                      ? 'bg-green-100 text-green-700'
                      : 'bg-red-100 text-red-700'
                  }`}>
                    {obj.activo ? 'Activa' : 'Inactiva'}
                  </span>
                  <button
                    onClick={() => openEdit(obj)}
                    className="p-2 text-gray-400 hover:text-gray-700 hover:bg-gray-100 rounded-lg transition-all"
                  >
                    <Pencil className="w-4 h-4" />
                  </button>
                  <button
                    onClick={() => setDeleteTarget(obj)}
                    className="p-2 text-gray-400 hover:text-red-600 hover:bg-red-50 rounded-lg transition-all"
                  >
                    <Trash2 className="w-4 h-4" />
                  </button>
                </div>
              </div>

              <div className="space-y-2">
                <div className="bg-gray-50 border border-gray-100 rounded-lg px-4 py-2.5">
                  <p className="text-xs text-gray-500 mb-1">Respuesta 1:</p>
                  <p className="text-sm text-gray-700">{obj.respuesta_1}</p>
                </div>
                {obj.respuesta_2 && (
                  <div className="bg-gray-50 border border-gray-100 rounded-lg px-4 py-2.5">
                    <p className="text-xs text-gray-500 mb-1">Respuesta 2:</p>
                    <p className="text-sm text-gray-700">{obj.respuesta_2}</p>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      )}

      <ObjecionForm
        open={formOpen}
        objecion={editingObjecion}
        onSave={handleSave}
        onClose={() => setFormOpen(false)}
      />

      <ConfirmDialog
        open={!!deleteTarget}
        title="Eliminar Objecion"
        message={`Estas segura que quieres eliminar la objecion "${deleteTarget?.objecion}"? Esta accion no se puede deshacer.`}
        onConfirm={handleDelete}
        onCancel={() => setDeleteTarget(null)}
      />
    </div>
  );
}
