import { DM_Sans } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/ThemeProvider";
import Loader from "@/components/Loader";

import { Metadata } from "next";

const dmSans = DM_Sans({
  subsets: ["latin"],
  axes: ["opsz"],
  variable: "--font-dm-sans",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://growise.software"),
  title: {
    default: "GroWise | Custom Web Development & Digital Solutions",
    template: "%s | GroWise",
  },
  description: "GroWise is a modern web development agency specializing in custom websites, web applications, and digital solutions. We build fast, scalable, and tailored software to help your business stand out online.",
  keywords: ["web development", "custom websites", "software agency", "digital solutions", "React", "Next.js", "AI solutions", "automation"],
  authors: [{ name: "GroWise" }],
  creator: "GroWise",
  publisher: "GroWise",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://growise.software",
    title: "GroWise | Custom Web Development & Digital Solutions",
    description: "Modern web development without the agency bloat. We build custom websites, applications, and digital solutions for growing businesses.",
    siteName: "GroWise",
    images: [
      {
        url: "/og-image.jpg", // Will fallback if missing, but it's good practice
        width: 1200,
        height: 630,
        alt: "GroWise - Web Development Agency",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "GroWise | Custom Web Development & Digital Solutions",
    description: "Modern web development without the agency bloat. We build custom websites, applications, and digital solutions for growing businesses.",
    images: ["/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "WebDesignCompany",
  "name": "GroWise",
  "url": "https://growise.software",
  "logo": "https://growise.software/logo.png",
  "description": "A modern web development agency building custom websites and digital solutions.",
  "address": {
    "@type": "PostalAddress",
    "addressCountry": "IN"
  },
  "contactPoint": [
    {
      "@type": "ContactPoint",
      "telephone": "+91-9347428871",
      "contactType": "customer service"
    }
  ],
  "sameAs": [
    "https://www.instagram.com/growise.software"
  ]
};

export default function NextoLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Rounded:opsz,wght,FILL,GRAD@24,400,1,0"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className={`${dmSans.variable} min-h-screen`}>
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem={false}>
          <Loader />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
