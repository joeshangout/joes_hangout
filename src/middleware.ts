// middleware.ts

import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(req: NextRequest) {
    const token = req.cookies.get('auth_token');

    // Check if the user is authenticated
    if (!token) {
        // Redirect to login page if not authenticated
        return NextResponse.redirect(new URL('/login', req.url));
    }
    
    // Continue with the request if authenticated
    return NextResponse.next();
}

export const config = {
    matcher: ['/protected/:path*'], // Apply middleware to protected routes
};