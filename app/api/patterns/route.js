import { NextResponse } from 'next/server'
import { cookies } from 'next/headers'
import { isValidSession } from '../../../lib/auth'
import { getFabricPatterns } from '../../../lib/fabric'
import { getFabricPatternsCloud } from '../../../lib/fabric-cloud'

export async function GET() {
  try {
    // Check authentication
    const cookieStore = cookies()
    const sessionCookie = cookieStore.get('session')

    if (!sessionCookie || !isValidSession(sessionCookie.value)) {
      return NextResponse.json(
        { error: 'Unauthorized' },
        { status: 401 }
      )
    }

    // Use cloud patterns if not running locally
    const isProduction = process.env.NODE_ENV === 'production' || process.env.VERCEL
    const patterns = isProduction
      ? await getFabricPatternsCloud()
      : await getFabricPatterns()

    return NextResponse.json({ patterns })
  } catch (error) {
    console.error('Error fetching patterns:', error)
    return NextResponse.json(
      { error: 'Failed to fetch patterns' },
      { status: 500 }
    )
  }
}