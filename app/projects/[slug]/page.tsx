import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { Box, Flex, Heading, Text, Badge } from '@radix-ui/themes';
import { ExternalLinkIcon } from '@radix-ui/react-icons';
import { getProject, getProjects, markdownToHtml } from '@/lib/content';
import { tagColor } from '@/lib/tagColors';
import FlowTracker from '@/components/FlowTracker';
import ShortsTracker from '@/components/ShortsTracker';

interface Props { params: Promise<{ slug: string }>; }

export async function generateStaticParams() {
  return getProjects().map(p => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) return {};
  return { title: project.title, description: project.description };
}

const TRACKERS: Record<string, React.ReactNode> = {
  'etf-flow-tracker': <FlowTracker />,
  'uk-shorts-tracker': <ShortsTracker />,
};

const cx = { maxWidth: 720, margin: '0 auto', paddingInline: '1.25rem' };

export default async function ProjectPage({ params }: Props) {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) notFound();

  const html = await markdownToHtml(project.content);

  return (
    <Box py="9" style={cx}>
      <Heading size="8" mb="3" style={{ letterSpacing: '-0.01em' }}>{project.title}</Heading>

      <Flex align="center" gap="3" mb="4" wrap="wrap">
        {project.date && (
          <Text size="2" color="gray">
            {new Date(project.date).toLocaleDateString('en-GB', { year: 'numeric', month: 'long', day: 'numeric' })}
          </Text>
        )}
        {project.github && (
          <a href={project.github} target="_blank" rel="noopener noreferrer"
            style={{ textDecoration: 'none', display: 'inline-flex', alignItems: 'center', gap: 4 }}>
            <Text size="2" color="gray">GitHub <ExternalLinkIcon style={{ display: 'inline', verticalAlign: 'middle' }} /></Text>
          </a>
        )}
      </Flex>

      {project.tags.length > 0 && (
        <Flex gap="1" wrap="wrap" mb="7">
          {project.tags.map(tag => <Badge key={tag} variant="soft" color={tagColor(tag) as any} size="1">{tag}</Badge>)}
        </Flex>
      )}

      {TRACKERS[slug]}

      <article className="prose" dangerouslySetInnerHTML={{ __html: html }} />
    </Box>
  );
}
