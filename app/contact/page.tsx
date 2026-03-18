import type { Metadata } from "next";
import { Suspense } from "react";

import ContactBriefBuilder from "@/components/ContactBriefBuilder";
import StructuredData from "@/components/StructuredData";
import { buildMetadata, buildWebPageSchema } from "@/lib/seo";
import { quoteChecklist } from "@/lib/site";

export const metadata: Metadata = buildMetadata({
  title: "Contact",
  path: "/contact",
  description:
    "Use the SASA Solutions request brief builder to gather the details needed for a clear cleaning quote and service plan.",
});

function ContactBriefFallback() {
  return (
    <section className="grid gap-6 lg:grid-cols-[1.05fr_0.95fr]">
      <div className="rounded-[2rem] border border-foreground/10 bg-white/80 p-8">
        <p className="text-sm font-semibold uppercase tracking-[0.24em] text-primary">
          Request brief builder
        </p>
        <h2 className="mt-3 text-3xl font-semibold tracking-tight text-balance text-foreground">
          Loading your request builder...
        </h2>
        <p className="mt-3 max-w-2xl text-sm leading-6 text-muted-foreground">
          Your calculator estimate and request fields will appear as soon as the
          page finishes hydrating.
        </p>
      </div>

      <div className="rounded-[2rem] border border-foreground/10 bg-white/80 p-8">
        <p className="text-sm font-semibold uppercase tracking-[0.24em] text-primary">
          Preview
        </p>
        <div className="mt-6 rounded-[1.5rem] border border-foreground/10 bg-background/80 p-5">
          <p className="text-sm leading-7 text-muted-foreground">
            Preparing your request summary...
          </p>
        </div>
      </div>
    </section>
  );
}

export default function ContactPage() {
  return (
    <main id="main" className="px-4 py-14 sm:px-6 lg:px-8 lg:py-20">
      <StructuredData
        id="contact-page-jsonld"
        data={buildWebPageSchema({
          title: "Contact",
          description:
            "Use the SASA Solutions request brief builder to gather the details needed for a clear cleaning quote and service plan.",
          path: "/contact",
        })}
      />
      <div className="mx-auto max-w-6xl space-y-12">
        <section className="grid gap-8 rounded-[2rem] border border-foreground/10 bg-white/75 p-8 shadow-[0_24px_80px_-50px_rgba(15,23,42,0.5)] backdrop-blur lg:grid-cols-[0.9fr_1.1fr]">
          <div className="space-y-5">
            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-primary">
              Contact
            </p>
            <h1 className="text-4xl font-semibold tracking-tight text-balance text-foreground sm:text-5xl">
              Build a clear request before it turns into a quote.
            </h1>
            <p className="text-base leading-7 text-muted-foreground">
              This repository does not include a wired email inbox or booking
              backend yet, so the fastest improvement is a clean request brief
              you can copy into your preferred contact workflow.
            </p>
          </div>

          <div className="rounded-[1.75rem] border border-foreground/10 bg-background/75 p-6">
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-primary">
              What to include
            </p>
            <div className="mt-4 space-y-3">
              {quoteChecklist.map((item) => (
                <p
                  key={item}
                  className="rounded-[1rem] border border-foreground/10 bg-white/80 px-4 py-3 text-sm leading-6 text-muted-foreground"
                >
                  {item}
                </p>
              ))}
            </div>
          </div>
        </section>

        <Suspense fallback={<ContactBriefFallback />}>
          <ContactBriefBuilder />
        </Suspense>
      </div>
    </main>
  );
}
