import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="mt-24 border-t border-zinc-200 dark:border-zinc-800">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 py-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-zinc-500 dark:text-zinc-500">
        <p>© {new Date().getFullYear()} Nikul Patel</p>
        <nav className="flex items-center gap-4">
          <Link href="/projects" className="hover:text-zinc-900 dark:hover:text-zinc-100 transition-colors">
            Projects
          </Link>
          <Link href="/blog" className="hover:text-zinc-900 dark:hover:text-zinc-100 transition-colors">
            Blog
          </Link>
          <Link href="/books" className="hover:text-zinc-900 dark:hover:text-zinc-100 transition-colors">
            Books
          </Link>
          <a
            href="https://github.com/nikulpatel3141"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-zinc-900 dark:hover:text-zinc-100 transition-colors"
          >
            GitHub
          </a>
        </nav>
      </div>
    </footer>
  );
}
