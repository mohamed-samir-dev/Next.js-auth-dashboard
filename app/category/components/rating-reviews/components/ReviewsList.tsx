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
    <div className="mt-12 space-y-6">
      {reviews.slice(0, visibleComments).map((review, index) => (
        <ReviewItem key={index} review={review} />
      ))}
      
      <div className="flex justify-center mt-8 gap-4">
        {visibleComments < reviews.length && (
          <button 
            onClick={loadMoreComments}
            className="text-[#BE968E]" 
            style={{ width: '207px', height: '53px', borderRadius: '12px', padding: '16px', gap: '8px', backgroundColor: '#ECECEC66', border: 'none', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center' }}
          >
            View More Comments
          </button>
        )}
        {visibleComments > 4 && (
          <button 
            onClick={showLessComments}
            className="text-[#BE968E]" 
            style={{ width: '207px', height: '53px', borderRadius: '12px', padding: '16px', gap: '8px', backgroundColor: '#ECECEC66', border: 'none', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center' }}
          >
            Show Less
          </button>
        )}
      </div>
    </div>
  );
}