export const siteConfig = {
  name: "SASA Solutions",
  shortName: "SASA",
  siteUrl: process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000",
  locale: "en_US",
  description:
    "Dependable residential and commercial cleaning support with clear communication, flexible scheduling, and standards that hold up.",
  ctaHref: "/contact",
  ctaLabel: "Request a quote",
  keywords: [
    "cleaning services",
    "home cleaning",
    "office cleaning",
    "deep cleaning",
    "move in cleaning",
    "move out cleaning",
    "commercial cleaning",
    "cleaning quote",
  ],
  socialImage: {
    title: "Dependable Cleaning Support",
    subtitle: "Residential and commercial service plans with instant quote guidance.",
  },
} as const;

export const navItems = [
  { href: "/", label: "Home" },
  { href: "/services", label: "Services" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
] as const;

export const heroHighlights = [
  "Recurring and one-time plans",
  "Residential and commercial coverage",
  "Clear scopes before every visit",
] as const;

export const operatingSteps = [
  {
    title: "Scope the space",
    description:
      "We start with the space type, priorities, and the level of finish you need so the brief is precise from day one.",
  },
  {
    title: "Build the cadence",
    description:
      "From one-off resets to recurring support, the schedule is shaped around how the space is actually used.",
  },
  {
    title: "Deliver with consistency",
    description:
      "Every visit is anchored in the agreed scope, with enough flexibility to adapt when priorities shift.",
  },
] as const;

export const quickFacts = [
  {
    label: "Service models",
    value: "Recurring support, one-time visits, and turnover-focused resets.",
  },
  {
    label: "Best fit",
    value: "Homes, offices, managed spaces, and move-related cleaning needs.",
  },
  {
    label: "What matters",
    value: "Reliable standards, respectful communication, and practical scheduling.",
  },
] as const;

export const services = [
  {
    id: "home-cleaning",
    eyebrow: "Residential",
    title: "Home cleaning",
    description:
      "Routine upkeep or one-time refreshes designed around your rooms, surfaces, and household pace.",
    highlights: ["Kitchens and baths", "Floors and dusting", "Room-by-room priorities"],
    pricing: {
      basePrice: 95,
      perSquareFoot: 0.08,
      perRoom: 18,
    },
  },
  {
    id: "office-cleaning",
    eyebrow: "Commercial",
    title: "Office cleaning",
    description:
      "Quiet, reliable maintenance for shared workspaces, reception areas, meeting rooms, and staff zones.",
    highlights: ["Shared surfaces", "Restroom restocking", "Flexible service windows"],
    pricing: {
      basePrice: 140,
      perSquareFoot: 0.06,
      perRoom: 16,
    },
  },
  {
    id: "move-in-out",
    eyebrow: "Turnovers",
    title: "Move-in and move-out",
    description:
      "Detailed resets that help properties, rentals, and managed spaces feel ready for the next handover.",
    highlights: ["Appliance wipe-downs", "Cupboards and skirting", "Turnover-ready finish"],
    pricing: {
      basePrice: 180,
      perSquareFoot: 0.1,
      perRoom: 22,
    },
  },
  {
    id: "deep-cleaning",
    eyebrow: "Detail work",
    title: "Deep cleaning",
    description:
      "Targeted, top-to-bottom attention for seasonal resets, neglected areas, or spaces that need a fuller reset.",
    highlights: ["Built-up grime removal", "High-touch detailing", "Customized room focus"],
    pricing: {
      basePrice: 220,
      perSquareFoot: 0.11,
      perRoom: 26,
    },
  },
] as const;

export const trustStats = [
  {
    value: "4.9/5",
    label: "Average customer rating",
  },
  {
    value: "200+",
    label: "Customers served",
  },
  {
    value: "4",
    label: "Core service plans",
  },
] as const;

export const testimonialThemes = [
  {
    title: "Predictable scheduling",
    description:
      "Dependable timing and clear arrival windows help each visit fit the day instead of disrupting it.",
  },
  {
    title: "Clear visit scopes",
    description:
      "The strongest service experiences start with everyone understanding the rooms, tasks, and finish level before work begins.",
  },
  {
    title: "Noticeable finish quality",
    description:
      "Spaces should feel fresher, calmer, and easier to step back into as soon as the clean is complete.",
  },
] as const;

export const operatingPrinciples = [
  {
    eyebrow: "Clarity",
    title: "Everyone knows the scope",
    description:
      "The clean works better when expectations are set before the visit, not guessed in the moment.",
  },
  {
    eyebrow: "Flow",
    title: "Scheduling follows the space",
    description:
      "We shape timing and frequency around how the property operates so cleaning supports the routine instead of interrupting it.",
  },
  {
    eyebrow: "Care",
    title: "Details stay visible",
    description:
      "High-touch zones, surfaces that show quickly, and finish quality all stay part of the conversation.",
  },
  {
    eyebrow: "Trust",
    title: "Communication stays practical",
    description:
      "Questions, adjustments, and special instructions should be easy to surface before they become problems.",
  },
] as const;

export const quoteChecklist = [
  "Property or facility type",
  "Approximate size, rooms, or square footage",
  "Preferred visit cadence or target dates",
  "Any special surfaces, access notes, or problem areas",
  "Move timeline, team schedule, or turnover constraints when relevant",
] as const;
