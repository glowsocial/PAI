import './globals.css'

export const metadata = {
  title: 'PAI Patterns',
  description: 'Fabric Pattern Browser for Personal AI Infrastructure',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  )
}