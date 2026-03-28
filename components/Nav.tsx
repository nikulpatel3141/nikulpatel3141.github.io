'use client';

import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { useState } from 'react';
import { Box, Flex, Text, IconButton } from '@radix-ui/themes';
import { HamburgerMenuIcon, Cross1Icon, GitHubLogoIcon, LinkedInLogoIcon } from '@radix-ui/react-icons';
import ThemeToggle from './ThemeToggle';

const navLinks = [
  { href: '/projects', label: 'Projects' },
  { href: '/blog', label: 'Blog' },
  { href: '/books', label: 'Books' },
];

export default function Nav() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  function isActive(href: string) {
    return pathname === href || pathname.startsWith(href + '/');
  }

  return (
    <Box
      asChild
      style={{
        position: 'sticky',
        top: 0,
        zIndex: 50,
        borderBottom: '1px solid var(--gray-4)',
        backdropFilter: 'blur(12px)',
        WebkitBackdropFilter: 'blur(12px)',
        backgroundColor: 'color-mix(in srgb, var(--color-background) 85%, transparent)',
      }}
    >
      <header>
        <Flex
          align="center"
          justify="between"
          style={{ maxWidth: 1100, margin: '0 auto', padding: '0 1.25rem', height: 56 }}
        >
          {/* Wordmark */}
          <Link href="/" style={{ textDecoration: 'none' }}>
            <Flex align="center" gap="2">
              <Image
                src="/img/knight.svg"
                alt="Knight"
                width={30}
                height={30}
                className="knight-logo"
                unoptimized
              />
              <Text
                size="2"
                style={{ fontFamily: 'var(--font-mono)', color: 'var(--gray-11)', display: 'none' }}
                className="nav-name"
              >
                Nikul Patel
              </Text>
            </Flex>
          </Link>

          {/* Desktop nav */}
          <Flex align="center" gap="1" style={{ display: 'none' }} className="desktop-nav">
            {navLinks.map(({ href, label }) => (
              <Link key={href} href={href} style={{ textDecoration: 'none' }}>
                <Text
                  size="2"
                  className={isActive(href) ? 'nav-link-active' : ''}
                  style={{
                    display: 'block',
                    padding: '5px 12px',
                    borderRadius: 6,
                    color: isActive(href) ? 'var(--gray-12)' : 'var(--gray-11)',
                    transition: 'background 0.15s, color 0.15s',
                  }}
                  onMouseEnter={e => { if (!isActive(href)) (e.currentTarget as HTMLElement).style.background = 'var(--gray-3)'; }}
                  onMouseLeave={e => { if (!isActive(href)) (e.currentTarget as HTMLElement).style.background = ''; }}
                >
                  {label}
                </Text>
              </Link>
            ))}
          </Flex>

          {/* Icons */}
          <Flex align="center" gap="1">
            <IconButton asChild size="2" variant="ghost" color="gray" aria-label="GitHub">
              <a href="https://github.com/nikulpatel3141" target="_blank" rel="noopener noreferrer">
                <GitHubLogoIcon width={16} height={16} />
              </a>
            </IconButton>
            <IconButton asChild size="2" variant="ghost" color="gray" aria-label="LinkedIn">
              <a href="https://www.linkedin.com/in/nikul-patel-048a47113" target="_blank" rel="noopener noreferrer">
                <LinkedInLogoIcon width={16} height={16} />
              </a>
            </IconButton>
            <ThemeToggle />
            <IconButton
              size="2"
              variant="ghost"
              color="gray"
              aria-label="Toggle menu"
              onClick={() => setOpen(o => !o)}
              style={{ display: 'none' }}
              className="mobile-menu-btn"
            >
              {open ? <Cross1Icon width={16} height={16} /> : <HamburgerMenuIcon width={16} height={16} />}
            </IconButton>
          </Flex>
        </Flex>

        {/* Mobile menu */}
        {open && (
          <Box
            style={{
              borderTop: '1px solid var(--gray-4)',
              padding: '0.5rem 1.25rem 1rem',
              backgroundColor: 'var(--color-background)',
            }}
            className="mobile-menu"
          >
            <Flex direction="column" gap="1">
              {navLinks.map(({ href, label }) => (
                <Link key={href} href={href} style={{ textDecoration: 'none' }} onClick={() => setOpen(false)}>
                  <Text
                    size="2"
                    className={isActive(href) ? 'nav-link-active' : ''}
                    style={{
                      display: 'block',
                      padding: '8px 12px',
                      borderRadius: 6,
                      color: isActive(href) ? 'var(--gray-12)' : 'var(--gray-11)',
                    }}
                  >
                    {label}
                  </Text>
                </Link>
              ))}
            </Flex>
          </Box>
        )}

        <style>{`
          @media (min-width: 640px) {
            .nav-name { display: block !important; }
            .desktop-nav { display: flex !important; }
            .mobile-menu-btn { display: none !important; }
            .mobile-menu { display: none !important; }
          }
        `}</style>
      </header>
    </Box>
  );
}
