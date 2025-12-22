export default function RatingDisplay() {
  return (
    <div className="flex items-center justify-center w-full lg:w-[182px] h-[120px] sm:h-[150px] lg:h-[180px] flex-shrink-0">
      <div className="flex items-baseline">
        <span className="text-black text-6xl sm:text-8xl lg:text-[120px] font-medium leading-none">4.5</span>
        <span className="text-xl sm:text-2xl lg:text-3xl text-gray-500 ml-1">/5</span>
      </div>
    </div>
  );
}