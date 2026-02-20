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

function timingSafeEqual(a: string, b: string): boolean {
  if (a.length !== b.length) return false;
  let result = 0;
  for (let i = 0; i < a.length; i++) {
    result |= a.charCodeAt(i) ^ b.charCodeAt(i);
  }
  return result === 0;
}

export async function POST(request: NextRequest) {
  try {
    const { password } = await request.json();

    if (!password) {
      return NextResponse.json({ error: 'Credenciales invalidas' }, { status: 401 });
    }

    const adminPassword = process.env.ADMIN_PASSWORD_GIGI;
    const sessionSecret = process.env.ADMIN_SESSION_SECRET;

    if (!adminPassword || !sessionSecret) {
      return NextResponse.json({ error: 'Credenciales invalidas' }, { status: 401 });
    }

    if (!timingSafeEqual(password, adminPassword)) {
      return NextResponse.json({ error: 'Credenciales invalidas' }, { status: 401 });
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
