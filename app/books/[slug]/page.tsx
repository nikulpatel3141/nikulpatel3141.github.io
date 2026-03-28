import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { Box, Flex, Heading, Text, Badge } from '@radix-ui/themes';
import { getBook, getBooks, markdownToHtml } from '@/lib/content';
import { tagColor } from '@/lib/tagColors';

interface Props { params: Promise<{ slug: string }>; }

export async function generateStaticParams() {
  return getBooks().map(b => ({ slug: b.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const book = getBook(slug);
  if (!book) return {};
  return {
    title: book.title,
    description: `Notes on ${book.title}${book.resolvedAuthor ? ` by ${book.resolvedAuthor}` : ''}.`,
  };
}

const cx = { maxWidth: 720, margin: '0 auto', padding: '0 1.25rem' };

export default async function BookPage({ params }: Props) {
  const { slug } = await params;
  const book = getBook(slug);
  if (!book) notFound();

  const html = await markdownToHtml(book.content);

  return (
    <Box py="9" style={cx}>
      <Heading size="8" mb="2" style={{ letterSpacing: '-0.01em' }}>{book.title}</Heading>
      {book.resolvedAuthor && (
        <Text size="4" color="gray" mb="3" style={{ display: 'block' }}>{book.resolvedAuthor}</Text>
      )}
      <Flex align="center" gap="3" mb="7" wrap="wrap">
        {book.date && (
          <Text size="2" color="gray">
            Read {new Date(book.date).toLocaleDateString('en-GB', { year: 'numeric', month: 'long' })}
          </Text>
        )}
        {book.tags?.map(t => (
          <Badge key={t} variant="soft" color={tagColor(t) as any} size="1" style={{ textTransform: 'capitalize' }}>{t}</Badge>
        ))}
      </Flex>
      <article className="prose" dangerouslySetInnerHTML={{ __html: html }} />
    </Box>
  );
}
