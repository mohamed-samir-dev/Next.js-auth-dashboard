'use client';

import { useState } from 'react';
import { ChevronDown, User, Settings, LogOut } from 'lucide-react';

interface UserMenuProps {
  onLogout?: () => void;
}

export default function UserMenu({ onLogout }: UserMenuProps) {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const handleLogout = () => {
    if (onLogout) {
      onLogout();
    } else {
      localStorage.removeItem('auth_token');
      window.location.href = '/auth/login';
    }
  };

  return (
    <div className="relative">
      <button
        onClick={() => setIsDropdownOpen(!isDropdownOpen)}
        className="flex items-center space-x-1 text-black  hover:bg-gray-50 transition-colors rounded-lg cursor-pointer"
      >
        <User className="w-6 h-6" />
        <ChevronDown className="w-4 h-4" />
      </button>

      {isDropdownOpen && (
        <div className="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-lg border border-gray-200 py-1 z-50">
          <a href="#" className="flex items-center space-x-2 px-4 py-2 text-sm text-gray-700 hover:bg-gray-50">
            <User className="w-4 h-4" />
            <span>Profile</span>
          </a>
          <a href="#" className="flex items-center space-x-2 px-4 py-2 text-sm text-gray-700 hover:bg-gray-50">
            <Settings className="w-4 h-4" />
            <span>Settings</span>
          </a>
          <hr className="my-1" />
          <button
            onClick={handleLogout}
            className="flex items-center space-x-2 w-full text-left px-4 py-2 text-sm text-red-600 hover:bg-gray-50"
          >
            <LogOut className="w-4 h-4" />
            <span>Logout</span>
          </button>
        </div>
      )}
    </div>
  );
}