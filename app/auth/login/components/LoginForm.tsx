'use client';

import Skeleton from 'react-loading-skeleton';
import PasswordInput from './PasswordInput';
import LoadingButton from './LoadingButton';
import { useLoginForm } from '../hooks/useLoginForm';

export default function LoginForm() {
  const { formData, setFormData, loading, error, handleSubmit } = useLoginForm();

  if (loading) {
    return (
      <div className="space-y-6">
        <div>
          <Skeleton height={16} width={100} className="mb-2" />
          <Skeleton height={48} />
        </div>
        <div>
          <Skeleton height={16} width={80} className="mb-2" />
          <Skeleton height={48} />
        </div>
        <div className="flex items-center justify-between">
          <Skeleton height={16} width={100} />
          <Skeleton height={16} width={120} />
        </div>
        <Skeleton height={48} />
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Email Address
        </label>
        <input
          type="email"
          value={formData.email}
          onChange={(e) => setFormData({...formData, email: e.target.value})}
          required
          className="text-black w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
          placeholder="Enter your email"
        />
      </div>

      <PasswordInput
        value={formData.password}
        onChange={(value) => setFormData({...formData, password: value})}
      />

      <div className="flex items-center justify-between">
        <label className="flex items-center">
          <input type="checkbox" className="rounded border-gray-300 text-blue-600 focus:ring-blue-500" />
          <span className="ml-2 text-sm text-gray-600">Remember me</span>
        </label>
        <a href="#" className="text-sm text-blue-600 hover:text-blue-700 font-medium">
          Forgot password?
        </a>
      </div>

      {error && (
        <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-lg text-sm">
          {error}
        </div>
      )}

      <LoadingButton loading={loading} />
    </form>
  );
}
