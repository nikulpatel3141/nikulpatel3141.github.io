import { Box, Flex, Text, Separator } from '@radix-ui/themes';
import Link from 'next/link';

export default function Footer() {
  return (
    <Box style={{ marginTop: '5rem' }}>
      <Separator size="4" />
      <Flex
        align="center"
        justify="between"
        wrap="wrap"
        gap="4"
        style={{ maxWidth: 960, margin: '0 auto', padding: '1.75rem 1.25rem' }}
      >
        <Text size="2" color="gray">© {new Date().getFullYear()} Nikul Patel</Text>
        <Flex gap="4" wrap="wrap">
          {[
            { href: '/projects', label: 'Projects' },
            { href: '/blog', label: 'Blog' },
            { href: '/books', label: 'Books' },
            { href: 'https://github.com/nikulpatel3141', label: 'GitHub', external: true },
          ].map(({ href, label, external }) => (
            <Link
              key={href}
              href={href}
              target={external ? '_blank' : undefined}
              rel={external ? 'noopener noreferrer' : undefined}
              style={{ textDecoration: 'none' }}
            >
              <Text size="2" color="gray" style={{ transition: 'color 0.15s' }}>
                {label}
              </Text>
            </Link>
          ))}
        </Flex>
      </Flex>
    </Box>
  );
}
