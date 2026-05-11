import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Careers | Join the Team Building the Future of Education",
  description: "Join a fast-growing team at Quillance. Explore open internships and full-time roles in Business Development, Marketing, HR, and Operations.",
};

export default function CareersLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
