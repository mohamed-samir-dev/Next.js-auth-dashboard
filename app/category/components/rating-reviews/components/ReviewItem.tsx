import { Review } from '../types';
import StarIcon from './StarIcon';

interface ReviewItemProps {
  review: Review;
}

export default function ReviewItem({ review }: ReviewItemProps) {
  return (
    <div className="border-b border-gray-100 pb-6 last:border-b-0">
      <div className="flex items-center justify-between w-full h-7 mb-3">
        <div className="flex items-center gap-3">
          <span className="font-medium text-black">{review.name}</span>
          <div className="flex gap-1">
            {[...Array(5)].map((_, i) => (
              <StarIcon key={i} className="w-4 h-4" />
            ))}
          </div>
        </div>
        <span className="text-sm text-gray-500">{review.time}</span>
      </div>
      <p className="text-black leading-relaxed">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
      </p>
    </div>
  );
}