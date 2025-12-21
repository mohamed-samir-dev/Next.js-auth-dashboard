'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';

export default function Verify() {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  useEffect(() => {
    const tempToken = localStorage.getItem('temp_token');
    if (!tempToken) {
      router.push('/auth/register');
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
    } catch (err) {
      setError('Network error occurred');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={{ maxWidth: '400px', margin: '50px auto', padding: '20px', textAlign: 'center' }}>
      <h1>Verify Account</h1>
      <p>Click the button below to verify your account with code: 123456</p>
      {error && <p style={{ color: 'red', marginBottom: '15px' }}>{error}</p>}
      <button
        onClick={handleVerify}
        disabled={loading}
        style={{ width: '100%', padding: '12px', backgroundColor: '#007cba', color: 'white', border: 'none', cursor: 'pointer' }}
      >
        {loading ? 'Verifying...' : 'Verify Account'}
      </button>
    </div>
  );
}