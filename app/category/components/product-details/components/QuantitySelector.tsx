interface QuantitySelectorProps {
  quantity: number;
  basePrice: number;
  totalPrice: number;
  savings: number;
  onQuantityChange: (newQuantity: number) => void;
  onAddToCart: () => void;
}

export default function QuantitySelector({
  quantity,
  basePrice,
  totalPrice,
  onQuantityChange,
  onAddToCart
}: QuantitySelectorProps) {
  return (
    <div>
      <div className="mb-3 sm:mb-4 flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-2">
        <p className="text-sm font-semibold text-black">Quantity</p>
        <p className="text-xs sm:text-sm text-gray-600">(${basePrice.toFixed(2)} per piece)</p>
      </div>
      <div className="flex flex-col custom-lg:flex-row custom-lg:items-center gap-4 custom-lg:gap-8">
        <div className="flex items-center gap-4 sm:gap-8">
          <div className="flex items-center border-2 border-gray-300 rounded-lg">
            <button 
              onClick={() => onQuantityChange(Math.max(1, quantity - 1))}
              className="w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center hover:bg-gray-50 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
              disabled={quantity <= 1}
            >
              <span className="text-lg sm:text-xl font-medium text-gray-600">−</span>
            </button>
            <div className="w-12 h-10 sm:w-16 sm:h-12 flex items-center justify-center border-x-2 border-gray-300 bg-gray-50">
              <span className="text-base sm:text-lg font-bold text-gray-900">{quantity.toString().padStart(2, '0')}</span>
            </div>
            <button 
              onClick={() => onQuantityChange(quantity + 1)}
              className="w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center hover:bg-gray-50 transition-colors"
            >
              <span className="text-lg sm:text-xl font-medium text-gray-600">+</span>
            </button>
          </div>
          <div className="text-left sm:text-right">
            <p className="text-base sm:text-lg font-bold text-gray-900">${totalPrice.toFixed(2)}</p>
          </div>
        </div>
        <button 
          onClick={onAddToCart}
          className="w-full custom-lg:w-auto custom-lg:min-w-[200px] h-12 md:h-14 lg:h-16 bg-[#BE968E] hover:bg-[#A8856B] active:bg-[#9A7A5F] text-white font-medium rounded-xl flex items-center justify-center gap-2 md:gap-3 transition-all duration-300 hover:shadow-lg active:scale-95 text-sm md:text-base lg:text-lg px-4 md:px-6"
        >
          <span>Add To Cart</span>
          <svg className="w-4 h-4 md:w-5 md:h-5 lg:w-6 lg:h-6 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
          </svg>
        </button>
      </div>
    </div>
  );
}