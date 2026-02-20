'use client';

import { useState, useEffect, useCallback } from 'react';
import { Pencil, Loader2, Calendar, MapPin, Users, Clock } from 'lucide-react';
import { useToast } from '@/components/admin/ToastProvider';
import { CursoForm } from '@/components/admin/CursoForm';
import type { Curso } from '@/lib/types/admin';

export default function CursosPage() {
  const [cursos, setCursos] = useState<Curso[]>([]);
  const [loading, setLoading] = useState(true);
  const [formOpen, setFormOpen] = useState(false);
  const [editingCurso, setEditingCurso] = useState<Curso | null>(null);
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
    const res = await fetch('/api/admin/cursos', {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(curso),
    });

    if (!res.ok) {
      addToast('Error al guardar curso', 'error');
      return;
    }

    addToast('Curso actualizado', 'success');
    fetchCursos();
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
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-gray-900">Cursos</h1>
        <p className="text-gray-500 text-sm mt-1">{cursos.length} {cursos.length === 1 ? 'curso' : 'cursos'}</p>
      </div>

      {cursos.length === 0 ? (
        <div className="text-center py-20 text-gray-500">
          <p className="text-lg">No hay cursos registrados</p>
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
                <button
                  onClick={() => openEdit(curso)}
                  className="flex items-center gap-1.5 px-3 py-1.5 text-sm text-gray-500 hover:text-gray-700 hover:bg-gray-100 rounded-lg transition-all"
                >
                  <Pencil className="w-4 h-4" />
                  Editar
                </button>
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
    </div>
  );
}
