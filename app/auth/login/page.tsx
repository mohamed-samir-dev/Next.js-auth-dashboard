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
      <div className="min-h-screen bg-linear-to-br from-blue-50 to-indigo-100 flex items-center justify-center p-4">
        <div className="bg-white rounded-2xl shadow-xl p-8 w-full max-w-md">
          <div className="text-center mb-8">
            <Skeleton height={36} width={200} className="mb-2" />
            <Skeleton height={20} width={150} />
          </div>
          
          <div className="space-y-4">
            <div>
              <Skeleton height={16} width={60} className="mb-2" />
              <Skeleton height={48} />
            </div>
            <div>
              <Skeleton height={16} width={80} className="mb-2" />
              <Skeleton height={48} />
            </div>
            <Skeleton height={48} className="mt-6" />
          </div>

          <div className="mt-8 text-center">
            <Skeleton height={16} width={200} />
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-linear-to-br from-blue-50 to-indigo-100 flex items-center justify-center p-4">
      <div className="bg-white rounded-2xl shadow-xl p-8 w-full max-w-md">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Welcome Back</h1>
          <p className="text-gray-600">Sign in to your account</p>
        </div>
        
        <LoginForm />

        <div className="mt-8 text-center">
          <p className="text-gray-600 text-sm">
            Don&rsquo;t have an account?{' '}
            <a href="/auth/register" className="text-blue-600 hover:text-blue-700 font-medium">
              Create one
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}