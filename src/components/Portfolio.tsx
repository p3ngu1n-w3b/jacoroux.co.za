import { portfolio } from "@/lib/site";

const accentClass = {
  pink: "glow-border hover:border-neon-pink/50",
  lime: "glow-border-lime hover:border-neon-lime/50",
  violet: "glow-border-violet hover:border-neon-violet/50",
} as const;

const accentTag = {
  pink: "border-neon-pink/30 bg-neon-pink/10 text-neon-pink",
  lime: "border-neon-lime/30 bg-neon-lime/10 text-neon-lime",
  violet: "border-neon-violet/30 bg-neon-violet/10 text-neon-violet",
} as const;

const previewGlow = {
  pink: "from-neon-pink/30 via-transparent to-neon-violet/20",
  lime: "from-neon-lime/30 via-transparent to-neon-pink/20",
  violet: "from-neon-violet/35 via-transparent to-neon-pink/15",
} as const;

export function Portfolio() {
  return (
    <section id="work" className="scroll-mt-24 px-4 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-6xl">
        <div className="max-w-2xl">
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-neon-lime">
            Portfolio
          </p>
          <h2 className="mt-3 font-display text-3xl font-bold text-white sm:text-4xl">
            Live sites I&apos;ve built for real local businesses
          </h2>
          <p className="mt-4 text-fog-muted">
            Proof over promises — open any project below. Each one was designed
            for clarity, trust, and action (calls, WhatsApp, quotes, donations).
          </p>
        </div>

        <div className="mt-12 grid gap-8 lg:grid-cols-3">
          {portfolio.map((project) => (
            <article
              key={project.url}
              className={`flex flex-col overflow-hidden rounded-3xl border border-ink-border bg-ink-card/90 transition ${accentClass[project.accent]}`}
            >
              <div
                className={`relative h-40 bg-gradient-to-br ${previewGlow[project.accent]} grid-noise`}
              >
                <div className="absolute inset-0 flex items-end p-5">
                  <div>
                    <p className="text-xs uppercase tracking-wider text-fog">
                      {project.industry}
                    </p>
                    <h3 className="font-display text-2xl font-semibold text-white">
                      {project.title}
                    </h3>
                  </div>
                </div>
              </div>

              <div className="flex flex-1 flex-col p-6">
                <p className="text-sm text-fog-muted">
                  <span className="font-semibold text-fog">Problem: </span>
                  {project.problem}
                </p>
                <p className="mt-3 text-sm text-fog-muted">
                  <span className="font-semibold text-fog">What I built: </span>
                  {project.solution}
                </p>
                <p className="mt-3 text-sm text-fog-muted">
                  <span className="font-semibold text-fog">Outcome: </span>
                  {project.result}
                </p>

                <div className="mt-5 flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className={`rounded-full border px-2.5 py-1 text-xs ${accentTag[project.accent]}`}
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <a
                  href={project.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-neon-pink transition hover:text-white"
                >
                  Visit live site
                  <span aria-hidden="true">↗</span>
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
