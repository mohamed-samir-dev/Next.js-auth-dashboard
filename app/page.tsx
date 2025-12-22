'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import Skeleton from 'react-loading-skeleton';

export default function Home() {
  const router = useRouter();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const token = localStorage.getItem('auth_token');
    setTimeout(() => {
      if (token) {
        router.push('/dashboard');
      } else {
        router.push('/auth/login');
      }
    }, 800);
  }, [router]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="text-center space-y-4">
        <Skeleton height={40} width={200} />
        <Skeleton height={20} width={150} />
        <div className="flex justify-center">
          <Skeleton circle height={40} width={40} />
        </div>
      </div>
    </div>
  );
}