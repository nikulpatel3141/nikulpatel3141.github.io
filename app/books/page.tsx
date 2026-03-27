import type { Metadata } from 'next';
import { getBooks } from '@/lib/content';
import BookCard from '@/components/BookCard';

export const metadata: Metadata = {
  title: 'Books',
  description: 'Books I have read and found worth noting.',
};

export default function BooksPage() {
  const books = getBooks();

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 py-16">
      <h1 className="text-4xl font-bold text-zinc-900 dark:text-zinc-100 mb-3">Books</h1>
      <p className="text-zinc-600 dark:text-zinc-400 mb-10">
        Books I have read and found worth noting, with brief summaries.
      </p>

      {books.length === 0 ? (
        <p className="text-zinc-500">No books yet.</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {books.map((book) => (
            <BookCard key={book.slug} book={book} showExcerpt />
          ))}
        </div>
      )}
    </div>
  );
}
