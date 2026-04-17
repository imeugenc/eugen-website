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
        <div className="mt-5 rounded-[2rem] border border-white/5 bg-[radial-gradient(circle_at_top,rgba(210,180,108,0.16),transparent_28%),linear-gradient(180deg,#151515_0%,#0c0c0c_100%)] p-5">
          <p className="text-[10px] uppercase tracking-[0.28em] text-gold-200/80">Aplicația EC</p>

          <div className="mt-6 rounded-[1.75rem] border border-white/8 bg-white/[0.035] p-5">
            <p className="text-3xl font-medium tracking-[-0.05em] text-white">Execuție</p>
          </div>

          <div className="mt-5 grid grid-cols-3 gap-2">
            {["Disciplină", "Structurat", "Focus"].map((label) => (
              <div
                key={label}
                className="rounded-[1rem] border border-white/8 bg-black/20 px-3 py-3 text-center text-[11px] text-white/72"
              >
                {label}
              </div>
            ))}
          </div>

          <div className="mt-5 flex flex-wrap gap-2">
            {["BTC", "ETH", "NQ", "ES"].map((market) => (
              <div
                key={market}
                className="rounded-full border border-white/10 bg-black/20 px-3 py-1.5 text-[11px] text-white/78"
              >
                {market}
              </div>
            ))}
          </div>

          <div className="mt-6 rounded-[1.5rem] border border-gold-300/15 bg-gold-300/8 px-4 py-3 text-center text-sm font-medium text-white">
            În curând
          </div>
        </div>
      </div>
    </div>
  );
}
