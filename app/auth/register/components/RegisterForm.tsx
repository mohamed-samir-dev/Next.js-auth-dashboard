'use client';

import Skeleton from 'react-loading-skeleton';
import Input from './Input';
import PhoneInput from './PhoneInput';
import { useRegisterForm } from '../hooks/useRegisterForm';

export default function RegisterForm() {
  const { formData, loading, error, updateField, handleSubmit } = useRegisterForm();

  if (loading) {
    return (
      <div className="space-y-4">
        {[...Array(5)].map((_, i) => (
          <Skeleton key={i} height={48} />
        ))}
        <Skeleton height={16} width={200} />
        <Skeleton height={48} />
        <Skeleton height={16} width={250} />
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <Input
        type="text"
        value={formData.name}
        onChange={(value) => updateField('name', value)}
        placeholder="Full Name"
        required
      />

      <Input
        type="email"
        value={formData.email}
        onChange={(value) => updateField('email', value)}
        placeholder="Email"
        required
      />

      <Input
        type="password"
        value={formData.password}
        onChange={(value) => updateField('password', value)}
        placeholder="Password"
        required
      />

      <Input
        type="password"
        value={formData.password_confirmation}
        onChange={(value) => updateField('password_confirmation', value)}
        placeholder="Confirm Password"
        required
      />

      <PhoneInput
        countryCode={formData.mobile_country_code}
        mobile={formData.mobile}
        onCountryCodeChange={(code) => updateField('mobile_country_code', code)}
        onMobileChange={(mobile) => updateField('mobile', mobile)}
      />

      {error && <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-2 rounded-lg text-sm">{error}</div>}

      <button
        type="submit"
        disabled={loading}
        className="w-full bg-blue-600 hover:bg-blue-700 disabled:bg-blue-400 text-white font-semibold py-3 rounded-lg transition-colors"
      >
        {loading ? (
          <div className="flex items-center justify-center">
            <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
            </svg>
            Creating Account...
          </div>
        ) : (
          'Create Account'
        )}
      </button>

      <p className="text-center text-gray-600 text-sm">
        Already have an account? <a href="/auth/login" className="text-blue-600 hover:text-blue-700 font-medium">Sign in</a>
      </p>
    </form>
  );
}