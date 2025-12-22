import Image from 'next/image';

export default function ProductHeader() {
  return (
    <div className="relative w-full h-[180px] sm:h-[220px] lg:h-[250px] flex items-center justify-center overflow-hidden">
      <Image 
        src="/ChatGPT Image 21 ديسمبر 2025، 07_46_20 م.png" 
        alt="Background" 
        fill
        className="object-cover"
      />
      <div className="absolute inset-0 flex items-center justify-center z-5">
        <span className="text-4xl sm:text-6xl lg:text-[6rem] text-white select-none pointer-events-none whitespace-nowrap opacity-30">
          Product Details
        </span>
      </div>
      <h1 className="relative z-20 text-2xl sm:text-4xl lg:text-5xl font-black text-black drop-shadow-lg text-center px-4">Product Details</h1>
    </div>
  );
}