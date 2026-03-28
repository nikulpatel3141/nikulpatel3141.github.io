import type { Metadata } from 'next';
import { Box, Heading, Text } from '@radix-ui/themes';
import { getBooks } from '@/lib/content';
import BooksView from '@/components/BooksView';

export const metadata: Metadata = {
  title: 'Books',
  description: 'Books I have read and found worth noting.',
};

const cx = { maxWidth: 1100, margin: '0 auto', padding: '0 1.25rem' };

export default function BooksPage() {
  const books = getBooks();
  return (
    <Box py="9" style={cx}>
      <Heading size="8" mb="2">Books</Heading>
      <Text size="3" color="gray" mb="6" style={{ display: 'block' }}>
        Books I have read and found worth noting, with brief summaries.
      </Text>
      <BooksView books={books} />
    </Box>
  );
}
