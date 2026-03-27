'use client';

import Link from 'next/link';
import type { Project } from '@/lib/types';

interface Props {
  project: Project;
}

export default function ProjectCard({ project }: Props) {
  return (
    <div className="group relative flex flex-col bg-white dark:bg-[#141416] border border-zinc-200 dark:border-zinc-800 rounded-xl p-5 transition-all duration-200 hover:border-zinc-400 dark:hover:border-zinc-500 hover:shadow-lg hover:-translate-y-0.5">
      <div className="flex items-start justify-between gap-2 mb-2">
        <Link
          href={`/projects/${project.slug}`}
          className="text-base font-semibold text-zinc-900 dark:text-zinc-100 hover:text-blue-600 dark:hover:text-blue-400 transition-colors leading-snug"
        >
          {project.title}
        </Link>
        {project.github && (
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="shrink-0 text-zinc-400 hover:text-zinc-700 dark:hover:text-zinc-200 transition-colors mt-0.5"
            aria-label="View on GitHub"
            onClick={(e) => e.stopPropagation()}
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
              <polyline points="15 3 21 3 21 9" />
              <line x1="10" y1="14" x2="21" y2="3" />
            </svg>
          </a>
        )}
      </div>

      {project.description && (
        <p className="text-sm text-zinc-600 dark:text-zinc-400 mb-4 flex-1 leading-relaxed">
          {project.description}
        </p>
      )}

      {project.tags.length > 0 && (
        <div className="flex flex-wrap gap-1.5 mt-auto">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="bg-zinc-100 dark:bg-zinc-800 text-zinc-600 dark:text-zinc-400 text-xs px-2 py-0.5 rounded-full"
            >
              {tag}
            </span>
          ))}
        </div>
      )}

      {/* Make the whole card clickable via an overlay link */}
      <Link href={`/projects/${project.slug}`} className="absolute inset-0 rounded-xl" aria-hidden="true" tabIndex={-1} />
    </div>
  );
}
