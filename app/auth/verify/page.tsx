'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import Skeleton from 'react-loading-skeleton';

export default function Verify() {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [pageLoading, setPageLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    const tempToken = localStorage.getItem('temp_token');
    if (!tempToken) {
      router.push('/auth/register');
    } else {
      setTimeout(() => setPageLoading(false), 800);
    }
  }, [router]);

  const handleVerify = async () => {
    setLoading(true);
    setError('');

    const tempToken = localStorage.getItem('temp_token');
    if (!tempToken) {
      router.push('/auth/register');
      return;
    }

    const data = new FormData();
    data.append('code', '123456');

    try {
      const response = await fetch('/api/auth/verify', {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${tempToken}`,
          'Accept': 'application/json'
        },
        body: data
      });

      const result = await response.json();

      if (response.ok && result.data && result.data.token) {
        localStorage.removeItem('temp_token');
        localStorage.setItem('auth_token', result.data.token);
        router.push('/dashboard');
      } else {
        setError(result.message || 'Verification failed');
      }
    } catch {
      setError('Network error occurred');
    } finally {
      setLoading(false);
    }
  };

  if (pageLoading) {
    return (
      <div className="min-h-screen bg-linear-to-br from-blue-50 to-indigo-100 flex items-center justify-center p-4">
        <div className="bg-white rounded-2xl shadow-xl p-8 w-full max-w-md text-center">
          <Skeleton height={32} width={200} className="mb-4" />
          <Skeleton height={16} count={2} className="mb-6" />
          <Skeleton height={48} />
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-linear-to-br from-blue-50 to-indigo-100 flex items-center justify-center p-4">
      <div className="bg-white rounded-2xl shadow-xl p-8 w-full max-w-md text-center">
        <h1 className="text-2xl font-bold text-gray-900 mb-4">Verify Account</h1>
        <p className="text-gray-600 mb-6">Click the button below to verify your account with code: 123456</p>
        {error && (
          <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-lg text-sm mb-4">
            {error}
          </div>
        )}
        <button
          onClick={handleVerify}
          disabled={loading}
          className="w-full bg-blue-600 hover:bg-blue-700 disabled:bg-blue-400 text-white font-semibold py-3 rounded-lg transition-colors"
        >
          {loading ? (
            <div className="flex items-center justify-center">
              <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
              </svg>
              Verifying...
            </div>
          ) : (
            'Verify Account'
          )}
        </button>
      </div>
    </div>
  );
}