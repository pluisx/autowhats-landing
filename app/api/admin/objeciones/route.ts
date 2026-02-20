import { NextRequest, NextResponse } from 'next/server';
import { createServerSupabase } from '@/lib/supabase';
import type { RespuestaObjecion } from '@/lib/types/admin';

export async function GET() {
  const supabase = createServerSupabase();
  const { data, error } = await supabase
    .from('respuestas_objeciones')
    .select('*')
    .order('objecion');

  if (error) {
    return NextResponse.json({ error: 'Error interno del servidor' }, { status: 500 });
  }

  return NextResponse.json(data);
}

export async function POST(request: NextRequest) {
  const supabase = createServerSupabase();
  const body: RespuestaObjecion = await request.json();

  const { data, error } = await supabase
    .from('respuestas_objeciones')
    .insert({
      objecion: body.objecion,
      respuesta_1: body.respuesta_1,
      respuesta_2: body.respuesta_2 || null,
      derivar_a_gigi: body.derivar_a_gigi,
      activo: body.activo,
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
  const body: RespuestaObjecion = await request.json();

  if (!body.id) {
    return NextResponse.json({ error: 'ID requerido' }, { status: 400 });
  }

  const { data, error } = await supabase
    .from('respuestas_objeciones')
    .update({
      objecion: body.objecion,
      respuesta_1: body.respuesta_1,
      respuesta_2: body.respuesta_2 || null,
      derivar_a_gigi: body.derivar_a_gigi,
      activo: body.activo,
      updated_at: new Date().toISOString(),
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
    .from('respuestas_objeciones')
    .delete()
    .eq('id', id);

  if (error) {
    return NextResponse.json({ error: 'Error interno del servidor' }, { status: 500 });
  }

  return NextResponse.json({ success: true });
}
