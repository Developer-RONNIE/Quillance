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
  openGraph: {
    title: "Quillance | Empowering Youth to Lead the Global Workforce",
    description: "Quillance aligns tech education with industry demands, empowering youth globally through rigorous skill development and verified certifications.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Quillance | Empowering Youth",
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
