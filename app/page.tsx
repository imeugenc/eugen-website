import { ArrowUpRight, ChevronRight, Mail, Play, Smartphone } from "@/components/icons";
import { AppPreview } from "@/components/app-preview";
import { SectionHeading } from "@/components/section-heading";
import { appBenefits, tradeGroups, tradingConcepts, workPrinciples } from "@/components/site-data";

const appLinks = {
  open: "#",
  about: "#about",
  appStore: "#",
  googlePlay: "#"
};

export default function HomePage() {
  return (
    <main className="relative overflow-hidden bg-canvas text-white">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(176,138,70,0.16),transparent_34%),radial-gradient(circle_at_70%_20%,rgba(255,255,255,0.08),transparent_20%)]" />
      <div className="absolute inset-0 bg-hero-grid bg-[size:68px_68px] opacity-[0.045]" />

      <div className="relative mx-auto flex min-h-screen max-w-7xl flex-col px-6 pb-12 pt-6 sm:px-8 lg:px-12">
        <header className="sticky top-0 z-30 -mx-6 border-b border-white/5 bg-canvas/80 px-6 py-4 backdrop-blur-xl sm:-mx-8 sm:px-8 lg:-mx-12 lg:px-12">
          <div className="mx-auto flex max-w-7xl items-center justify-between">
            <a href="#top" className="text-sm uppercase tracking-[0.35em] text-gold-200">
              Eugen Costache
            </a>
            <nav className="hidden items-center gap-8 text-sm text-white/72 md:flex">
              <a href="#about" className="transition hover:text-white">
                Despre
              </a>
              <a href="#markets" className="transition hover:text-white">
                Ce tranzacționez
              </a>
              <a href="#process" className="transition hover:text-white">
                Cum lucrez
              </a>
              <a href="#app" className="transition hover:text-white">
                Aplicația
              </a>
              <a href="#contact" className="transition hover:text-white">
                Contact
              </a>
            </nav>
          </div>
        </header>

        <section
          id="top"
          className="grid flex-1 items-center gap-16 py-12 md:py-16 lg:grid-cols-[1.1fr_0.9fr] lg:gap-12"
        >
          <div className="max-w-2xl animate-rise opacity-0 [animation-delay:120ms] [animation-fill-mode:forwards]">
            <div className="mb-6 inline-flex items-center gap-3 rounded-full border border-gold-300/20 bg-white/[0.03] px-4 py-2 text-xs uppercase tracking-[0.28em] text-gold-200">
              <span className="h-2 w-2 rounded-full bg-gold-300 shadow-[0_0_18px_rgba(210,180,108,0.7)]" />
              Website personal
            </div>
            <h1 className="max-w-xl text-5xl font-semibold leading-[0.95] tracking-[-0.04em] text-white sm:text-6xl lg:text-7xl">
              Trader de futures, focusat pe structură, disciplină și execuție.
            </h1>
            <p className="mt-6 max-w-xl text-base leading-7 text-white/70 sm:text-lg">
              Tranzacționez indici și crypto și construiesc o aplicație mobilă care reflectă modul
              meu real de lucru: clar, simplu și aplicabil.
            </p>
            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <a href={appLinks.open} className="button-primary">
                Deschide aplicația
                <ArrowUpRight />
              </a>
              <a href={appLinks.about} className="button-secondary">
                Despre mine
                <ChevronRight />
              </a>
            </div>
            <p className="mt-3 text-sm text-gold-200/78">Aplicația va fi disponibilă în curând</p>
            <div className="mt-12 grid gap-5 border-t border-white/10 pt-8 sm:grid-cols-3">
              {[
                ["Piețe", "NASDAQ, ES, BTC, ETH"],
                ["Abordare", "Structură, disciplină, execuție"],
                ["Aplicație", "Aplicație mobilă în dezvoltare"]
              ].map(([label, value]) => (
                <div key={label}>
                  <p className="text-xs uppercase tracking-[0.28em] text-gold-200/80">{label}</p>
                  <p className="mt-2 text-sm leading-6 text-white/70">{value}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="relative animate-rise opacity-0 [animation-delay:280ms] [animation-fill-mode:forwards]">
            <div className="absolute left-1/2 top-1/2 h-72 w-72 -translate-x-1/2 -translate-y-1/2 rounded-full bg-gold-300/12 blur-3xl" />
            <div className="relative mx-auto max-w-md animate-float">
              <AppPreview />
            </div>
          </div>
        </section>

        <section id="about" className="section-shell">
          <SectionHeading
            eyebrow="Despre"
            title="Tradingul și aplicația vin din același mod de lucru."
            description="Nu sunt aici să predau trading și nu promit rezultate. Site-ul acesta reflectă modul meu real de lucru și aplicația pe care o construiesc în jurul lui."
          />
          <div className="grid gap-6 lg:grid-cols-[1.15fr_0.85fr]">
            <div className="panel p-8 sm:p-10">
              <p className="text-lg leading-8 text-white/78">
                Sunt trader de futures și crypto, iar focusul meu este pe structură, disciplină și
                execuție constantă.
              </p>
              <p className="mt-6 text-base leading-7 text-white/62">
                Lucrez în principal pe piețe precum NASDAQ și S&amp;P 500 pentru intraday, iar pe
                crypto urmăresc BTC, ETH și alte altcoins.
              </p>
              <p className="mt-6 text-base leading-7 text-white/62">
                Aplicația pe care o dezvolt este construită în jurul modului meu real de lucru: un
                spațiu simplu, organizat, fără zgomot inutil, care să mă ajute să rămân focusat și
                disciplinat.
              </p>
            </div>
            <div className="panel flex flex-col justify-between p-8 sm:p-10">
              <div>
                <p className="text-xs uppercase tracking-[0.3em] text-gold-200">Concepte</p>
                <ul className="mt-5 space-y-4 text-sm text-white/72">
                  {tradingConcepts.map((concept) => (
                    <li key={concept}>{concept}</li>
                  ))}
                </ul>
              </div>
              <a href="#app" className="mt-10 inline-flex items-center gap-2 text-sm text-gold-200">
                Vezi aplicația
                <ArrowUpRight />
              </a>
            </div>
          </div>
        </section>

        <section id="markets" className="section-shell">
          <SectionHeading
            eyebrow="Piețe"
            title="Ce tranzacționez"
            description="Focusul meu este restrâns și clar. Urmăresc doar piețele care se potrivesc modului meu de lucru și contextului din ziua respectivă."
          />
          <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
            {tradeGroups.map((market, index) => (
              <article
                key={market.name}
                className="panel group min-h-[240px] p-7 transition duration-300 hover:-translate-y-1 hover:border-gold-300/30"
                style={{ animationDelay: `${index * 120}ms` }}
              >
                <div className="flex h-full flex-col">
                  <p className="text-xs uppercase tracking-[0.3em] text-gold-200/85">{market.tag}</p>
                  <h3 className="mt-6 text-2xl font-medium tracking-[-0.03em] text-white">
                    {market.name}
                  </h3>
                  <p className="mt-4 text-sm leading-7 text-white/65">{market.description}</p>
                  <div className="mt-auto pt-8 text-sm text-white/42">{market.tag}</div>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section id="process" className="section-shell">
          <SectionHeading
            eyebrow="Proces"
            title="Cum lucrez"
            description="Nu urmăresc setupuri „magice” și nu tranzacționez pe bază de semnale."
          />
          <div className="grid gap-6 lg:grid-cols-[1fr_1fr]">
            <div className="panel p-8 sm:p-10">
              <p className="text-lg leading-8 text-white/78">
                Mă bazez pe structură, lichiditate și reacții reale în zone importante, nu pe
                ideea că piața trebuie să îmi confirme o opinie dinainte.
              </p>
              <ul className="mt-8 space-y-4 text-sm text-white/72">
                {workPrinciples.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
            <div className="panel p-8 sm:p-10">
              <p className="text-base leading-7 text-white/68">
                Obiectivul meu nu este să am dreptate de fiecare dată, ci să execut corect,
                constant și disciplinat.
              </p>
              <p className="mt-6 text-base leading-7 text-white/62">
                Tradingul pentru mine este un proces, nu un shortcut.
              </p>
            </div>
          </div>
        </section>

        <section id="app" className="section-shell">
          <SectionHeading
            eyebrow="Aplicația"
            title="Aplicația"
            description="Construiesc o aplicație mobilă care reflectă exact modul în care gândesc și lucrez."
          />
          <div className="grid gap-6 lg:grid-cols-[0.95fr_1.05fr]">
            <div className="panel p-8 sm:p-10">
              <div className="inline-flex items-center gap-3 rounded-full border border-gold-300/20 bg-gold-300/8 px-4 py-2 text-xs uppercase tracking-[0.25em] text-gold-200">
                <Smartphone />
                Gândită pentru mobil
              </div>
              <h3 className="mt-8 text-3xl font-medium tracking-[-0.04em] text-white sm:text-4xl">
                Simplu, organizat și gândit pentru utilizare reală.
              </h3>
              <p className="mt-5 max-w-xl text-base leading-7 text-white/68">
                Nu este o aplicație de semnale și nu promite rezultate.
              </p>
              <ul className="mt-6 space-y-4 text-sm text-white/72">
                {appBenefits.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
              <p className="mt-6 max-w-xl text-base leading-7 text-white/62">
                Totul este gândit pentru mobil: rapid, clar și fără complicații.
              </p>
              <div className="mt-10 flex flex-wrap gap-3">
                <a href={appLinks.open} className="button-primary">
                  Coming Soon
                  <ArrowUpRight />
                </a>
                <a href={appLinks.appStore} className="button-secondary">
                  Coming Soon
                  <Play />
                </a>
                <a href={appLinks.googlePlay} className="button-secondary">
                  Coming Soon
                  <Play />
                </a>
              </div>
              <p className="mt-4 text-sm text-gold-200/78">Coming Soon</p>
            </div>

            <div className="panel relative overflow-hidden p-6 sm:p-8">
              <div className="absolute inset-x-12 top-8 h-24 rounded-full bg-gold-300/10 blur-3xl" />
              <div className="relative grid gap-6 md:grid-cols-[0.6fr_0.4fr] md:items-end">
                <div className="rounded-[2rem] border border-white/10 bg-white/[0.025] p-6">
                  <p className="text-xs uppercase tracking-[0.3em] text-gold-200">Previzualizare</p>
                  <h4 className="mt-4 text-2xl font-medium tracking-[-0.03em] text-white">
                    O extensie firească a modului meu de lucru.
                  </h4>
                  <p className="mt-4 text-sm leading-7 text-white/62">
                    Aplicația este gândită ca un tool personal, curat și ușor de folosit, fără
                    elemente inutile și fără zgomot suplimentar.
                  </p>
                </div>
                <div className="mx-auto w-full max-w-[220px] animate-pulseSoft">
                  <AppPreview compact />
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="contact" className="section-shell pb-16">
          <div className="panel relative overflow-hidden p-8 sm:p-10">
            <div className="absolute right-0 top-0 h-48 w-48 rounded-full bg-gold-300/10 blur-3xl" />
            <div className="relative grid gap-10 lg:grid-cols-[1fr_auto] lg:items-end">
              <div>
                <p className="text-xs uppercase tracking-[0.32em] text-gold-200">Contact</p>
                <h2 className="mt-5 max-w-2xl text-3xl font-medium tracking-[-0.04em] text-white sm:text-4xl">
                  Pentru moment, acesta este singurul canal de contact.
                </h2>
                <p className="mt-6 max-w-2xl text-base leading-7 text-white/62">
                  Conturile de social media vor fi adăugate în curând.
                </p>
                <div className="mt-8 flex flex-col gap-4 text-white/70 sm:flex-row sm:flex-wrap sm:items-center">
                  <a
                    href="mailto:c.eugenbroker@gmail.com"
                    className="inline-flex items-center gap-3 text-sm"
                  >
                    <Mail />
                    c.eugenbroker@gmail.com
                  </a>
                </div>
              </div>

              <a href={appLinks.open} className="button-primary">
                Coming Soon
                <ArrowUpRight />
              </a>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
