import { experience } from "@/lib/site";

export function Experience() {
  return (
    <section className="px-4 py-16 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-6xl overflow-hidden rounded-3xl border border-ink-border bg-ink-card/60 p-6 sm:p-8">
        <p className="text-xs font-semibold uppercase tracking-[0.22em] text-neon-violet">
          Experience
        </p>
        <h2 className="mt-2 font-display text-2xl font-bold text-white sm:text-3xl">
          Trusted in teams that ship at scale
        </h2>
        <p className="mt-2 max-w-2xl text-sm text-fog-muted">
          Agency and product experience behind the freelance website work — so
          your site gets the same care as enterprise UI.
        </p>

        <ul className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {experience.map((role) => (
            <li
              key={role.company}
              className="rounded-2xl border border-ink-border/80 bg-ink/50 px-4 py-4"
            >
              <p className="font-display text-base font-semibold text-white">
                {role.company}
              </p>
              <p className="mt-1 text-sm text-neon-pink">{role.role}</p>
              <p className="mt-2 text-xs text-fog-muted">{role.period}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
