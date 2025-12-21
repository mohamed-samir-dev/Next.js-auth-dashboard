import Image from 'next/image';

export default function ProductHeader() {
  return (
    <div className="relative w-full h-[250px] flex items-center justify-center overflow-hidden">
      <Image 
        src="/ChatGPT Image 21 ديسمبر 2025، 07_46_20 م.png" 
        alt="Background" 
        fill
        className="object-cover"
      />
      <div className="absolute inset-0 flex items-center justify-center z-5">
        <span className="text-[6rem] text-white select-none pointer-events-none whitespace-nowrap">
          Product Details
        </span>
      </div>
      <h1 className="relative z-20 text-5xl font-black text-black drop-shadow-lg">Product Details</h1>
    </div>
  );
}