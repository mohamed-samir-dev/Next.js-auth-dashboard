import Logo from './Logo';
import NavigationLinks from './NavigationLinks';
import ActionButtons from './ActionButtons';
import LanguageSelector from './LanguageSelector';
import UserMenu from './UserMenu';

interface NavigationProps {
  userName?: string;
  onLogout?: () => void;
}

export default function Navigation({ onLogout }: NavigationProps) {

  return (
    <nav className="bg-#F5F5F5 shadow-md   border-b  border-gray-150">
      <div className=" max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center h-18">
          {/* Logo and Navigation Links */}
          <div className=" mt-3 mb-3 flex items-center space-x-4">
            <Logo />
            <NavigationLinks />
          </div>

          {/* Right Side Icons */}
          <div className=" mt-3 mb-3 flex items-center space-x-4 ml-auto">
            <ActionButtons />
            <LanguageSelector />
            <UserMenu onLogout={onLogout} />
          </div>
        </div>
      </div>
    </nav>
  );
}