import { NextResponse } from 'next/server'
import { validatePassword, createSession } from '../../../../lib/auth'
import { v4 as uuidv4 } from 'uuid'

export async function POST(request) {
  try {
    const { password } = await request.json()

    if (!password) {
      return NextResponse.json(
        { error: 'Password is required' },
        { status: 400 }
      )
    }

    if (!validatePassword(password)) {
      return NextResponse.json(
        { error: 'Invalid password' },
        { status: 401 }
      )
    }

    // Create session
    const sessionId = uuidv4()
    createSession(sessionId)

    return NextResponse.json({ sessionId })
  } catch (error) {
    console.error('Login error:', error)
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    )
  }
}