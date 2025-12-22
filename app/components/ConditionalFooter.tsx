'use client';

import { usePathname } from 'next/navigation';
import Footer from './Footer';

export default function ConditionalFooter() {
  const pathname = usePathname();
  
  // Hide footer on auth pages
  const isAuthPage = pathname?.startsWith('/auth/');
  
  if (isAuthPage) {
    return null;
  }
  
  return <Footer />;
}