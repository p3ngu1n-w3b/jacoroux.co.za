import { navLinks, siteConfig } from "@/lib/site";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-ink-border bg-ink-soft">
      <div className="mx-auto grid max-w-6xl gap-10 px-4 py-14 sm:px-6 md:grid-cols-[1.4fr_1fr_1fr] lg:px-8">
        <div>
          <p className="font-display text-xl font-semibold text-white">
            Jaco<span className="text-neon-pink">.</span>Roux
          </p>
          <p className="mt-3 max-w-sm text-sm leading-relaxed text-fog-muted">
            Website designer & senior frontend developer in {siteConfig.location}.
            I build business websites that look sharp and win enquiries.
          </p>
        </div>

        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-neon-pink">
            Navigate
          </p>
          <ul className="mt-4 space-y-2">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="text-sm text-fog-muted transition hover:text-white"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-neon-violet">
            Contact
          </p>
          <ul className="mt-4 space-y-2 text-sm text-fog-muted">
            <li>
              <a
                href={`mailto:${siteConfig.email}`}
                className="transition hover:text-neon-pink"
              >
                {siteConfig.email}
              </a>
            </li>
            <li>
              <a
                href="#contact"
                className="transition hover:text-neon-pink"
              >
                Contact
              </a>
            </li>
            <li>
              <a
                href={siteConfig.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="transition hover:text-white"
              >
                LinkedIn
              </a>
            </li>
            <li>{siteConfig.location}</li>
          </ul>
        </div>
      </div>

      <div className="border-t border-ink-border">
        <div className="mx-auto flex max-w-6xl flex-col gap-2 px-4 py-5 text-xs text-fog-muted sm:flex-row sm:items-center sm:justify-between sm:px-6 lg:px-8">
          <p>
            © {year} {siteConfig.name}. All rights reserved.
          </p>
          <p>
            <span className="text-fog">jacoroux.co.za</span>
          </p>
        </div>
      </div>
    </footer>
  );
}
