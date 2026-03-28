'use client';

import { useRouter } from 'next/navigation';
import { Card, Flex, Heading, Text, Badge } from '@radix-ui/themes';
import { ExternalLinkIcon } from '@radix-ui/react-icons';
import type { Project } from '@/lib/types';
import { tagColor } from '@/lib/tagColors';

export default function ProjectCard({ project }: { project: Project }) {
  const router = useRouter();

  return (
    <Card
      size="2"
      style={{ position: 'relative', transition: 'box-shadow 0.2s', cursor: 'pointer' }}
      onClick={() => router.push(`/projects/${project.slug}`)}
    >
      <Flex direction="column" gap="2" style={{ height: '100%' }}>
        <Flex align="start" justify="between" gap="2">
          <Heading size="3" style={{ color: 'var(--gray-12)' }}>{project.title}</Heading>
          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              onClick={e => e.stopPropagation()}
              style={{ color: 'var(--gray-9)', flexShrink: 0, marginTop: 2 }}
              aria-label="View on GitHub"
            >
              <ExternalLinkIcon width={14} height={14} />
            </a>
          )}
        </Flex>

        {project.description && (
          <Text size="2" color="gray" style={{ flex: 1, lineHeight: 1.6 }}>
            {project.description}
          </Text>
        )}

        {project.tags.length > 0 && (
          <Flex gap="1" wrap="wrap" mt="1">
            {project.tags.map(tag => (
              <Badge key={tag} variant="soft" color={tagColor(tag) as any} size="1">{tag}</Badge>
            ))}
          </Flex>
        )}
      </Flex>
    </Card>
  );
}
