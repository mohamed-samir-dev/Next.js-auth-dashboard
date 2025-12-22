import Image from "next/image";

export default function LogoSection() {
  return (
    <div>
      <div className="flex items-center gap-1 mb-1">
        <Image
          src="/ChatGPT_Image_21_ديسمبر_2025__05_38_15_م-removebg-preview.png"
          alt="Tiny Tales Logo"
          width={66}
          height={51}
          className="w-[150px] h-[120px]"
          style={{ top: '0px', left: '0px' }}
        />
      </div>
      <p
        className="text-white"
        style={{
          fontWeight: 400,
          fontSize: "14px",
          lineHeight: "20px",
          letterSpacing: "10%",
        }}
      >
        Ipsam in eos qui consequatur ab cum maxime.Soluta dolor quae Ipsam
        in eos qui consequatur ab .Soluta dolor quae Ipsam in eos
        quconsequatur ab cum maxime.Soluta dolor quae{" "}
      </p>
    </div>
  );
}