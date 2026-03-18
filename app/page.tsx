import type { Metadata } from "next";
import Link from "next/link";

import CTA from "@/components/CTA";
import Hero from "@/components/Hero";
import PricingCalculator from "@/components/PricingCalculator";
import Services from "@/components/Services";
import StructuredData from "@/components/StructuredData";
import Testimonial from "@/components/Testimonial";
import { Button } from "@/components/ui/button";
import {
  buildMetadata,
  buildServiceCatalogSchema,
  buildWebPageSchema,
} from "@/lib/seo";
import { operatingPrinciples, siteConfig } from "@/lib/site";

export const metadata: Metadata = buildMetadata({
  path: "/",
});

export default function Home() {
  return (
    <main id="main">
      <StructuredData
        id="home-page-jsonld"
        data={[
          buildWebPageSchema({
            title: siteConfig.name,
            description: siteConfig.description,
            path: "/",
          }),
          buildServiceCatalogSchema(),
        ]}
      />
      <Hero />

      <section className="px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto grid max-w-6xl gap-10 rounded-[2rem] border border-foreground/10 bg-white/75 p-8 shadow-[0_24px_80px_-50px_rgba(15,23,42,0.5)] backdrop-blur xl:grid-cols-[0.95fr_1.05fr]">
          <div className="space-y-5">
            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-primary">
              Why SASA
            </p>
            <h2 className="text-3xl font-semibold tracking-tight text-balance text-foreground sm:text-4xl">
              A London cleaning business that has grown from practical local
              service since 2010.
            </h2>
            <p className="max-w-xl text-base leading-7 text-muted-foreground">
              SASA Solutions started as a house cleaning company and expanded
              through referrals into wider home, office, residential, moving
              house, school, and hotel cleaning support.
            </p>
            <Button
              asChild
              variant="outline"
              className="border-foreground/15 bg-white/80 hover:bg-white"
            >
              <Link href="/about">Learn more about SASA</Link>
            </Button>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            {operatingPrinciples.map((principle) => (
              <article
                key={principle.title}
                className="rounded-[1.5rem] border border-foreground/10 bg-background/80 p-6"
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
        </div>
      </section>

      <Services />
      <Testimonial />
      <PricingCalculator />
      <CTA />
    </main>
  );
}
