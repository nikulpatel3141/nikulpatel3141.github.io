import Link from 'next/link';
import { Box, Flex, Grid, Heading, Text, Separator } from '@radix-ui/themes';
import { GitHubLogoIcon, LinkedInLogoIcon, ArrowRightIcon } from '@radix-ui/react-icons';
import { getProjects, getBlogPosts, getBooks } from '@/lib/content';
import ProjectCard from '@/components/ProjectCard';
import BookCard from '@/components/BookCard';
import DailyQuote from '@/components/DailyQuote';

const cx = { maxWidth: 960, margin: '0 auto', padding: '0 1.25rem' };

function SectionHeader({ title, href }: { title: string; href: string }) {
  return (
    <Flex align="center" justify="between" mb="4">
      <Text size="1" weight="bold" color="gray" style={{ textTransform: 'uppercase', letterSpacing: '0.08em', fontFamily: 'var(--font-mono)' }}>
        {title}
      </Text>
      <Link href={href} style={{ textDecoration: 'none' }}>
        <Text size="2" color="gray">View all <ArrowRightIcon style={{ display: 'inline', verticalAlign: 'middle' }} /></Text>
      </Link>
    </Flex>
  );
}

export default function HomePage() {
  const projects = getProjects().filter(p => p.featured);
  const posts = getBlogPosts();
  const books = getBooks().slice(0, 4);

  return (
    <Box py="9" style={cx}>
      {/* Hero */}
      <Box mb="9">
        <Heading size="9" mb="3" style={{ letterSpacing: '-0.02em' }}>
          Hi, I&rsquo;m Nikul.
        </Heading>
        <Text size="4" color="gray" mb="2" style={{ display: 'block', fontWeight: 500 }}>
          Software developer.
        </Text>
        <Text size="3" color="gray" style={{ display: 'block', maxWidth: 560, lineHeight: 1.75 }}>
          I have a background in quantitative finance. I build tools for markets, write about
          things I find interesting, and occasionally compete in powerlifting.
        </Text>
        <Flex gap="3" mt="5" wrap="wrap">
          <a
            href="https://github.com/nikulpatel3141"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: 'inline-flex', alignItems: 'center', gap: 8,
              padding: '8px 16px', borderRadius: 6, fontSize: 14, fontWeight: 500,
              background: 'var(--gray-12)', color: 'var(--gray-1)', textDecoration: 'none',
              transition: 'opacity 0.15s',
            }}
          >
            <GitHubLogoIcon width={15} height={15} /> GitHub
          </a>
          <a
            href="https://www.linkedin.com/in/nikul-patel-048a47113"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: 'inline-flex', alignItems: 'center', gap: 8,
              padding: '8px 16px', borderRadius: 6, fontSize: 14, fontWeight: 500,
              border: '1px solid var(--gray-6)', color: 'var(--gray-12)', textDecoration: 'none',
              transition: 'opacity 0.15s',
            }}
          >
            <LinkedInLogoIcon width={15} height={15} /> LinkedIn
          </a>
        </Flex>
      </Box>

      {/* Daily quote */}
      <Box mb="9">
        <DailyQuote />
      </Box>

      {/* Featured projects */}
      {projects.length > 0 && (
        <Box mb="9">
          <SectionHeader title="Featured Projects" href="/projects" />
          <Grid columns={{ initial: '1', sm: '2', md: '3' }} gap="3">
            {projects.map(p => <ProjectCard key={p.slug} project={p} />)}
          </Grid>
        </Box>
      )}

      <Separator size="4" mb="9" />

      {/* Writing */}
      {posts.length > 0 && (
        <Box mb="9">
          <SectionHeader title="Writing" href="/blog" />
          <Flex direction="column">
            {posts.map(post => (
              <Link key={post.slug} href={`/blog/${post.slug}`} style={{ textDecoration: 'none' }}>
                <Flex
                  align="center"
                  justify="between"
                  gap="4"
                  py="3"
                  style={{ borderBottom: '1px solid var(--gray-3)', cursor: 'pointer' }}
                >
                  <Box>
                    <Text size="3" weight="medium" style={{ color: 'var(--gray-12)' }}>{post.title}</Text>
                    {post.description && (
                      <Text size="2" color="gray" style={{ display: 'block', marginTop: 2 }}>{post.description}</Text>
                    )}
                  </Box>
                  <Text size="1" color="gray" style={{ flexShrink: 0, fontFamily: 'var(--font-mono)' }}>
                    {new Date(post.date).toLocaleDateString('en-GB', { month: 'short', year: 'numeric' })}
                  </Text>
                </Flex>
              </Link>
            ))}
          </Flex>
        </Box>
      )}

      <Separator size="4" mb="9" />

      {/* Books */}
      {books.length > 0 && (
        <Box>
          <SectionHeader title="Reading" href="/books" />
          <Grid columns={{ initial: '1', sm: '2' }} gap="3">
            {books.map(b => <BookCard key={b.slug} book={b} />)}
          </Grid>
        </Box>
      )}
    </Box>
  );
}
