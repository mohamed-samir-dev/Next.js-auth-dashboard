'use client';

import { useState, useEffect } from 'react';
import Skeleton from 'react-loading-skeleton';
import LoginForm from './components/LoginForm';

export default function Login() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => setLoading(false), 800);
  }, []);

  if (loading) {
    return (
      <div className="min-h-screen bg-linear-to-br from-blue-50 to-indigo-100 flex items-center justify-center px-4 py-6 sm:px-6 lg:px-8">
        <div className="bg-white rounded-2xl shadow-xl w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl p-4 sm:p-6 md:p-8">
          <div className="text-center mb-6 sm:mb-8">
            <Skeleton height={28} width={180} className="mb-2 sm:h-9! sm:w-36!" />
            <Skeleton height={16} width={120} className="sm:h-5! sm:w-36!" />
          </div>
          
          <div className="space-y-3 sm:space-y-4 md:space-y-6">
            <div>
              <Skeleton height={14} width={50} className="mb-2 sm:h-4! sm:w-16!" />
              <Skeleton height={40} className="sm:h-12!" />
            </div>
            <div>
              <Skeleton height={14} width={60} className="mb-2 sm:h-4! sm:w-20!" />
              <Skeleton height={40} className="sm:h-12!" />
            </div>
            <Skeleton height={40} className="mt-4 sm:mt-6 sm:h-12!" />
          </div>

          <div className="mt-6 sm:mt-8 text-center">
            <Skeleton height={14} width={160} className="sm:h-4! sm:w-48!" />
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-linear-to-br from-blue-50 to-indigo-100 flex items-center justify-center px-4 py-6 sm:px-6 lg:px-8">
      <div className="bg-white rounded-2xl shadow-xl w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl p-4 sm:p-6 md:p-8">
        <div className="text-center mb-6 sm:mb-8">
          <h1 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-900 mb-2">Welcome Back</h1>
          <p className="text-gray-600 text-sm sm:text-base">Sign in to your account</p>
        </div>
        
        <LoginForm />

        <div className="mt-6 sm:mt-8 text-center">
          <p className="text-gray-600 text-xs sm:text-sm leading-relaxed">
            Don&rsquo;t have an account?{' '}
            <a href="/auth/register" className="text-blue-600 hover:text-blue-700 font-medium underline-offset-2 hover:underline">
              Create one
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}