import type { Metadata } from "next";
import type { ReactNode } from "react";

import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import StructuredData from "@/components/StructuredData";
import {
  buildMetadata,
  buildOrganizationSchema,
  buildWebsiteSchema,
} from "@/lib/seo";

import "./globals.css";

export const metadata: Metadata = buildMetadata();

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="min-h-screen antialiased">
        <StructuredData id="organization-jsonld" data={buildOrganizationSchema()} />
        <StructuredData id="website-jsonld" data={buildWebsiteSchema()} />
        <a
          href="#main"
          className="sr-only absolute left-4 top-4 z-[60] rounded-full bg-primary px-4 py-2 text-sm font-medium text-primary-foreground focus:not-sr-only"
        >
          Skip to content
        </a>
        <div className="flex min-h-screen flex-col">
          <Navbar />
          <div className="flex-1">{children}</div>
          <Footer />
        </div>
      </body>
    </html>
  );
}
