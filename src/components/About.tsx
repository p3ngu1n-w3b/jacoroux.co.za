import { siteConfig } from "@/lib/site";

export function About() {
  return (
    <section id="about" className="scroll-mt-24 px-4 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto grid max-w-6xl items-center gap-10 lg:grid-cols-[1.1fr_0.9fr]">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-neon-lime">
            About
          </p>
          <h2 className="mt-3 font-display text-3xl font-bold text-white sm:text-4xl">
            Friendly local developer. Serious about results.
          </h2>
          <div className="mt-5 space-y-4 text-sm leading-relaxed text-fog-muted sm:text-base">
            <p>
              I&apos;m {siteConfig.name} — a senior frontend developer based in{" "}
              {siteConfig.location}, working with businesses across the{" "}
              {siteConfig.region} and beyond.
            </p>
            <p>
              Over nearly {siteConfig.yearsExperience} years I&apos;ve built
              large React, Vue, and Next.js applications, design systems, and
              accessible interfaces for digital agencies and product teams. Now
              I also help SMEs get a website that looks premium and actually
              generates leads.
            </p>
            <p>
              Prefer a quick note in Afrikaans or a detailed English brief? Both
              work. Let&apos;s make getting found online the easy part of your
              business.
            </p>
          </div>
          <a
            href={siteConfig.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-6 inline-flex text-sm font-semibold text-neon-pink hover:underline"
          >
            View LinkedIn profile ↗
          </a>
        </div>

        <div className="relative overflow-hidden rounded-3xl border border-ink-border bg-ink-card p-8 glow-border">
          <div className="absolute -right-10 -top-10 h-40 w-40 rounded-full bg-neon-pink/20 blur-3xl" />
          <div className="absolute -bottom-12 -left-8 h-40 w-40 rounded-full bg-neon-violet/20 blur-3xl" />
          <div className="relative">
            <p className="font-display text-5xl font-bold text-white">JR</p>
            <p className="mt-2 text-sm uppercase tracking-[0.2em] text-neon-pink">
              Frontend · Websites · UX
            </p>
            <ul className="mt-8 space-y-3 text-sm text-fog">
              <li className="flex justify-between border-b border-ink-border pb-2">
                <span className="text-fog-muted">Location</span>
                <span>George, WC</span>
              </li>
              <li className="flex justify-between border-b border-ink-border pb-2">
                <span className="text-fog-muted">Languages</span>
                <span>English · Afrikaans</span>
              </li>
              <li className="flex justify-between border-b border-ink-border pb-2">
                <span className="text-fog-muted">Focus</span>
                <span>Business websites</span>
              </li>
              <li className="flex justify-between">
                <span className="text-fog-muted">Availability</span>
                <span className="text-neon-lime">Open for projects</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
