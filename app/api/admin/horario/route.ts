import { NextResponse } from 'next/server';

// Horario is now managed via configuracion_bot
// This route redirects to avoid breaking anything
export async function GET() {
  return NextResponse.json({ message: 'Use /api/admin/configuracion instead' }, { status: 301 });
}
