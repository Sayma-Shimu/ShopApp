import { NextResponse } from 'next/server';

export function proxy(request) {
  const authToken = request.cookies.get('auth-token')?.value;
  
  // Check if user is authenticated
  const isAuthenticated = authToken === 'authenticated';
  
  // If not authenticated, redirect to login
  if (!isAuthenticated) {
    return NextResponse.redirect(new URL('/login', request.url));
  }
  
  return NextResponse.next();
}

export const config = {
  matcher: '/add-item/:path*',
};
