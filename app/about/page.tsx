import type { Metadata } from 'next';
import { Box, Flex, Heading, Text, Separator } from '@radix-ui/themes';

export const metadata: Metadata = {
  title: 'About',
  description: 'About Nikul Patel — software developer, tools builder, former powerlifter.',
};

const cx = { maxWidth: 680, margin: '0 auto', paddingInline: '1.25rem' };

const link = (href: string, label: string) => (
  <a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    style={{ color: 'var(--accent-9)', textDecoration: 'underline', textUnderlineOffset: 3 }}
  >
    {label}
  </a>
);

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <Box mb="7">
      <Text
        size="1"
        weight="bold"
        color="gray"
        mb="3"
        style={{ display: 'block', textTransform: 'uppercase', letterSpacing: '0.08em', fontFamily: 'var(--font-mono)' }}
      >
        {title}
      </Text>
      {children}
    </Box>
  );
}

function Row({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <Flex gap="4" py="2" style={{ borderBottom: '1px solid var(--gray-3)' }}>
      <Text size="2" color="gray" style={{ width: 120, flexShrink: 0 }}>{label}</Text>
      <Box style={{ flex: 1 }}>{children}</Box>
    </Flex>
  );
}

export default function AboutPage() {
  return (
    <Box pt="7" pb="9" style={cx}>
      <Heading size="8" mb="2">About</Heading>
      <Text size="3" color="gray" mb="6" style={{ display: 'block' }}>
        The longer version.
      </Text>

      {/* About */}
      <Section title="About">
        <Text size="3" style={{ lineHeight: 1.8, color: 'var(--gray-12)', display: 'block' }} mb="3">
          I&rsquo;m Nikul, a software developer based in London. I spend most of my time building
          tools around financial data — automating the collection, processing, and presentation
          of market information that would otherwise require expensive data vendors.
        </Text>
        <Text size="3" style={{ lineHeight: 1.8, color: 'var(--gray-12)', display: 'block' }}>
          Outside of that I read a lot, write occasionally, and used to compete in powerlifting.
          I care about the craft of software: readable code, fast feedback loops, and tooling that
          gets out of the way.
        </Text>
      </Section>

      <Separator size="4" mb="7" />

      {/* Now */}
      <Section title="Now">
        <Text size="3" style={{ lineHeight: 1.8, color: 'var(--gray-12)', display: 'block' }}>
          Exploring agentic coding workflows with{' '}
          {link('https://www.anthropic.com/claude-code', 'Claude Code')}.
        </Text>
      </Section>

      <Separator size="4" mb="7" />

      {/* Uses */}
      <Section title="Uses">
        <Row label="Editor">
          <Text size="2" style={{ color: 'var(--gray-12)' }}>
            {link('https://helix-editor.com', 'Helix')},{' '}
            {link('https://cursor.com', 'Cursor')}
          </Text>
        </Row>
        <Row label="Shell">
          <Text size="2" style={{ color: 'var(--gray-12)' }}>
            {link('https://fishshell.com', 'Fish')}
          </Text>
        </Row>
        <Row label="Terminal">
          <Text size="2" style={{ color: 'var(--gray-12)' }}>
            {link('https://byobu.org', 'Byobu')}
          </Text>
        </Row>
        <Row label="Dotfiles">
          <Text size="2" style={{ color: 'var(--gray-12)' }}>
            {link('https://www.gnu.org/software/stow/', 'GNU Stow')}
            {' — '}
            {link('https://github.com/nikulpatel3141/dotfiles', 'github.com/nikulpatel3141/dotfiles')}
          </Text>
        </Row>
        <Row label="Python REPL">
          <Text size="2" style={{ color: 'var(--gray-12)' }}>
            {link('https://ipython.org', 'IPython')}
          </Text>
        </Row>
        <Row label="OS">
          <Text size="2" style={{ color: 'var(--gray-12)' }}>
            {link('https://pop.system76.com', 'Pop!_OS')}
          </Text>
        </Row>
      </Section>
    </Box>
  );
}
