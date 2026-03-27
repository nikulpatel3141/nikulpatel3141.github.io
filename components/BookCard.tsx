import Link from 'next/link';
import type { Book } from '@/lib/types';

interface Props {
  book: Book;
  showExcerpt?: boolean;
}

export default function BookCard({ book, showExcerpt = false }: Props) {
  const excerpt =
    showExcerpt && book.content
      ? book.content.replace(/^#+\s.*$/gm, '').replace(/[*_`#>]/g, '').trim().slice(0, 150) +
        (book.content.length > 150 ? '…' : '')
      : null;

  return (
    <div className="group relative flex flex-col bg-white dark:bg-[#141416] border border-zinc-200 dark:border-zinc-800 rounded-xl p-5 transition-all duration-200 hover:border-zinc-400 dark:hover:border-zinc-500 hover:shadow-lg hover:-translate-y-0.5">
      <Link
        href={`/books/${book.slug}`}
        className="text-base font-semibold text-zinc-900 dark:text-zinc-100 hover:text-blue-600 dark:hover:text-blue-400 transition-colors leading-snug mb-1"
      >
        {book.title}
      </Link>

      {book.resolvedAuthor && (
        <p className="text-sm text-zinc-500 dark:text-zinc-500 mb-3">
          {book.resolvedAuthor}
        </p>
      )}

      {excerpt && (
        <p className="text-sm text-zinc-600 dark:text-zinc-400 mb-3 flex-1 leading-relaxed">
          {excerpt}
        </p>
      )}

      {book.tags && book.tags.length > 0 && (
        <div className="flex flex-wrap gap-1.5 mt-auto">
          {book.tags.map((tag) => (
            <span
              key={tag}
              className="bg-zinc-100 dark:bg-zinc-800 text-zinc-600 dark:text-zinc-400 text-xs px-2 py-0.5 rounded-full capitalize"
            >
              {tag}
            </span>
          ))}
        </div>
      )}

      <Link
        href={`/books/${book.slug}`}
        className="absolute inset-0 rounded-xl"
        aria-hidden="true"
        tabIndex={-1}
      />
    </div>
  );
}
