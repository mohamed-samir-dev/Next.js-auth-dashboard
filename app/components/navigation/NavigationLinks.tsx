import Link from 'next/link';
import { IconSmartHome, IconCategory, IconLocationCancel, IconBrowserMinus, IconDeviceIpadQuestion } from '@tabler/icons-react';

export default function NavigationLinks() {
  return (
    <div className="flex flex-col md:flex-row md:items-center space-y-2 md:space-y-0 md:space-x-8">
      <Link href="/" className="flex items-center space-x-2 text-gray-700 hover:text-blue-600 font-medium transition-colors py-2 md:py-0">
        <IconSmartHome stroke={2} className="w-5 h-5" />
        <span>Home</span>
      </Link>
      <Link href="/category" className="flex items-center space-x-2 text-gray-700 hover:text-blue-600 font-medium transition-colors py-2 md:py-0">
        <IconCategory stroke={2} className="w-5 h-5" />
        <span>Our Category</span>
      </Link>
      <Link href="/about" className="flex items-center space-x-2 text-gray-700 hover:text-blue-600 font-medium transition-colors py-2 md:py-0">
        <IconLocationCancel stroke={2} className="w-5 h-5" />
        <span>About Us</span>
      </Link>
      <Link href="/contact" className="flex items-center space-x-2 text-gray-700 hover:text-blue-600 font-medium transition-colors py-2 md:py-0">
        <IconBrowserMinus stroke={2} className="w-5 h-5" />
        <span>Contact Us</span>
      </Link>
      <Link href="/faqs" className="flex items-center space-x-2 text-gray-700 hover:text-blue-600 font-medium transition-colors py-2 md:py-0">
        <IconDeviceIpadQuestion stroke={2} className="w-5 h-5" />
        <span>FAQs</span>
      </Link>
    </div>
  );
}