'use client';

import { useState, useMemo } from 'react';
import { Box, Flex, Grid, Text, TextField, Button, IconButton } from '@radix-ui/themes';
import { MagnifyingGlassIcon, ViewGridIcon, ViewHorizontalIcon } from '@radix-ui/react-icons';
import BookCard from './BookCard';
import { tagColor } from '@/lib/tagColors';
import type { Book } from '@/lib/types';

type View = 'grid' | 'list';

function BookListRow({ book }: { book: Book }) {
  return (
    <a href={`/books/${book.slug}`} style={{ textDecoration: 'none' }}>
      <Flex
        justify="between"
        align="start"
        gap="4"
        py="3"
        style={{ borderBottom: '1px solid var(--gray-3)' }}
      >
        <Box>
          <Text size="3" weight="medium" style={{ color: 'var(--gray-12)', display: 'block' }}>
            {book.title}
          </Text>
          {book.resolvedAuthor && (
            <Text size="2" color="gray" style={{ display: 'block', marginTop: 2 }}>
              {book.resolvedAuthor}
            </Text>
          )}
          {book.tags?.length > 0 && (
            <Flex gap="1" wrap="wrap" mt="2">
              {book.tags.map(t => (
                <Box
                  key={t}
                  style={{
                    fontSize: 11,
                    padding: '1px 7px',
                    borderRadius: 999,
                    background: `var(--${tagColor(t)}-4)`,
                    color: `var(--${tagColor(t)}-11)`,
                    textTransform: 'capitalize',
                  }}
                >
                  {t}
                </Box>
              ))}
            </Flex>
          )}
        </Box>
      </Flex>
    </a>
  );
}

export default function BooksView({ books }: { books: Book[] }) {
  const [search, setSearch] = useState('');
  const [selectedTag, setSelectedTag] = useState<string | null>(null);
  const [view, setView] = useState<View>('grid');

  const allTags = useMemo(() => {
    const tags = new Set<string>();
    books.forEach(b => b.tags?.forEach(t => tags.add(t)));
    return [...tags].sort();
  }, [books]);

  const filtered = useMemo(() => {
    const q = search.toLowerCase();
    return books.filter(b => {
      const matchesSearch =
        !q ||
        b.title.toLowerCase().includes(q) ||
        (b.resolvedAuthor?.toLowerCase().includes(q) ?? false);
      const matchesTag = !selectedTag || b.tags?.includes(selectedTag);
      return matchesSearch && matchesTag;
    });
  }, [books, search, selectedTag]);

  return (
    <Box>
      <Flex direction="column" gap="3" mb="6">
        <Flex gap="3" align="center">
          <TextField.Root
            placeholder="Search by title or author…"
            value={search}
            onChange={e => setSearch(e.target.value)}
            size="3"
            style={{ flex: 1, maxWidth: 420 }}
          >
            <TextField.Slot>
              <MagnifyingGlassIcon />
            </TextField.Slot>
          </TextField.Root>

          <Flex
            align="center"
            gap="2"
            style={{ background: 'var(--gray-3)', borderRadius: 8, padding: 4, display: 'inline-flex' }}
          >
            <IconButton
              size="2"
              variant={view === 'grid' ? 'solid' : 'ghost'}
              color="gray"
              onClick={() => setView('grid')}
              aria-label="Grid view"
            >
              <ViewGridIcon width={16} height={16} />
            </IconButton>
            <IconButton
              size="2"
              variant={view === 'list' ? 'solid' : 'ghost'}
              color="gray"
              onClick={() => setView('list')}
              aria-label="List view"
            >
              <ViewHorizontalIcon width={16} height={16} />
            </IconButton>
          </Flex>
        </Flex>

        <Flex gap="2" wrap="wrap" align="center">
          <Button
            size="1"
            variant={!selectedTag ? 'solid' : 'soft'}
            color="gray"
            onClick={() => setSelectedTag(null)}
          >
            All
          </Button>
          {allTags.map(tag => (
            <Button
              key={tag}
              size="1"
              variant={selectedTag === tag ? 'solid' : 'soft'}
              color={tagColor(tag) as any}
              onClick={() => setSelectedTag(selectedTag === tag ? null : tag)}
              style={{ textTransform: 'capitalize' }}
            >
              {tag}
            </Button>
          ))}
        </Flex>
      </Flex>

      {filtered.length === 0 ? (
        <Text color="gray" size="2">No books match your search.</Text>
      ) : view === 'grid' ? (
        <Grid columns={{ initial: '1', sm: '2', md: '3' }} gap="3">
          {filtered.map(b => <BookCard key={b.slug} book={b} />)}
        </Grid>
      ) : (
        <Box>
          {filtered.map(b => <BookListRow key={b.slug} book={b} />)}
        </Box>
      )}
    </Box>
  );
}
