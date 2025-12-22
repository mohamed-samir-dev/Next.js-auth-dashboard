"use client";
import Navigation from "../components/navigation/Navigation";
import { useState, useEffect } from "react";
import Skeleton from 'react-loading-skeleton';
import {
  typePrices,
  colors,
  thumbnails,
} from "./components/product-details/constants/constants";
import ProductHeader from "./components/product-details/components/ProductHeader";
import ImageGallery from "./components/product-details/components/ImageGallery";
import ProductInfo from "./components/product-details/components/ProductInfo";
import ColorSelector from "./components/product-details/components/ColorSelector";
import QuantitySelector from "./components/product-details/components/QuantitySelector";
import Breadcrumb from "./components/product-details/components/Breadcrumb";
import RatingReviews from "./components/rating-reviews/RatingReviews";
import { ProductGrid, products } from "./components/product-grid";

export default function CategoryPage() {
  const [loading, setLoading] = useState(true);
  const [quantity, setQuantity] = useState(1);
  const [cartCount, setCartCount] = useState(0);
  const [wishlistCount, setWishlistCount] = useState(0);
  const [selectedColor, setSelectedColor] = useState("blue");
  const [selectedImage, setSelectedImage] = useState(thumbnails[0].src);
  const [carouselStartIndex, setCarouselStartIndex] = useState(0);
  const [selectedType, setSelectedType] = useState("cotton");
  const [selectedSize, setSelectedSize] = useState("2xl");

  useEffect(() => {
    setTimeout(() => setLoading(false), 1200);
  }, []);

  const basePrice = typePrices[selectedType];
  const originalPrice = basePrice * 1.2;
  const discount = (
    ((originalPrice - basePrice) / originalPrice) *
    100
  ).toFixed(0);
  const totalPrice = quantity * basePrice;
  const savings = quantity * (originalPrice - basePrice);

  const handlePrevious = () => {
    const currentIndex = thumbnails.findIndex(
      (thumb) => thumb.src === selectedImage
    );
    const prevIndex =
      currentIndex === 0 ? thumbnails.length - 1 : currentIndex - 1;
    setSelectedImage(thumbnails[prevIndex].src);
    setSelectedColor(thumbnails[prevIndex].color);
    if (prevIndex < carouselStartIndex || prevIndex >= carouselStartIndex + 3) {
      setCarouselStartIndex(
        prevIndex < carouselStartIndex ? prevIndex : Math.max(0, prevIndex - 2)
      );
    }
  };

  const handleNext = () => {
    const currentIndex = thumbnails.findIndex(
      (thumb) => thumb.src === selectedImage
    );
    const nextIndex = (currentIndex + 1) % thumbnails.length;
    setSelectedImage(thumbnails[nextIndex].src);
    setSelectedColor(thumbnails[nextIndex].color);
    if (nextIndex < carouselStartIndex || nextIndex >= carouselStartIndex + 3) {
      setCarouselStartIndex(
        nextIndex < carouselStartIndex
          ? nextIndex
          : Math.min(thumbnails.length - 3, nextIndex - 2)
      );
    }
  };

  const handleColorSelect = (colorName: string) => {
    setSelectedColor(colorName);
    const thumb = thumbnails.find((t) => t.color === colorName);
    if (thumb) {
      setSelectedImage(thumb.src);
      const thumbIndex = thumbnails.findIndex((t) => t.color === colorName);
      if (
        thumbIndex < carouselStartIndex ||
        thumbIndex >= carouselStartIndex + 3
      ) {
        setCarouselStartIndex(
          Math.max(0, Math.min(thumbnails.length - 3, thumbIndex - 1))
        );
      }
    }
  };

  const handleAddToCart = () => {
    setCartCount(cartCount + quantity);
    const button = document.activeElement as HTMLButtonElement;
    if (button) {
      const originalText = button.innerHTML;
      button.innerHTML = "<span>Added!</span>";
      button.classList.add("bg-green-600");
      setTimeout(() => {
        button.innerHTML = originalText;
        button.classList.remove("bg-green-600");
      }, 1500);
    }
  };

  if (loading) {
    return (
      <div className="bg-white min-h-screen">
        {/* Navigation Skeleton */}
        <div className="bg-white shadow-md border-b border-gray-150">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col sm:flex-row items-start sm:items-center h-auto sm:h-18 py-3 gap-3 sm:gap-0">
              <div className="flex items-center space-x-4 w-full sm:w-auto">
                <Skeleton height={32} width={100} className="sm:h-[40px] sm:w-[120px]" />
                <div className="hidden sm:flex space-x-6">
                  <Skeleton height={18} width={50} className="sm:h-[20px] sm:w-[60px]" />
                  <Skeleton height={18} width={70} className="sm:h-[20px] sm:w-[80px]" />
                  <Skeleton height={18} width={60} className="sm:h-[20px] sm:w-[70px]" />
                </div>
              </div>
              <div className="flex items-center space-x-3 sm:space-x-4 ml-auto">
                <Skeleton circle height={28} width={28} className="sm:h-[32px] sm:w-[32px]" />
                <Skeleton circle height={28} width={28} className="sm:h-[32px] sm:w-[32px]" />
                <Skeleton height={28} width={70} className="sm:h-[32px] sm:w-[80px]" />
                <Skeleton circle height={28} width={28} className="sm:h-[32px] sm:w-[32px]" />
              </div>
            </div>
          </div>
        </div>

        {/* Product Header Skeleton */}
        <div className="bg-gray-50 py-3 sm:py-4">
          <div className="max-w-7xl mx-auto px-4">
            <Skeleton height={28} width={180} className="sm:h-[32px] sm:w-[200px]" />
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-4 sm:pt-8">
          {/* Breadcrumb Skeleton */}
          <div className="flex space-x-2 mb-6 sm:mb-8">
            <Skeleton height={16} width={60} />
            <Skeleton height={16} width={20} />
            <Skeleton height={16} width={80} />
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8 items-start">
            {/* Image Gallery Skeleton */}
            <div className="space-y-3 sm:space-y-4">
              <Skeleton height={300} className="sm:h-[400px] md:h-[500px] lg:h-[565px]" />
              <div className="flex space-x-2">
                {[...Array(4)].map((_, i) => (
                  <Skeleton key={i} height={60} width={60} className="sm:h-[80px] sm:w-[80px]" />
                ))}
              </div>
            </div>

            {/* Product Info Skeleton */}
            <div className="space-y-4 sm:space-y-6 lg:pl-8">
              <Skeleton height={28} width={250} className="sm:h-[32px] sm:w-[300px]" />
              <div className="flex space-x-3 sm:space-x-4">
                <Skeleton height={20} width={70} className="sm:h-[24px] sm:w-[80px]" />
                <Skeleton height={20} width={50} className="sm:h-[24px] sm:w-[60px]" />
              </div>
              <Skeleton height={50} count={3} className="sm:h-[60px]" />
              <div className="flex space-x-2">
                {[...Array(5)].map((_, i) => (
                  <Skeleton key={i} circle height={28} width={28} className="sm:h-[32px] sm:w-[32px]" />
                ))}
              </div>
              <Skeleton height={40} className="sm:h-[48px]" />
            </div>
          </div>

          {/* Reviews Skeleton */}
          <div className="mt-8 lg:mt-12 space-y-4">
            <Skeleton height={24} width={180} className="sm:h-[28px] sm:w-[200px]" />
            {[...Array(3)].map((_, i) => (
              <div key={i} className="border rounded-lg p-3 sm:p-4 space-y-2">
                <div className="flex items-center space-x-2">
                  <Skeleton circle height={28} width={28} className="sm:h-[32px] sm:w-[32px]" />
                  <Skeleton height={14} width={100} className="sm:h-[16px] sm:w-[120px]" />
                </div>
                <Skeleton height={14} count={2} className="sm:h-[16px]" />
              </div>
            ))}
          </div>
        </div>

        {/* Product Grid Skeleton */}
        <div className="max-w-7xl mx-auto px-4 py-8 sm:py-12">
          <Skeleton height={28} width={180} className="mb-6 sm:mb-8 sm:h-[32px] sm:w-[200px]" />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {[...Array(8)].map((_, i) => (
              <div key={i} className="space-y-2">
                <Skeleton height={180} className="sm:h-[200px]" />
                <Skeleton height={14} width={130} className="sm:h-[16px] sm:w-[150px]" />
                <Skeleton height={18} width={70} className="sm:h-[20px] sm:w-[80px]" />
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-white min-h-screen">
      <Navigation cartCount={cartCount} wishlistCount={wishlistCount} />
      <ProductHeader />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-4 sm:pt-8">
        <Breadcrumb />
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8 items-start pt-4 sm:pt-8">
          <ImageGallery
            selectedImage={selectedImage}
            thumbnails={thumbnails}
            carouselStartIndex={carouselStartIndex}
            selectedColor={selectedColor}
            onPrevious={handlePrevious}
            onNext={handleNext}
            onThumbnailClick={(src, color) => {
              setSelectedImage(src);
              setSelectedColor(color);
            }}
          />

          <div className="space-y-6 lg:space-y-8 lg:pl-8">
            <ProductInfo
              basePrice={basePrice}
              originalPrice={originalPrice}
              discount={discount}
              selectedType={selectedType}
              selectedSize={selectedSize}
              onTypeChange={setSelectedType}
              onSizeChange={setSelectedSize}
              onWishlistClick={() => setWishlistCount(wishlistCount + 1)}
              onCartClick={() => setCartCount(cartCount + 1)}
            />

            <div className="space-y-6">
              <ColorSelector
                colors={colors}
                selectedColor={selectedColor}
                onColorSelect={handleColorSelect}
              />
              <QuantitySelector
                quantity={quantity}
                basePrice={basePrice}
                totalPrice={totalPrice}
                savings={savings}
                onQuantityChange={setQuantity}
                onAddToCart={handleAddToCart}
              />
            </div>
          </div>
        </div>

        <div className="mt-8 lg:mt-12">
          <RatingReviews />
        </div>
      </div>
      
      <ProductGrid products={products} />
    </div>
  );
}
