'use client';
import { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import { ProductGridProps } from '../types';
import ProductCard from './ProductCard';
import { AiOutlineLeft, AiOutlineRight } from 'react-icons/ai';
import 'swiper/css';
import 'swiper/css/navigation';
import type { Swiper as SwiperType } from 'swiper';

export default function ProductGrid({ products }: ProductGridProps) {
  const [swiperRef, setSwiperRef] = useState<SwiperType>();

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="mb-6" style={{ width: '165px', height: '42px' }}>
        <h2 className="text-[25px] font-semibold text-black relative" style={{ gap: '2px' }}>
          Similar Items
          <div className="absolute bottom-0 left-0 w-8 h-1 translate-y-1" style={{ backgroundColor: '#BE968E' }}></div>
        </h2>
      </div>
      
      <div className="relative mb-20">
        <Swiper
          onSwiper={setSwiperRef}
          modules={[Navigation]}
          spaceBetween={8}
          slidesPerView={3.2}
          className="h-auto"
          breakpoints={{
            640: {
              slidesPerView: 2.2,
            },
            1024: {
              slidesPerView: 3.2,
            },
          }}
        >
          {products.map((product) => (
            <SwiperSlide key={product.id}>
              <div className="h-full w-90">
                <ProductCard product={product} />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      <div className="flex justify-center items-center mx-auto" style={{ width: '112px', height: '50px', gap: '12px' }}>
        <button
          onClick={() => swiperRef?.slidePrev()}
          className="w-12 h-12 bg-gray-50 border border-gray-300 rounded-full flex items-center justify-center cursor-pointer shadow-sm hover:bg-gray-100 transition-colors"
        >
          <AiOutlineLeft className="w-5 h-5 text-black" />
        </button>
        
        <button
          onClick={() => swiperRef?.slideNext()}
          className="w-12 h-12 border border-gray-300 rounded-full flex items-center justify-center bg-[#BE968E] cursor-pointer shadow-sm hover:bg-[#A8857A] transition-colors"
        >
          <AiOutlineRight className="w-5 h-5 text-white" />
        </button>
      </div>
    </div>
  );
}