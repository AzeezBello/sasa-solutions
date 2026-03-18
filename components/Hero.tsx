import Link from "next/link";

import { Button } from "@/components/ui/button";
import {
  heroHighlights,
  operatingSteps,
  quickFacts,
  siteConfig,
} from "@/lib/site";

export default function Hero() {
  return (
    <section className="px-4 pb-16 pt-14 sm:px-6 sm:pb-20 sm:pt-18 lg:px-8 lg:pt-24">
      <div className="mx-auto grid max-w-6xl gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
        <div className="space-y-8">
          <div className="space-y-5">
            <span className="inline-flex rounded-full border border-primary/15 bg-primary/8 px-4 py-2 text-sm font-semibold text-primary">
              Residential and commercial cleaning support
            </span>
            <h1 className="max-w-3xl text-4xl font-semibold tracking-tight text-balance text-foreground sm:text-5xl lg:text-6xl">
              Cleaning support that feels calm, consistent, and seriously well
              managed.
            </h1>
            <p className="max-w-2xl text-base leading-7 text-muted-foreground sm:text-lg">
              {siteConfig.description}
            </p>
          </div>

          <div className="flex flex-wrap gap-3">
            <Button
              asChild
              size="lg"
              className="bg-primary text-primary-foreground hover:bg-primary/90"
            >
              <Link href={siteConfig.ctaHref}>{siteConfig.ctaLabel}</Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="border-foreground/15 bg-white/75 hover:bg-white"
            >
              <Link href="/services">Explore services</Link>
            </Button>
          </div>

          <ul className="flex flex-wrap gap-2">
            {heroHighlights.map((highlight) => (
              <li
                key={highlight}
                className="rounded-full border border-foreground/10 bg-white/70 px-3 py-2 text-sm text-muted-foreground"
              >
                {highlight}
              </li>
            ))}
          </ul>
        </div>

        <div className="rounded-[2rem] border border-foreground/10 bg-white/75 p-6 shadow-[0_30px_90px_-55px_rgba(15,23,42,0.55)] backdrop-blur">
          <div className="rounded-[1.75rem] bg-linear-to-br from-primary/12 via-white to-accent p-6">
            <p className="text-sm font-semibold uppercase tracking-[0.22em] text-primary">
              How we work
            </p>
            <div className="mt-6 space-y-4">
              {operatingSteps.map((step, index) => (
                <article
                  key={step.title}
                  className="rounded-[1.25rem] border border-foreground/8 bg-white/80 p-4"
                >
                  <div className="flex items-start gap-4">
                    <span className="inline-flex size-10 shrink-0 items-center justify-center rounded-full bg-primary text-sm font-semibold text-primary-foreground">
                      0{index + 1}
                    </span>
                    <div>
                      <h2 className="text-lg font-semibold text-foreground">
                        {step.title}
                      </h2>
                      <p className="mt-1 text-sm leading-6 text-muted-foreground">
                        {step.description}
                      </p>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>

          <div className="mt-6 grid gap-4 sm:grid-cols-3 lg:grid-cols-1">
            {quickFacts.map((fact) => (
              <article
                key={fact.label}
                className="rounded-[1.25rem] border border-foreground/10 bg-background/75 p-4"
              >
                <p className="text-sm font-semibold text-foreground">
                  {fact.label}
                </p>
                <p className="mt-2 text-sm leading-6 text-muted-foreground">
                  {fact.value}
                </p>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
