import { PhoneInputProps } from '../types';

const countries = [
  { code: '1', name: 'United States' },
  { code: '7', name: 'Russia' },
  { code: '20', name: 'Egypt' },
  { code: '27', name: 'South Africa' },
  { code: '30', name: 'Greece' },
  { code: '31', name: 'Netherlands' },
  { code: '32', name: 'Belgium' },
  { code: '33', name: 'France' },
  { code: '34', name: 'Spain' },
  { code: '36', name: 'Hungary' },
  { code: '39', name: 'Italy' },
  { code: '41', name: 'Switzerland' },
  { code: '43', name: 'Austria' },
  { code: '44', name: 'United Kingdom' },
  { code: '45', name: 'Denmark' },
  { code: '46', name: 'Sweden' },
  { code: '47', name: 'Norway' },
  { code: '48', name: 'Poland' },
  { code: '49', name: 'Germany' },
  { code: '51', name: 'Peru' },
  { code: '52', name: 'Mexico' },
  { code: '54', name: 'Argentina' },
  { code: '55', name: 'Brazil' },
  { code: '56', name: 'Chile' },
  { code: '57', name: 'Colombia' },
  { code: '58', name: 'Venezuela' },
  { code: '60', name: 'Malaysia' },
  { code: '61', name: 'Australia' },
  { code: '62', name: 'Indonesia' },
  { code: '63', name: 'Philippines' },
  { code: '64', name: 'New Zealand' },
  { code: '65', name: 'Singapore' },
  { code: '66', name: 'Thailand' },
  { code: '81', name: 'Japan' },
  { code: '82', name: 'South Korea' },
  { code: '84', name: 'Vietnam' },
  { code: '86', name: 'China' },
  { code: '90', name: 'Turkey' },
  { code: '91', name: 'India' },
  { code: '234', name: 'Nigeria' },
  { code: '254', name: 'Kenya' },
  { code: '351', name: 'Portugal' },
  { code: '420', name: 'Czech Republic' },
  { code: '852', name: 'Hong Kong' },
  { code: '886', name: 'Taiwan' },
  { code: '961', name: 'Lebanon' },
  { code: '962', name: 'Jordan' },
  { code: '965', name: 'Kuwait' },
  { code: '966', name: 'Saudi Arabia' },
  { code: '968', name: 'Oman' },
  { code: '971', name: 'United Arab Emirates' },
  { code: '972', name: 'Israel' },
  { code: '973', name: 'Bahrain' },
  { code: '974', name: 'Qatar' }
];


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