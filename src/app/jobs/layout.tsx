import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Job Portal | Your Gateway to Top-Tier Internships & Jobs",
  description: "Access exclusive job listings and internship opportunities partnered with top tech companies. Find your next career move with Quillance.",
};

export default function JobsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
