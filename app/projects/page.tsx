import type { Metadata } from 'next';
import { getProjects } from '@/lib/content';
import ProjectCard from '@/components/ProjectCard';

export const metadata: Metadata = {
  title: 'Projects',
  description: 'Things I have built — from market data pipelines to language performance benchmarks.',
};

export default function ProjectsPage() {
  const projects = getProjects();

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 py-16">
      <h1 className="text-4xl font-bold text-zinc-900 dark:text-zinc-100 mb-3">Projects</h1>
      <p className="text-zinc-600 dark:text-zinc-400 mb-10">
        Things I have built, mostly around markets, data, and tooling.
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {projects.map((project) => (
          <ProjectCard key={project.slug} project={project} />
        ))}
      </div>
    </div>
  );
}
