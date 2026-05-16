import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "My Page",
  description: "Page description here",
};

export default function Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}