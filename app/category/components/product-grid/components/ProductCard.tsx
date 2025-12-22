import { Product } from "../types";
import { AiOutlineHeart, AiOutlineShoppingCart } from "react-icons/ai";
import StarIcon from '../../rating-reviews/components/StarIcon';
import Image from 'next/image';

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  return (
    <div className="bg-white rounded-lg overflow-hidden flex flex-col h-full min-h-[280px] xs:min-h-[320px] sm:min-h-[360px]">
      <div className="bg-gray-50 p-2 xs:p-3 sm:p-4 border border-gray-200 rounded-lg">
        <div className="relative">
          {product.discount && (
            <div className="absolute bg-white text-[#BE968E] text-[10px] xs:text-xs font-medium border z-10" style={{
              width: '48px',
              height: '20px',
              top: '6px',
              left: '1px',
              borderRadius: '4px',
              border: '1px solid',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center'
            }}>
              {product.discount}% OFF
            </div>
          )}
          <Image
            src={product.image}
            alt={product.name}
            width={300}
            height={256}
            className="w-full h-32 xs:h-40 sm:h-48 md:h-56 lg:h-64 object-contain rounded-md"
          />
          <div className="absolute top-1 xs:top-2 right-1 xs:right-2 flex gap-1">
            <button className="w-6 h-6 xs:w-7 xs:h-7 sm:w-8 sm:h-8 bg-white rounded-full flex items-center justify-center hover:bg-gray-50 shadow-sm">
              <AiOutlineHeart className="w-3 h-3 xs:w-4 xs:h-4 sm:w-5 sm:h-5" style={{ color: "#BE968E" }} />
            </button>
            <button className="w-6 h-6 xs:w-7 xs:h-7 sm:w-8 sm:h-8 bg-white rounded-full flex items-center justify-center cursor-pointer hover:bg-gray-50 transition-colors shadow-sm">
              <AiOutlineShoppingCart
                className="w-3 h-3 xs:w-4 xs:h-4 sm:w-5 sm:h-5"
                style={{ color: "#BE968E" }}
              />
            </button>
          </div>
        </div>
      </div>

      <div className="p-2 xs:p-3 sm:p-4 flex flex-col grow">
        <div className="flex items-center justify-between mb-1 xs:mb-2">
          <span className="text-[10px] xs:text-xs text-gray-500 uppercase tracking-wide">
            Dresses
          </span>
          <div className="flex items-center gap-0.5 xs:gap-1">
            <span className="text-[10px] xs:text-xs sm:text-sm text-gray-600">4.5</span>
            <StarIcon className="w-3 h-3 xs:w-4 xs:h-4 sm:w-5 sm:h-5" />
            <span className="text-[10px] xs:text-xs sm:text-sm text-gray-600">(1920)</span>
          </div>
        </div>

        <h3 className="text-[11px] xs:text-xs sm:text-sm font-medium text-gray-900 mb-1 xs:mb-2 line-clamp-2 grow leading-tight">
          {product.name}
        </h3>

        <div className="flex items-center justify-between mb-2 xs:mb-3">
          <div className="flex items-center gap-1 xs:gap-2">
            <span className="text-sm xs:text-base sm:text-lg font-bold text-gray-900">
              AED {product.price}
            </span>
            {product.originalPrice && (
              <span className="text-[10px] xs:text-xs sm:text-sm text-gray-500 line-through">
                AED {product.originalPrice}
              </span>
            )}
          </div>
          <div className="flex gap-0.5 xs:gap-1 sm:gap-2">
            {product.colors.map((color, index) => (
              <div
                key={index}
                className={`w-3 h-3 xs:w-4 xs:h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 rounded-full border border-white ${
                  color === "black"
                    ? "bg-black"
                    : color === "Rose"
                    ? "bg-[#BE968E]"
                    : color === "navy"
                    ? "bg-[#ECECEC66]"
                    : color === "brown"
                    ? "bg-amber-800"
                    : color === "gray"
                    ? "bg-gray-500"
                    : color === "cream"
                    ? "bg-yellow-100"
                    : color === "light-blue"
                    ? "bg-blue-200"
                    : color === "tan"
                    ? "bg-yellow-600"
                    : color === "orange"
                    ? "bg-orange-500"
                    : "bg-gray-300"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
