import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Campus Ambassador | Lead Your Campus Community",
  description: "Join the Quillance Campus Ambassador program. Gain leadership experience, earn rewards, and bridge the gap between your college and the industry.",
};

export default function AmbassadorLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
