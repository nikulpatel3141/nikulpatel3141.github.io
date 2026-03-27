import Script from 'next/script';

export default function ShortsTracker() {
  return (
    <>
      <div className="my-6 overflow-x-auto rounded-xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-[#141416] p-4 space-y-6">
        <div>
          <h3 className="text-sm font-semibold text-zinc-700 dark:text-zinc-300 mb-2">Most Shorted Companies</h3>
          <div id="secShortTracker" />
        </div>
        <div>
          <h3 className="text-sm font-semibold text-zinc-700 dark:text-zinc-300 mb-2">Largest Shorts by Fund</h3>
          <div id="fundShortTracker" />
        </div>
      </div>
      <Script src="/js/short_tracker.js" strategy="afterInteractive" />
    </>
  );
}
