import { AiOutlineHeart, AiOutlineShoppingCart } from 'react-icons/ai';

interface ProductInfoProps {
  basePrice: number;
  originalPrice: number;
  discount: string;
  selectedType: string;
  selectedSize: string;
  onTypeChange: (type: string) => void;
  onSizeChange: (size: string) => void;
  onWishlistClick: () => void;
  onCartClick: () => void;
}

export default function ProductInfo({
  basePrice,
  originalPrice,
  discount,
  selectedType,
  selectedSize,
  onTypeChange,
  onSizeChange,
  onWishlistClick,
  onCartClick
}: ProductInfoProps) {
  return (
    <div>
      <div className="flex items-center justify-between mb-5">
        <div className="inline-block border-[0.8px] border-gray-300 rounded-[32px] px-6 py-2">
          <span className="text-sm font-medium" style={{color: '#BE968E'}}>T-shirt</span>
        </div>
        <div className="flex gap-2">
          <button 
            onClick={onWishlistClick}
            className="w-10 h-10 rounded-full border-2 bg-transparent flex items-center justify-center hover:bg-gray-50 transition-colors" 
            style={{borderColor: '#BE968E'}}
          >
            <AiOutlineHeart className="w-5 h-5" style={{color: '#BE968E'}} />
          </button>
          <button 
            onClick={onCartClick}
            className="w-10 h-10 rounded-full border-2 bg-transparent flex items-center justify-center hover:bg-gray-50 transition-colors" 
            style={{borderColor: '#BE968E'}}
          >
            <AiOutlineShoppingCart className="w-5 h-5" style={{color: '#BE968E'}} />
          </button>
        </div>
      </div>
      
      <h1 className="text-2xl font-semibold text-gray-900 leading-tight mb-4">
        J.VER Man Shirts Solid Long Sleeve Stretch Wrinkle-Free With Blue
      </h1>
      
      <div className="flex items-center gap-3 mb-2">
        <p className="text-3xl font-bold text-gray-900">${basePrice.toFixed(2)}</p>
        <p className="text-xl text-gray-500 line-through">${originalPrice.toFixed(2)}</p>
        <div className="bg-red-100 text-red-600 px-2 py-1 rounded-md text-sm font-medium">
          {discount}% OFF
        </div>
      </div>
      
      <p className="text-sm text-gray-600 mb-2">Price per piece • Exclusive of taxes</p>
      <p className="text-gray-700 leading-relaxed">
        Lorem ipsum dolor sit, consectetuer adipiscing elit, sed diam nonummy Lorem ipsum dolor sit amet, diam nonummy
      </p>
      
      <hr className="border-gray-300 mt-6" />
      
      <div className="space-y-4 mt-6">
        <div className="relative w-[299px] h-[45px]">
          <span className="absolute -top-2 left-3 bg-white px-2 text-xs font-medium text-gray-600">Type</span>
          <select 
            value={selectedType} 
            onChange={(e) => onTypeChange(e.target.value)}
            className="w-full h-full bg-white border border-gray-300 rounded-[10px] shadow-sm px-4 text-sm font-semibold text-gray-800 appearance-none cursor-pointer focus:border-[#BE968E] focus:ring-1 focus:ring-[#BE968E] transition-colors"
          >
            <option value="cotton">Cotton ($300.00)</option>
            <option value="polyester">Polyester ($280.00)</option>
            <option value="cotton-blend">Cotton Blend ($290.00)</option>
            <option value="linen">Linen ($320.00)</option>
            <option value="silk">Silk ($450.00)</option>
          </select>
          <svg className="absolute right-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-600 pointer-events-none" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </div>
        
        <div className="relative w-[299px] h-[45px]">
          <span className="absolute -top-2 left-3 bg-white px-2 text-xs font-medium text-gray-600">Size</span>
          <select 
            value={selectedSize} 
            onChange={(e) => onSizeChange(e.target.value)}
            className="w-full h-full bg-white border border-gray-300 rounded-[10px] shadow-sm px-4 text-sm font-semibold text-gray-800 appearance-none cursor-pointer focus:border-[#BE968E] focus:ring-1 focus:ring-[#BE968E] transition-colors"
          >
            <option value="xs">XS</option>
            <option value="s">S</option>
            <option value="m">M</option>
            <option value="l">L</option>
            <option value="xl">XL</option>
            <option value="2xl">2XL</option>
            <option value="3xl">3XL</option>
          </select>
          <svg className="absolute right-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-600 pointer-events-none" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </div>
      </div>
    </div>
  );
}