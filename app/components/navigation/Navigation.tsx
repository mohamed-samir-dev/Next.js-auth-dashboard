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

  return (
    <nav className="bg-white shadow-md border-b border-gray-150">
      <div className=" max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center h-18">
          {/* Logo and Navigation Links */}
          <div className=" mt-3 mb-3 flex items-center space-x-4">
            <Logo />
            <NavigationLinks />
          </div>

          {/* Right Side Icons */}
          <div className=" mt-3 mb-3 flex items-center space-x-4 ml-auto">
            <ActionButtons cartCount={cartCount} wishlistCount={wishlistCount} />
            <LanguageSelector />
            <UserMenu onLogout={onLogout} />
          </div>
        </div>
      </div>
    </nav>
  );
}