import type { Metadata } from 'next';
import Link from 'next/link';
import { Box, Flex, Heading, Text, Badge } from '@radix-ui/themes';
import { getBlogPosts } from '@/lib/content';
import { tagColor } from '@/lib/tagColors';

export const metadata: Metadata = {
  title: 'Blog',
  description: 'Writing about programming, coffee, fitness, and other things I find interesting.',
};

const cx = { maxWidth: 800, margin: '0 auto', padding: '0 1.25rem' };

export default function BlogPage() {
  const posts = getBlogPosts();
  return (
    <Box py="9" style={cx}>
      <Heading size="8" mb="2">Blog</Heading>
      <Text size="3" color="gray" mb="7" style={{ display: 'block' }}>Writing about things I find interesting.</Text>
      <Flex direction="column">
        {posts.map(post => (
          <Link key={post.slug} href={`/blog/${post.slug}`} style={{ textDecoration: 'none' }}>
            <Flex
              justify="between"
              align="start"
              gap="4"
              py="4"
              style={{ borderBottom: '1px solid var(--gray-3)' }}
            >
              <Box>
                <Text size="3" weight="medium" style={{ color: 'var(--gray-12)', display: 'block' }}>{post.title}</Text>
                {post.description && (
                  <Text size="2" color="gray" mt="1" style={{ display: 'block' }}>{post.description}</Text>
                )}
                {post.tags?.length > 0 && (
                  <Flex gap="1" mt="2" wrap="wrap">
                    {post.tags.map(t => <Badge key={t} variant="soft" color={tagColor(t) as any} size="1" style={{ textTransform: 'capitalize' }}>{t}</Badge>)}
                  </Flex>
                )}
              </Box>
              <Text size="1" color="gray" style={{ flexShrink: 0, fontFamily: 'var(--font-mono)', marginTop: 3 }}>
                {new Date(post.date).toLocaleDateString('en-GB', { year: 'numeric', month: 'short', day: 'numeric' })}
              </Text>
            </Flex>
          </Link>
        ))}
      </Flex>
    </Box>
  );
}
