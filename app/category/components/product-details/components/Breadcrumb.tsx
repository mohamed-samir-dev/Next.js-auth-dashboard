import Link from 'next/link';

export default function Breadcrumb() {
  return (
    <div className="w-full max-w-7xl h-auto sm:h-[56px] bg-[#ECECEC66] border border-[#3c3a3a66] rounded-[12px] sm:rounded-[16px] flex items-center px-4 sm:px-6 py-3 sm:py-0 mx-auto my-2">
      <nav className="flex flex-wrap items-center gap-1 sm:gap-2 text-xs sm:text-sm">
        <Link href="/" className="text-gray-600 hover:text-gray-900 transition-colors whitespace-nowrap">
          Home
        </Link>
        <span className="text-gray-400">&gt;</span>
        <Link href="/category" className="text-gray-600 hover:text-gray-900 transition-colors whitespace-nowrap">
          Our Category
        </Link>
        <span className="text-gray-400">&gt;</span>
        <span className="text-gray-900 font-medium">Product Details</span>
      </nav>
    </div>
  );
}