import Image from "next/image";
import { Thumbnail } from "../types/types";

interface ImageGalleryProps {
  selectedImage: string;
  thumbnails: Thumbnail[];
  carouselStartIndex: number;
  selectedColor: string;
  onPrevious: () => void;
  onNext: () => void;
  onThumbnailClick: (src: string, color: string) => void;
}

export default function ImageGallery({
  selectedImage,
  thumbnails,
  carouselStartIndex,
  selectedColor,
  onPrevious,
  onNext,
  onThumbnailClick,
}: ImageGalleryProps) {
  return (
    <div className="space-y-4 sm:space-y-6">
      <div className="relative bg-gray-50 rounded-2xl overflow-hidden w-full max-w-[700px] mx-auto aspect-square sm:aspect-auto sm:h-[350px] md:h-[420px] lg:h-[480px] shadow-sm">
        <Image
          src={selectedImage}
          alt="Product"
          fill
          className="object-contain"
        />

        <div className="absolute top-4 left-0 right-0 flex gap-2 px-4 z-10">
          {thumbnails.map((_, index) => (
            <div
              key={index}
              className={`flex-1 h-1 rounded-full transition-all ${
                thumbnails[index].src === selectedImage
                  ? "bg-[#BE968E]"
                  : "bg-gray-300"
              }`}
            />
          ))}
        </div>

        <button
          onClick={onPrevious}
          className="absolute left-2 sm:left-4 top-1/2 transform -translate-y-1/2 w-10 h-10 sm:w-12 sm:h-12 bg-gray-100 rounded-full flex items-center justify-center hover:bg-gray-200 transition-colors z-10"
        >
          <svg
            className="w-5 h-5 sm:w-6 sm:h-6 text-gray-600"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M15 19l-7-7 7-7"
            />
          </svg>
        </button>

        <button
          onClick={onNext}
          className="absolute right-2 sm:right-4 top-1/2 transform -translate-y-1/2 w-10 h-10 sm:w-12 sm:h-12 bg-[#BE968E] rounded-full flex items-center justify-center hover:bg-[#A8856B] transition-colors z-10"
        >
          <svg
            className="w-5 h-5 sm:w-6 sm:h-6 text-white"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M9 5l7 7-7 7"
            />
          </svg>
        </button>
      </div>

      <div className="relative w-full max-w-[700px] mx-auto h-[100px] sm:h-[120px] md:h-[140px]">
        <div className="flex gap-2 sm:gap-4 h-full overflow-hidden">
          {thumbnails
            .slice(carouselStartIndex, carouselStartIndex + 3)
            .map((thumb, index) => {
              const actualIndex = carouselStartIndex + index;
              const isThird = index === 2;
              const hiddenCount = thumbnails.length - carouselStartIndex - 3;

              return (
                <button
                  key={`${thumb.color}-${actualIndex}`}
                  onClick={() => onThumbnailClick(thumb.src, thumb.color)}
                  className={`relative flex-1 h-full rounded-xl overflow-hidden transition-all duration-300 ${
                    selectedColor === thumb.color
                      ? "opacity-100"
                      : "opacity-50 hover:opacity-75 hover:scale-105"
                  }`}
                >
                  <Image
                    src={thumb.src}
                    alt={thumb.color}
                    fill
                    className={`object-contain ${
                      isThird && hiddenCount > 0 ? "opacity-30" : ""
                    }`}
                  />
                  {isThird && hiddenCount > 0 && (
                    <div className="absolute inset-0 flex items-center justify-center z-10">
                      <span className="text-black text-2xl font-bold">
                        +{hiddenCount}
                      </span>
                    </div>
                  )}
                </button>
              );
            })}
        </div>
      </div>
    </div>
  );
}
