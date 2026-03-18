import Image from "next/image";
import Link from "next/link";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { services } from "@/lib/site";

export default function Services() {
  return (
    <section id="services" className="px-4 py-16 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-6xl">
        <div className="flex flex-col gap-5 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-2xl space-y-4">
            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-primary">
              Services
            </p>
            <h2 className="text-3xl font-semibold tracking-tight text-balance text-foreground sm:text-4xl">
              Service plans that match the space, schedule, and standard you
              need.
            </h2>
            <p className="text-base leading-7 text-muted-foreground">
              Every scope is shaped around how the space is used, what clean
              means for your team, and how often you need support.
            </p>
          </div>

          <Button
            asChild
            variant="outline"
            className="border-foreground/15 bg-white/75 hover:bg-white"
          >
            <Link href="/services">View all services</Link>
          </Button>
        </div>

        <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {services.map((service) => (
            <Card
              key={service.title}
              className="group overflow-hidden border border-foreground/10 bg-white/80 shadow-[0_24px_80px_-60px_rgba(15,23,42,0.65)]"
            >
              <div className="relative aspect-[4/3] overflow-hidden">
                <Image
                  src={service.imageSrc}
                  alt={service.imageAlt}
                  fill
                  sizes="(min-width: 1280px) 22vw, (min-width: 768px) 45vw, 100vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(11,31,27,0.08)_0%,rgba(11,31,27,0.4)_100%)]" />
              </div>
              <CardHeader className="space-y-3">
                <p className="text-sm font-semibold uppercase tracking-[0.16em] text-primary">
                  {service.eyebrow}
                </p>
                <CardTitle className="text-xl">{service.title}</CardTitle>
                <CardDescription className="leading-6">
                  {service.description}
                </CardDescription>
                {"priceNote" in service ? (
                  <p className="text-sm font-semibold text-foreground">
                    {service.priceNote}
                  </p>
                ) : null}
              </CardHeader>
              <CardContent className="space-y-2">
                {service.highlights.map((highlight) => (
                  <p
                    key={highlight}
                    className="rounded-full border border-foreground/10 bg-background/70 px-3 py-2 text-sm text-muted-foreground"
                  >
                    {highlight}
                  </p>
                ))}
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
