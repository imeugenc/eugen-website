type AppPreviewProps = {
  compact?: boolean;
};

export function AppPreview({ compact = false }: AppPreviewProps) {
  const shellClass = compact ? "max-w-[238px]" : "max-w-[340px]";
  const frameClass = compact ? "p-3.5" : "p-4";
  const screenClass = compact ? "p-4.5" : "p-6";
  const titleWrapClass = compact
    ? "mt-5 rounded-[1.6rem] border border-white/8 bg-white/[0.035] p-4"
    : "mt-6 rounded-[1.85rem] border border-white/8 bg-white/[0.035] p-6";
  const titleClass = compact
    ? "text-[2rem] leading-none font-medium tracking-[-0.05em] text-white"
    : "text-[2.4rem] leading-none font-medium tracking-[-0.05em] text-white";
  const supportGridClass = compact ? "mt-5 grid grid-cols-3 gap-2" : "mt-6 grid grid-cols-3 gap-2.5";
  const supportItemClass = compact
    ? "rounded-[1rem] border border-white/8 bg-black/20 px-2.5 py-3 text-center text-[10px] text-white/72"
    : "rounded-[1rem] border border-white/8 bg-black/20 px-3 py-3.5 text-center text-[11px] text-white/72";
  const marketsClass = compact ? "mt-5 flex flex-wrap gap-2" : "mt-6 flex flex-wrap gap-2.5";
  const marketPillClass = compact
    ? "rounded-full border border-white/10 bg-black/20 px-3 py-1.5 text-[10px] text-white/78"
    : "rounded-full border border-white/10 bg-black/20 px-3.5 py-1.5 text-[11px] text-white/78";
  const ctaClass = compact
    ? "mt-6 rounded-[1.35rem] border border-[#8d6a33] bg-[#2a2419] px-4 py-3 text-center text-sm font-medium text-[#ecd9a6]"
    : "mt-7 rounded-[1.5rem] border border-[#8d6a33] bg-[#2a2419] px-4 py-3.5 text-center text-sm font-medium text-[#ecd9a6]";

  return (
    <div
      className={`relative mx-auto rounded-[3rem] border border-white/10 bg-[#0f0f0f] p-3 shadow-[0_30px_90px_rgba(0,0,0,0.55)] ${shellClass}`}
    >
      <div
        className={`rounded-[2.5rem] border border-gold-300/20 bg-[linear-gradient(180deg,#111111_0%,#181818_100%)] ${frameClass}`}
      >
        <div className="mx-auto h-1.5 w-20 rounded-full bg-white/10" />
        <div
          className={`mt-5 rounded-[2rem] border border-white/5 bg-[radial-gradient(circle_at_top,rgba(210,180,108,0.16),transparent_28%),linear-gradient(180deg,#151515_0%,#0c0c0c_100%)] ${screenClass}`}
        >
          <p className="text-[10px] uppercase tracking-[0.28em] text-gold-200/80">Aplicația EC</p>

          <div className={titleWrapClass}>
            <p className={titleClass}>Execuție</p>
          </div>

          <div className={supportGridClass}>
            {["Focus", "Disciplină", "Structurat"].map((label) => (
              <div key={label} className={supportItemClass}>
                {label}
              </div>
            ))}
          </div>

          <div className={marketsClass}>
            {["BTC", "ETH", "NQ", "ES"].map((market) => (
              <div key={market} className={marketPillClass}>
                {market}
              </div>
            ))}
          </div>

          <div className={ctaClass}>În curând</div>
        </div>
      </div>
    </div>
  );
}
