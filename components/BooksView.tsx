'use client';

import { useState, useMemo } from 'react';
import { Box, Flex, Grid, Text, TextField, Button } from '@radix-ui/themes';
import { MagnifyingGlassIcon } from '@radix-ui/react-icons';
import BookCard from './BookCard';
import { tagColor } from '@/lib/tagColors';
import type { Book } from '@/lib/types';

export default function BooksView({ books }: { books: Book[] }) {
  const [search, setSearch] = useState('');
  const [selectedTag, setSelectedTag] = useState<string | null>(null);

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
        <TextField.Root
          placeholder="Search by title or author…"
          value={search}
          onChange={e => setSearch(e.target.value)}
          size="3"
          style={{ maxWidth: 420 }}
        >
          <TextField.Slot>
            <MagnifyingGlassIcon />
          </TextField.Slot>
        </TextField.Root>

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
      ) : (
        <Grid columns={{ initial: '1', sm: '2', md: '3' }} gap="3">
          {filtered.map(b => <BookCard key={b.slug} book={b} />)}
        </Grid>
      )}
    </Box>
  );
}
