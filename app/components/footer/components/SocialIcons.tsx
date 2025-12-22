import { SocialLink } from "../types";

interface SocialIconsProps {
  socialLinks: SocialLink[];
}

export default function SocialIcons({ socialLinks }: SocialIconsProps) {
  return (
    <div className="flex flex-wrap gap-2 sm:gap-3">
      {socialLinks.map((social, index) => {
        const IconComponent = social.icon;
        return (
          <a
            key={index}
            href={social.href}
            className="w-8 h-8 sm:w-10 sm:h-10 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center transition-colors"
            aria-label={social.label}
          >
            <IconComponent className="w-3 h-3 sm:w-4 sm:h-4" />
          </a>
        );
      })}
    </div>
  );
}