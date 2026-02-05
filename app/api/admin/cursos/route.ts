import { NextRequest, NextResponse } from 'next/server';
import { createServerSupabase } from '@/lib/supabase';
import type { Curso } from '@/lib/types/admin';

function buildCursoData(body: Curso) {
  return {
    nombre: body.nombre,
    descripcion: body.descripcion,
    precio: body.precio,
    duracion_dias: body.duracion_dias,
    duracion_descripcion: body.duracion_descripcion,
    fechas_descripcion: body.fechas_descripcion,
    hora_inicio: body.hora_inicio,
    horario: body.horario || null,
    ubicacion: body.ubicacion,
    cupos_disponibles: body.cupos_disponibles,
    deposito_porcentaje: body.deposito_porcentaje,
    deposito_monto: body.deposito_monto,
    descuento_hoy: body.descuento_hoy,
    restante_sin_descuento: body.restante_sin_descuento,
    restante_con_descuento: body.restante_con_descuento,
    incluye_materiales: body.incluye_materiales,
    incluye_certificacion: body.incluye_certificacion,
    incluye_almuerzo: body.incluye_almuerzo,
    proxima_fecha: body.proxima_fecha || null,
    edad_minima: body.edad_minima,
    activo: body.activo,
    modulos: body.modulos || null,
    metodos_pago: body.metodos_pago || null,
    politica_reembolso: body.politica_reembolso || null,
    nota_licencia: body.nota_licencia || null,
    link_deposito: body.link_deposito || null,
    link_restante: body.link_restante || null,
    link_restante_descuento: body.link_restante_descuento || null,
    link_completo: body.link_completo || null,
    link_completo_descuento: body.link_completo_descuento || null,
  };
}

export async function GET() {
  const supabase = createServerSupabase();
  const { data, error } = await supabase
    .from('cursos')
    .select('*')
    .order('created_at', { ascending: false });

  if (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }

  return NextResponse.json(data);
}

export async function POST(request: NextRequest) {
  const supabase = createServerSupabase();
  const body: Curso = await request.json();

  const { data, error } = await supabase
    .from('cursos')
    .insert(buildCursoData(body))
    .select()
    .single();

  if (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }

  return NextResponse.json(data, { status: 201 });
}

export async function PUT(request: NextRequest) {
  const supabase = createServerSupabase();
  const body: Curso = await request.json();

  if (!body.id) {
    return NextResponse.json({ error: 'ID requerido' }, { status: 400 });
  }

  const { data, error } = await supabase
    .from('cursos')
    .update(buildCursoData(body))
    .eq('id', body.id)
    .select()
    .single();

  if (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
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
    .from('cursos')
    .delete()
    .eq('id', id);

  if (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }

  return NextResponse.json({ success: true });
}
