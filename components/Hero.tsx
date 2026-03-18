import Image from "next/image";
import Link from "next/link";

import { Button } from "@/components/ui/button";
import { siteConfig } from "@/lib/site";

export default function Hero() {
  return (
    <section className="relative isolate overflow-hidden">
      <Image
        src={siteConfig.heroImageSrc}
        alt={siteConfig.heroImageAlt}
        fill
        priority
        sizes="100vw"
        className="object-cover object-center"
      />
      <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(12,33,29,0.88)_0%,rgba(12,33,29,0.72)_40%,rgba(12,33,29,0.3)_100%)]" />
      <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(10,24,21,0.2)_0%,rgba(10,24,21,0.1)_35%,rgba(244,248,243,0.16)_100%)]" />

      <div className="relative mx-auto flex min-h-[72svh] max-w-6xl items-center px-4 py-24 sm:px-6 sm:py-28 lg:min-h-[78svh] lg:px-8 lg:py-32">
        <div className="max-w-3xl space-y-6">
          <h1 className="text-4xl font-semibold tracking-tight text-balance text-white sm:text-5xl lg:text-7xl">
            Trusted cleaning support for homes, offices, and move-outs across
            London.
          </h1>
          <p className="max-w-2xl text-base leading-7 text-white/82 sm:text-lg">
            {siteConfig.name} has delivered practical residential and
            commercial cleaning since {siteConfig.foundedYear}, with flexible
            support for one-off jobs, regular visits, and property handovers.
          </p>

          <Button
            asChild
            size="lg"
            className="bg-white text-foreground hover:bg-white/92"
          >
            <Link href={siteConfig.ctaHref}>{siteConfig.ctaLabel}</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
