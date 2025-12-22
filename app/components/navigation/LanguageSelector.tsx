'use client';

import { useState, useRef, useEffect } from 'react';
import { ChevronDown } from 'lucide-react';

export default function LanguageSelector() {
  const [isLangDropdownOpen, setIsLangDropdownOpen] = useState(false);
  const [selectedLanguage, setSelectedLanguage] = useState('EN');
  const [dropdownStyle, setDropdownStyle] = useState({});
  const buttonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (isLangDropdownOpen && buttonRef.current) {
      const rect = buttonRef.current.getBoundingClientRect();
      setDropdownStyle({
        position: 'fixed',
        top: rect.bottom + 8,
        right: window.innerWidth - rect.right,
        zIndex: 9999
      });
    }
  }, [isLangDropdownOpen]);

  const toggleDropdown = () => {
    if (!isLangDropdownOpen && buttonRef.current) {
      const rect = buttonRef.current.getBoundingClientRect();
      setDropdownStyle({
        position: 'fixed' as const,
        top: rect.bottom + 8,
        right: window.innerWidth - rect.right,
        zIndex: 9999
      });
    }
    setIsLangDropdownOpen(!isLangDropdownOpen);
  };

  return (
    <div className="relative">
      <button
        ref={buttonRef}
        onClick={toggleDropdown}
        className="text-black flex items-center space-x-1  hover:bg-gray-50 rounded-lg transition-colors cursor-pointer"
      >
        <span className="text-black text-sm font-medium">{selectedLanguage}</span>
        <ChevronDown className="w-4 h-4" />
      </button>
      
      {isLangDropdownOpen && (
        <div style={dropdownStyle} className="w-24 bg-white rounded-lg shadow-lg border border-gray-200 py-1">
          {selectedLanguage === 'EN' ? (
            <button
              onClick={() => { setSelectedLanguage('AR'); setIsLangDropdownOpen(false); }}
              className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-50"
            >
              AR
            </button>
          ) : (
            <button
              onClick={() => { setSelectedLanguage('EN'); setIsLangDropdownOpen(false); }}
              className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-50"
            >
              EN
            </button>
          )}
        </div>
      )}
    </div>
  );
}