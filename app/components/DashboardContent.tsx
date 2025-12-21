'use client';

interface DashboardContentProps {
  userName: string;
}

export default function DashboardContent({ userName }: DashboardContentProps) {
  return (
    <div className="min-h-screen bg-linear-to-br from-gray-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Welcome Section */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">
            Welcome back, {userName}! 👋
          </h1>
          <p className="text-gray-600">Ready to dive into some amazing stories today?</p>
        </div>

    </div>
    </div>
  );
}