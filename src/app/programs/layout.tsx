import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Our Programs | Industry-Ready Career Accelerator Programs",
  description: "Explore our intensive, expert-led cohorts in Web Development, Data Science, Digital Marketing, and more. Become job-ready with proof-of-work projects.",
};

export default function ProgramsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
