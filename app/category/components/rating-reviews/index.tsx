'use client';
import RatingDisplay from './components/RatingDisplay';
import RatingStatistics from './components/RatingStatistics';
import TotalReviews from './components/TotalReviews';
import ReviewsList from './components/ReviewsList';
import { ratings, allReviews } from './data';

export default function RatingReviews() {
  return (
    <div className="bg-white p-4 sm:p-6">
      <div className="mb-4 sm:mb-6" style={{ width: '165px', height: '42px' }}>
        <h3 className="text-base sm:text-[19px] font-semibold text-black relative" style={{ gap: '2px' }}>
          Rating & Reviews
          <div className="absolute bottom-0 left-0 w-6 sm:w-8 h-1 translate-y-1" style={{ backgroundColor: '#BE968E' }}></div>
        </h3>
      </div>
      
      <div className="flex flex-col lg:flex-row gap-6 lg:gap-8 xl:gap-35">
        <RatingDisplay />
        <RatingStatistics ratings={ratings} />
        <TotalReviews />
      </div>
      
      <ReviewsList reviews={allReviews} />
    </div>
  );
}