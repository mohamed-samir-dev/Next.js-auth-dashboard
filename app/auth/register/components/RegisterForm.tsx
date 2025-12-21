'use client';

import Input from './Input';
import PhoneInput from './PhoneInput';
import { useRegisterForm } from '../hooks/useRegisterForm';

export default function RegisterForm() {
  const { formData, loading, error, updateField, handleSubmit } = useRegisterForm();

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
        {loading ? 'Creating Account...' : 'Create Account'}
      </button>

      <p className="text-center text-gray-600 text-sm">
        Already have an account? <a href="/auth/login" className="text-blue-600 hover:text-blue-700 font-medium">Sign in</a>
      </p>
    </form>
  );
}