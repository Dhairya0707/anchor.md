import type { Metadata } from "next";
import { Instrument_Serif, Inter } from "next/font/google";
import Script from "next/script";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
  variable: "--font-inter",
});

const instrumentSerif = Instrument_Serif({
  subsets: ["latin"],
  weight: ["400"],
  style: ["normal", "italic"],
  display: "swap",
  variable: "--font-instrument-serif",
});

export const metadata: Metadata = {
  title: "anchor.md — Portable AI Context Management",
  description:
    "A lightweight, local-first AI context system. One folder. Any model. Zero context loss when switching between LLMs or IDEs.",
  keywords: [
    "ai context management",
    "llm context",
    "ai developer tools",
    "cursor context",
    "chatgpt context",
    "anchor.md",
  ],
  openGraph: {
    title: "anchor.md — Portable AI Context Management",
    description:
      "Stop losing context when switching LLMs. anchor.md gives every AI a single source of truth inside your repo.",
    url: "https://anchor-md.web.app",
    siteName: "anchor.md",
    type: "website",
    images: [
      {
        url: "https://anchor-md.web.app/og-image.png",
        width: 1200,
        height: 1200,
        alt: "anchor.md — Portable AI Context Management",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "anchor.md — Portable AI Context Management",
    description:
      "Stop losing context when switching LLMs. anchor.md gives every AI a single source of truth inside your repo.",
    creator: "@Dhairya0707",
    images: ["https://anchor-md.web.app/og-image.png"],
  },
  verification: {
    google: "vdJ9Ga6rCMp2NI32MyJdZY44SY20OBsZY1vPX5jaYRU",
  },
  alternates: {
    canonical: "https://anchor-md.web.app",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const measurementId = process.env.NEXT_PUBLIC_FIREBASE_MEASUREMENT_ID;

  return (
    <html lang="en">
      <body className={`${inter.variable} ${instrumentSerif.variable}`}>
        {/* Umami Analytics */}
        <Script
          src="https://analyticsos-ten.vercel.app/script.js"
          data-website-id="fcf3de1e-8116-4469-825b-b98e348581ff"
          strategy="afterInteractive"
          defer
        />
        {measurementId && (
          <>
            <Script
              src={`https://www.googletagmanager.com/gtag/js?id=${measurementId}`}
              strategy="afterInteractive"
            />
            <Script id="google-analytics" strategy="afterInteractive">
              {`
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('config', '${measurementId}', {
                  page_path: window.location.pathname,
                });
              `}
            </Script>
          </>
        )}
        {children}
      </body>
    </html>
  );
}
