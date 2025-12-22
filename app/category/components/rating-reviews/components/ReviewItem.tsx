import { Review } from '../types';
import StarIcon from './StarIcon';

interface ReviewItemProps {
  review: Review;
}

export default function ReviewItem({ review }: ReviewItemProps) {
  return (
    <div className="border-b border-gray-100 pb-4 sm:pb-6 last:border-b-0">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between w-full mb-3 gap-2 sm:gap-0">
        <div className="flex items-center gap-2 sm:gap-3">
          <span className="font-medium text-black text-sm sm:text-base">{review.name}</span>
          <div className="flex gap-1">
            {[...Array(5)].map((_, i) => (
              <StarIcon 
                key={i} 
                className="w-3 h-3 sm:w-4 sm:h-4" 
                filled={i < review.rating}
              />
            ))}
          </div>
        </div>
        <span className="text-xs sm:text-sm text-gray-500">{review.time}</span>
      </div>
      <p className="text-black leading-relaxed text-sm sm:text-base">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
      </p>
    </div>
  );
}