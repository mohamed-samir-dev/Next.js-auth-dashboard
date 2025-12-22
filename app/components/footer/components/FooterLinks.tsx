import { FooterSection } from "../types";

interface FooterLinksProps {
  section: FooterSection;
}

export default function FooterLinks({ section }: FooterLinksProps) {
  return (
    <div className="mt-[50px]">
      <h3 className="text-lg font-semibold mb-4">{section.title}</h3>
      <ul className="space-y-4 text-sm">
        {section.links.map((link, index) => (
          <li key={index}>
            <a
              href={link.href}
              className="text-gray-300 hover:text-white transition-colors"
            >
              {link.label}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}