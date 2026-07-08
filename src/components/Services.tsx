import { services } from "@/lib/site";

export function Services() {
  return (
    <section id="services" className="scroll-mt-24 px-4 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-6xl">
        <div className="max-w-2xl">
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-neon-pink">
            Services
          </p>
          <h2 className="mt-3 font-display text-3xl font-bold text-white sm:text-4xl">
            Websites built to attract business — not just look pretty
          </h2>
          <p className="mt-4 text-fog-muted">
            Whether you need a brand-new site, a redesign, or a campaign landing
            page, I deliver clear messaging, sharp visuals, and calls-to-action
            that make enquiries easy.
          </p>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-2">
          {services.map((service, index) => (
            <article
              key={service.id}
              className="group relative overflow-hidden rounded-3xl border border-ink-border bg-ink-card/80 p-6 transition hover:border-neon-pink/40 hover:shadow-[0_0_40px_rgba(255,43,214,0.08)] sm:p-8"
            >
              <div className="flex items-start justify-between gap-4">
                <span className="font-display text-sm text-neon-violet">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <span className="rounded-full border border-neon-lime/30 bg-neon-lime/10 px-3 py-1 text-xs font-medium text-neon-lime">
                  {service.priceFrom}
                </span>
              </div>
              <h3 className="mt-4 font-display text-2xl font-semibold text-white">
                {service.title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-fog-muted">
                {service.summary}
              </p>
              <ul className="mt-6 grid grid-cols-1 gap-2 sm:grid-cols-2">
                {service.points.map((point) => (
                  <li
                    key={point}
                    className="flex items-center gap-2 text-sm text-fog"
                  >
                    <span className="h-1.5 w-1.5 rounded-full bg-neon-pink" />
                    {point}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>

        <p className="mt-8 text-sm text-fog-muted">
          Pricing is a starting guide — final quotes depend on pages, content,
          and features.{" "}
          <a href="#contact" className="text-neon-pink hover:underline">
            Tell me what you need
          </a>{" "}
          and I&apos;ll send a clear estimate.
        </p>
      </div>
    </section>
  );
}
