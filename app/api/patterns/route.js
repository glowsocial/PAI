import { NextResponse } from 'next/server'
import { cookies } from 'next/headers'
import { isValidSession } from '../../../lib/auth'
import { getFabricPatterns } from '../../../lib/fabric'

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

    const patterns = await getFabricPatterns()
    return NextResponse.json({ patterns })
  } catch (error) {
    console.error('Error fetching patterns:', error)
    return NextResponse.json(
      { error: 'Failed to fetch patterns' },
      { status: 500 }
    )
  }
}