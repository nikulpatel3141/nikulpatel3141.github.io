'use client';

import { Theme } from '@radix-ui/themes';
import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';

export default function ThemeWrapper({ children }: { children: React.ReactNode }) {
  const { resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  // Avoid hydration mismatch — default to dark before mount
  const appearance = mounted ? (resolvedTheme === 'light' ? 'light' : 'dark') : 'dark';

  return (
    <Theme
      appearance={appearance}
      accentColor="blue"
      grayColor="slate"
      radius="medium"
      scaling="100%"
    >
      {children}
    </Theme>
  );
}
