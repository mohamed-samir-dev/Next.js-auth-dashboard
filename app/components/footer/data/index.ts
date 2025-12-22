import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
  FaWhatsapp,
  FaTelegramPlane,
} from "react-icons/fa";
import { FooterSection, SocialLink } from "../types";

export const footerSections: FooterSection[] = [
  {
    title: "Let Us Help",
    links: [
      { label: "Your Account", href: "#" },
      { label: "Returns Centre", href: "#" },
      { label: "Purchase Protection", href: "#" },
      { label: "Help", href: "#" },
    ],
  },
  {
    title: "Policies",
    links: [
      { label: "Return Policy", href: "#" },
      { label: "Terms Of Use", href: "#" },
      { label: "Security", href: "#" },
      { label: "Privacy", href: "#" },
    ],
  },
];

export const socialLinks: SocialLink[] = [
  { icon: FaFacebookF, href: "#", label: "Facebook" },
  { icon: FaTwitter, href: "#", label: "Twitter" },
  { icon: FaInstagram, href: "#", label: "Instagram" },
  { icon: FaLinkedinIn, href: "#", label: "LinkedIn" },
  { icon: FaWhatsapp, href: "#", label: "WhatsApp" },
  { icon: FaTelegramPlane, href: "#", label: "Telegram" },
];