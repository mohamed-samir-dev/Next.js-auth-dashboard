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
      <div className="mb-4 flex items-center gap-2">
        <p className="text-sm font-semibold text-black">Quantity</p>
        <p className="text-sm text-gray-600">(${basePrice.toFixed(2)} per piece)</p>
      </div>
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center gap-8">
          <div className="flex items-center border-2 border-gray-300 rounded-lg">
            <button 
              onClick={() => onQuantityChange(Math.max(1, quantity - 1))}
              className="w-12 h-12 flex items-center justify-center hover:bg-gray-50 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
              disabled={quantity <= 1}
            >
              <span className="text-xl font-medium text-gray-600">−</span>
            </button>
            <div className="w-16 h-12 flex items-center justify-center border-x-2 border-gray-300 bg-gray-50">
              <span className="text-lg font-bold text-gray-900">{quantity.toString().padStart(2, '0')}</span>
            </div>
            <button 
              onClick={() => onQuantityChange(quantity + 1)}
              className="w-12 h-12 flex items-center justify-center hover:bg-gray-50 transition-colors"
            >
              <span className="text-xl font-medium text-gray-600">+</span>
            </button>
          </div>
          <div className="text-right">
            <p className="text-lg font-bold text-gray-900">${totalPrice.toFixed(2)}</p>
          </div>
        </div>
        <button 
          onClick={onAddToCart}
          className="w-[234px] h-[56px] bg-[#BE968E] hover:bg-[#A8856B] text-white cursor-pointer font-medium rounded-[12px] flex items-center justify-center gap-2 transition-all duration-300 hover: active:scale-95 shadow-lg hover:shadow-xl"
        >
          <span>Add To Cart</span>
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
          </svg>
        </button>
      </div>
    </div>
  );
}