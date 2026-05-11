import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us | Bridging the Gap Between Education and Industry",
  description: "Learn how Quillance is transforming tech education by replacing outdated theory with action-based learning and real-world project execution.",
};

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
