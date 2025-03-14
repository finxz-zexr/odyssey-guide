'use client'
import { useState, useEffect } from 'react'
import Link from 'next/link'

export default function Home() {
  const [count, setCount] = useState(0)
  const [recentAccess, setRecentAccess] = useState([])

  useEffect(() => {
    // Initialize with some data
    setCount(0)
    setRecentAccess([{ accessed_at: new Date().toISOString() }])
  }, [])

  const handleIncrement = () => {
    setCount(count + 1)
    const newLog = { accessed_at: new Date().toISOString() }
    setRecentAccess([newLog, ...recentAccess.slice(0, 4)])
  }

  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-8">
      <div className="w-full max-w-md p-6 bg-white rounded-lg shadow-md">
        <h1 className="text-2xl font-bold text-center mb-6">Odyssey Guide</h1>
        
        <p className="text-xl font-medium text-center mb-4">Views: {count}</p>
        
        <div className="flex justify-center mb-6">
          <button 
            onClick={handleIncrement}
            className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 flex items-center"
          >
            <span className="mr-2">+</span>
            Increment
          </button>
        </div>

        <div className="mb-6">
          <h2 className="text-lg font-medium mb-2">Recent Access:</h2>
          <div className="max-h-[100px] overflow-y-auto border rounded-md p-2">
            {recentAccess.map((log, i) => (
              <div key={i} className="text-sm text-gray-600 py-1">
                {new Date(log.accessed_at).toLocaleString()}
              </div>
            ))}
          </div>
        </div>

        <nav className="flex flex-col space-y-2">
          <Link href="/books" className="text-blue-600 hover:underline">
            Browse Books
          </Link>
          <Link href="/about" className="text-blue-600 hover:underline">
            About
          </Link>
        </nav>
      </div>
    </main>
  )
}
