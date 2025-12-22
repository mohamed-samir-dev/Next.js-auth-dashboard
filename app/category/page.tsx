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
  const [selectedImage, setSelectedImage] = useState(
    "/481bdbb752097f2110b43983b0269f31d9258d1b(1).png"
  );
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
            <div className="flex items-center h-18 py-3">
              <div className="flex items-center space-x-4">
                <Skeleton height={40} width={120} />
                <div className="flex space-x-6">
                  <Skeleton height={20} width={60} />
                  <Skeleton height={20} width={80} />
                  <Skeleton height={20} width={70} />
                </div>
              </div>
              <div className="flex items-center space-x-4 ml-auto">
                <Skeleton circle height={32} width={32} />
                <Skeleton circle height={32} width={32} />
                <Skeleton height={32} width={80} />
                <Skeleton circle height={32} width={32} />
              </div>
            </div>
          </div>
        </div>

        {/* Product Header Skeleton */}
        <div className="bg-gray-50 py-4">
          <div className="max-w-7xl mx-auto px-4">
            <Skeleton height={32} width={200} />
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8">
          {/* Breadcrumb Skeleton */}
          <div className="flex space-x-2 mb-8">
            <Skeleton height={16} width={60} />
            <Skeleton height={16} width={20} />
            <Skeleton height={16} width={80} />
          </div>

          <div className="grid lg:grid-cols-2 gap-8 items-start">
            {/* Image Gallery Skeleton */}
            <div className="space-y-4">
              <Skeleton height={400} />
              <div className="flex space-x-2">
                {[...Array(4)].map((_, i) => (
                  <Skeleton key={i} height={80} width={80} />
                ))}
              </div>
            </div>

            {/* Product Info Skeleton */}
            <div className="space-y-6">
              <Skeleton height={32} width={300} />
              <div className="flex space-x-4">
                <Skeleton height={24} width={80} />
                <Skeleton height={24} width={60} />
              </div>
              <Skeleton height={60} count={3} />
              <div className="flex space-x-2">
                {[...Array(5)].map((_, i) => (
                  <Skeleton key={i} circle height={32} width={32} />
                ))}
              </div>
              <Skeleton height={48} />
            </div>
          </div>

          {/* Reviews Skeleton */}
          <div className="mt-12 space-y-4">
            <Skeleton height={28} width={200} />
            {[...Array(3)].map((_, i) => (
              <div key={i} className="border rounded-lg p-4 space-y-2">
                <div className="flex items-center space-x-2">
                  <Skeleton circle height={32} width={32} />
                  <Skeleton height={16} width={120} />
                </div>
                <Skeleton height={16} count={2} />
              </div>
            ))}
          </div>
        </div>

        {/* Product Grid Skeleton */}
        <div className="max-w-7xl mx-auto px-4 py-12">
          <Skeleton height={32} width={200} className="mb-8" />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[...Array(8)].map((_, i) => (
              <div key={i} className="space-y-2">
                <Skeleton height={200} />
                <Skeleton height={16} width={150} />
                <Skeleton height={20} width={80} />
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

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8">
        <Breadcrumb />
        <div className="grid lg:grid-cols-2 items-start pt-8">
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

          <div className="space-y-8">
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

        <div className="mt-12">
          <RatingReviews />
        </div>
      </div>
      
      <ProductGrid products={products} />
    </div>
  );
}
