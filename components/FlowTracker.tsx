import Script from 'next/script';
import { Card, Text } from '@radix-ui/themes';

export default function FlowTracker() {
  return (
    <>
      <Card size="2" my="4" style={{ overflowX: 'auto' }}>
        <Text size="2" color="gray">
          Data as of <span id="flowDate" style={{ fontFamily: 'var(--font-mono)' }} />
        </Text>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '2rem', marginTop: '1rem' }}>
          <div><Text size="2" weight="bold" mb="2" style={{ display: 'block' }}>By Ticker</Text><div id="tickerFlows" /></div>
          <div><Text size="2" weight="bold" mb="2" style={{ display: 'block' }}>By Sector</Text><div id="sectorFlows" /></div>
          <div><Text size="2" weight="bold" mb="2" style={{ display: 'block' }}>Total</Text><div id="totalFlows" /></div>
        </div>
      </Card>
      <Script src="/js/flow_tracker.js" strategy="afterInteractive" />
    </>
  );
}
