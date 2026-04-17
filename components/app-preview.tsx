type AppPreviewProps = {
  compact?: boolean;
};

export function AppPreview({ compact = false }: AppPreviewProps) {
  return (
    <div
      className={`relative mx-auto rounded-[3rem] border border-white/10 bg-[#0f0f0f] p-3 shadow-[0_30px_90px_rgba(0,0,0,0.55)] ${
        compact ? "max-w-[220px]" : "max-w-[320px]"
      }`}
    >
      <div className="rounded-[2.5rem] border border-gold-300/20 bg-[linear-gradient(180deg,#111111_0%,#181818_100%)] p-4">
        <div className="mx-auto h-1.5 w-20 rounded-full bg-white/10" />
        <div className="mt-5 rounded-[2rem] border border-white/5 bg-[radial-gradient(circle_at_top,rgba(210,180,108,0.16),transparent_28%),linear-gradient(180deg,#151515_0%,#0c0c0c_100%)] p-4">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-[10px] uppercase tracking-[0.24em] text-gold-200/80">EC App</p>
              <p className="mt-2 text-lg font-medium text-white">Execution</p>
            </div>
            <div className="rounded-full border border-gold-300/25 bg-gold-300/10 px-3 py-1 text-[10px] uppercase tracking-[0.22em] text-gold-200">
              Live
            </div>
          </div>

          <div className="mt-6 rounded-[1.5rem] border border-white/10 bg-white/[0.035] p-4">
            <div className="flex items-end justify-between">
              <div>
                <p className="text-[11px] uppercase tracking-[0.24em] text-white/42">Focus</p>
                <p className="mt-2 text-2xl font-medium tracking-[-0.04em] text-white">Discipline</p>
              </div>
              <div className="text-right">
                <p className="text-[11px] uppercase tracking-[0.24em] text-white/42">State</p>
                <p className="mt-2 text-sm text-gold-200">Structured</p>
              </div>
            </div>
          </div>

          <div className="mt-4 grid grid-cols-2 gap-3">
            {[
              ["Markets", "NASDAQ / US30"],
              ["Assets", "BTC / ETH"],
              ["Style", "Calm, focused"],
              ["Device", "Mobile-first"]
            ].map(([label, value]) => (
              <div key={label} className="rounded-[1.25rem] border border-white/10 bg-black/20 p-3">
                <p className="text-[10px] uppercase tracking-[0.24em] text-white/38">{label}</p>
                <p className="mt-2 text-sm text-white/78">{value}</p>
              </div>
            ))}
          </div>

          <div className="mt-4 rounded-[1.5rem] border border-gold-300/15 bg-gold-300/8 p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-[10px] uppercase tracking-[0.26em] text-gold-200/90">Action</p>
                <p className="mt-2 text-base font-medium text-white">Open the App</p>
              </div>
              <div className="rounded-full bg-gold-300 px-3 py-2 text-xs font-medium text-black">
                Launch
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
