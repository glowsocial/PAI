import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export function middleware(request: NextRequest) {
    // Check for auth cookie
    const isAuthenticated = request.cookies.get('pai-auth')?.value === 'authenticated'

    // Allow access to login page and API
    if (request.nextUrl.pathname === '/login' || request.nextUrl.pathname.startsWith('/api/')) {
        return NextResponse.next()
    }

    // Redirect to login if not authenticated
    if (!isAuthenticated) {
        return NextResponse.redirect(new URL('/login', request.url))
    }

    return NextResponse.next()
}

export const config = {
    matcher: ['/((?!_next/static|_next/image|favicon.ico).*)'],
}
