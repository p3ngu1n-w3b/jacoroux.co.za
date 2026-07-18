import { siteConfig } from "@/lib/site";

export function Hero() {
  return (
    <section
      id="top"
      className="relative overflow-hidden px-4 pb-20 pt-32 sm:px-6 sm:pt-40 lg:px-8 lg:pb-28"
    >
      <div className="pointer-events-none absolute inset-0 grid-noise opacity-40" />
      <div className="pointer-events-none absolute -left-24 top-24 h-72 w-72 rounded-full bg-neon-pink/10 blur-3xl" />
      <div className="pointer-events-none absolute -right-16 top-40 h-80 w-80 rounded-full bg-neon-violet/15 blur-3xl" />

      <div className="relative mx-auto max-w-6xl">
        <p className="inline-flex items-center gap-2 rounded-full border border-ink-border bg-ink-card/80 px-3 py-1 text-xs uppercase tracking-[0.22em] text-neon-lime">
          <span className="h-1.5 w-1.5 rounded-full bg-neon-lime shadow-[0_0_10px_#b6ff3d]" />
          George · Garden Route · South Africa
        </p>

        <h1 className="mt-6 max-w-4xl font-display text-4xl font-bold leading-[1.05] tracking-tight text-white sm:text-5xl lg:text-7xl">
          I build websites that{" "}
          <span className="text-neon-pink text-glow-pink">win clients</span>
          <span className="text-neon-violet">.</span>
        </h1>

        <p className="mt-6 max-w-2xl text-base leading-relaxed text-fog-muted sm:text-lg">
          Hi — I&apos;m {siteConfig.name}, a senior frontend developer with nearly{" "}
          {siteConfig.yearsExperience} years of experience. I design and ship
          conversion-focused business websites for SMEs across the Garden Route
          and South Africa — not templates, production sites.
        </p>

        <div className="mt-10 flex flex-col gap-3 sm:flex-row sm:items-center">
          <a
            href="#contact"
            className="inline-flex items-center justify-center rounded-full bg-neon-pink px-6 py-3 text-sm font-semibold text-ink transition hover:shadow-[0_0_28px_rgba(255,43,214,0.5)]"
          >
            Get a free quote
          </a>
          <a
            href="#work"
            className="inline-flex items-center justify-center rounded-full border border-ink-border bg-ink-card/60 px-6 py-3 text-sm font-semibold text-white transition hover:border-neon-violet hover:text-neon-violet"
          >
            See my work
          </a>
        </div>

        <dl className="mt-14 grid max-w-3xl grid-cols-2 gap-4 sm:grid-cols-3">
          {[
            { label: "Years shipping UI", value: `${siteConfig.yearsExperience}+` },
            { label: "Live client sites", value: "3+" },
            { label: "Stack", value: "React · Next" },
          ].map((item) => (
            <div
              key={item.label}
              className="rounded-2xl border border-ink-border bg-ink-card/70 p-4 glow-border"
            >
              <dt className="text-xs uppercase tracking-wider text-fog-muted">
                {item.label}
              </dt>
              <dd className="mt-1 font-display text-2xl font-semibold text-white">
                {item.value}
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
