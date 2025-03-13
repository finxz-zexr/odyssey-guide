import { Inter } from 'next/font/google';
import Navigation from '../components/Navigation';
import '../styles/globals.css';

const inter = Inter({ subsets: ['latin'] });

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <title>Homer's Odyssey - A Philosophical Guide</title>
        <meta name="description" content="A chapter-by-chapter guide to Homer's Odyssey using Robert Fagles' translation and Seth Benardete's philosophical interpretation" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body className={inter.className}>
        <header>
          <div className="container header-content">
            <div className="logo">
              The <span>Odyssey</span> Guide
            </div>
            <Navigation />
          </div>
        </header>
        <main>
          <div className="container">
            {children}
          </div>
        </main>
        <footer>
          <div className="container footer-content">
            <div className="footer-logo">
              The <span>Odyssey</span> Guide
            </div>
            <div className="footer-links">
              <ul>
                <li><a href="/">Home</a></li>
                <li><a href="/books">Books</a></li>
                <li><a href="/about">About</a></li>
              </ul>
            </div>
          </div>
          <div className="copyright">
            &copy; {new Date().getFullYear()} The Odyssey Guide - Based on Robert Fagles' translation and Seth Benardete's "The Bow and the Lyre"
          </div>
        </footer>
      </body>
    </html>
  );
}
