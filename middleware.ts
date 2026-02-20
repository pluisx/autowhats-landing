import { NextRequest, NextResponse } from 'next/server';

function timingSafeEqual(a: string, b: string): boolean {
  if (a.length !== b.length) return false;
  let result = 0;
  for (let i = 0; i < a.length; i++) {
    result |= a.charCodeAt(i) ^ b.charCodeAt(i);
  }
  return result === 0;
}

function unauthorizedResponse(isApiRoute: boolean, request: NextRequest) {
  if (isApiRoute) {
    return NextResponse.json({ error: 'No autorizado' }, { status: 401 });
  }
  return NextResponse.redirect(new URL('/admin', request.url));
}

export async function middleware(request: NextRequest) {
  const isApiRoute = request.nextUrl.pathname.startsWith('/api/admin/');
  const sessionCookie = request.cookies.get('admin_session')?.value;

  if (!sessionCookie) {
    return unauthorizedResponse(isApiRoute, request);
  }

  try {
    const secret = process.env.ADMIN_SESSION_SECRET!;
    const [payload, signature] = sessionCookie.split('.');

    if (!payload || !signature) {
      return unauthorizedResponse(isApiRoute, request);
    }

    const encoder = new TextEncoder();
    const key = await crypto.subtle.importKey(
      'raw',
      encoder.encode(secret),
      { name: 'HMAC', hash: 'SHA-256' },
      false,
      ['sign']
    );

    const expectedSignature = await crypto.subtle.sign(
      'HMAC',
      key,
      encoder.encode(payload)
    );

    const bytes = Array.from(new Uint8Array(expectedSignature));
    const expectedB64 = btoa(String.fromCharCode.apply(null, bytes))
      .replace(/\+/g, '-')
      .replace(/\//g, '_')
      .replace(/=+$/, '');

    if (!timingSafeEqual(signature, expectedB64)) {
      return unauthorizedResponse(isApiRoute, request);
    }

    const data = JSON.parse(atob(payload));

    if (data.exp && data.exp < Date.now()) {
      const response = unauthorizedResponse(isApiRoute, request);
      response.cookies.delete('admin_session');
      return response;
    }

    return NextResponse.next();
  } catch {
    return unauthorizedResponse(isApiRoute, request);
  }
}

export const config = {
  matcher: ['/admin/dashboard/:path*', '/api/admin/((?!login).*)'],
};
