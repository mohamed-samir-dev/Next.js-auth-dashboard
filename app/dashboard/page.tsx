'use client';

import { useState, useEffect, useCallback } from 'react';
import { useRouter } from 'next/navigation';
import Skeleton from 'react-loading-skeleton';
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
      setTimeout(() => setLoading(false), 1000);
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
      <div className="min-h-screen bg-gray-50">
        {/* Navigation Skeleton */}
        <div className="bg-white shadow-md border-b border-gray-150">
          <div className="max-w-7xl mx-auto px-2 sm:px-4 lg:px-8">
            <div className="flex items-center h-16 sm:h-18 py-3">
              <div className="flex items-center space-x-2 sm:space-x-4">
                <Skeleton height={32} width={80} className="sm:h-10 sm:w-28" />
                <div className="hidden md:flex space-x-4 lg:space-x-6">
                  <Skeleton height={20} width={50} className="sm:w-16" />
                  <Skeleton height={20} width={60} className="sm:w-20" />
                  <Skeleton height={20} width={55} className="sm:w-18" />
                </div>
              </div>
              <div className="flex items-center space-x-2 sm:space-x-4 ml-auto">
                <div className="hidden sm:flex items-center space-x-2 sm:space-x-4">
                  <Skeleton circle height={24} width={24} className="sm:h-8 sm:w-8" />
                  <Skeleton circle height={24} width={24} className="sm:h-8 sm:w-8" />
                  <Skeleton height={24} width={60} className="sm:h-8 sm:w-20" />
                </div>
                <Skeleton circle height={24} width={24} className="sm:h-8 sm:w-8" />
              </div>
            </div>
          </div>
        </div>
        
        {/* Dashboard Content Skeleton */}
        <div className="max-w-7xl mx-auto px-2 sm:px-4 lg:px-8 py-4 sm:py-8">
          <div className="mb-6 sm:mb-8">
            <Skeleton height={28} width={250} className="mb-2 sm:h-9 sm:w-80" />
            <Skeleton height={16} width={300} className="sm:h-5 sm:w-96" />
          </div>
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