import { ArrowUpRight, ChevronRight, Mail, Play, Smartphone } from "@/components/icons";
import { AppPreview } from "@/components/app-preview";
import { SectionHeading } from "@/components/section-heading";
import { markets, socials } from "@/components/site-data";

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
                About
              </a>
              <a href="#markets" className="transition hover:text-white">
                What I Trade
              </a>
              <a href="#app" className="transition hover:text-white">
                The App
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
              Personal Website
            </div>
            <h1 className="max-w-xl text-5xl font-semibold leading-[0.95] tracking-[-0.04em] text-white sm:text-6xl lg:text-7xl">
              Trader focused on structure, discipline and execution.
            </h1>
            <p className="mt-6 max-w-xl text-base leading-7 text-white/70 sm:text-lg">
              This website presents Eugen Costache&apos;s personal trading perspective and the
              mobile app he is building around clarity, consistency, and practical use. It is a
              calm, direct space built to reflect process rather than hype.
            </p>
            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <a href={appLinks.open} className="button-primary">
                Open the App
                <ArrowUpRight />
              </a>
              <a href={appLinks.about} className="button-secondary">
                About Me
                <ChevronRight />
              </a>
            </div>
            <p className="mt-3 text-sm text-gold-200/78">App access coming soon.</p>
            <div className="mt-12 grid gap-5 border-t border-white/10 pt-8 sm:grid-cols-3">
              {[
                ["Markets", "NASDAQ, US30, BTC, ETH"],
                ["Approach", "Structured, selective, disciplined"],
                ["Product", "Mobile-first trading companion"]
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
            eyebrow="About"
            title="A personal project built around calm execution."
            description="Eugen Costache works at the intersection of trading, product thinking, and disciplined self-direction. This website reflects his personal journey in the markets and the app project he is shaping around that experience."
          />
          <div className="grid gap-6 lg:grid-cols-[1.15fr_0.85fr]">
            <div className="panel p-8 sm:p-10">
              <p className="text-lg leading-8 text-white/78">
                Eugen approaches trading with a focus on structure, patience, and decision quality.
                He is also building the mobile app showcased here as a practical extension of that
                mindset: clean, intentional, and useful in real conditions.
              </p>
              <p className="mt-6 text-base leading-7 text-white/62">
                Rather than turning trading into spectacle, the goal is to keep the experience
                grounded. The website and app are part of the same personal project, shaped by
                observation, iteration, and a preference for clarity over noise.
              </p>
            </div>
            <div className="panel flex flex-col justify-between p-8 sm:p-10">
              <div>
                <p className="text-xs uppercase tracking-[0.3em] text-gold-200">Focus</p>
                <ul className="mt-5 space-y-4 text-sm text-white/72">
                  <li>Trader with a disciplined, process-led perspective.</li>
                  <li>Builder creating a mobile-first product around personal workflow.</li>
                  <li>Creator treating the website as a clear reflection of that journey.</li>
                </ul>
              </div>
              <a href="#app" className="mt-10 inline-flex items-center gap-2 text-sm text-gold-200">
                Explore the app
                <ArrowUpRight />
              </a>
            </div>
          </div>
        </section>

        <section id="markets" className="section-shell">
          <SectionHeading
            eyebrow="What I Trade"
            title="A concise market focus."
            description="The focus stays narrow, deliberate, and professional. Each market below reflects a preference for structure, rhythm, and clarity."
          />
          <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
            {markets.map((market, index) => (
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
                  <div className="mt-auto pt-8 text-sm text-white/42">Selective focus</div>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section id="app" className="section-shell">
          <SectionHeading
            eyebrow="The App"
            title="A mobile-first tool designed for practical use."
            description="The app section positions the product as clean, usable, and focused. It is not about noise or aggressive promotion, but about offering a direct experience that fits modern mobile habits."
          />
          <div className="grid gap-6 lg:grid-cols-[0.95fr_1.05fr]">
            <div className="panel p-8 sm:p-10">
              <div className="inline-flex items-center gap-3 rounded-full border border-gold-300/20 bg-gold-300/8 px-4 py-2 text-xs uppercase tracking-[0.25em] text-gold-200">
                <Smartphone />
                Mobile-first product
              </div>
              <h3 className="mt-8 text-3xl font-medium tracking-[-0.04em] text-white sm:text-4xl">
                Clear on the phone, strong on the brand.
              </h3>
              <p className="mt-5 max-w-xl text-base leading-7 text-white/68">
                The experience is designed to feel direct and refined, with a strong visual identity
                and a practical interface. This site introduces that product and encourages visitors
                to open it, download it, and keep it close.
              </p>
              <div className="mt-10 flex flex-wrap gap-3">
                <a href={appLinks.open} className="button-primary">
                  Open the App
                  <ArrowUpRight />
                </a>
                <a href={appLinks.appStore} className="button-secondary">
                  App Store
                  <Play />
                </a>
                <a href={appLinks.googlePlay} className="button-secondary">
                  Google Play
                  <Play />
                </a>
              </div>
              <p className="mt-4 text-sm text-gold-200/78">
                Coming Soon. Store links and direct access will be added when the app is ready.
              </p>
            </div>

            <div className="panel relative overflow-hidden p-6 sm:p-8">
              <div className="absolute inset-x-12 top-8 h-24 rounded-full bg-gold-300/10 blur-3xl" />
              <div className="relative grid gap-6 md:grid-cols-[0.6fr_0.4fr] md:items-end">
                <div className="rounded-[2rem] border border-white/10 bg-white/[0.025] p-6">
                  <p className="text-xs uppercase tracking-[0.3em] text-gold-200">Showcase</p>
                  <h4 className="mt-4 text-2xl font-medium tracking-[-0.03em] text-white">
                    Elegant presentation for a serious product.
                  </h4>
                  <p className="mt-4 text-sm leading-7 text-white/62">
                    The visual language stays restrained: dark surfaces, refined spacing, precise
                    hierarchy, and subtle motion that feels premium on both desktop and mobile.
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
                  For direct contact or to explore the app, use the links below.
                </h2>
                <div className="mt-8 flex flex-col gap-4 text-white/70 sm:flex-row sm:flex-wrap sm:items-center">
                  <a
                    href="mailto:c.eugenbroker@gmail.com"
                    className="inline-flex items-center gap-3 text-sm"
                  >
                    <Mail />
                    c.eugenbroker@gmail.com
                  </a>
                  {socials.map((social) => (
                    <a
                      key={social.label}
                      href={social.href}
                      className="inline-flex items-center gap-2 text-sm transition hover:text-white"
                    >
                      {social.label}
                      <ArrowUpRight />
                    </a>
                  ))}
                </div>
              </div>

              <a href={appLinks.open} className="button-primary">
                Open the App
                <ArrowUpRight />
              </a>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
