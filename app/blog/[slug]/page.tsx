import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { Box, Flex, Heading, Text, Badge } from '@radix-ui/themes';
import { getBlogPost, getBlogPosts, markdownToHtml } from '@/lib/content';

interface Props { params: Promise<{ slug: string }>; }

export async function generateStaticParams() {
  return getBlogPosts().map(p => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = getBlogPost(slug);
  if (!post) return {};
  return { title: post.title, description: post.description };
}

const cx = { maxWidth: 720, margin: '0 auto', paddingInline: '1.25rem' };

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const post = getBlogPost(slug);
  if (!post) notFound();

  const html = await markdownToHtml(post.content);

  return (
    <Box py="9" style={cx}>
      <Heading size="8" mb="3" style={{ letterSpacing: '-0.01em' }}>{post.title}</Heading>
      <Flex align="center" gap="3" mb="6" wrap="wrap">
        {post.date && (
          <Text size="2" color="gray">
            {new Date(post.date).toLocaleDateString('en-GB', { year: 'numeric', month: 'long', day: 'numeric' })}
          </Text>
        )}
        {post.tags?.map(t => (
          <Badge key={t} variant="soft" color="gray" size="1" style={{ textTransform: 'capitalize' }}>{t}</Badge>
        ))}
      </Flex>
      <article className="prose" dangerouslySetInnerHTML={{ __html: html }} />
    </Box>
  );
}
