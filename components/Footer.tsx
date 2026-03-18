import Link from "next/link";

import { navItems, siteConfig } from "@/lib/site";

export default function Footer() {
  return (
    <footer className="border-t border-foreground/10 bg-white/70 px-4 py-8 backdrop-blur sm:px-6 lg:px-8">
      <div className="mx-auto flex max-w-6xl flex-col gap-6 md:flex-row md:items-end md:justify-between">
        <div className="max-w-xl space-y-3">
          <p className="text-sm font-semibold uppercase tracking-[0.24em] text-primary">
            {siteConfig.shortName}
          </p>
          <p className="text-sm leading-6 text-muted-foreground">
            {siteConfig.description}
          </p>
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} {siteConfig.name}. Clear scopes.
            Dependable results.
          </p>
        </div>

        <nav className="flex flex-wrap gap-3 text-sm text-muted-foreground">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="rounded-full px-3 py-2 hover:bg-background hover:text-foreground"
            >
              {item.label}
            </Link>
          ))}
        </nav>
      </div>
    </footer>
  );
}
