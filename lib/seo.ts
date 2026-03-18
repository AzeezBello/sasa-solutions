import type { Metadata } from "next";

import { services, siteConfig } from "@/lib/site";

type BuildMetadataInput = {
  title?: string;
  description?: string;
  path?: string;
  keywords?: string[];
  type?: "website" | "article";
};

type WebPageSchemaInput = {
  title: string;
  description: string;
  path: string;
};

export type JsonLd =
  | Record<string, unknown>
  | Array<Record<string, unknown>>;

export function getSiteUrl() {
  return new URL(siteConfig.siteUrl);
}

export function getAbsoluteUrl(path = "/") {
  return new URL(path, getSiteUrl()).toString();
}

export function buildMetadata({
  title,
  description = siteConfig.description,
  path = "/",
  keywords = [],
  type = "website",
}: BuildMetadataInput = {}): Metadata {
  const pageTitle = title ? `${title} | ${siteConfig.name}` : siteConfig.name;
  const canonicalUrl = getAbsoluteUrl(path);
  const openGraphImage = getAbsoluteUrl("/opengraph-image");
  const twitterImage = getAbsoluteUrl("/twitter-image");

  return {
    metadataBase: getSiteUrl(),
    title: pageTitle,
    description,
    applicationName: siteConfig.name,
    referrer: "origin-when-cross-origin",
    keywords: [...siteConfig.keywords, ...keywords],
    authors: [{ name: siteConfig.name }],
    creator: siteConfig.name,
    publisher: siteConfig.name,
    category: "business",
    alternates: {
      canonical: canonicalUrl,
    },
    formatDetection: {
      address: false,
      email: false,
      telephone: false,
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        "max-image-preview": "large",
        "max-snippet": -1,
        "max-video-preview": -1,
      },
    },
    icons: {
      icon: "/favicon.ico",
      shortcut: "/favicon.ico",
      apple: "/favicon.ico",
    },
    openGraph: {
      type,
      locale: siteConfig.locale,
      url: canonicalUrl,
      title: pageTitle,
      description,
      siteName: siteConfig.name,
      images: [
        {
          url: openGraphImage,
          width: 1200,
          height: 630,
          alt: `${pageTitle} social preview`,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: pageTitle,
      description,
      images: [twitterImage],
    },
  };
}

export function buildOrganizationSchema(): Record<string, unknown> {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: siteConfig.name,
    description: siteConfig.description,
    url: getAbsoluteUrl("/"),
    logo: getAbsoluteUrl("/favicon.ico"),
    knowsAbout: services.map((service) => service.title),
  };
}

export function buildWebsiteSchema(): Record<string, unknown> {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: siteConfig.name,
    description: siteConfig.description,
    url: getAbsoluteUrl("/"),
    inLanguage: "en",
  };
}

export function buildWebPageSchema({
  title,
  description,
  path,
}: WebPageSchemaInput): Record<string, unknown> {
  return {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: title,
    description,
    url: getAbsoluteUrl(path),
    isPartOf: {
      "@type": "WebSite",
      name: siteConfig.name,
      url: getAbsoluteUrl("/"),
    },
    inLanguage: "en",
  };
}

export function buildServiceCatalogSchema(): Record<string, unknown> {
  return {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: `${siteConfig.name} service catalog`,
    itemListElement: services.map((service, index) => ({
      "@type": "ListItem",
      position: index + 1,
      item: {
        "@type": "Service",
        name: service.title,
        description: service.description,
        serviceType: service.eyebrow,
        provider: {
          "@type": "Organization",
          name: siteConfig.name,
          url: getAbsoluteUrl("/"),
        },
        areaServed: {
          "@type": "Place",
          name: "Local service area",
        },
        offers: {
          "@type": "Offer",
          priceCurrency: "USD",
          lowPrice: service.pricing.basePrice,
        },
      },
    })),
  };
}
