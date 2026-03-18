"use client";

import { useState } from "react";
import { useSearchParams } from "next/navigation";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  formatCurrency,
  formatRoomLabel,
  getCalculatorEstimateFromSearchParams,
} from "@/lib/pricing";
import { siteConfig } from "@/lib/site";

const contactEmail =
  process.env.NEXT_PUBLIC_CONTACT_EMAIL ?? siteConfig.contact.email;

export default function ContactBriefBuilder() {
  const searchParams = useSearchParams();
  const calculatorEstimate = getCalculatorEstimateFromSearchParams(searchParams);
  const calculatorSizeSummary = calculatorEstimate
    ? `${calculatorEstimate.propertySize.toLocaleString("en-US")} sq ft across ${formatRoomLabel(calculatorEstimate.roomCount)}`
    : null;
  const [name, setName] = useState("");
  const [spaceType, setSpaceType] = useState("");
  const [size, setSize] = useState(() => calculatorSizeSummary ?? "");
  const [schedule, setSchedule] = useState("");
  const [details, setDetails] = useState("");
  const [status, setStatus] = useState<"idle" | "copied" | "error">("idle");

  const calculatorSummaryLines = calculatorEstimate
    ? [
        `Selected service: ${calculatorEstimate.selectedService.title}`,
        `Calculator estimate: ${formatCurrency(calculatorEstimate.lowEstimate)} - ${formatCurrency(calculatorEstimate.highEstimate)} (typical ${formatCurrency(calculatorEstimate.midpointEstimate)})`,
        `Calculator inputs: ${calculatorEstimate.propertySize.toLocaleString("en-US")} sq ft across ${formatRoomLabel(calculatorEstimate.roomCount)}`,
      ]
    : [];

  const summaryLines = [
    name ? `Name: ${name}` : null,
    ...calculatorSummaryLines,
    spaceType ? `Space type: ${spaceType}` : null,
    size ? `Approximate size: ${size}` : null,
    schedule ? `Timing or frequency: ${schedule}` : null,
    details ? `Notes: ${details}` : null,
  ].filter(Boolean);

  const summary =
    summaryLines.length > 0
      ? summaryLines.join("\n")
      : "Add a few details above and your request brief will appear here.";

  const canCopy = summaryLines.length > 0;
  const mailtoHref =
    contactEmail && canCopy
      ? `mailto:${contactEmail}?subject=${encodeURIComponent(
          "Cleaning service request"
        )}&body=${encodeURIComponent(summary)}`
      : undefined;

  async function handleCopy() {
    if (!canCopy) {
      return;
    }

    try {
      await navigator.clipboard.writeText(summary);
      setStatus("copied");
    } catch {
      setStatus("error");
    }
  }

  return (
    <section
      id="request-brief"
      className="grid gap-6 lg:grid-cols-[1.05fr_0.95fr]"
    >
      <div className="rounded-[2rem] border border-foreground/10 bg-white/80 p-8">
        <div className="max-w-2xl space-y-3">
          <p className="text-sm font-semibold uppercase tracking-[0.24em] text-primary">
            Request brief builder
          </p>
          <h2 className="text-3xl font-semibold tracking-tight text-balance text-foreground">
            Capture the essentials once, then reuse them anywhere.
          </h2>
          <p className="text-sm leading-6 text-muted-foreground">
            This keeps early outreach structured even before a dedicated form
            endpoint or CRM integration is connected.
          </p>
        </div>

        {calculatorEstimate ? (
          <div className="mt-6 rounded-[1.5rem] border border-primary/15 bg-primary/6 p-5">
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-primary">
              Imported from calculator
            </p>
            <div className="mt-3 grid gap-3 sm:grid-cols-3">
              <article className="rounded-[1rem] border border-foreground/10 bg-white/80 p-4">
                <p className="text-sm font-medium text-muted-foreground">
                  Selected service
                </p>
                <p className="mt-2 text-sm font-semibold text-foreground">
                  {calculatorEstimate.selectedService.title}
                </p>
              </article>
              <article className="rounded-[1rem] border border-foreground/10 bg-white/80 p-4">
                <p className="text-sm font-medium text-muted-foreground">
                  Estimated range
                </p>
                <p className="mt-2 text-sm font-semibold text-foreground">
                  {formatCurrency(calculatorEstimate.lowEstimate)} -{" "}
                  {formatCurrency(calculatorEstimate.highEstimate)}
                </p>
              </article>
              <article className="rounded-[1rem] border border-foreground/10 bg-white/80 p-4">
                <p className="text-sm font-medium text-muted-foreground">
                  Calculator inputs
                </p>
                <p className="mt-2 text-sm font-semibold text-foreground">
                  {calculatorEstimate.propertySize.toLocaleString("en-US")} sq
                  ft, {formatRoomLabel(calculatorEstimate.roomCount)}
                </p>
              </article>
            </div>
          </div>
        ) : null}

        <div className="mt-8 grid gap-4 sm:grid-cols-2">
          <label className="space-y-2 text-sm font-medium text-foreground">
            Name
            <Input
              value={name}
              onChange={(event) => {
                setName(event.target.value);
                setStatus("idle");
              }}
              placeholder="Your name or team"
            />
          </label>

          <label className="space-y-2 text-sm font-medium text-foreground">
            Space type
            <Input
              value={spaceType}
              onChange={(event) => {
                setSpaceType(event.target.value);
                setStatus("idle");
              }}
              placeholder="Regular cleaning, office, moving house, hotel..."
            />
          </label>

          <label className="space-y-2 text-sm font-medium text-foreground">
            Size
            <Input
              value={size}
              onChange={(event) => {
                setSize(event.target.value);
                setStatus("idle");
              }}
              placeholder="Bedrooms, rooms, or square footage"
            />
          </label>

          <label className="space-y-2 text-sm font-medium text-foreground">
            Timing
            <Input
              value={schedule}
              onChange={(event) => {
                setSchedule(event.target.value);
                setStatus("idle");
              }}
              placeholder="Weekly, one-time, move date, after hours..."
            />
          </label>

          <label className="space-y-2 text-sm font-medium text-foreground sm:col-span-2">
            Notes
            <Textarea
              value={details}
              onChange={(event) => {
                setDetails(event.target.value);
                setStatus("idle");
              }}
              placeholder="List priority rooms, tenancy requirements, oven cleaning needs, access details, or any problem areas."
              rows={6}
            />
          </label>
        </div>

        <div className="mt-6 flex flex-wrap items-center gap-3">
          <Button
            type="button"
            onClick={handleCopy}
            disabled={!canCopy}
            className="bg-primary text-primary-foreground hover:bg-primary/90"
          >
            Copy request brief
          </Button>
          {mailtoHref ? (
            <Button asChild variant="outline" className="border-foreground/15">
              <a href={mailtoHref}>Open in email</a>
            </Button>
          ) : null}
          <p className="text-sm text-muted-foreground">
            {status === "copied"
              ? "Request brief copied to your clipboard."
              : status === "error"
                ? "Clipboard access failed in this browser. You can still copy the text manually."
                : "Use the summary panel to review your brief before sending it."}
          </p>
        </div>
      </div>

      <div className="rounded-[2rem] border border-foreground/10 bg-white/80 p-8">
        <p className="text-sm font-semibold uppercase tracking-[0.24em] text-primary">
          Preview
        </p>
        <div className="mt-6 rounded-[1.5rem] border border-foreground/10 bg-background/80 p-5">
          <pre className="overflow-x-auto whitespace-pre-wrap text-sm leading-7 text-muted-foreground">
            {summary}
          </pre>
        </div>
      </div>
    </section>
  );
}
