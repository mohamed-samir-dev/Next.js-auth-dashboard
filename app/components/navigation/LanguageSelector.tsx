'use client';

import { useState } from 'react';
import { ChevronDown } from 'lucide-react';

export default function LanguageSelector() {
  const [isLangDropdownOpen, setIsLangDropdownOpen] = useState(false);
  const [selectedLanguage, setSelectedLanguage] = useState('EN');

  return (
    <div className="relative">
      <button
        onClick={() => setIsLangDropdownOpen(!isLangDropdownOpen)}
        className="text-black flex items-center space-x-1 p-2 hover:bg-gray-50 rounded-lg transition-colors cursor-pointer"
      >
        <span className="text-black text-sm font-medium">{selectedLanguage}</span>
        <ChevronDown className="w-4 h-4" />
      </button>
      
      {isLangDropdownOpen && (
        <div className="absolute right-0 mt-2 w-24 bg-white rounded-lg shadow-lg border border-gray-200 py-1 z-50">
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