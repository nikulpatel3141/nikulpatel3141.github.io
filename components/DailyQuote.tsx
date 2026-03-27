'use client';

import { useEffect, useState } from 'react';

interface Quote {
  text: string;
  author: string;
  work: string;
}

export default function DailyQuote() {
  const [quote, setQuote] = useState<Quote | null>(null);
  const [error, setError] = useState(false);

  useEffect(() => {
    fetch('/quotes.csv')
      .then((res) => {
        if (!res.ok) throw new Error('Failed to fetch');
        return res.text();
      })
      .then((text) => {
        const lines = text
          .split('\n')
          .map((l) => l.trim())
          .filter(Boolean);

        if (lines.length === 0) return;

        const dayIndex = Math.floor(Date.now() / 86400000);
        const line = lines[dayIndex % lines.length];
        const parts = line.split('|');

        if (parts.length >= 2) {
          setQuote({
            text: parts[0]?.trim() ?? '',
            author: parts[1]?.trim() ?? '',
            work: parts[2]?.trim() ?? '',
          });
        }
      })
      .catch(() => setError(true));
  }, []);

  if (error || !quote) return null;

  return (
    <figure className="border-l-2 border-zinc-300 dark:border-zinc-700 pl-5 my-6">
      <blockquote className="text-zinc-700 dark:text-zinc-300 italic leading-relaxed text-sm sm:text-base">
        &ldquo;{quote.text}&rdquo;
      </blockquote>
      <figcaption className="mt-2 text-xs text-zinc-500 dark:text-zinc-500">
        — {quote.author}
        {quote.work && (
          <span className="text-zinc-400 dark:text-zinc-600">, {quote.work}</span>
        )}
      </figcaption>
    </figure>
  );
}
