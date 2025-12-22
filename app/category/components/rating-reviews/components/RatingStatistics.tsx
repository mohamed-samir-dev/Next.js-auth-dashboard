import { Rating } from '../types';
import StarIcon from './StarIcon';

interface RatingStatisticsProps {
  ratings: Rating[];
}

export default function RatingStatistics({ ratings }: RatingStatisticsProps) {
  return (
    <div className="space-y-2" style={{ width: '484px', height: '182px', gap: '8px' }}>
      {ratings.map((rating) => (
        <div key={rating.stars} className="flex items-center ">
          <div className="flex items-center gap-1 w-14">
            <StarIcon />
            <span className="text-base font-medium text-black">{rating.stars}</span>
          </div>
          <div className="flex-1 bg-gray-200 rounded-full h-2 relative">
            <div 
              className={`h-2 rounded-full ${rating.stars === 1 ? 'border border-blue-500' : ''}`}
              style={{ width: `${rating.percentage}%`, backgroundColor: '#BE968E' }}
            />
          </div>
          <span className="text-sm text-gray-600 w-8 ml-5">{rating.percentage}%</span>
        </div>
      ))}
    </div>
  );
}