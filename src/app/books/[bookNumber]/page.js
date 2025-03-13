import { notFound } from 'next/navigation';
import Link from 'next/link';
import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { remark } from 'remark';
import html from 'remark-html';

// Function to get book content
async function getBookContent(bookNumber) {
  try {
    const filePath = path.join(process.cwd(), 'src/content', `book${bookNumber}.md`);
    const fileContents = fs.readFileSync(filePath, 'utf8');
    
    // Use gray-matter to parse the markdown metadata
    const { content } = matter(fileContents);
    
    // Use remark to convert markdown into HTML string
    const processedContent = await remark()
      .use(html)
      .process(content);
    
    const contentHtml = processedContent.toString();
    
    return contentHtml;
  } catch (error) {
    console.error(`Error reading book ${bookNumber}:`, error);
    return null;
  }
}

// Function to get book title
function getBookTitle(bookNumber) {
  const titles = [
    "Athena Inspires the Prince",
    "Telemachus Sets Sail",
    "King Nestor Remembers",
    "The King and Queen of Sparta",
    "Odysseus—Nymph and Shipwreck",
    "The Princess and the Stranger",
    "Phaeacia's Halls and Gardens",
    "A Day for Songs and Contests",
    "In the One-Eyed Giant's Cave",
    "The Bewitching Queen of Aeaea",
    "The Kingdom of the Dead",
    "The Cattle of the Sun",
    "Ithaca at Last",
    "The Loyal Swineherd",
    "The Prince Sets Sail for Home",
    "Father and Son",
    "Stranger at the Gates",
    "The Beggar-King of Ithaca",
    "The Queen and the Beggar",
    "Portents Gather",
    "Odysseus Strings His Bow",
    "Slaughter in the Hall",
    "The Great Rooted Bed",
    "Peace"
  ];
  
  return titles[bookNumber - 1] || "Unknown Book";
}

export default async function BookPage({ params }) {
  const bookNumber = parseInt(params.bookNumber, 10);
  
  // Validate book number
  if (isNaN(bookNumber) || bookNumber < 1 || bookNumber > 24) {
    notFound();
  }
  
  const bookContent = await getBookContent(bookNumber);
  
  if (!bookContent) {
    notFound();
  }
  
  const bookTitle = getBookTitle(bookNumber);
  const prevBook = bookNumber > 1 ? bookNumber - 1 : null;
  const nextBook = bookNumber < 24 ? bookNumber + 1 : null;
  
  return (
    <div className="book-detail">
      <div className="book-header">
        <h1>Book {bookNumber}: {bookTitle}</h1>
      </div>
      
      <div className="book-content" dangerouslySetInnerHTML={{ __html: bookContent }} />
      
      <div className="book-navigation">
        {prevBook && (
          <Link href={`/books/${prevBook}`} className="btn">
            ← Book {prevBook}: {getBookTitle(prevBook)}
          </Link>
        )}
        
        <Link href="/books" className="btn">
          All Books
        </Link>
        
        {nextBook && (
          <Link href={`/books/${nextBook}`} className="btn">
            Book {nextBook}: {getBookTitle(nextBook)} →
          </Link>
        )}
      </div>
    </div>
  );
}
