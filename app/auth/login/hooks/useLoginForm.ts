'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';

export function useLoginForm() {
  const router = useRouter();
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    const data = new FormData();
    data.append('email', formData.email);
    data.append('password', formData.password);

    try {
      const response = await fetch('/api/auth/login', {
        method: 'POST',
        body: data
      });

      const result = await response.json();

      if (response.ok && result.data && result.data.token) {
        localStorage.setItem('auth_token', result.data.token);
        router.push('/dashboard');
      } else {
        setError(result.message || 'Login failed');
      }
    } catch (err) {
      setError('Network error occurred');
    } finally {
      setLoading(false);
    }
  };

  return {
    formData,
    setFormData,
    loading,
    error,
    handleSubmit
  };
}