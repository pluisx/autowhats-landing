import { NextRequest, NextResponse } from 'next/server';

export async function middleware(request: NextRequest) {
  const sessionCookie = request.cookies.get('admin_session')?.value;

  if (!sessionCookie) {
    return NextResponse.redirect(new URL('/admin', request.url));
  }

  try {
    const secret = process.env.ADMIN_SESSION_SECRET!;
    const [payload, signature] = sessionCookie.split('.');

    if (!payload || !signature) {
      return NextResponse.redirect(new URL('/admin', request.url));
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

    if (signature !== expectedB64) {
      return NextResponse.redirect(new URL('/admin', request.url));
    }

    const data = JSON.parse(atob(payload));

    if (data.exp && data.exp < Date.now()) {
      const response = NextResponse.redirect(new URL('/admin', request.url));
      response.cookies.delete('admin_session');
      return response;
    }

    return NextResponse.next();
  } catch {
    return NextResponse.redirect(new URL('/admin', request.url));
  }
}

export const config = {
  matcher: '/admin/dashboard/:path*',
};
