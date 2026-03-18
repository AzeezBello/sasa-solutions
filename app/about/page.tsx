import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

import StructuredData from "@/components/StructuredData";
import { Button } from "@/components/ui/button";
import { buildMetadata, buildWebPageSchema } from "@/lib/seo";
import {
  aboutStory,
  differentiators,
  operatingSteps,
  pageImages,
  siteConfig,
  visionPoints,
} from "@/lib/site";

export const metadata: Metadata = buildMetadata({
  title: "About",
  path: "/about",
  description:
    "Learn how SASA Solutions started in 2010, grew from house cleaning into wider London support, and aims to deliver trustworthy cleaning services.",
});

export default function AboutPage() {
  return (
    <main id="main" className="px-4 py-14 sm:px-6 lg:px-8 lg:py-20">
      <StructuredData
        id="about-page-jsonld"
        data={buildWebPageSchema({
          title: "About",
          description:
            "Learn how SASA Solutions started in 2010, grew from house cleaning into wider London support, and aims to deliver trustworthy cleaning services.",
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
              Built from house cleaning into broader London cleaning support.
            </h1>
            <div className="max-w-2xl space-y-4 text-base leading-7 text-muted-foreground">
              {aboutStory.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
          </div>

          <div className="space-y-4">
            <div className="relative min-h-[20rem] overflow-hidden rounded-[1.75rem] border border-foreground/10">
              <Image
                src={pageImages.about.story.src}
                alt={pageImages.about.story.alt}
                fill
                sizes="(min-width: 1024px) 42vw, 100vw"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(10,27,24,0.1)_0%,rgba(10,27,24,0.62)_100%)]" />
              <div className="absolute inset-x-0 bottom-0 p-6 text-white">
                <p className="text-sm font-semibold uppercase tracking-[0.2em] text-white/82">
                  Since 2010
                </p>
                <p className="mt-2 max-w-sm text-sm leading-6 text-white/82">
                  The company story is rooted in hands-on local service, team
                  building, and steady referral-led growth across London.
                </p>
              </div>
            </div>

            <div className="rounded-[1.75rem] border border-foreground/10 bg-background/75 p-6">
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-primary">
                Vision
              </p>
              <div className="mt-4 space-y-4">
                {visionPoints.map((point) => (
                  <p
                    key={point}
                    className="text-sm leading-6 text-muted-foreground"
                  >
                    {point}
                  </p>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="space-y-6">
          <div className="max-w-2xl space-y-4">
            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-primary">
              How We Are Different
            </p>
            <h2 className="text-3xl font-semibold tracking-tight text-balance text-foreground">
              A practical cleaning offer built around trust and flexibility
            </h2>
          </div>

          <div className="grid gap-4 md:grid-cols-2">
            {differentiators.map((point) => (
              <article
                key={point}
                className="rounded-[1.5rem] border border-foreground/10 bg-white/75 p-6"
              >
                <p className="text-sm font-semibold uppercase tracking-[0.16em] text-primary">
                  SASA standard
                </p>
                <h3 className="mt-3 text-xl font-semibold text-foreground">
                  {point}
                </h3>
              </article>
            ))}
          </div>
        </section>

        <section className="rounded-[2rem] border border-foreground/10 bg-white/75 p-8">
          <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
            <div className="max-w-2xl space-y-4">
              <p className="text-sm font-semibold uppercase tracking-[0.24em] text-primary">
                Process
              </p>
              <h2 className="text-3xl font-semibold tracking-tight text-balance text-foreground">
                A straightforward path from request to delivery
              </h2>
            </div>

            <div className="relative min-h-[16rem] overflow-hidden rounded-[1.75rem] border border-foreground/10">
              <Image
                src={pageImages.about.process.src}
                alt={pageImages.about.process.alt}
                fill
                sizes="(min-width: 1024px) 50vw, 100vw"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(10,27,24,0.08)_0%,rgba(10,27,24,0.48)_100%)]" />
            </div>
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
              <Link href={siteConfig.ctaHref}>{siteConfig.ctaLabel}</Link>
            </Button>
          </div>
        </section>
      </div>
    </main>
  );
}
