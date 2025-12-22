import { defaultMetadata } from "../../lib/metadata";

export const metadata = defaultMetadata.login;

export default function LoginLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}