export interface FooterLink {
  label: string;
  href: string;
}

export interface FooterSection {
  title: string;
  links: FooterLink[];
}

export interface SocialLink {
  icon: React.ComponentType<{ className?: string }>;
  href: string;
  label: string;
}