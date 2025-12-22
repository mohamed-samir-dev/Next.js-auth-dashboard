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
    <div className="max-w-7xl mx-auto px-3 xs:px-4 sm:px-6 lg:px-8 py-4 xs:py-6 sm:py-8">
      <div className="mb-3 xs:mb-4 sm:mb-6">
        <h2 className="text-lg xs:text-xl sm:text-[25px] font-semibold text-black relative">
          Similar Items
          <div className="absolute bottom-0 left-0 w-6 xs:w-8 h-0.5 xs:h-1 translate-y-1" style={{ backgroundColor: '#BE968E' }}></div>
        </h2>
      </div>
      
      <div className="relative mb-8 xs:mb-12 sm:mb-16 lg:mb-20">
        <Swiper
          onSwiper={setSwiperRef}
          modules={[Navigation]}
          spaceBetween={6}
          slidesPerView={1.1}
          className="h-auto"
          breakpoints={{
            375: {
              slidesPerView: 1.2,
              spaceBetween: 8,
            },
            480: {
              slidesPerView: 1.5,
              spaceBetween: 10,
            },
            640: {
              slidesPerView: 2.2,
              spaceBetween: 12,
            },
            768: {
              slidesPerView: 2.5,
              spaceBetween: 14,
            },
            1024: {
              slidesPerView: 3.2,
              spaceBetween: 16,
            },
            1280: {
              slidesPerView: 4,
              spaceBetween: 18,
            },
          }}
        >
          {products.map((product) => (
            <SwiperSlide key={product.id}>
              <div className="h-full w-full">
                <ProductCard product={product} />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      <div className="flex justify-center items-center mx-auto gap-2 xs:gap-3">
        <button
          onClick={() => swiperRef?.slidePrev()}
          className="w-8 h-8 xs:w-10 xs:h-10 sm:w-12 sm:h-12 bg-gray-50 border border-gray-300 rounded-full flex items-center justify-center cursor-pointer shadow-sm hover:bg-gray-100 transition-colors"
        >
          <AiOutlineLeft className="w-3 h-3 xs:w-4 xs:h-4 sm:w-5 sm:h-5 text-black" />
        </button>
        
        <button
          onClick={() => swiperRef?.slideNext()}
          className="w-8 h-8 xs:w-10 xs:h-10 sm:w-12 sm:h-12 border border-gray-300 rounded-full flex items-center justify-center bg-[#BE968E] cursor-pointer shadow-sm hover:bg-[#A8857A] transition-colors"
        >
          <AiOutlineRight className="w-3 h-3 xs:w-4 xs:h-4 sm:w-5 sm:h-5 text-white" />
        </button>
      </div>
    </div>
  );
}