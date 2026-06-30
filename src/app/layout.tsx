import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/react";
import { SITE } from "@/lib/data";
import "@/styles/globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(SITE.url),
  title: "Amar Yasser — DevOps Engineer",
  description: "Junior DevOps Engineer · Cairo, Egypt · AWS · Kubernetes · Terraform",
  openGraph: {
    title: "Amar Yasser — DevOps Engineer",
    description: "Infrastructure engineer building AI-powered DevOps tools.",
    url: SITE.url,
    siteName: "Amar Yasser",
    type: "website",
    images: [{ url: "/og.png", width: 1200, height: 630, alt: "Amar Yasser — DevOps Engineer" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Amar Yasser — DevOps Engineer",
    description: "Infrastructure engineer building AI-powered DevOps tools.",
    images: ["/og.png"],
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
