import { Rating } from '../types';
import StarIcon from './StarIcon';

interface RatingStatisticsProps {
  ratings: Rating[];
}

export default function RatingStatistics({ ratings }: RatingStatisticsProps) {
  return (
    <div className="space-y-2 w-full lg:w-[484px] h-auto lg:h-[182px] flex-grow">
      {ratings.map((rating) => (
        <div key={rating.stars} className="flex items-center gap-2 sm:gap-3">
          <div className="flex items-center gap-1 w-10 sm:w-14 flex-shrink-0">
            <StarIcon className="w-3 h-3 sm:w-4 sm:h-4" />
            <span className="text-sm sm:text-base font-medium text-black">{rating.stars}</span>
          </div>
          <div className="flex-1 bg-gray-200 rounded-full h-1.5 sm:h-2 relative min-w-0">
            <div 
              className={`h-1.5 sm:h-2 rounded-full ${rating.stars === 1 ? 'border border-blue-500' : ''}`}
              style={{ width: `${rating.percentage}%`, backgroundColor: '#BE968E' }}
            />
          </div>
          <span className="text-xs sm:text-sm text-gray-600 w-6 sm:w-8 ml-2 sm:ml-5 flex-shrink-0">{rating.percentage}%</span>
        </div>
      ))}
    </div>
  );
}