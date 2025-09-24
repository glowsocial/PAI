import { NextResponse } from 'next/server'
import { cookies } from 'next/headers'
import { isValidSession } from '../../../lib/auth'
import { runFabricPattern } from '../../../lib/fabric'

export async function POST(request) {
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

    const { pattern, input } = await request.json()

    if (!pattern || !input) {
      return NextResponse.json(
        { error: 'Pattern and input are required' },
        { status: 400 }
      )
    }

    // Validate pattern name (security check)
    if (!/^[a-zA-Z0-9_-]+$/.test(pattern)) {
      return NextResponse.json(
        { error: 'Invalid pattern name' },
        { status: 400 }
      )
    }

    const result = await runFabricPattern(pattern, input)
    return NextResponse.json({ result })
  } catch (error) {
    console.error('Error running fabric pattern:', error)
    return NextResponse.json(
      { error: error.message || 'Failed to run fabric pattern' },
      { status: 500 }
    )
  }
}