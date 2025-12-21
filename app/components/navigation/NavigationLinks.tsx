import Link from 'next/link';
import { IconSmartHome, IconCategory, IconLocationCancel, IconBrowserMinus, IconDeviceIpadQuestion } from '@tabler/icons-react';

export default function NavigationLinks() {
  return (
    <div className="hidden md:flex items-center space-x-8">
      <Link href="/" className="flex items-center space-x-2 text-gray-700 hover:text-blue-600 font-medium transition-colors">
        <IconSmartHome stroke={2} className="w-5 h-5" />
        <span>Home</span>
      </Link>
      <Link href="/category" className="flex items-center space-x-2 text-gray-700 hover:text-blue-600 font-medium transition-colors">
        <IconCategory stroke={2} className="w-5 h-5" />
        <span>Our Category</span>
      </Link>
      <Link href="/about" className="flex items-center space-x-2 text-gray-700 hover:text-blue-600 font-medium transition-colors">
        <IconLocationCancel stroke={2} className="w-5 h-5" />
        <span>About Us</span>
      </Link>
      <Link href="/contact" className="flex items-center space-x-2 text-gray-700 hover:text-blue-600 font-medium transition-colors">
        <IconBrowserMinus stroke={2} className="w-5 h-5" />
        <span>Contact Us</span>
      </Link>
      <Link href="/faqs" className="flex items-center space-x-2 text-gray-700 hover:text-blue-600 font-medium transition-colors">
        <IconDeviceIpadQuestion stroke={2} className="w-5 h-5" />
        <span>FAQs</span>
      </Link>
    </div>
  );
}