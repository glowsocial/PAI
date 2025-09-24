import Link from 'next/link'

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center p-6">
      <div className="max-w-md w-full bg-white rounded-lg shadow-sm border border-gray-200 p-8 text-center">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">PAI</h1>
        <p className="text-gray-600 mb-8">Personal AI Infrastructure</p>

        <div className="space-y-4">
          <Link
            href="/patterns"
            className="block w-full px-4 py-3 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors font-medium"
          >
            🧠 Browse Fabric Patterns
          </Link>

          <div className="text-sm text-gray-500">
            Access your fabric patterns through a web interface
          </div>
        </div>
      </div>
    </div>
  )
}