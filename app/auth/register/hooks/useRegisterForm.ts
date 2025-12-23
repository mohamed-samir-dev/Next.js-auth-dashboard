'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { type FormData } from '../types';

export function useRegisterForm() {
  const router = useRouter();
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    password: '',
    password_confirmation: '',
    mobile: '',
    mobile_country_code: '971'
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const updateField = (field: keyof FormData, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    const data = new FormData();
    data.append('name', formData.name);
    data.append('email', formData.email);
    data.append('password', formData.password);
    data.append('password_confirmation', formData.password_confirmation);
    data.append('mobile', formData.mobile);
    data.append('mobile_country_code', formData.mobile_country_code);

    try {
      const response = await fetch('/api/auth/register', {
        method: 'POST',
        body: data
      });

      const result = await response.json();

      if (response.ok && result.data?.token) {
        localStorage.setItem('temp_token', result.data.token);
        router.push('/auth/verify');
      } else {
        setError(result.message || 'Unable to create account. Please check your information and try again.');
      }
    } catch {
      setError('Unable to connect to our servers. Please check your internet connection and try again.');
    } finally {
      setLoading(false);
    }
  };

  return {
    formData,
    loading,
    error,
    updateField,
    handleSubmit
  };
}