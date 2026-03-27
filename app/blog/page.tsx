import type { Metadata } from 'next';
import Link from 'next/link';
import { getBlogPosts } from '@/lib/content';

export const metadata: Metadata = {
  title: 'Blog',
  description: 'Writing about programming, coffee, fitness, and other things I find interesting.',
};

export default function BlogPage() {
  const posts = getBlogPosts();

  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 py-16">
      <h1 className="text-4xl font-bold text-zinc-900 dark:text-zinc-100 mb-3">Blog</h1>
      <p className="text-zinc-600 dark:text-zinc-400 mb-10">
        Writing about things I find interesting.
      </p>

      {posts.length === 0 ? (
        <p className="text-zinc-500">No posts yet.</p>
      ) : (
        <ul className="space-y-0 divide-y divide-zinc-100 dark:divide-zinc-900">
          {posts.map((post) => (
            <li key={post.slug}>
              <Link
                href={`/blog/${post.slug}`}
                className="group flex flex-col sm:flex-row sm:items-center justify-between gap-2 py-5 hover:bg-zinc-50 dark:hover:bg-zinc-950 -mx-4 px-4 rounded-lg transition-colors"
              >
                <div className="flex-1">
                  <p className="text-base font-medium text-zinc-900 dark:text-zinc-100 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                    {post.title}
                  </p>
                  {post.description && (
                    <p className="text-sm text-zinc-500 dark:text-zinc-500 mt-0.5">
                      {post.description}
                    </p>
                  )}
                  {post.tags && post.tags.length > 0 && (
                    <div className="flex flex-wrap gap-1.5 mt-2">
                      {post.tags.map((tag) => (
                        <span
                          key={tag}
                          className="bg-zinc-100 dark:bg-zinc-800 text-zinc-600 dark:text-zinc-400 text-xs px-2 py-0.5 rounded-full"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  )}
                </div>
                {post.date && (
                  <time
                    dateTime={post.date}
                    className="text-sm text-zinc-400 dark:text-zinc-600 shrink-0"
                  >
                    {new Date(post.date).toLocaleDateString('en-GB', {
                      year: 'numeric',
                      month: 'short',
                      day: 'numeric',
                    })}
                  </time>
                )}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
