import Image from "next/image";

export default function LogoSection() {
  return (
    <div className="mb-6 sm:mb-0">
      <div className="flex items-center gap-1 mb-4">
        <Image
          src="/logo.webp"
          alt="Tiny Tales Logo"
          width={66}
          height={51}
          className="w-24 h-20 sm:w-32 sm:h-24 lg:w-[150px] lg:h-[120px]"
        />
      </div>
      <p className="text-white text-xs sm:text-sm leading-relaxed max-w-xs">
        Ipsam in eos qui consequatur ab cum maxime.Soluta dolor quae Ipsam
        in eos qui consequatur ab .Soluta dolor quae Ipsam in eos
        quconsequatur ab cum maxime.Soluta dolor quae
      </p>
    </div>
  );
}