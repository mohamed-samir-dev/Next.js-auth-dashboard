import Image from 'next/image';

export default function Logo() {
  return (
    <Image 
      src="/logo.webp" 
      alt="TinyTales" 
      width={64} 
      height={56} 
      className="w-25 h-22" 
    />
  );
}