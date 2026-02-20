import { NextRequest, NextResponse } from 'next/server';
import { createServerSupabase } from '@/lib/supabase';
import type { Servicio } from '@/lib/types/admin';

export async function GET() {
  const supabase = createServerSupabase();
  const { data, error } = await supabase
    .from('servicios')
    .select('*')
    .order('categoria')
    .order('nombre');

  if (error) {
    return NextResponse.json({ error: 'Error interno del servidor' }, { status: 500 });
  }

  return NextResponse.json(data);
}

export async function POST(request: NextRequest) {
  const supabase = createServerSupabase();
  const body: Servicio = await request.json();

  const { data, error } = await supabase
    .from('servicios')
    .insert({
      nombre: body.nombre,
      descripcion: body.descripcion,
      precio: body.precio,
      duracion_minutos: body.duracion_minutos,
      categoria: body.categoria,
      activo: body.activo,
      horario: body.horario || null,
    })
    .select()
    .single();

  if (error) {
    return NextResponse.json({ error: 'Error interno del servidor' }, { status: 500 });
  }

  return NextResponse.json(data, { status: 201 });
}

export async function PUT(request: NextRequest) {
  const supabase = createServerSupabase();
  const body: Servicio = await request.json();

  if (!body.id) {
    return NextResponse.json({ error: 'ID requerido' }, { status: 400 });
  }

  const { data, error } = await supabase
    .from('servicios')
    .update({
      nombre: body.nombre,
      descripcion: body.descripcion,
      precio: body.precio,
      duracion_minutos: body.duracion_minutos,
      categoria: body.categoria,
      activo: body.activo,
      horario: body.horario || null,
    })
    .eq('id', body.id)
    .select()
    .single();

  if (error) {
    return NextResponse.json({ error: 'Error interno del servidor' }, { status: 500 });
  }

  return NextResponse.json(data);
}

export async function DELETE(request: NextRequest) {
  const supabase = createServerSupabase();
  const { id } = await request.json();

  if (!id) {
    return NextResponse.json({ error: 'ID requerido' }, { status: 400 });
  }

  const { error } = await supabase
    .from('servicios')
    .delete()
    .eq('id', id);

  if (error) {
    return NextResponse.json({ error: 'Error interno del servidor' }, { status: 500 });
  }

  return NextResponse.json({ success: true });
}
