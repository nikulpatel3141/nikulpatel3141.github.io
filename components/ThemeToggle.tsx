'use client';

import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';
import { IconButton } from '@radix-ui/themes';
import { SunIcon, MoonIcon } from '@radix-ui/react-icons';

export default function ThemeToggle() {
  const [mounted, setMounted] = useState(false);
  const { resolvedTheme, setTheme } = useTheme();

  useEffect(() => setMounted(true), []);

  if (!mounted) return <IconButton size="2" variant="ghost" color="gray" aria-label="Toggle theme" />;

  const isDark = resolvedTheme === 'dark';

  return (
    <IconButton
      size="2"
      variant="ghost"
      color="gray"
      aria-label={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
      onClick={() => setTheme(isDark ? 'light' : 'dark')}
    >
      {isDark ? <SunIcon width={16} height={16} /> : <MoonIcon width={16} height={16} />}
    </IconButton>
  );
}
