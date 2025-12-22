'use client';

import { useState, useEffect } from 'react';
import Skeleton from 'react-loading-skeleton';
import AuthLayout from './components/AuthLayout';
import RegisterForm from './components/RegisterForm';

export default function Register() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => setLoading(false), 800);
  }, []);

  if (loading) {
    return (
      <div className="min-h-screen bg-linear-to-br from-blue-50 to-indigo-100 flex items-center justify-center px-4 py-6 sm:px-6 lg:px-8">
        <div className="bg-white rounded-2xl shadow-xl w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl p-4 sm:p-6 md:p-8">
          <div className="text-center mb-6 sm:mb-8">
            <Skeleton height={28} width={180} className="mb-2 sm:!h-9 sm:!w-48" />
            <Skeleton height={16} width={140} className="sm:!h-5 sm:!w-44" />
          </div>
          
          <div className="space-y-3 sm:space-y-4">
            {[...Array(5)].map((_, i) => (
              <div key={i}>
                <Skeleton height={14} width={60} className="mb-2 sm:!h-4 sm:!w-20" />
                <Skeleton height={40} className="sm:!h-12" />
              </div>
            ))}
            <Skeleton height={40} className="mt-4 sm:mt-6 sm:!h-12" />
          </div>

          <div className="mt-6 sm:mt-8 text-center">
            <Skeleton height={14} width={180} className="sm:!h-4 sm:!w-56" />
          </div>
        </div>
      </div>
    );
  }

  return (
    <AuthLayout title="Create Account">
      <RegisterForm />
    </AuthLayout>
  );
}
