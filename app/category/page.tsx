"use client";
import Navigation from "../components/navigation/Navigation";
import { useState } from "react";
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

export default function CategoryPage() {
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
    </div>
  );
}
