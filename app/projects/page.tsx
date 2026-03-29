import type { Metadata } from 'next';
import { Box, Grid, Heading, Text } from '@radix-ui/themes';
import { getProjects } from '@/lib/content';
import ProjectCard from '@/components/ProjectCard';

export const metadata: Metadata = {
  title: 'Projects',
  description: 'Things I have built — from market data pipelines to language performance benchmarks.',
};

const cx = { maxWidth: 1100, margin: '0 auto', paddingInline: '1.25rem' };

export default function ProjectsPage() {
  const projects = getProjects();
  return (
    <Box pt="7" pb="9" style={cx}>
      <Heading size="8" mb="2">Projects</Heading>
      <Text size="3" color="gray" mb="7" style={{ display: 'block' }}>
        Things I have built, mostly around markets, data, and tooling.
      </Text>
      <Grid columns={{ initial: '1', sm: '2', md: '3' }} gap="3">
        {projects.map(p => <ProjectCard key={p.slug} project={p} />)}
      </Grid>
    </Box>
  );
}
