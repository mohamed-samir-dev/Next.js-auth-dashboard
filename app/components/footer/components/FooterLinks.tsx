import { FooterSection } from "../types";

interface FooterLinksProps {
  section: FooterSection;
}

export default function FooterLinks({ section }: FooterLinksProps) {
  return (
    <div className="mb-6 sm:mb-0">
      <h3 className="text-base sm:text-lg font-semibold mb-3 sm:mb-4">{section.title}</h3>
      <ul className="space-y-2 sm:space-y-3 text-xs sm:text-sm">
        {section.links.map((link, index) => (
          <li key={index}>
            <a
              href={link.href}
              className="text-gray-300 hover:text-white transition-colors block py-1"
            >
              {link.label}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}