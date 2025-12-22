import { defaultMetadata } from "../lib/metadata";

export const metadata = defaultMetadata.dashboard;

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}