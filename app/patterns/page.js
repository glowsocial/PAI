import { cookies } from 'next/headers'
import { redirect } from 'next/navigation'
import { isValidSession } from '../../lib/auth'
import FabricPatternBrowser from '../../components/FabricPatternBrowser'

export default async function PatternsPage() {
  const cookieStore = cookies()
  const sessionCookie = cookieStore.get('session')

  // Check if user is authenticated
  if (!sessionCookie || !isValidSession(sessionCookie.value)) {
    redirect('/patterns/login')
  }

  return <FabricPatternBrowser />
}