import type { Metadata } from 'next';
import localFont from 'next/font/local';
import { ThemeProvider } from 'next-themes';
import ThemeWrapper from '@/components/ThemeWrapper';
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
  title: { template: '%s — Nikul Patel', default: 'Nikul Patel' },
  description: 'Software developer.',
  metadataBase: new URL('https://nikulpatel3141.github.io'),
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning className={ibmPlexMono.variable}>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600&display=swap"
          rel="stylesheet"
        />
        <link rel="icon" href="/favicon.ico" sizes="any" />
      </head>
      <body>
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem={false}>
          <ThemeWrapper>
            <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
              <Nav />
              <main style={{ flex: 1 }}>{children}</main>
              <Footer />
            </div>
          </ThemeWrapper>
        </ThemeProvider>
      </body>
    </html>
  );
}
