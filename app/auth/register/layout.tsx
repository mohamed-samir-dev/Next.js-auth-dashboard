import { defaultMetadata } from "../../lib/metadata";

export const metadata = defaultMetadata.register;

export default function RegisterLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}