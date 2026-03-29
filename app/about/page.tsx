import type { Metadata } from 'next';
import { Box, Flex, Heading, Text, Separator } from '@radix-ui/themes';

export const metadata: Metadata = {
  title: 'About',
  description: 'About Nikul Patel — software developer, tools builder, former powerlifter.',
};

const cx = { maxWidth: 680, margin: '0 auto', paddingInline: '1.25rem' };

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
    <Flex
      gap="4"
      py="2"
      style={{ borderBottom: '1px solid var(--gray-3)' }}
    >
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
        <Text size="3" style={{ lineHeight: 1.8, color: 'var(--gray-12)', display: 'block' }} mb="3">
          Currently working on improving the ETF flow and UK shorts trackers — adding better
          historical views and improving the data pipeline reliability.
        </Text>
        <Text size="3" style={{ lineHeight: 1.8, color: 'var(--gray-12)', display: 'block' }}>
          On the side, exploring Rust more seriously after the C++ comparison project, and
          slowly working through the books on the{' '}
          <a href="/books" style={{ color: 'var(--accent-9)', textDecoration: 'underline', textUnderlineOffset: 3 }}>
            reading list
          </a>
          .
        </Text>
      </Section>

      <Separator size="4" mb="7" />

      {/* Uses */}
      <Section title="Uses">
        <Row label="Editor">
          <Text size="2" style={{ color: 'var(--gray-12)' }}>
            Neovim (daily driver), Helix (exploring)
          </Text>
        </Row>
        <Row label="Shell">
          <Text size="2" style={{ color: 'var(--gray-12)' }}>Fish</Text>
        </Row>
        <Row label="Terminal">
          <Text size="2" style={{ color: 'var(--gray-12)' }}>Byobu</Text>
        </Row>
        <Row label="Dotfiles">
          <Flex align="center" gap="2">
            <Text size="2" style={{ color: 'var(--gray-12)' }}>GNU Stow — </Text>
            <a
              href="https://github.com/nikulpatel3141/dotfiles"
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: 'var(--accent-9)', fontSize: 14, textDecoration: 'underline', textUnderlineOffset: 3 }}
            >
              github.com/nikulpatel3141/dotfiles
            </a>
          </Flex>
        </Row>
        <Row label="Python REPL">
          <Text size="2" style={{ color: 'var(--gray-12)' }}>IPython</Text>
        </Row>
        <Row label="OS">
          <Text size="2" style={{ color: 'var(--gray-12)' }}>Linux</Text>
        </Row>
        <Row label="Keyboard">
          <Text size="2" style={{ color: 'var(--gray-12)' }}>
            Caps Lock remapped to Escape
          </Text>
        </Row>
      </Section>
    </Box>
  );
}
