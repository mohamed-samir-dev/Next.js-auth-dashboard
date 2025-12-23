'use client';

import Skeleton from 'react-loading-skeleton';
import PasswordInput from './PasswordInput';
import LoadingButton from './LoadingButton';
import { useLoginForm } from '../hooks/useLoginForm';

export default function LoginForm() {
  const { formData, setFormData, loading, error, handleSubmit } = useLoginForm();

  if (loading) {
    return (
      <div className="space-y-4 sm:space-y-6">
        <div>
          <Skeleton height={14} width={80} className="mb-2 sm:h-4! sm:w-24!" />
          <Skeleton height={40} className="sm:h-12!" />
        </div>
        <div>
          <Skeleton height={14} width={60} className="mb-2 sm:h-4! sm:w-20!" />
          <Skeleton height={40} className="sm:h-12!" />
        </div>
        <div className="flex items-center justify-between">
          <Skeleton height={14} width={80} className="sm:h-4! sm:w-24!" />
          <Skeleton height={14} width={100} className="sm:h-4! sm:w-32!" />
        </div>
        <Skeleton height={40} className="sm:h-12!" />
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
      <div>
        <label className="block text-xs sm:text-sm font-medium text-gray-700 mb-2">
          Email Address
        </label>
        <input
          type="email"
          value={formData.email}
          onChange={(e) => setFormData({...formData, email: e.target.value})}
          required
          className="text-black w-full px-3 py-2.5 sm:px-4 sm:py-3 text-sm sm:text-base border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
          placeholder="Enter your email"
        />
      </div>

      <PasswordInput
        value={formData.password}
        onChange={(value) => setFormData({...formData, password: value})}
      />

      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 sm:gap-0">
        <label className="flex items-center">
          <input type="checkbox" className="rounded border-gray-300 text-blue-600 focus:ring-blue-500 w-4 h-4" />
          <span className="ml-2 text-xs sm:text-sm text-gray-600">Remember me</span>
        </label>
        <a href="#" className="text-xs sm:text-sm text-blue-600 hover:text-blue-700 font-medium underline-offset-2 hover:underline">
          Forgot password?
        </a>
      </div>

      {error && (
        <div className="bg-red-50 border border-red-200 text-red-700 px-3 py-2 sm:px-4 sm:py-3 rounded-lg text-xs sm:text-sm wrap-break-words">
          {error}
        </div>
      )}

      <LoadingButton loading={loading} />
    </form>
  );
}
