import Link from "next/link";

import { Button } from "@/components/ui/button";
import { siteConfig } from "@/lib/site";

export default function CTA() {
  return (
    <section className="px-4 pb-20 pt-8 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-6xl rounded-[2rem] border border-primary/15 bg-linear-to-r from-primary to-chart-1 p-8 text-primary-foreground shadow-[0_32px_120px_-55px_rgba(16,88,72,0.85)] sm:p-10">
        <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
          <div className="max-w-2xl space-y-3">
            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-primary-foreground/80">
              Next step
            </p>
            <h2 className="text-3xl font-semibold tracking-tight text-balance sm:text-4xl">
              Ready to shape a cleaning plan around your space?
            </h2>
            <p className="text-base leading-7 text-primary-foreground/85">
              Start with a clear request brief and we can turn it into a scope
              that fits your timing, standards, and service cadence.
            </p>
          </div>

          <div className="flex flex-wrap gap-3">
            <Button
              asChild
              size="lg"
              variant="secondary"
              className="bg-white text-foreground hover:bg-white/90"
            >
              <Link href={siteConfig.ctaHref}>{siteConfig.ctaLabel}</Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="ghost"
              className="border border-white/30 text-primary-foreground hover:bg-white/10"
            >
              <Link href="/about">See how we work</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
