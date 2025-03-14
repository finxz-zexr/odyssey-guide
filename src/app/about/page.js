'use client'
import Link from 'next/link'

export default function AboutPage() {
  return (
    <main className="flex min-h-screen flex-col items-center p-8">
      <div className="w-full max-w-2xl">
        <h1 className="text-3xl font-bold mb-6 text-center">About The Odyssey Guide</h1>
        
        <div className="bg-white p-6 rounded-lg shadow-md">
          <p className="mb-4">
            The Odyssey is an ancient Greek epic poem attributed to Homer. It is one of two major ancient Greek epic poems attributed to him, along with the Iliad.
          </p>
          
          <p className="mb-4">
            The poem mainly focuses on the Greek hero Odysseus (known as Ulysses in Roman myths), king of Ithaca, and his journey home after the fall of Troy. It takes Odysseus ten years to reach Ithaca after the ten-year Trojan War.
          </p>
          
          <p className="mb-4">
            This guide provides access to all 24 books of The Odyssey, allowing readers to explore this classic work of literature in a convenient digital format.
          </p>
          
          <p className="mb-4">
            The Odyssey Guide is a simplified demonstration project showcasing basic Next.js functionality.
          </p>
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
