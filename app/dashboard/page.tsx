'use client';

import { useState, useEffect, useCallback } from 'react';
import { useRouter } from 'next/navigation';
import Navigation from '../components/navigation/Navigation';
import DashboardContent from '../components/DashboardContent';

export default function Dashboard() {
  const router = useRouter();
  const [userName, setUserName] = useState('');
  const [loading, setLoading] = useState(true);

  const fetchUserData = useCallback(async (token: string) => {
    try {
      const response = await fetch('/api/auth/user-data', {
        headers: {
          'Authorization': `Bearer ${token}`,
          'Accept': 'application/json'
        }
      });

      if (response.ok) {
        const result = await response.json();
        setUserName(result.data?.name || 'User');
      } else {
        localStorage.removeItem('auth_token');
        router.push('/auth/login');
      }
    } catch (err) {
      console.error('Failed to fetch user data:', err);
      setUserName('User');
    } finally {
      setLoading(false);
    }
  }, [router]);

  useEffect(() => {
    const token = localStorage.getItem('auth_token');
    if (!token) {
      router.push('/auth/login');
      return;
    }

    fetchUserData(token);
  }, [router, fetchUserData]);

  const handleLogout = () => {
    localStorage.removeItem('auth_token');
    router.push('/auth/login');
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-linear-to-br from-gray-50 to-blue-50">
        <div className="text-center">
          <div className="w-16 h-16 border-4 border-blue-500 border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
          <p className="text-gray-600 font-medium">Loading your dashboard...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation userName={userName} onLogout={handleLogout} />
      <DashboardContent userName={userName} />
    </div>
  );
}