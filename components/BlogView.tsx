'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Box, Flex, Grid, Text, IconButton } from '@radix-ui/themes';
import { ViewGridIcon, ViewHorizontalIcon } from '@radix-ui/react-icons';
import { tagColor } from '@/lib/tagColors';
import type { BlogPost } from '@/lib/types';

type View = 'list' | 'grid';

function PostCard({ post }: { post: BlogPost }) {
  return (
    <Link href={`/blog/${post.slug}`} style={{ textDecoration: 'none', display: 'block', height: '100%' }}>
      <Box
        style={{
          height: '100%',
          padding: '1rem',
          borderRadius: 8,
          border: '1px solid var(--gray-4)',
          background: 'var(--color-surface)',
          transition: 'border-color 0.15s',
        }}
        onMouseEnter={e => ((e.currentTarget as HTMLElement).style.borderColor = 'var(--gray-7)')}
        onMouseLeave={e => ((e.currentTarget as HTMLElement).style.borderColor = 'var(--gray-4)')}
      >
        <Flex direction="column" gap="2" style={{ height: '100%' }}>
          <Text size="3" weight="medium" style={{ color: 'var(--gray-12)' }}>{post.title}</Text>
          {post.description && (
            <Text size="2" color="gray" style={{ flex: 1, lineHeight: 1.6 }}>{post.description}</Text>
          )}
          <Flex justify="between" align="center" gap="2" wrap="wrap" mt="1">
            {post.tags?.length > 0 && (
              <Flex gap="1" wrap="wrap">
                {post.tags.map(t => (
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
            <Text size="1" color="gray" style={{ fontFamily: 'var(--font-mono)', flexShrink: 0 }}>
              {new Date(post.date).toLocaleDateString('en-GB', { year: 'numeric', month: 'short', day: 'numeric' })}
            </Text>
          </Flex>
        </Flex>
      </Box>
    </Link>
  );
}

function PostListRow({ post }: { post: BlogPost }) {
  return (
    <Link href={`/blog/${post.slug}`} style={{ textDecoration: 'none' }}>
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
              {post.tags.map(t => (
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
        <Text size="1" color="gray" style={{ flexShrink: 0, fontFamily: 'var(--font-mono)', marginTop: 3 }}>
          {new Date(post.date).toLocaleDateString('en-GB', { year: 'numeric', month: 'short', day: 'numeric' })}
        </Text>
      </Flex>
    </Link>
  );
}

function ViewToggle({ view, setView }: { view: View; setView: (v: View) => void }) {
  return (
    <Flex
      align="center"
      gap="2"
      style={{
        background: 'var(--gray-3)',
        borderRadius: 8,
        padding: 4,
        display: 'inline-flex',
      }}
    >
      <IconButton
        size="2"
        variant={view === 'list' ? 'solid' : 'ghost'}
        color="gray"
        onClick={() => setView('list')}
        aria-label="List view"
      >
        <ViewHorizontalIcon width={16} height={16} />
      </IconButton>
      <IconButton
        size="2"
        variant={view === 'grid' ? 'solid' : 'ghost'}
        color="gray"
        onClick={() => setView('grid')}
        aria-label="Grid view"
      >
        <ViewGridIcon width={16} height={16} />
      </IconButton>
    </Flex>
  );
}

export default function BlogView({ posts }: { posts: BlogPost[] }) {
  const [view, setView] = useState<View>('list');

  return (
    <Box>
      <Flex justify="end" mb="3">
        <ViewToggle view={view} setView={setView} />
      </Flex>

      {view === 'list' ? (
        <Flex direction="column">
          {posts.map(post => <PostListRow key={post.slug} post={post} />)}
        </Flex>
      ) : (
        <Grid columns={{ initial: '1', sm: '2', md: '3' }} gap="3">
          {posts.map(post => <PostCard key={post.slug} post={post} />)}
        </Grid>
      )}
    </Box>
  );
}
