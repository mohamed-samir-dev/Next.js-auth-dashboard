import LogoSection from "./components/LogoSection";
import FooterLinks from "./components/FooterLinks";
import EmailSection from "./components/EmailSection";
import { footerSections } from "./data";

export default function Footer() {
  return (
    <footer className="relative text-white py-12 px-6 bg-contain bg-center bg-no-repeat" style={{backgroundColor: '#BE968E', backgroundImage: 'url(/footer-child-removebg-preview.png)', filter: 'brightness(1.2) contrast(1.1)'}}>
      <div className="absolute inset-0 bg-black/60"></div>
      <div className="relative z-10 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-8 items-start">
          <LogoSection />
          {footerSections.map((section, index) => (
            <FooterLinks key={index} section={section} />
          ))}
          <EmailSection />
        </div>
      </div>
    </footer>
  );
}