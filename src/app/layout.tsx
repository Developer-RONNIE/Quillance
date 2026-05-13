import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { NavbarSection } from "./sections/NavbarSection";
import FooterSection from "./sections/FooterSection";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Quillance | Empowering Youth to Lead the Global Workforce",
  description: "Quillance aligns tech education with industry demands, empowering youth globally through rigorous skill development and verified certifications.",
  metadataBase: new URL("https://quillance.com"),
  alternates: {
    canonical: "/",
  },
  keywords: ["Quillance", "Career Accelerator", "Tech Education", "Internships", "Job Readiness", "Live Training", "Mentorship", "Skill Development", "Industry Demand"],
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    title: "Quillance | Empowering Youth to Lead the Global Workforce",
    description: "Quillance aligns tech education with industry demands, empowering youth globally through rigorous skill development and verified certifications.",
    type: "website",
    url: "https://quillance.com",
    siteName: "Quillance",
    images: [
      {
        url: "/Logo/full-logo-trans.png",
        width: 1200,
        height: 630,
        alt: "Quillance",
      },
    ],
  },
  icons: {
    icon: [
      { url: "/Logo/q-logo-day-trans.png", href: "/Logo/q-logo-day-trans.png" }, // Global fallback for search engines
      {
        media: "(prefers-color-scheme: light)",
        url: "/Logo/q-logo-day-trans.png",
        href: "/Logo/q-logo-day-trans.png",
      },
      {
        media: "(prefers-color-scheme: dark)",
        url: "/Logo/q-logo-night-trans.png",
        href: "/Logo/q-logo-night-trans.png",
      },
    ],
    shortcut: "/Logo/q-logo-day-trans.png",
    apple: "/Logo/q-logo-day-trans.png",
  },
  twitter: {
    card: "summary_large_image",
    title: "Quillance | Empowering Youth to Lead the Global Workforce",
    description: "Quillance aligns tech education with industry demands, empowering youth globally through rigorous skill development and verified certifications.",
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} h-full antialiased`}
    >
      <head>
        {/* JSON-LD for Organization & Logo */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              "name": "Quillance",
              "url": "https://quillance.com",
              "logo": "https://quillance.com/Logo/q-logo-day-trans.png",
              "sameAs": [
                "https://www.linkedin.com/company/quillance",
                "https://x.com/quillance_info",
                "https://www.facebook.com/profile.php?id=61572301201834",
                "https://www.instagram.com/quillance.infotech/"
              ]
            })
          }}
        />
        {/* JSON-LD for Site Navigation (Helps with Sitelinks) */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "ItemList",
              "itemListElement": [
                {
                  "@type": "SiteNavigationElement",
                  "position": 1,
                  "name": "Our Programs",
                  "url": "https://quillance.com/programs"
                },
                {
                  "@type": "SiteNavigationElement",
                  "position": 2,
                  "name": "Careers",
                  "url": "https://quillance.com/careers"
                },
                {
                  "@type": "SiteNavigationElement",
                  "position": 3,
                  "name": "Job Portal",
                  "url": "https://quillance.com/jobs"
                },
                {
                  "@type": "SiteNavigationElement",
                  "position": 4,
                  "name": "Campus Ambassador",
                  "url": "https://quillance.com/ambassador"
                },
                {
                  "@type": "SiteNavigationElement",
                  "position": 5,
                  "name": "About",
                  "url": "https://quillance.com/about"
                }
              ]
            })
          }}
        />
      </head>
      <body className="min-h-full flex flex-col bg-white text-foreground font-sans">
        <NavbarSection />
        <main className="flex-grow flex flex-col">
          {children}
        </main>
        <FooterSection />
      </body>
    </html>
  );
}
