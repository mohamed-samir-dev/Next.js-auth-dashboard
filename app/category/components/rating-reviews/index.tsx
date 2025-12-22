'use client';
import RatingDisplay from './components/RatingDisplay';
import RatingStatistics from './components/RatingStatistics';
import TotalReviews from './components/TotalReviews';
import ReviewsList from './components/ReviewsList';
import { ratings, allReviews } from './data';

export default function RatingReviews() {
  return (
    <div className="bg-white p-6">
      <div className="mb-6" style={{ width: '165px', height: '42px' }}>
        <h3 className="text-[19px] font-semibold text-black relative" style={{ gap: '2px' }}>
          Rating & Reviews
          <div className="absolute bottom-0 left-0 w-8 h-1 translate-y-1" style={{ backgroundColor: '#BE968E' }}></div>
        </h3>
      </div>
      
      <div className="flex gap-35">
        <RatingDisplay />
        <RatingStatistics ratings={ratings} />
        <TotalReviews />
      </div>
      
      <ReviewsList reviews={allReviews} />
    </div>
  );
}