'use client'
import { useEffect, useState } from 'react'
import Link from 'next/link'

export default function BookPage({ params }) {
  const { bookNumber } = params
  const [content, setContent] = useState('')
  
  useEffect(() => {
    // Simulate fetching book content
    const bookContent = `This is the content of Book ${bookNumber} of The Odyssey.
    
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam auctor, 
    nisl eget ultricies tincidunt, nisl nisl aliquam nisl, eget ultricies nisl 
    nisl eget nisl. Nullam auctor, nisl eget ultricies tincidunt, nisl nisl 
    aliquam nisl, eget ultricies nisl nisl eget nisl.
    
    Nullam auctor, nisl eget ultricies tincidunt, nisl nisl aliquam nisl, 
    eget ultricies nisl nisl eget nisl. Nullam auctor, nisl eget ultricies 
    tincidunt, nisl nisl aliquam nisl, eget ultricies nisl nisl eget nisl.`
    
    setContent(bookContent)
  }, [bookNumber])
  
  return (
    <main className="flex min-h-screen flex-col items-center p-8">
      <div className="w-full max-w-2xl">
        <h1 className="text-3xl font-bold mb-4">Book {bookNumber}</h1>
        
        <div className="bg-white p-6 rounded-lg shadow-md">
          <div className="prose">
            {content.split('\n').map((paragraph, index) => (
              <p key={index} className="mb-4">{paragraph}</p>
            ))}
          </div>
        </div>
        
        <div className="mt-8 flex justify-between">
          {parseInt(bookNumber) > 1 && (
            <Link href={`/books/${parseInt(bookNumber) - 1}`} className="text-blue-600 hover:underline">
              Previous Book
            </Link>
          )}
          <Link href="/books" className="text-blue-600 hover:underline">
            Back to Books
          </Link>
          {parseInt(bookNumber) < 24 && (
            <Link href={`/books/${parseInt(bookNumber) + 1}`} className="text-blue-600 hover:underline">
              Next Book
            </Link>
          )}
        </div>
      </div>
    </main>
  )
}
