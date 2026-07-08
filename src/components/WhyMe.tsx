import { whyMe } from "@/lib/site";

export function WhyMe() {
  return (
    <section className="px-4 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-6xl">
        <div className="max-w-2xl">
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-neon-pink">
            Why work with me
          </p>
          <h2 className="mt-3 font-display text-3xl font-bold text-white sm:text-4xl">
            Senior frontend skill — aimed at growing your business online
          </h2>
        </div>

        <div className="mt-12 grid gap-5 sm:grid-cols-2">
          {whyMe.map((item) => (
            <article
              key={item.title}
              className="rounded-3xl border border-ink-border bg-ink-soft/70 p-6"
            >
              <h3 className="font-display text-xl font-semibold text-white">
                {item.title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-fog-muted">
                {item.description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
