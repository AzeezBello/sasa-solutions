import Image from "next/image";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { pageImages, testimonials, trustStats } from "@/lib/site";

export default function Testimonial() {
  return (
    <section id="testimonials" className="px-4 py-16 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-6xl">
        <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-2xl space-y-4">
            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-primary">
              Testimonials
            </p>
            <h2 className="text-3xl font-semibold tracking-tight text-balance text-foreground sm:text-4xl">
              Here is what clients say about the services they booked.
            </h2>
            <p className="text-base leading-7 text-muted-foreground">
              The live SASA site highlights practical feedback from home and
              office clients who care about price, communication, and a visible
              cleaning result.
            </p>
          </div>

          <div className="grid gap-4 lg:w-[30rem]">
            <div className="relative min-h-[15rem] overflow-hidden rounded-[1.75rem] border border-foreground/10 shadow-[0_20px_60px_-50px_rgba(15,23,42,0.65)]">
              <Image
                src={pageImages.testimonials.src}
                alt={pageImages.testimonials.alt}
                fill
                sizes="(min-width: 1024px) 28rem, 100vw"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(10,27,24,0.1)_0%,rgba(10,27,24,0.62)_100%)]" />
              <div className="absolute inset-x-0 bottom-0 p-5 text-white">
                <p className="text-sm font-semibold uppercase tracking-[0.18em] text-white/82">
                  Trusted service
                </p>
                <p className="mt-2 max-w-sm text-sm leading-6 text-white/82">
                  Residential and workplace clients keep coming back for visible
                  results, fair pricing, and reliable communication.
                </p>
              </div>
            </div>

            <div className="grid gap-4 sm:grid-cols-3">
              {trustStats.map((stat) => (
                <article
                  key={stat.label}
                  className="rounded-[1.5rem] border border-foreground/10 bg-white/80 px-5 py-4 text-center shadow-[0_20px_60px_-50px_rgba(15,23,42,0.65)]"
                >
                  <p className="text-2xl font-semibold text-foreground">
                    {stat.value}
                  </p>
                  <p className="mt-2 text-sm text-muted-foreground">
                    {stat.label}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {testimonials.map((testimonial) => (
            <Card
              key={`${testimonial.author}-${testimonial.quote}`}
              className="border border-foreground/10 bg-white/80 shadow-[0_24px_80px_-60px_rgba(15,23,42,0.65)]"
            >
              <CardHeader>
                <p className="text-sm font-semibold uppercase tracking-[0.16em] text-primary">
                  Customer feedback
                </p>
                <CardTitle className="text-xl">{testimonial.author}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm leading-6 text-muted-foreground">
                  “{testimonial.quote}”
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
