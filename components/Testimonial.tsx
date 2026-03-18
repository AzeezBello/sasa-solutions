import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { testimonialThemes, trustStats } from "@/lib/site";

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
              Rated 4.9/5 by 200+ customers who want cleaning support they can
              actually rely on.
            </h2>
            <p className="text-base leading-7 text-muted-foreground">
              Trust grows when the service is easy to schedule, the scope is
              clear before the visit begins, and the finish quality is obvious
              the moment the work is done.
            </p>
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

        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {testimonialThemes.map((theme) => (
            <Card
              key={theme.title}
              className="border border-foreground/10 bg-white/80 shadow-[0_24px_80px_-60px_rgba(15,23,42,0.65)]"
            >
              <CardHeader>
                <p className="text-sm font-semibold uppercase tracking-[0.16em] text-primary">
                  Customer signal
                </p>
                <CardTitle className="text-xl">{theme.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm leading-6 text-muted-foreground">
                  {theme.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
