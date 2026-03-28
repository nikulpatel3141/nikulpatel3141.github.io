import type { Metadata } from 'next';
import { Box, Heading, Text } from '@radix-ui/themes';
import { getBlogPosts } from '@/lib/content';
import BlogView from '@/components/BlogView';

export const metadata: Metadata = {
  title: 'Blog',
  description: 'Writing about programming, coffee, fitness, and other things I find interesting.',
};

const cx = { maxWidth: 800, margin: '0 auto', paddingInline: '1.25rem' };

export default function BlogPage() {
  const posts = getBlogPosts();
  return (
    <Box py="9" style={cx}>
      <Heading size="8" mb="2">Blog</Heading>
      <Text size="3" color="gray" mb="7" style={{ display: 'block' }}>Writing about things I find interesting.</Text>
      <BlogView posts={posts} />
    </Box>
  );
}
