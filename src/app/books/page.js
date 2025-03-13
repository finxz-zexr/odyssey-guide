import Link from 'next/link';

export default function Books() {
  // Array of all 24 books with their titles
  const books = [
    { number: 1, title: "Athena Inspires the Prince" },
    { number: 2, title: "Telemachus Sets Sail" },
    { number: 3, title: "King Nestor Remembers" },
    { number: 4, title: "The King and Queen of Sparta" },
    { number: 5, title: "Odysseus—Nymph and Shipwreck" },
    { number: 6, title: "The Princess and the Stranger" },
    { number: 7, title: "Phaeacia's Halls and Gardens" },
    { number: 8, title: "A Day for Songs and Contests" },
    { number: 9, title: "In the One-Eyed Giant's Cave" },
    { number: 10, title: "The Bewitching Queen of Aeaea" },
    { number: 11, title: "The Kingdom of the Dead" },
    { number: 12, title: "The Cattle of the Sun" },
    { number: 13, title: "Ithaca at Last" },
    { number: 14, title: "The Loyal Swineherd" },
    { number: 15, title: "The Prince Sets Sail for Home" },
    { number: 16, title: "Father and Son" },
    { number: 17, title: "Stranger at the Gates" },
    { number: 18, title: "The Beggar-King of Ithaca" },
    { number: 19, title: "The Queen and the Beggar" },
    { number: 20, title: "Portents Gather" },
    { number: 21, title: "Odysseus Strings His Bow" },
    { number: 22, title: "Slaughter in the Hall" },
    { number: 23, title: "The Great Rooted Bed" },
    { number: 24, title: "Peace" }
  ];

  return (
    <div className="books-page">
      <h1 className="section-title">The 24 Books of Homer's Odyssey</h1>
      
      <div className="books-intro">
        <p>
          Homer's Odyssey is divided into 24 books, each focusing on different episodes in Odysseus's journey 
          home from Troy and his eventual reclaiming of his household. Below you'll find all 24 books with 
          detailed summaries, character analyses, and philosophical interpretations based on Seth Benardete's 
          "The Bow and the Lyre: A Platonic Reading of the Odyssey."
        </p>
      </div>
      
      <div className="book-grid">
        {books.map((book) => (
          <div className="book-card" key={book.number}>
            <div className="book-card-content">
              <h3>Book {book.number}: {book.title}</h3>
              <Link href={`/books/${book.number}`} className="btn">
                Read Analysis
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
