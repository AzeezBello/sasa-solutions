import type { Metadata } from "next";
import Link from "next/link";

import StructuredData from "@/components/StructuredData";
import { Button } from "@/components/ui/button";
import { buildMetadata, buildWebPageSchema } from "@/lib/seo";
import { operatingPrinciples, operatingSteps } from "@/lib/site";

export const metadata: Metadata = buildMetadata({
  title: "About",
  path: "/about",
  description:
    "Learn how SASA Solutions approaches residential and commercial cleaning with clear scopes, reliable scheduling, and detail-focused delivery.",
});

export default function AboutPage() {
  return (
    <main id="main" className="px-4 py-14 sm:px-6 lg:px-8 lg:py-20">
      <StructuredData
        id="about-page-jsonld"
        data={buildWebPageSchema({
          title: "About",
          description:
            "Learn how SASA Solutions approaches residential and commercial cleaning with clear scopes, reliable scheduling, and detail-focused delivery.",
          path: "/about",
        })}
      />
      <div className="mx-auto max-w-6xl space-y-12">
        <section className="grid gap-8 rounded-[2rem] border border-foreground/10 bg-white/75 p-8 shadow-[0_24px_80px_-50px_rgba(15,23,42,0.5)] backdrop-blur lg:grid-cols-[1.05fr_0.95fr]">
          <div className="space-y-5">
            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-primary">
              About
            </p>
            <h1 className="text-4xl font-semibold tracking-tight text-balance text-foreground sm:text-5xl">
              Cleaning service should make the day easier, not harder to manage.
            </h1>
            <p className="max-w-2xl text-base leading-7 text-muted-foreground">
              SASA Solutions is built around clear communication, dependable
              scopes, and service plans that respect how each home or workplace
              actually runs.
            </p>
          </div>

          <div className="rounded-[1.75rem] border border-foreground/10 bg-background/75 p-6">
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-primary">
              What we optimize for
            </p>
            <div className="mt-4 space-y-4">
              <p className="text-sm leading-6 text-muted-foreground">
                Consistency matters more than generic promises. The right clean
                is one that fits the property, the people using it, and the
                standard you need to maintain over time.
              </p>
              <p className="text-sm leading-6 text-muted-foreground">
                That is why we keep the process simple: align on the brief,
                define the rhythm, and keep the result dependable.
              </p>
            </div>
          </div>
        </section>

        <section className="space-y-6">
          <div className="max-w-2xl space-y-4">
            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-primary">
              Principles
            </p>
            <h2 className="text-3xl font-semibold tracking-tight text-balance text-foreground">
              The standards behind the service
            </h2>
          </div>

          <div className="grid gap-4 md:grid-cols-2">
            {operatingPrinciples.map((principle) => (
              <article
                key={principle.title}
                className="rounded-[1.5rem] border border-foreground/10 bg-white/75 p-6"
              >
                <p className="text-sm font-semibold uppercase tracking-[0.16em] text-primary">
                  {principle.eyebrow}
                </p>
                <h3 className="mt-3 text-xl font-semibold text-foreground">
                  {principle.title}
                </h3>
                <p className="mt-3 text-sm leading-6 text-muted-foreground">
                  {principle.description}
                </p>
              </article>
            ))}
          </div>
        </section>

        <section className="rounded-[2rem] border border-foreground/10 bg-white/75 p-8">
          <div className="max-w-2xl space-y-4">
            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-primary">
              Process
            </p>
            <h2 className="text-3xl font-semibold tracking-tight text-balance text-foreground">
              A straightforward path from request to delivery
            </h2>
          </div>

          <div className="mt-8 grid gap-4 lg:grid-cols-3">
            {operatingSteps.map((step, index) => (
              <article
                key={step.title}
                className="rounded-[1.5rem] border border-foreground/10 bg-background/80 p-6"
              >
                <p className="text-sm font-semibold text-primary">
                  Step 0{index + 1}
                </p>
                <h3 className="mt-3 text-xl font-semibold text-foreground">
                  {step.title}
                </h3>
                <p className="mt-3 text-sm leading-6 text-muted-foreground">
                  {step.description}
                </p>
              </article>
            ))}
          </div>

          <div className="mt-8">
            <Button
              asChild
              className="bg-primary text-primary-foreground hover:bg-primary/90"
            >
              <Link href="/contact">Start your request brief</Link>
            </Button>
          </div>
        </section>
      </div>
    </main>
  );
}
