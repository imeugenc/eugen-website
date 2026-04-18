import Image from "next/image";
import { ArrowUpRight, ChevronRight, Mail, Play } from "@/components/icons";
import { SectionHeading } from "@/components/section-heading";
import {
  aboutHighlights,
  appBenefits,
  appCards,
  appContents,
  tradeCategories,
  tradingConcepts,
  workPrinciples
} from "@/components/site-data";

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
            <a href="#top" className="flex items-center gap-3">
              <Image
                src="/market-mechanism-mark.png"
                alt="Market Mechanism"
                width={34}
                height={34}
                className="h-8 w-8 rounded-full border border-gold-300/20 object-cover"
              />
              <span className="text-sm uppercase tracking-[0.32em] text-gold-200">
                Market Mechanism
              </span>
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
          className="grid flex-1 items-center gap-16 py-16 md:py-20 lg:grid-cols-[1.02fr_0.98fr] lg:gap-16 lg:py-24"
        >
          <div className="max-w-2xl animate-rise opacity-0 [animation-delay:120ms] [animation-fill-mode:forwards]">
            <div className="mb-6 inline-flex items-center gap-3 rounded-full border border-gold-300/20 bg-white/[0.03] px-4 py-2 text-xs uppercase tracking-[0.28em] text-gold-200">
              <span className="h-2 w-2 rounded-full bg-gold-300 shadow-[0_0_18px_rgba(210,180,108,0.7)]" />
              Market Mechanism
            </div>
            <h1 className="mt-5 max-w-2xl text-5xl font-semibold leading-[0.95] tracking-[-0.05em] text-white sm:text-6xl lg:text-[4.7rem]">
              Structură. Disciplină. Execuție.
            </h1>
            <p className="mt-7 max-w-lg text-base leading-7 text-white/70 sm:text-lg">
              Un spațiu construit pentru claritate și proces, în care este prezentat modul în care
              este privită piața, fără zgomot inutil.
            </p>
            <div className="mt-12 flex flex-col gap-4 sm:flex-row">
              <a href={appLinks.open} className="button-primary">
                În curând
                <ArrowUpRight />
              </a>
              <a href={appLinks.about} className="button-secondary">
                Despre
                <ChevronRight />
              </a>
            </div>
            <p className="mt-3 text-sm text-gold-200/78">Aplicația va fi disponibilă în curând.</p>
            <div className="mt-14 grid gap-5 border-t border-white/10 pt-8 sm:grid-cols-3">
              {[
                ["Piețe", "NASDAQ, ES, BTC, ETH"],
                ["Abordare", "Structură, disciplină, execuție"],
                ["Format", "Analiză clară și organizată"]
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
            <div className="panel relative mx-auto max-w-[420px] overflow-hidden p-6 sm:p-8 animate-float">
              <div className="absolute inset-x-10 top-10 h-24 rounded-full bg-gold-300/10 blur-3xl" />
              <div className="relative">
                <p className="text-xs uppercase tracking-[0.32em] text-gold-200/82">Aplicația</p>
                <h3 className="mt-4 text-3xl font-medium tracking-[-0.04em] text-white">
                  Daily bias, analiză și review într-un format clar.
                </h3>
                <p className="mt-4 max-w-sm text-sm leading-7 text-white/62">
                  O prezentare simplă a structurii aplicației, construită ca un produs clar și
                  organizat, fără interfețe încărcate și fără zgomot vizual.
                </p>
                <div className="mt-8 grid gap-3">
                  {appCards.map((card) => (
                    <article
                      key={card.title}
                      className="rounded-[1.5rem] border border-white/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.045),rgba(255,255,255,0.02))] px-5 py-5"
                    >
                      <p className="text-xs uppercase tracking-[0.3em] text-gold-200/82">
                        {card.title}
                      </p>
                      <div className="mt-4 flex flex-wrap gap-2.5">
                        {card.items.map((item) => (
                          <span
                            key={item}
                            className="rounded-full border border-white/10 bg-black/20 px-3 py-1.5 text-xs text-white/76"
                          >
                            {item}
                          </span>
                        ))}
                      </div>
                    </article>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="about" className="section-shell">
          <SectionHeading
            eyebrow="Despre"
            title="Un proiect construit în jurul clarității și execuției."
            description="Un spațiu clar, disciplinat și atent structurat, prezentat fără zgomot inutil."
          />
          <div className="grid gap-6 lg:grid-cols-[1.15fr_0.85fr]">
            <div className="panel p-8 sm:p-10">
              <p className="text-base leading-7 text-white/74">
                Market Mechanism este un proiect construit în jurul ideii de claritate și structură
                în trading.
              </p>
              <p className="mt-6 text-base leading-7 text-white/64">
                Nu este o platformă de educație și nu promite rezultate.
              </p>
              <p className="mt-6 text-base leading-7 text-white/62">
                Este un spațiu în care este prezentat modul în care este analizată piața, bazat pe
                structură, lichiditate și execuție disciplinată.
              </p>
              <p className="mt-6 text-base leading-7 text-white/62">
                Focusul este pe proces, nu pe hype.
              </p>
            </div>

            <div className="panel flex flex-col justify-between p-8 sm:p-10">
              <div>
                <p className="text-xs uppercase tracking-[0.3em] text-gold-200">Repere</p>
                <ul className="mt-5 space-y-3 text-sm text-white/72">
                  {aboutHighlights.map((item) => (
                    <li
                      key={item}
                      className="rounded-[1.25rem] border border-white/10 bg-white/[0.025] px-4 py-4"
                    >
                      {item}
                    </li>
                  ))}
                </ul>
                <p className="mt-8 text-xs uppercase tracking-[0.3em] text-gold-200">Concepte</p>
                <div className="mt-4 flex flex-wrap gap-3">
                  {tradingConcepts.map((concept) => (
                    <span
                      key={concept}
                      className="rounded-full border border-gold-300/14 bg-white/[0.035] px-4 py-2 text-xs tracking-[0.05em] text-white/74"
                    >
                      {concept}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="markets" className="section-shell">
          <SectionHeading
            eyebrow="Piețe"
            title="Ce tranzacționez"
            description="Un focus clar, selectiv și practic."
          />
          <div className="panel overflow-hidden">
            <div className="grid gap-0 divide-y divide-white/8 lg:grid-cols-3 lg:divide-x lg:divide-y-0">
              {tradeCategories.map((category) => (
                <article key={category.title} className="p-8 sm:p-10">
                  <p className="text-xs uppercase tracking-[0.3em] text-gold-200/85">
                    {category.title}
                  </p>
                  <ul className="mt-8 space-y-5">
                    {category.items.map((item) => (
                      <li key={item} className="border-l border-gold-300/20 pl-4">
                        <p className="text-base leading-7 text-white/82">{item}</p>
                      </li>
                    ))}
                  </ul>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="process" className="section-shell">
          <SectionHeading
            eyebrow="Proces"
            title="Cum lucrez"
            description="Nu urmăresc setupuri „magice” și nu tranzacționez pe bază de semnale."
          />
          <div className="grid gap-6 lg:grid-cols-[1fr_1fr]">
            <div className="panel bg-[linear-gradient(180deg,rgba(255,255,255,0.035),rgba(255,255,255,0.02))] p-8 sm:p-10">
              <p className="text-lg leading-8 text-white/78">
                Mă bazez pe structură, lichiditate și reacții în zone importante, nu pe ideea că
                piața trebuie să îmi confirme o opinie dinainte.
              </p>
              <ul className="mt-8 space-y-4 text-sm text-white/72">
                {workPrinciples.map((item) => (
                  <li
                    key={item}
                    className="rounded-[1.25rem] border border-white/10 bg-black/20 px-4 py-4"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="panel p-8 sm:p-10">
              <p className="text-lg leading-8 text-white/78">
                Obiectivul nu este să existe dreptate de fiecare dată, ci execuție corectă,
                constantă și disciplinată.
              </p>
              <p className="mt-6 text-base leading-7 text-white/62">
                Tradingul este un proces bazat pe disciplină, nu un shortcut.
              </p>
            </div>
          </div>
        </section>

        <section id="app" className="section-shell">
          <SectionHeading
            eyebrow="Aplicația"
            title="Aplicația"
            description="Un tool construit pentru claritate, structură și execuție."
          />
          <div className="grid gap-8 lg:grid-cols-[0.92fr_1.08fr] lg:items-start lg:gap-14">
            <div className="panel p-8 sm:p-10">
              <p className="mt-6 max-w-lg text-base leading-7 text-white/68">
                Aplicația reflectă modul de lucru din spatele acestui proiect și este construită ca
                un spațiu simplu și organizat, prin care este prezentat modul în care este privită
                piața.
              </p>
              <p className="mt-6 max-w-lg text-base leading-7 text-white/62">
                Nu este o aplicație de semnale și nu promite rezultate.
              </p>
              <div className="mt-10 max-w-xl">
                <p className="text-xs uppercase tracking-[0.3em] text-gold-200">Ce conține</p>
                <ul className="mt-5 space-y-3">
                  {appContents.map((item) => (
                    <li
                      key={item}
                      className="flex items-start gap-3 rounded-[1rem] border border-white/10 bg-white/[0.025] px-4 py-3 text-sm leading-6 text-white/78"
                    >
                      <span className="mt-2 h-1.5 w-1.5 rounded-full bg-gold-300" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="mt-10 max-w-xl">
                <p className="text-xs uppercase tracking-[0.3em] text-gold-200">Beneficii</p>
                <ul className="mt-5 grid gap-3 sm:grid-cols-2">
                  {appBenefits.map((item) => (
                    <li
                      key={item}
                      className="flex items-start gap-3 rounded-[1rem] border border-white/10 bg-white/[0.025] px-4 py-3 text-sm leading-6 text-white/78"
                    >
                      <span className="mt-2 h-1.5 w-1.5 rounded-full bg-gold-300" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="mt-10 flex flex-wrap gap-4">
                <a href={appLinks.open} className="button-primary">
                  În curând
                  <ArrowUpRight />
                </a>
                <a
                  href={appLinks.appStore}
                  aria-disabled="true"
                  className="button-secondary cursor-default opacity-50"
                >
                  App Store
                  <Play />
                </a>
                <a
                  href={appLinks.googlePlay}
                  aria-disabled="true"
                  className="button-secondary cursor-default opacity-50"
                >
                  Google Play
                  <Play />
                </a>
              </div>
              <p className="mt-4 text-sm text-gold-200/78">
                Linkurile și accesul direct vor fi adăugate când aplicația este gata.
              </p>
            </div>

            <div className="panel relative overflow-hidden p-8 sm:p-10">
              <div className="absolute inset-x-16 top-10 h-24 rounded-full bg-gold-300/10 blur-3xl" />
              <div className="relative grid gap-4">
                {appCards.map((card, index) => (
                  <article
                    key={card.title}
                    className="rounded-[1.75rem] border border-white/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.045),rgba(255,255,255,0.02))] p-6 shadow-[0_16px_50px_rgba(0,0,0,0.22)]"
                    style={{ transform: `translateX(${index === 1 ? "12px" : index === 2 ? "24px" : "0px"})` }}
                  >
                    <p className="text-xs uppercase tracking-[0.3em] text-gold-200/82">
                      {card.title}
                    </p>
                    <div className="mt-5 flex flex-wrap gap-2.5">
                      {card.items.map((item) => (
                        <span
                          key={item}
                          className="rounded-full border border-white/10 bg-black/20 px-3.5 py-2 text-sm text-white/78"
                        >
                          {item}
                        </span>
                      ))}
                    </div>
                  </article>
                ))}
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

              <a href={appLinks.open} className="button-secondary">
                Aplicația în curând
                <ArrowUpRight />
              </a>
            </div>
          </div>
        </section>

        <footer className="border-t border-white/6 py-8">
          <div className="flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-center">
            <div className="flex items-center gap-3">
              <Image
                src="/market-mechanism-mark.png"
                alt="Market Mechanism"
                width={28}
                height={28}
                className="h-7 w-7 rounded-full border border-gold-300/20 object-cover"
              />
              <span className="text-xs uppercase tracking-[0.28em] text-white/46">
                Market Mechanism
              </span>
            </div>
            <p className="text-xs uppercase tracking-[0.24em] text-white/32">
              Claritate. Structură. Execuție.
            </p>
          </div>
        </footer>
      </div>
    </main>
  );
}
