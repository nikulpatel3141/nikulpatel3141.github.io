import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { getBook, getBooks, markdownToHtml } from '@/lib/content';

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  const books = getBooks();
  return books.map((b) => ({ slug: b.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const book = getBook(slug);
  if (!book) return {};
  return {
    title: book.title,
    description: book.description ?? `Notes on ${book.title}${book.resolvedAuthor ? ` by ${book.resolvedAuthor}` : ''}.`,
  };
}

export default async function BookPage({ params }: Props) {
  const { slug } = await params;
  const book = getBook(slug);

  if (!book) notFound();

  const contentHtml = await markdownToHtml(book.content);

  const formattedDate = book.date
    ? new Date(book.date).toLocaleDateString('en-GB', {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
      })
    : null;

  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 py-16">
      <header className="mb-10">
        <h1 className="text-4xl font-bold text-zinc-900 dark:text-zinc-100 mb-2 leading-tight">
          {book.title}
        </h1>

        {book.resolvedAuthor && (
          <p className="text-lg text-zinc-500 dark:text-zinc-500 mb-3">
            {book.resolvedAuthor}
          </p>
        )}

        <div className="flex flex-wrap items-center gap-3 text-sm text-zinc-500 dark:text-zinc-500 mb-4">
          {formattedDate && (
            <time dateTime={book.date}>Read {formattedDate}</time>
          )}
        </div>

        {book.tags && book.tags.length > 0 && (
          <div className="flex flex-wrap gap-1.5">
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
      </header>

      <article
        className="prose prose-zinc dark:prose-invert max-w-none prose-headings:font-semibold prose-a:text-blue-600 dark:prose-a:text-blue-400 prose-code:font-mono prose-blockquote:border-zinc-300 dark:prose-blockquote:border-zinc-700"
        dangerouslySetInnerHTML={{ __html: contentHtml }}
      />
    </div>
  );
}
