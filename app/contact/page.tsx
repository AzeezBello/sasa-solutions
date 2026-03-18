import type { Metadata } from "next";
import Image from "next/image";
import { Suspense } from "react";

import ContactBriefBuilder from "@/components/ContactBriefBuilder";
import StructuredData from "@/components/StructuredData";
import { buildMetadata, buildWebPageSchema } from "@/lib/seo";
import { pageImages, quoteChecklist, siteConfig } from "@/lib/site";

export const metadata: Metadata = buildMetadata({
  title: "Contact",
  path: "/contact",
  description:
    "Get in touch with SASA Solutions by phone, email, or request brief for home, office, residential, moving house, school, and hotel cleaning services.",
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
            "Get in touch with SASA Solutions by phone, email, or request brief for home, office, residential, moving house, school, and hotel cleaning services.",
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
              We are a call away.
            </h1>
            <p className="text-base leading-7 text-muted-foreground">
              Reach SASA Solutions by phone, email, or through the request
              brief below and the team can shape the right cleaning support for
              your home, office, moving house, school, or hotel needs.
            </p>
            <div className="space-y-2 text-sm text-muted-foreground">
              <p>
                <a href={siteConfig.contact.phoneHref} className="hover:text-foreground">
                  {siteConfig.contact.phoneDisplay}
                </a>
              </p>
              <p>
                <a href={siteConfig.contact.emailHref} className="hover:text-foreground">
                  {siteConfig.contact.email}
                </a>
              </p>
              <p>{siteConfig.contact.address}</p>
            </div>
          </div>

          <div className="space-y-4">
            <div className="relative min-h-[16rem] overflow-hidden rounded-[1.75rem] border border-foreground/10">
              <Image
                src={pageImages.contact.src}
                alt={pageImages.contact.alt}
                fill
                sizes="(min-width: 1024px) 42vw, 100vw"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(10,27,24,0.08)_0%,rgba(10,27,24,0.62)_100%)]" />
              <div className="absolute inset-x-0 bottom-0 p-6 text-white">
                <p className="text-sm font-semibold uppercase tracking-[0.18em] text-white/82">
                  Ready for your brief
                </p>
                <p className="mt-2 max-w-sm text-sm leading-6 text-white/82">
                  Share the property details, timing, and service type, and the
                  team can shape the right next step.
                </p>
              </div>
            </div>

            <div className="rounded-[1.75rem] border border-foreground/10 bg-background/75 p-6">
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-primary">
                Operating Hours
              </p>
              <div className="mt-4 space-y-3">
                {siteConfig.contact.hours.map((item) => (
                  <p
                    key={item}
                    className="rounded-[1rem] border border-foreground/10 bg-white/80 px-4 py-3 text-sm leading-6 text-muted-foreground"
                  >
                    {item}
                  </p>
                ))}
              </div>
              <p className="mt-5 text-sm font-semibold uppercase tracking-[0.18em] text-primary">
                Quote checklist
              </p>
              <div className="mt-3 space-y-3">
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
          </div>
        </section>

        <Suspense fallback={<ContactBriefFallback />}>
          <ContactBriefBuilder />
        </Suspense>
      </div>
    </main>
  );
}
