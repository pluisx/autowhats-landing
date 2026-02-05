import { NextRequest, NextResponse } from 'next/server';
import { createServerSupabase } from '@/lib/supabase';

export const dynamic = 'force-dynamic';

export async function GET() {
  const supabase = createServerSupabase();
  const { data, error } = await supabase
    .from('configuracion_bot')
    .select('*')
    .limit(1)
    .single();

  if (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }

  return NextResponse.json(data);
}

export async function PUT(request: NextRequest) {
  const supabase = createServerSupabase();
  const body = await request.json();

  if (!body.id) {
    return NextResponse.json({ error: 'ID requerido' }, { status: 400 });
  }

  const { data, error } = await supabase
    .from('configuracion_bot')
    .update({
      nombre: body.nombre,
      nombre_negocio: body.nombre_negocio,
      ciudad: body.ciudad,
      nombre_asistente: body.nombre_asistente,
      instagram: body.instagram,
      tono_general: body.tono_general,
      usar_emojis: body.usar_emojis,
      emojis_favoritos: body.emojis_favoritos,
      longitud_mensajes: body.longitud_mensajes,
      palabras_carinosas: body.palabras_carinosas,
      frecuencia_carinosas: body.frecuencia_carinosas,
      signos_exclamacion: body.signos_exclamacion,
      ejemplos_buenos: body.ejemplos_buenos,
      ejemplos_malos: body.ejemplos_malos,
      updated_at: new Date().toISOString(),
    })
    .eq('id', body.id)
    .select()
    .single();

  if (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }

  return NextResponse.json(data);
}
