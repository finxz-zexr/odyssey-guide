import './globals.css'

export const metadata = {
  title: 'Odyssey Guide',
  description: 'A guide to Homer\'s Odyssey',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-gray-100">
        <header className="bg-blue-600 text-white p-4">
          <div className="container mx-auto">
            <h1 className="text-2xl font-bold">Odyssey Guide</h1>
          </div>
        </header>
        {children}
        <footer className="bg-gray-800 text-white p-4 mt-8">
          <div className="container mx-auto text-center">
            <p>© {new Date().getFullYear()} Odyssey Guide - Simplified Version</p>
          </div>
        </footer>
      </body>
    </html>
  )
}
