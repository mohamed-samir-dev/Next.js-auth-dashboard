export default function TotalReviews() {
  return (
    <div className="text-center w-full lg:w-[186px] h-auto lg:h-[184px] flex flex-col justify-center lg:justify-between gap-4 lg:gap-[14px] flex-shrink-0">
      <div className="text-base sm:text-lg font-medium text-gray-500">Total Reviews</div>
      <div className="text-4xl sm:text-5xl lg:text-[60px] font-semibold text-black leading-none">3.0K</div>
      <button className="w-full sm:w-[220px] h-12 sm:h-[56px] rounded-[12px] px-6 sm:px-8 bg-[#BE968E] text-white border-none cursor-pointer flex items-center justify-center gap-2 mx-auto hover:bg-[#A8856B] transition-colors">
        <span className="text-sm sm:text-base">Add Comment</span>
        <svg className="w-3 h-3 sm:w-4 sm:h-4" fill="currentColor" viewBox="0 0 20 20">
          <path d="M6 10a2 2 0 11-4 0 2 2 0 014 0zM12 10a2 2 0 11-4 0 2 2 0 014 0zM16 12a2 2 0 100-4 2 2 0 000 4z" />
        </svg>
      </button>
    </div>
  );
}