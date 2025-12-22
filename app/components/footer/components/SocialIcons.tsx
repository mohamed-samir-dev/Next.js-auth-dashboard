import { SocialLink } from "../types";

interface SocialIconsProps {
  socialLinks: SocialLink[];
}

export default function SocialIcons({ socialLinks }: SocialIconsProps) {
  return (
    <div className="flex gap-2">
      {socialLinks.map((social, index) => {
        const IconComponent = social.icon;
        return (
          <a
            key={index}
            href={social.href}
            className="w-8 h-8 rounded-full flex items-center justify-center transition-colors"
            aria-label={social.label}
          >
            <IconComponent className="w-4 h-4" />
          </a>
        );
      })}
    </div>
  );
}