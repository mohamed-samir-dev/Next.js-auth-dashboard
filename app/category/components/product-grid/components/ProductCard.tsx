import { Product } from "../types";
import { AiOutlineHeart, AiOutlineShoppingCart } from "react-icons/ai";
import StarIcon from '../../rating-reviews/components/StarIcon';
import Image from 'next/image';

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  return (
    <div className="bg-white rounded-lg overflow-hidden  flex flex-col">
      <div className="bg-gray-50 p-4 border border-gray-200 rounded-lg">
        <div className="relative">
          {product.discount && (
            <div className="absolute bg-white text-[#BE968E] text-xs font-medium border" style={{
              width: '74px',
              height: '30px',
              top: '10px',
              left: '1px',
              borderRadius: '8px',
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
            className="w-full h-80 object-contain rounded-md"
          />
          <div className="absolute top-2 right-2 flex gap-2">
            <button className="w-8 h-8 bg-white rounded-full flex items-center justify-center  hover:bg-gray-50  shadow-sm">
              <AiOutlineHeart className="w-5 h-5" style={{ color: "#BE968E" }} />
            </button>
            <button className="w-8 h-8 bg-white rounded-full flex items-center justify-center cursor-pointer hover:bg-gray-50 transition-colors shadow-sm">
              <AiOutlineShoppingCart
                className="w-5 h-5"
                style={{ color: "#BE968E" }}
              />
            </button>
          </div>
        </div>
      </div>

      <div className="p-4 flex flex-col grow ">

      <div className="flex items-center justify-between mb-2 ">
        <span className="text-xs text-gray-500 uppercase tracking-wide">
          Dresses
        </span>
        <div className="flex items-center gap-1">
          <span className="text-sm text-gray-600">4.5</span>
          <StarIcon className="w-5 h-5" />
          <span className="text-sm text-gray-600">(1920)</span>
        </div>
      </div>

      <h3 className="text-sm font-medium text-gray-900 mb-2 line-clamp-2 grow">
        {product.name}
      </h3>

      <div className="flex items-center justify-between mb-3">
        <div className="flex items-center gap-2">
          <span className="text-lg font-bold text-gray-900">
            AED {product.price}
          </span>
          {product.originalPrice && (
            <span className="text-sm text-gray-500 line-through">
              AED {product.originalPrice}
            </span>
          )}
        </div>
        <div className="flex gap-2">
          {product.colors.map((color, index) => (
            <div
              key={index}
              className={`w-6 h-6 rounded-full border-2 border-white ${
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
