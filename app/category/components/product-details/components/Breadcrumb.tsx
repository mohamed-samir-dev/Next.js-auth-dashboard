import Link from 'next/link';

export default function Breadcrumb() {
  return (
    <div className="w-[1200px] h-[56px] bg-[#ECECEC66] border border-[#3c3a3a66] rounded-[16px] flex items-center px-6 mx-auto my-2">
      <nav className="flex items-center space-x-2 text-sm">
        <Link href="/" className="text-gray-600 hover:text-gray-900 transition-colors">
          Home
        </Link>
        <span className="text-gray-400">&gt;</span>
        <Link href="/category" className="text-gray-600 hover:text-gray-900 transition-colors">
          Our Category
        </Link>
        <span className="text-gray-400">&gt;</span>
        <span className="text-gray-900 font-medium">Product Details</span>
      </nav>
    </div>
  );
}