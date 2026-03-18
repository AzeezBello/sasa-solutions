import Link from "next/link";

import { Button } from "@/components/ui/button";
import { navItems, siteConfig } from "@/lib/site";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-foreground/10 bg-background/80 backdrop-blur-xl">
      <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-4 px-4 py-4 sm:px-6 lg:px-8">
        <Link href="/" className="flex items-center gap-3">
          <span className="flex size-11 items-center justify-center rounded-2xl bg-primary text-sm font-semibold tracking-[0.24em] text-primary-foreground shadow-lg shadow-primary/20">
            SA
          </span>
          <div className="space-y-0.5">
            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-foreground">
              {siteConfig.shortName}
            </p>
            <p className="text-xs text-muted-foreground">
              Cleaning systems for calm, well-kept spaces
            </p>
          </div>
        </Link>

        <nav className="order-3 flex w-full flex-wrap gap-2 text-sm text-muted-foreground sm:order-2 sm:w-auto sm:justify-center">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="rounded-full px-3 py-2 hover:bg-white/80 hover:text-foreground"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <Button
          asChild
          className="order-2 bg-primary text-primary-foreground shadow-lg shadow-primary/20 hover:bg-primary/90 sm:order-3"
        >
          <Link href={siteConfig.ctaHref}>{siteConfig.ctaLabel}</Link>
        </Button>
      </div>
    </header>
  );
}
