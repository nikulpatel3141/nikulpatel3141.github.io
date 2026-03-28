import type { Metadata } from 'next';
import { Box, Grid, Heading, Text } from '@radix-ui/themes';
import { getBooks } from '@/lib/content';
import BookCard from '@/components/BookCard';

export const metadata: Metadata = {
  title: 'Books',
  description: 'Books I have read and found worth noting.',
};

const cx = { maxWidth: 960, margin: '0 auto', padding: '0 1.25rem' };

export default function BooksPage() {
  const books = getBooks();
  return (
    <Box py="9" style={cx}>
      <Heading size="8" mb="2">Books</Heading>
      <Text size="3" color="gray" mb="7" style={{ display: 'block' }}>
        Books I have read and found worth noting, with brief summaries.
      </Text>
      <Grid columns={{ initial: '1', sm: '2', md: '3' }} gap="3">
        {books.map(b => <BookCard key={b.slug} book={b} />)}
      </Grid>
    </Box>
  );
}
