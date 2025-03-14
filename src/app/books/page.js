'use client'
import Link from 'next/link'

export default function BooksPage() {
  const books = Array.from({ length: 24 }, (_, i) => i + 1)
  
  return (
    <main className="flex min-h-screen flex-col items-center p-8">
      <div className="w-full max-w-4xl">
        <h1 className="text-3xl font-bold mb-8 text-center">The Odyssey Books</h1>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {books.map((bookNumber) => (
            <Link 
              key={bookNumber}
              href={`/books/${bookNumber}`}
              className="p-4 border rounded-lg hover:bg-gray-50 transition-colors"
            >
              <div className="text-xl font-medium">Book {bookNumber}</div>
              <p className="text-gray-600">Click to read</p>
            </Link>
          ))}
        </div>
        
        <div className="mt-8 text-center">
          <Link href="/" className="text-blue-600 hover:underline">
            Back to Home
          </Link>
        </div>
      </div>
    </main>
  )
}
