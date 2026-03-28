import Script from 'next/script';
import { Card, Text, Flex } from '@radix-ui/themes';

export default function ShortsTracker() {
  return (
    <>
      <Card size="2" my="4" style={{ overflowX: 'auto' }}>
        <Flex direction="column" gap="4">
          <div>
            <Text size="2" weight="bold" mb="2" style={{ display: 'block' }}>Most Shorted Companies</Text>
            <div id="secShortTracker" />
          </div>
          <div>
            <Text size="2" weight="bold" mb="2" style={{ display: 'block' }}>Largest Shorts by Fund</Text>
            <div id="fundShortTracker" />
          </div>
        </Flex>
      </Card>
      <Script src="/js/short_tracker.js" strategy="afterInteractive" />
    </>
  );
}
