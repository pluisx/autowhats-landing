'use client';

import { useState, useEffect, useCallback } from 'react';
import { Plus, Pencil, Trash2, Loader2, Calendar, MapPin, Users, Clock } from 'lucide-react';
import { useToast } from '@/components/admin/ToastProvider';
import { CursoForm } from '@/components/admin/CursoForm';
import { ConfirmDialog } from '@/components/admin/ConfirmDialog';
import type { Curso } from '@/lib/types/admin';

export default function CursosPage() {
  const [cursos, setCursos] = useState<Curso[]>([]);
  const [loading, setLoading] = useState(true);
  const [formOpen, setFormOpen] = useState(false);
  const [editingCurso, setEditingCurso] = useState<Curso | null>(null);
  const [deleteTarget, setDeleteTarget] = useState<Curso | null>(null);
  const { addToast } = useToast();

  const fetchCursos = useCallback(async () => {
    try {
      const res = await fetch('/api/admin/cursos');
      if (!res.ok) throw new Error('Error al cargar cursos');
      const data = await res.json();
      setCursos(data);
    } catch {
      addToast('Error al cargar cursos', 'error');
    } finally {
      setLoading(false);
    }
  }, [addToast]);

  useEffect(() => {
    fetchCursos();
  }, [fetchCursos]);

  async function handleSave(curso: Curso) {
    const isEdit = !!curso.id;
    const res = await fetch('/api/admin/cursos', {
      method: isEdit ? 'PUT' : 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(curso),
    });

    if (!res.ok) {
      addToast('Error al guardar curso', 'error');
      return;
    }

    addToast(isEdit ? 'Curso actualizado' : 'Curso creado', 'success');
    fetchCursos();
  }

  async function handleDelete() {
    if (!deleteTarget) return;

    const res = await fetch('/api/admin/cursos', {
      method: 'DELETE',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ id: deleteTarget.id }),
    });

    if (!res.ok) {
      addToast('Error al eliminar curso', 'error');
      return;
    }

    addToast('Curso eliminado', 'success');
    setDeleteTarget(null);
    fetchCursos();
  }

  function openCreate() {
    setEditingCurso(null);
    setFormOpen(true);
  }

  function openEdit(curso: Curso) {
    setEditingCurso(curso);
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
          <h1 className="text-2xl font-bold text-gray-900">Cursos</h1>
          <p className="text-gray-500 text-sm mt-1">{cursos.length} {cursos.length === 1 ? 'curso' : 'cursos'}</p>
        </div>
        <button
          onClick={openCreate}
          className="flex items-center gap-2 px-4 py-2.5 text-sm font-semibold text-white bg-gradient-to-r from-primary-500 to-primary-600 rounded-xl hover:from-primary-600 hover:to-primary-700 transition-all shadow-[0_4px_14px_0_rgba(249,115,22,0.39)] hover:shadow-lg"
        >
          <Plus className="w-4 h-4" />
          Agregar
        </button>
      </div>

      {cursos.length === 0 ? (
        <div className="text-center py-20 text-gray-500">
          <p className="text-lg mb-2">No hay cursos</p>
          <p className="text-sm">Agrega tu primer curso</p>
        </div>
      ) : (
        <div className="grid gap-4 md:grid-cols-2">
          {cursos.map((curso) => (
            <div key={curso.id} className="bg-white border border-gray-200 rounded-2xl p-5 shadow-sm hover:border-gray-300 transition-colors min-w-0 overflow-hidden">
              <div className="flex items-start justify-between mb-3">
                <div className="flex-1 min-w-0">
                  <h3 className="text-gray-900 font-semibold truncate">{curso.nombre}</h3>
                  {curso.descripcion && (
                    <p className="text-gray-500 text-sm mt-1 line-clamp-2">{curso.descripcion}</p>
                  )}
                </div>
                <span className={`ml-3 shrink-0 px-2.5 py-1 text-xs font-medium rounded-lg ${
                  curso.activo
                    ? 'bg-green-100 text-green-700 border border-green-200'
                    : 'bg-red-100 text-red-700 border border-red-200'
                }`}>
                  {curso.activo ? 'Activo' : 'Inactivo'}
                </span>
              </div>

              <div className="space-y-2 mb-4">
                <div className="flex items-center gap-2 text-sm text-gray-500">
                  <Calendar className="w-4 h-4 shrink-0" />
                  <span className="truncate">{curso.fechas_descripcion || curso.proxima_fecha || 'Sin fecha'}</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-gray-500">
                  <MapPin className="w-4 h-4 shrink-0" />
                  <span className="truncate">{curso.ubicacion || 'Sin ubicacion'}</span>
                </div>
                {curso.horario && (
                  <div className="flex items-center gap-2 text-sm text-gray-500">
                    <Clock className="w-4 h-4 shrink-0" />
                    <span className="truncate">{curso.horario}</span>
                  </div>
                )}
                <div className="flex items-center gap-2 text-sm text-gray-500">
                  <Users className="w-4 h-4 shrink-0" />
                  <span>{curso.cupos_disponibles} cupos disponibles</span>
                </div>
              </div>

              <div className="flex items-center justify-between pt-3 border-t border-gray-200">
                <span className="text-xl font-bold text-gray-900">${curso.precio}</span>
                <div className="flex items-center gap-1">
                  <button
                    onClick={() => openEdit(curso)}
                    className="flex items-center gap-1.5 px-3 py-1.5 text-sm text-gray-500 hover:text-gray-700 hover:bg-gray-100 rounded-lg transition-all"
                  >
                    <Pencil className="w-4 h-4" />
                    Editar
                  </button>
                  <button
                    onClick={() => setDeleteTarget(curso)}
                    className="p-2 text-gray-400 hover:text-red-600 hover:bg-red-50 rounded-lg transition-all"
                  >
                    <Trash2 className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}

      <CursoForm
        open={formOpen}
        curso={editingCurso}
        onSave={handleSave}
        onClose={() => setFormOpen(false)}
      />

      <ConfirmDialog
        open={!!deleteTarget}
        title="Eliminar Curso"
        message={`Estas segura que quieres eliminar "${deleteTarget?.nombre}"? Esta accion no se puede deshacer.`}
        onConfirm={handleDelete}
        onCancel={() => setDeleteTarget(null)}
      />
    </div>
  );
}
