import { PhoneInputProps } from '../types';

import {countries}from "../data/code-countries"

export default function PhoneInput({ countryCode, mobile, onCountryCodeChange, onMobileChange }: PhoneInputProps) {
  return (
    <div className="flex flex-col sm:flex-row gap-2 sm:gap-3">
      <select
        value={countryCode}
        onChange={(e) => onCountryCodeChange(e.target.value)}
        className="text-black px-2 sm:px-3 py-2.5 sm:py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white w-full sm:w-20 md:w-24 lg:w-28 text-xs sm:text-sm transition-all duration-200"
      >
        {countries.map((country) => (
          <option key={country.code} value={country.code}>
            +{country.code}
          </option>
        ))}
      </select>
      <input
        type="tel"
        value={mobile}
        onChange={(e) => {
          const value = e.target.value.replace(/[^0-9]/g, '');
          onMobileChange(value);
        }}
        required
        className="text-black flex-1 px-3 sm:px-4 py-2.5 sm:py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white text-xs sm:text-sm transition-all duration-200"
        placeholder="Phone Number"
      />
    </div>
  );
}