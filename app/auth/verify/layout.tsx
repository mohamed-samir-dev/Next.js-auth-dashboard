import { defaultMetadata } from "../../lib/metadata";

export const metadata = defaultMetadata.verify;

export default function VerifyLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}