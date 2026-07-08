import { processSteps } from "@/lib/site";

export function Process() {
  return (
    <section id="process" className="scroll-mt-24 px-4 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-6xl">
        <div className="max-w-2xl">
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-neon-violet">
            How it works
          </p>
          <h2 className="mt-3 font-display text-3xl font-bold text-white sm:text-4xl">
            From first chat to launch — without the agency runaround
          </h2>
        </div>

        <ol className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {processSteps.map((item) => (
            <li
              key={item.step}
              className="rounded-3xl border border-ink-border bg-ink-soft/80 p-6"
            >
              <span className="font-display text-3xl font-bold text-neon-pink text-glow-pink">
                {item.step}
              </span>
              <h3 className="mt-4 font-display text-xl font-semibold text-white">
                {item.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-fog-muted">
                {item.description}
              </p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
