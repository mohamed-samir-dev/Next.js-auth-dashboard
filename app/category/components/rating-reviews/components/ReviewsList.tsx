'use client';
import { useState } from 'react';
import { Review } from '../types';
import ReviewItem from './ReviewItem';

interface ReviewsListProps {
  reviews: Review[];
}

export default function ReviewsList({ reviews }: ReviewsListProps) {
  const [visibleComments, setVisibleComments] = useState(4);

  const loadMoreComments = () => {
    setVisibleComments(prev => Math.min(prev + 4, reviews.length));
  };

  const showLessComments = () => {
    setVisibleComments(4);
  };

  return (
    <div className="mt-8 sm:mt-12 space-y-4 sm:space-y-6">
      {reviews.slice(0, visibleComments).map((review, index) => (
        <ReviewItem key={index} review={review} />
      ))}
      
      <div className="flex flex-col sm:flex-row justify-center mt-6 sm:mt-8 gap-3 sm:gap-4">
        {visibleComments < reviews.length && (
          <button 
            onClick={loadMoreComments}
            className="w-full sm:w-[207px] h-12 sm:h-[53px] rounded-[12px] px-4 bg-[#ECECEC66] text-[#BE968E] border-none cursor-pointer flex items-center justify-center hover:bg-gray-200 transition-colors"
          >
            <span className="text-sm sm:text-base">View More Comments</span>
          </button>
        )}
        {visibleComments > 4 && (
          <button 
            onClick={showLessComments}
            className="w-full sm:w-[207px] h-12 sm:h-[53px] rounded-[12px] px-4 bg-[#ECECEC66] text-[#BE968E] border-none cursor-pointer flex items-center justify-center hover:bg-gray-200 transition-colors"
          >
            <span className="text-sm sm:text-base">Show Less</span>
          </button>
        )}
      </div>
    </div>
  );
}