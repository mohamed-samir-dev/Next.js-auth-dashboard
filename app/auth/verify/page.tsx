'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import Skeleton from 'react-loading-skeleton';

export default function Verify() {
  const router = useRouter();
  const [code, setCode] = useState('');
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
    if (!code.trim()) {
      setError('Please enter verification code');
      return;
    }

    setLoading(true);
    setError('');

    const tempToken = localStorage.getItem('temp_token');
    if (!tempToken) {
      router.push('/auth/register');
      return;
    }

    const data = new FormData();
    data.append('code', code.trim());

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
      <div className="min-h-screen bg-linear-to-br from-blue-50 to-indigo-100 flex items-center justify-center px-4 py-6 sm:px-6 lg:px-8">
        <div className="bg-white rounded-2xl shadow-xl w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl p-4 sm:p-6 md:p-8 text-center">
          <Skeleton height={24} width={160} className="mb-3 sm:h-8! sm:w-48! sm:mb-4" />
          <Skeleton height={14} count={2} className="mb-4 sm:h-4! sm:mb-6" />
          <Skeleton height={40} className="sm:h-12!" />
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-linear-to-br from-blue-50 to-indigo-100 flex items-center justify-center px-4 py-6 sm:px-6 lg:px-8">
      <div className="bg-white rounded-2xl shadow-xl w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl p-4 sm:p-6 md:p-8 text-center">
        <h1 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-900 mb-3 sm:mb-4">Verify Account</h1>
        <p className="text-gray-600 text-sm sm:text-base leading-relaxed mb-4 sm:mb-6 px-2 sm:px-0">
          Enter the verification code sent to your email
        </p>
        <input
          type="text"
          value={code}
          onChange={(e) => setCode(e.target.value)}
          placeholder="Enter verification code"
          className="text-black w-full px-3 py-2.5 sm:px-4 sm:py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-sm sm:text-base mb-4 sm:mb-6"
          disabled={loading}
        />
        {error && (
          <div className="bg-red-50 border border-red-200 text-red-700 px-3 py-2 sm:px-4 sm:py-3 rounded-lg text-xs sm:text-sm mb-3 sm:mb-4 wrap-break-words">
            {error}
          </div>
        )}
        <button
          onClick={handleVerify}
          disabled={loading || !code.trim()}
          className="w-full bg-blue-600 hover:bg-blue-700 disabled:bg-blue-400 text-white font-semibold py-2.5 sm:py-3 md:py-3.5 rounded-lg transition-all duration-200 text-sm sm:text-base focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
        >
          {loading ? (
            <div className="flex items-center justify-center">
              <svg className="animate-spin -ml-1 mr-2 sm:mr-3 h-4 w-4 sm:h-5 sm:w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
              </svg>
              <span className="text-xs sm:text-sm">Verifying...</span>
            </div>
          ) : (
            'Verify Account'
          )}
        </button>
      </div>
    </div>
  );
}