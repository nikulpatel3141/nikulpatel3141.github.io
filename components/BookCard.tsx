'use client';

import Link from 'next/link';
import { Card, Flex, Heading, Text, Badge } from '@radix-ui/themes';
import type { Book } from '@/lib/types';

export default function BookCard({ book }: { book: Book }) {
  const excerpt = book.content
    ? book.content
        .replace(/^#+\s.+$/gm, '')
        .replace(/[*_`>]/g, '')
        .trim()
        .slice(0, 140)
    : '';

  return (
    <Card asChild size="2">
      <Link href={`/books/${book.slug}`} style={{ textDecoration: 'none', display: 'block' }}>
        <Flex direction="column" gap="1">
          <Heading size="3" style={{ color: 'var(--gray-12)' }}>{book.title}</Heading>
          {book.resolvedAuthor && (
            <Text size="2" color="gray">{book.resolvedAuthor}</Text>
          )}
          {excerpt && (
            <Text size="2" color="gray" mt="1" style={{ lineHeight: 1.6 }}>
              {excerpt}{book.content && book.content.length > 140 ? '…' : ''}
            </Text>
          )}
          {book.tags?.length > 0 && (
            <Flex gap="1" wrap="wrap" mt="2">
              {book.tags.map(tag => (
                <Badge key={tag} variant="soft" color="gray" size="1" style={{ textTransform: 'capitalize' }}>
                  {tag}
                </Badge>
              ))}
            </Flex>
          )}
        </Flex>
      </Link>
    </Card>
  );
}
