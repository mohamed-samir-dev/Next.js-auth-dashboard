import { Metadata } from 'next';

const siteConfig = {
  name: "Auth Dashboard",
  description: "Secure authentication dashboard with modern UI/UX design. Manage your account, profile, and access protected content with ease.",
  url: "https://auth-dashboard.vercel.app",
  ogImage: "/logo.webp",
  creator: "@authdashboard",
};

export function generateMetadata({
  title,
  description,
  image = siteConfig.ogImage,
  noIndex = false,
  ...props
}: {
  title: string;
  description?: string;
  image?: string;
  noIndex?: boolean;
} & Partial<Metadata>): Metadata {
  return {
    title,
    description: description || siteConfig.description,
    openGraph: {
      title,
      description: description || siteConfig.description,
      type: "website",
      url: siteConfig.url,
      images: [
        {
          url: image,
          width: 1200,
          height: 630,
          alt: title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description: description || siteConfig.description,
      images: [image],
      creator: siteConfig.creator,
    },
    robots: {
      index: !noIndex,
      follow: !noIndex,
    },
    ...props,
  };
}

export const defaultMetadata = {
  home: generateMetadata({
    title: "Home - Secure Authentication Dashboard",
    description: "Welcome to our secure authentication dashboard. Access your personalized dashboard with advanced security features.",
  }),
  
  login: generateMetadata({
    title: "Login - Secure Access",
    description: "Sign in to your account securely. Access your dashboard with our advanced authentication system.",
    noIndex: true,
  }),
  
  register: generateMetadata({
    title: "Create Account - Join Us Today",
    description: "Create your secure account and get access to our powerful dashboard features. Quick and easy registration process.",
    noIndex: true,
  }),
  
  dashboard: generateMetadata({
    title: "Dashboard - Your Control Center",
    description: "Manage your account, view analytics, and access all features from your personalized dashboard.",
    noIndex: true,
  }),
  
  category: generateMetadata({
    title: "Categories - Browse Products",
    description: "Explore our wide range of product categories. Find exactly what you're looking for with our organized catalog.",
  }),
  
  verify: generateMetadata({
    title: "Verify Account - Complete Registration",
    description: "Verify your email address to complete your account setup and gain full access to all features.",
    noIndex: true,
  }),
};