import { Contact } from "@/components/Contact";
import {
  experience,
  portfolio,
  processSteps,
  services,
  siteConfig,
  whyMe,
} from "@/lib/site";

export default function HomePage() {
  return (
    <main id="main">
      <section className="relative overflow-hidden px-4 pb-20 pt-28 sm:px-6 lg:px-8">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_20%_10%,rgba(255,43,214,0.25),transparent_40%),radial-gradient(circle_at_80%_15%,rgba(182,255,61,0.15),transparent_35%)]" />
        <div className="pointer-events-none absolute -left-24 top-24 h-72 w-72 rounded-full bg-neon-pink/25 blur-3xl" />
        <div className="pointer-events-none absolute -right-24 top-40 h-80 w-80 rounded-full bg-neon-violet/20 blur-3xl" />
        <div className="relative mx-auto grid max-w-7xl gap-10 lg:grid-cols-[1.2fr_0.8fr]">
          <div>
            <p className="inline-block rounded-full border border-neon-pink/40 bg-neon-pink/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.22em] text-neon-pink">
              Garden Route based
            </p>
            <h1 className="mt-6 font-display text-5xl font-semibold leading-[0.95] tracking-tight text-white sm:text-7xl lg:text-8xl">
              Not another
              <br />
              <span className="text-neon-pink text-glow-pink">cookie-cutter</span>
              <br />
              website.
            </h1>
            <p className="mt-6 max-w-2xl text-base leading-relaxed text-fog-muted sm:text-lg">
              I am {siteConfig.name}, senior frontend developer. I design
              high-impact websites for South African businesses that need to
              stand out, load fast, and turn visitors into calls and WhatsApps.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href="#contact"
                className="rounded-full bg-neon-pink px-6 py-3 text-sm font-semibold text-ink transition hover:shadow-[0_0_32px_rgba(255,43,214,0.5)]"
              >
                Start my website
              </a>
              <a
                href="#showcase"
                className="rounded-full border border-white/20 px-6 py-3 text-sm font-semibold text-white transition hover:border-neon-lime hover:text-neon-lime"
              >
                View showcase
              </a>
            </div>
          </div>
          <div className="relative">
            <div className="grid-noise rounded-[2rem] border border-white/15 bg-ink-card/70 p-6 backdrop-blur">
              <p className="text-xs uppercase tracking-[0.2em] text-neon-lime">
                Creative engineering
              </p>
              <p className="mt-4 font-display text-3xl text-white">
                Awwwards-inspired visual direction, grounded in conversion.
              </p>
              <dl className="mt-8 grid grid-cols-2 gap-4">
                <div>
                  <dt className="text-xs text-fog-muted">Experience</dt>
                  <dd className="font-display text-3xl text-white">
                    {siteConfig.yearsExperience}+
                  </dd>
                </div>
                <div>
                  <dt className="text-xs text-fog-muted">Projects shipped</dt>
                  <dd className="font-display text-3xl text-neon-lime">50+</dd>
                </div>
              </dl>
            </div>
          </div>
        </div>
      </section>

      <section className="overflow-hidden border-y border-white/10 bg-ink-soft py-4">
        <div className="marquee">
          <div className="marquee-track">
            {Array.from({ length: 2 }).map((_, i) => (
              <p
                key={i}
                className="mr-8 whitespace-nowrap font-display text-3xl tracking-tight text-white/85 sm:text-4xl"
              >
                WEBSITE DESIGNER GEORGE · FRONTEND SPECIALIST · NEXT.JS · SEO ·
                UI MOTION · BUSINESS WEBSITES THAT WIN CLIENTS
              </p>
            ))}
          </div>
        </div>
      </section>

      <section id="services" className="px-4 py-24 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <h2 className="font-display text-4xl text-white sm:text-5xl">
            Services with a stronger visual identity
          </h2>
          <div className="mt-10 grid gap-5 md:grid-cols-6">
            {services.map((service, index) => (
              <article
                key={service.id}
                className={`rounded-3xl border border-white/10 bg-ink-card/70 p-6 ${
                  index % 3 === 0
                    ? "md:col-span-3"
                    : index % 3 === 1
                      ? "md:col-span-2"
                      : "md:col-span-1"
                }`}
              >
                <p className="text-xs uppercase tracking-[0.2em] text-neon-pink">
                  {service.priceFrom}
                </p>
                <h3 className="mt-2 font-display text-2xl text-white">
                  {service.title}
                </h3>
                <p className="mt-3 text-sm text-fog-muted">{service.summary}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="showcase" className="px-4 pb-24 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <h2 className="font-display text-4xl text-white sm:text-5xl">
            Selected live builds
          </h2>
          <div className="mt-10 space-y-6">
            {portfolio.map((project, index) => (
              <a
                key={project.url}
                href={project.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group block rounded-[2rem] border border-white/10 bg-ink-card/70 p-8 transition hover:border-neon-pink/50"
              >
                <div className="grid gap-6 md:grid-cols-[0.8fr_1.2fr] md:items-end">
                  <p className="font-display text-5xl text-white/25">{`0${index + 1}`}</p>
                  <div>
                    <p className="text-xs uppercase tracking-[0.2em] text-neon-lime">
                      {project.industry}
                    </p>
                    <h3 className="mt-1 font-display text-4xl text-white transition group-hover:text-neon-pink">
                      {project.title}
                    </h3>
                    <p className="mt-2 text-fog-muted">{project.result}</p>
                  </div>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      <section id="process" className="px-4 pb-24 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl rounded-[2rem] border border-white/10 bg-ink-soft/80 p-8">
          <h2 className="font-display text-4xl text-white sm:text-5xl">
            Process
          </h2>
          <ol className="mt-8 grid gap-4 md:grid-cols-4">
            {processSteps.map((step) => (
              <li
                key={step.step}
                className="rounded-2xl border border-white/10 bg-ink/60 p-4"
              >
                <p className="font-display text-3xl text-neon-pink">{step.step}</p>
                <p className="mt-1 text-lg text-white">{step.title}</p>
                <p className="mt-2 text-sm text-fog-muted">{step.description}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section id="about" className="px-4 pb-24 sm:px-6 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-2">
          <div className="rounded-[2rem] border border-white/10 bg-ink-card/70 p-8">
            <p className="text-xs uppercase tracking-[0.2em] text-neon-pink">
              Why clients choose me
            </p>
            <ul className="mt-5 space-y-4">
              {whyMe.map((item) => (
                <li key={item.title}>
                  <p className="font-display text-2xl text-white">{item.title}</p>
                  <p className="mt-1 text-sm text-fog-muted">{item.description}</p>
                </li>
              ))}
            </ul>
          </div>
          <div className="rounded-[2rem] border border-white/10 bg-ink-card/70 p-8">
            <p className="text-xs uppercase tracking-[0.2em] text-neon-lime">
              Experience timeline
            </p>
            <ul className="mt-5 space-y-4">
              {experience.map((job) => (
                <li
                  key={job.company}
                  className="border-l border-neon-pink/40 pl-4 last:pb-0"
                >
                  <p className="font-display text-xl text-white">{job.company}</p>
                  <p className="text-sm text-neon-pink">{job.role}</p>
                  <p className="text-xs text-fog-muted">{job.period}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <Contact />
    </main>
  );
}
