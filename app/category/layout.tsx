import { defaultMetadata } from "../lib/metadata";

export const metadata = defaultMetadata.category;

export default function CategoryLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}