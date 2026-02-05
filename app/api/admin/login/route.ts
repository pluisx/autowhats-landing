import { NextRequest, NextResponse } from 'next/server';

async function signPayload(payload: string, secret: string): Promise<string> {
  const encoder = new TextEncoder();
  const key = await crypto.subtle.importKey(
    'raw',
    encoder.encode(secret),
    { name: 'HMAC', hash: 'SHA-256' },
    false,
    ['sign']
  );

  const signature = await crypto.subtle.sign('HMAC', key, encoder.encode(payload));
  const bytes = Array.from(new Uint8Array(signature));
  return btoa(String.fromCharCode.apply(null, bytes))
    .replace(/\+/g, '-')
    .replace(/\//g, '_')
    .replace(/=+$/, '');
}

export async function POST(request: NextRequest) {
  try {
    const { password } = await request.json();

    if (!password) {
      return NextResponse.json({ error: 'Password requerido' }, { status: 400 });
    }

    const adminPassword = process.env.ADMIN_PASSWORD_GIGI;
    const sessionSecret = process.env.ADMIN_SESSION_SECRET;

    if (!adminPassword || !sessionSecret) {
      return NextResponse.json({ error: 'Configuracion del servidor incompleta' }, { status: 500 });
    }

    if (password !== adminPassword) {
      return NextResponse.json({ error: 'Password incorrecto' }, { status: 401 });
    }

    const payload = btoa(JSON.stringify({
      tenant: 'gigi',
      exp: Date.now() + 24 * 60 * 60 * 1000, // 24 hours
    }));

    const signature = await signPayload(payload, sessionSecret);
    const token = `${payload}.${signature}`;

    const response = NextResponse.json({ success: true });
    response.cookies.set('admin_session', token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      sameSite: 'lax',
      maxAge: 24 * 60 * 60, // 24 hours
      path: '/',
    });

    return response;
  } catch {
    return NextResponse.json({ error: 'Error del servidor' }, { status: 500 });
  }
}
