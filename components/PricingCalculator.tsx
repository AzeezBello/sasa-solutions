"use client";

import Link from "next/link";
import { useState } from "react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  buildCalculatorContactHref,
  calculatePricingEstimate,
  formatCurrency,
  formatRoomLabel,
  roundToNearestFive,
  type ServiceId,
} from "@/lib/pricing";
import { cn } from "@/lib/utils";
import { services } from "@/lib/site";

type PricingCalculatorProps = {
  className?: string;
};

export default function PricingCalculator({
  className,
}: PricingCalculatorProps) {
  const [serviceId, setServiceId] = useState<ServiceId>(services[0].id);
  const [propertySize, setPropertySize] = useState("1200");
  const [roomCount, setRoomCount] = useState("4");

  const {
    selectedService,
    propertySize: normalizedSize,
    roomCount: normalizedRooms,
    basePrice,
    sizePrice,
    roomPrice,
    midpointEstimate,
    lowEstimate,
    highEstimate,
  } = calculatePricingEstimate({
    serviceId,
    propertySize,
    roomCount,
  });

  const quoteRequestHref = buildCalculatorContactHref({
    serviceId,
    propertySize: normalizedSize,
    roomCount: normalizedRooms,
  });

  return (
    <section
      id="pricing-calculator"
      className={cn("px-4 py-16 sm:px-6 lg:px-8", className)}
    >
      <div className="mx-auto max-w-6xl rounded-[2rem] border border-foreground/10 bg-white/80 p-8 shadow-[0_24px_80px_-50px_rgba(15,23,42,0.5)] backdrop-blur sm:p-10">
        <div className="grid gap-8 xl:grid-cols-[0.95fr_1.05fr] xl:items-start">
          <div className="space-y-5">
            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-primary">
              Instant pricing
            </p>
            <h2 className="text-3xl font-semibold tracking-tight text-balance text-foreground sm:text-4xl">
              Instant quote estimate based on service type, property size, and
              room count.
            </h2>
            <p className="max-w-2xl text-base leading-7 text-muted-foreground">
              Use the calculator for a quick range, then request a tailored
              quote when you want the exact scope, timing, and condition
              details factored in.
            </p>

            <div className="grid gap-4 sm:grid-cols-3">
              <article className="rounded-[1.25rem] border border-foreground/10 bg-background/75 p-4">
                <p className="text-sm font-semibold text-foreground">
                  Service type
                </p>
                <p className="mt-2 text-sm leading-6 text-muted-foreground">
                  Select the type of cleaning that best matches the visit.
                </p>
              </article>
              <article className="rounded-[1.25rem] border border-foreground/10 bg-background/75 p-4">
                <p className="text-sm font-semibold text-foreground">
                  Property size
                </p>
                <p className="mt-2 text-sm leading-6 text-muted-foreground">
                  Enter approximate square footage for a more useful range.
                </p>
              </article>
              <article className="rounded-[1.25rem] border border-foreground/10 bg-background/75 p-4">
                <p className="text-sm font-semibold text-foreground">
                  Room count
                </p>
                <p className="mt-2 text-sm leading-6 text-muted-foreground">
                  Add the number of rooms that need to be covered in the visit.
                </p>
              </article>
            </div>
          </div>

          <div className="rounded-[1.75rem] border border-foreground/10 bg-background/80 p-6">
            <div className="grid gap-4 sm:grid-cols-2">
              <label className="space-y-2 text-sm font-medium text-foreground sm:col-span-2">
                Service type
                <select
                  value={serviceId}
                  onChange={(event) =>
                    setServiceId(event.target.value as ServiceId)
                  }
                  className="h-11 w-full rounded-2xl border border-input bg-input/30 px-4 text-sm outline-none transition-colors focus-visible:border-ring focus-visible:ring-[3px] focus-visible:ring-ring/50"
                >
                  {services.map((service) => (
                    <option key={service.id} value={service.id}>
                      {service.title}
                    </option>
                  ))}
                </select>
              </label>

              <label className="space-y-2 text-sm font-medium text-foreground">
                Property size
                <Input
                  type="number"
                  min="0"
                  step="50"
                  inputMode="numeric"
                  value={propertySize}
                  onChange={(event) => setPropertySize(event.target.value)}
                  placeholder="Square feet"
                />
              </label>

              <label className="space-y-2 text-sm font-medium text-foreground">
                Number of rooms
                <Input
                  type="number"
                  min="0"
                  step="1"
                  inputMode="numeric"
                  value={roomCount}
                  onChange={(event) => setRoomCount(event.target.value)}
                  placeholder="Rooms"
                />
              </label>
            </div>

            <div className="mt-6 rounded-[1.5rem] bg-linear-to-br from-primary to-chart-1 p-6 text-primary-foreground shadow-[0_30px_90px_-55px_rgba(16,88,72,0.85)]">
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-primary-foreground/80">
                Estimated quote
              </p>
              <div className="mt-3 flex flex-wrap items-end gap-3">
                <p className="text-4xl font-semibold tracking-tight">
                  {formatCurrency(lowEstimate)} - {formatCurrency(highEstimate)}
                </p>
                <p className="pb-1 text-sm text-primary-foreground/80">
                  Typical quote: {formatCurrency(midpointEstimate)}
                </p>
              </div>
              <p className="mt-3 max-w-xl text-sm leading-6 text-primary-foreground/85">
                {selectedService.title} for approximately{" "}
                {normalizedSize.toLocaleString("en-US")} sq ft across{" "}
                {formatRoomLabel(normalizedRooms)}.
              </p>
            </div>

            <div className="mt-6 grid gap-3 sm:grid-cols-3">
              <article className="rounded-[1.25rem] border border-foreground/10 bg-white/80 p-4">
                <p className="text-sm font-medium text-muted-foreground">
                  Base service
                </p>
                <p className="mt-2 text-xl font-semibold text-foreground">
                  {formatCurrency(basePrice)}
                </p>
              </article>
              <article className="rounded-[1.25rem] border border-foreground/10 bg-white/80 p-4">
                <p className="text-sm font-medium text-muted-foreground">
                  Size factor
                </p>
                <p className="mt-2 text-xl font-semibold text-foreground">
                  {formatCurrency(roundToNearestFive(sizePrice))}
                </p>
              </article>
              <article className="rounded-[1.25rem] border border-foreground/10 bg-white/80 p-4">
                <p className="text-sm font-medium text-muted-foreground">
                  Room factor
                </p>
                <p className="mt-2 text-xl font-semibold text-foreground">
                  {formatCurrency(roundToNearestFive(roomPrice))}
                </p>
              </article>
            </div>

            <div className="mt-6 flex flex-wrap items-center gap-3">
              <Button
                asChild
                className="bg-primary text-primary-foreground hover:bg-primary/90"
              >
                <Link href={quoteRequestHref}>Carry this quote into request</Link>
              </Button>
              <p className="text-sm leading-6 text-muted-foreground">
                Final pricing can move based on condition, access, special
                surfaces, and visit frequency.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
