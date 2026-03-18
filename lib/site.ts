export const siteConfig = {
  name: "SASA Solutions",
  shortName: "SASA",
  siteUrl: process.env.NEXT_PUBLIC_SITE_URL ?? "https://sasasolutions.uk",
  locale: "en_US",
  description:
    "SASA Solutions was initiated in 2010 and now provides home, office, residential, moving house, school, and hotel cleaning services.",
  ctaHref: "/contact",
  ctaLabel: "Request a quote",
  keywords: [
    "cleaning services",
    "home cleaning",
    "office cleaning",
    "london cleaners",
    "deep cleaning",
    "move in cleaning",
    "move out cleaning",
    "commercial cleaning",
    "cleaning quote",
  ],
  foundedYear: 2010,
  heroImageUrl:
    "https://sasasolutions.uk/wp-content/uploads/2021/04/sasa-solutions-1-1.jpg",
  heroImageAlt:
    "SASA Solutions cleaning team and service banner from the live company site",
  contact: {
    phoneDisplay: "+44 7943 683042",
    phoneHref: "tel:+447943683042",
    email: "info@sasasolutions.uk",
    emailHref: "mailto:info@sasasolutions.uk",
    address: "International House, 12 Constance Street, London, E16 2DQ",
    hours: ["Mon – Sat : 08:00 – 19:00", "Sunday Closed"],
  },
  socialImage: {
    title: "Here to help you stay clean and healthy",
    subtitle:
      "Home, office, residential, moving house, school, and hotel cleaning services.",
  },
} as const;

export const navItems = [
  { href: "/", label: "Home" },
  { href: "/services", label: "Services" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
] as const;

export const heroHighlights = [
  "Initiated in 2010",
  "Home, office, residential, moving house, school, and hotel cleaning",
  "Book, manage, message, and pay online",
] as const;

export const operatingSteps = [
  {
    title: "Choose the cleaning support you need",
    description:
      "From regular home visits to one-off, office, residential, and end of tenancy jobs, services are shaped around what the space needs.",
  },
  {
    title: "Pick the time that works for you",
    description:
      "The live booking flow is built around flexible timing so customers can choose a visit window that suits their day.",
  },
  {
    title: "Receive a tailored follow-up",
    description:
      "Once the request is in, the team follows up with the right scope, service details, and quote for the job.",
  },
] as const;

export const quickFacts = [
  {
    label: "Founded",
    value: "Established in 2010 and grown from house cleaning into wider London cleaning support.",
  },
  {
    label: "Location",
    value: "International House, 12 Constance Street, London, E16 2DQ.",
  },
  {
    label: "Hours",
    value: "Mon – Sat : 08:00 – 19:00. Sunday closed.",
  },
] as const;

export const services = [
  {
    id: "regular-cleaning",
    eyebrow: "Recurring",
    title: "Regular Cleaning",
    description:
      "Daily, weekly, and monthly cleaning visits with the option to keep the same cleaner on recurring schedules.",
    highlights: [
      "Daily, weekly, and monthly visits",
      "Same cleaner on recurring work",
      "Book, manage, message, and pay online",
    ],
    priceNote: "From £12.95 per hour",
    pricing: {
      basePrice: 52,
      perSquareFoot: 0.015,
      perRoom: 8,
    },
  },
  {
    id: "one-off-cleaning",
    eyebrow: "Flexible",
    title: "One-Off Cleaning",
    description:
      "One-off cleaning support for homes, offices, and hotels when you need a reset without a recurring plan.",
    highlights: [
      "Home, office, and hotel support",
      "Suitable for one-time resets",
      "Flexible around demand",
    ],
    priceNote: "Quoted to suit the job",
    pricing: {
      basePrice: 68,
      perSquareFoot: 0.02,
      perRoom: 11,
    },
  },
  {
    id: "end-of-tenancy",
    eyebrow: "Turnovers",
    title: "End of Tenancy",
    description:
      "Specialist end of tenancy cleaning delivered by professionals who understand move-out expectations and property handover standards.",
    highlights: [
      "Studio flats from £94",
      "Built around tenancy requirements",
      "Good fit for moving house",
    ],
    priceNote: "From £94",
    pricing: {
      basePrice: 94,
      perSquareFoot: 0.025,
      perRoom: 16,
    },
  },
  {
    id: "oven-cleaning",
    eyebrow: "Detail work",
    title: "Oven Cleaning",
    description:
      "Expert cleaning for burnt carbon ovens using products designed to bring back a cleaner finish.",
    highlights: [
      "Light range ovens from £75",
      "Range ovens up to £90",
      "Focused product-led restoration",
    ],
    priceNote: "From £75",
    pricing: {
      basePrice: 75,
      perSquareFoot: 0.005,
      perRoom: 4,
    },
  },
  {
    id: "residential-cleaning",
    eyebrow: "Residential",
    title: "Residential Cleaning",
    description:
      "Professional home cleaning tailored to your property, rooms, and surrounding areas.",
    highlights: [
      "Studio flats from £105",
      "2-bedroom flats from £160",
      "Tailored to your needs",
    ],
    priceNote: "From £105",
    pricing: {
      basePrice: 105,
      perSquareFoot: 0.02,
      perRoom: 14,
    },
  },
  {
    id: "office-cleaning",
    eyebrow: "Commercial",
    title: "Office Cleaning",
    description:
      "Office kitchens, meeting rooms, and restrooms kept clean to support a more presentable working environment.",
    highlights: [
      "Frequent cleaning from £13",
      "One-off cleans from £14",
      "Meeting rooms, kitchens, and restrooms",
    ],
    priceNote: "From £13",
    pricing: {
      basePrice: 56,
      perSquareFoot: 0.012,
      perRoom: 9,
    },
  },
] as const;

export const trustStats = [
  {
    value: "2010",
    label: "Year established",
  },
  {
    value: "Mon-Sat",
    label: "Operating days",
  },
  {
    value: "London",
    label: "Service base",
  },
] as const;

export const testimonials = [
  {
    quote:
      "Cheap price and good service. We booked our home cleaning for 4 hours, and the cleaning team did an amazing job.",
    author: "Sara Jones",
  },
  {
    quote:
      "The price is good, communication is swift. Our office looks presentable and we can have our meetings in a nice and clean environment.",
    author: "Jay’s printing center",
  },
  {
    quote:
      "Our house is impeccably clean and organised. Thank you for cleaning.",
    author: "Jason Bell",
  },
  {
    quote:
      "The lady did a wonderful cleaning the job and oven. A good service.",
    author: "Katherine P",
  },
  {
    quote:
      "We are really happy with the cleaning professionals from SASA Solutions. They did a good job.",
    author: "Investment Bank, London",
  },
  {
    quote:
      "A very reliable service. The team is very efficient and polite. I trust them with all kind of cleaning jobs for the office.",
    author: "KL",
  },
] as const;

export const aboutStory = [
  "SASA Solutions was initiated in 2010 and has grown into a major cleaning business providing home, office, residential, moving house, school, and hotel services.",
  "The company started as a house cleaning business, with the CEO personally delivering cleaning services five days a week while building and training a team.",
  "As demand grew through friends, family, and referrals, the business expanded into wider residential, office, hotel, and specialist cleaning support.",
] as const;

export const visionPoints = [
  "To make our valued customers happy.",
  "To be known as an integrity-led cleaning service provider in London.",
  "To improve daily and set a high standard of cleaning in London.",
  "To use trustworthy professionals and satisfy customer needs as we clean.",
] as const;

export const differentiators = [
  "Spotless, green, open, and unambiguous service information.",
  "Reliable, professional, and trustworthy cleaners.",
  "Flexible cleaning support shaped around customer needs.",
  "A practical promise: clean well without cleaning you out.",
] as const;

export const operatingPrinciples = [
  {
    eyebrow: "Started",
    title: "Built from house cleaning in 2010",
    description:
      "SASA Solutions began as a house cleaning company before growing into broader residential and commercial support.",
  },
  {
    eyebrow: "Coverage",
    title: "A wider London cleaning service offer",
    description:
      "The live site positions SASA across home, office, residential, moving house, school, and hotel cleaning.",
  },
  {
    eyebrow: "Flexibility",
    title: "Tailor-made services to suit your needs",
    description:
      "Regular, one-off, end of tenancy, oven, residential, and office cleaning can all be shaped around the job.",
  },
  {
    eyebrow: "Trust",
    title: "Reliable and trustworthy professionals",
    description:
      "The service promise focuses on practical communication, trustworthy cleaners, and results customers can see.",
  },
] as const;

export const quoteChecklist = [
  "Property or facility type",
  "Approximate size, rooms, or square footage",
  "Preferred visit cadence or target dates",
  "Any special surfaces, access notes, or problem areas",
  "Move timeline, team schedule, or turnover constraints when relevant",
] as const;
