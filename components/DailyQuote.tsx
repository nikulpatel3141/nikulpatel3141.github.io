'use client';

import { useEffect, useState } from 'react';
import { Text } from '@radix-ui/themes';

interface Quote { text: string; author: string; work: string; }

export default function DailyQuote() {
  const [quote, setQuote] = useState<Quote | null>(null);

  useEffect(() => {
    fetch('/quotes.csv')
      .then(r => r.text())
      .then(csv => {
        const lines = csv.trim().split('\n').filter(Boolean);
        if (!lines.length) return;
        const line = lines[Math.floor(Date.now() / 86400000) % lines.length];
        const [text, author, work] = line.split('|').map(s => s.trim());
        if (text && author) setQuote({ text, author, work: work ?? '' });
      })
      .catch(() => null);
  }, []);

  if (!quote) return null;

  return (
    <figure style={{ margin: 0, padding: '1rem 1.25rem', borderLeft: '2px solid var(--gray-5)' }}>
      <Text size="2" color="gray" style={{ fontStyle: 'italic', display: 'block', lineHeight: 1.7 }}>
        &ldquo;{quote.text}&rdquo;
      </Text>
      <Text size="1" color="gray" mt="1" style={{ fontFamily: 'var(--font-mono)', display: 'block', opacity: 0.7 }}>
        — {quote.author}{quote.work ? `, ${quote.work}` : ''}
      </Text>
    </figure>
  );
}
