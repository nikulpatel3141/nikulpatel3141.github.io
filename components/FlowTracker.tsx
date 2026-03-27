import Script from 'next/script';

export default function FlowTracker() {
  return (
    <>
      <div className="my-6 overflow-x-auto rounded-xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-[#141416] p-4">
        <p className="text-sm text-zinc-500 dark:text-zinc-500 mb-1">
          Data as of <span id="flowDate" className="font-mono" />
        </p>
        <div className="flex flex-col lg:flex-row gap-6 mt-4">
          <div className="flex-1">
            <h3 className="text-sm font-semibold text-zinc-700 dark:text-zinc-300 mb-2">By Ticker</h3>
            <div id="tickerFlows" />
          </div>
          <div className="flex-1">
            <h3 className="text-sm font-semibold text-zinc-700 dark:text-zinc-300 mb-2">By Sector</h3>
            <div id="sectorFlows" />
          </div>
          <div className="flex-1">
            <h3 className="text-sm font-semibold text-zinc-700 dark:text-zinc-300 mb-2">Total</h3>
            <div id="totalFlows" />
          </div>
        </div>
      </div>
      <Script src="/js/flow_tracker.js" strategy="afterInteractive" />
    </>
  );
}
