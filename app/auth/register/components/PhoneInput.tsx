import { PhoneInputProps } from '../types';

export default function PhoneInput({ countryCode, mobile, onCountryCodeChange, onMobileChange }: PhoneInputProps) {
  return (
    <div className="flex gap-3">
      <select
        value={countryCode}
        onChange={(e) => onCountryCodeChange(e.target.value)}
        className="text-black px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
      >
        <option value="971">+971</option>
        <option value="1">+1</option>
        <option value="44">+44</option>
        <option value="91">+91</option>
      </select>
      <input
        type="tel"
        value={mobile}
        onChange={(e) => {
          const value = e.target.value.replace(/[^0-9]/g, '');
          onMobileChange(value);
        }}
        required
        className="text-black flex-1 px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
        placeholder="Phone Number"
      />
    </div>
  );
}