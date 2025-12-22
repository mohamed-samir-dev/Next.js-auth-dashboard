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
      <div className="min-h-screen bg-linear-to-br from-blue-50 to-indigo-100 flex items-center justify-center p-4">
        <div className="bg-white rounded-2xl shadow-xl p-8 w-full max-w-md">
          <div className="text-center mb-8">
            <Skeleton height={36} width={200} className="mb-2" />
            <Skeleton height={20} width={180} />
          </div>
          
          <div className="space-y-4">
            {[...Array(5)].map((_, i) => (
              <div key={i}>
                <Skeleton height={16} width={80} className="mb-2" />
                <Skeleton height={48} />
              </div>
            ))}
            <Skeleton height={48} className="mt-6" />
          </div>

          <div className="mt-8 text-center">
            <Skeleton height={16} width={220} />
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
