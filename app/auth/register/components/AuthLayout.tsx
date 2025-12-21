import { AuthLayoutProps } from '../types';

export default function AuthLayout({ title, children }: AuthLayoutProps) {
  return (
    <div className="min-h-screen bg-linear-to-br from-blue-50 to-indigo-100 flex items-center justify-center p-4">
      <div className="bg-white rounded-2xl shadow-xl p-8 w-full max-w-md">
        <h1 className="text-2xl font-bold text-gray-900 text-center mb-6">{title}</h1>
        {children}
      </div>
    </div>
  );
}