import type { Metadata } from 'next';
import localFont from 'next/font/local';
import { ThemeProvider } from 'next-themes';
import Nav from '@/components/Nav';
import Footer from '@/components/Footer';
import './globals.css';

const ibmPlexMono = localFont({
  src: [
    { path: '../public/fonts/IBMPlexMono-Regular.ttf', weight: '400', style: 'normal' },
    { path: '../public/fonts/IBMPlexMono-Medium.ttf', weight: '500', style: 'normal' },
    { path: '../public/fonts/IBMPlexMono-SemiBold.ttf', weight: '600', style: 'normal' },
  ],
  variable: '--font-plex-mono',
  display: 'swap',
});

export const metadata: Metadata = {
  title: {
    template: '%s — Nikul Patel',
    default: 'Nikul Patel',
  },
  description:
    'Software developer with a background in quantitative finance. Building tools for markets, writing about interesting things.',
  metadataBase: new URL('https://nikulpatel3141.github.io'),
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning className={ibmPlexMono.variable}>
      <body className="min-h-screen antialiased">
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem={false}>
          <div className="flex flex-col min-h-screen">
            <Nav />
            <main className="flex-1">{children}</main>
            <Footer />
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
