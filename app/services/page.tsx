import type { Metadata } from "next";
import Link from "next/link";

import StructuredData from "@/components/StructuredData";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  buildMetadata,
  buildServiceCatalogSchema,
  buildWebPageSchema,
} from "@/lib/seo";
import { operatingSteps, services } from "@/lib/site";

export const metadata: Metadata = buildMetadata({
  title: "Services",
  path: "/services",
  description:
    "Explore SASA Solutions cleaning services for homes, offices, turnovers, and deep-cleaning support tailored to your schedule and standards.",
});

export default function ServicesPage() {
  return (
    <main id="main" className="px-4 py-14 sm:px-6 lg:px-8 lg:py-20">
      <StructuredData
        id="services-page-jsonld"
        data={[
          buildWebPageSchema({
            title: "Services",
            description:
              "Explore SASA Solutions cleaning services for homes, offices, turnovers, and deep-cleaning support tailored to your schedule and standards.",
            path: "/services",
          }),
          buildServiceCatalogSchema(),
        ]}
      />
      <div className="mx-auto max-w-6xl space-y-12">
        <section className="rounded-[2rem] border border-foreground/10 bg-white/75 p-8 shadow-[0_24px_80px_-50px_rgba(15,23,42,0.5)] backdrop-blur">
          <div className="max-w-3xl space-y-5">
            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-primary">
              Services
            </p>
            <h1 className="text-4xl font-semibold tracking-tight text-balance text-foreground sm:text-5xl">
              Cleaning support for homes, workplaces, and space resets.
            </h1>
            <p className="text-base leading-7 text-muted-foreground">
              We build scopes around how the property is used, what level of
              detail matters most, and whether you need one-time support or a
              recurring rhythm.
            </p>
          </div>
        </section>

        <section className="grid gap-6 md:grid-cols-2">
          {services.map((service) => (
            <Card
              key={service.title}
              className="border border-foreground/10 bg-white/80"
            >
              <CardHeader className="space-y-3">
                <p className="text-sm font-semibold uppercase tracking-[0.16em] text-primary">
                  {service.eyebrow}
                </p>
                <CardTitle className="text-2xl">{service.title}</CardTitle>
                <CardDescription className="leading-6">
                  {service.description}
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-3">
                {service.highlights.map((highlight) => (
                  <p
                    key={highlight}
                    className="rounded-full border border-foreground/10 bg-background/75 px-3 py-2 text-sm text-muted-foreground"
                  >
                    {highlight}
                  </p>
                ))}
              </CardContent>
            </Card>
          ))}
        </section>

        <section className="rounded-[2rem] border border-foreground/10 bg-white/75 p-8">
          <div className="max-w-2xl space-y-4">
            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-primary">
              Delivery flow
            </p>
            <h2 className="text-3xl font-semibold tracking-tight text-balance text-foreground">
              How service planning comes together
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
              <Link href="/contact">Request a tailored quote</Link>
            </Button>
          </div>
        </section>
      </div>
    </main>
  );
}
