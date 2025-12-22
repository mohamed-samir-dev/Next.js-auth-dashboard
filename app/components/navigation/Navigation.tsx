'use client';

import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import Logo from './Logo';
import NavigationLinks from './NavigationLinks';
import ActionButtons from './ActionButtons';
import LanguageSelector from './LanguageSelector';
import UserMenu from './UserMenu';

interface NavigationProps {
  userName?: string;
  onLogout?: () => void;
  cartCount?: number;
  wishlistCount?: number;
}

export default function Navigation({ onLogout, cartCount = 0, wishlistCount = 0 }: NavigationProps) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <nav className="bg-white shadow-md border-b border-gray-150">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-18">
          {/* Logo */}
          <div className="mt-3 mb-3 flex items-center">
            <Logo />
          </div>

          {/* Desktop Navigation */}
          <div className="desktop-1000:flex hidden items-center space-x-4">
            <NavigationLinks />
          </div>

          {/* Desktop Right Side Icons */}
          <div className="desktop-1000:flex hidden mt-3 mb-3 items-center space-x-4">
            <ActionButtons cartCount={cartCount} wishlistCount={wishlistCount} />
            <LanguageSelector />
            <UserMenu onLogout={onLogout} />
          </div>

          {/* Mobile Menu Button */}
          <div className="mobile-1000:block hidden">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-gray-700 hover:text-blue-600 focus:outline-none focus:text-blue-600 transition-colors"
            >
              {isMobileMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <div className={`mobile-1000:block hidden transition-all duration-300 ease-in-out overflow-hidden ${
          isMobileMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        }`}>
          <div className="px-2 pt-2 pb-3 space-y-1 bg-white border-t border-gray-200">
            <NavigationLinks />
            <div className="flex items-center justify-between pt-4 border-t border-gray-200">
              <div className="flex items-center space-x-4">
                <ActionButtons cartCount={cartCount} wishlistCount={wishlistCount} />
                <LanguageSelector />
              </div>
              <UserMenu onLogout={onLogout} />
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}