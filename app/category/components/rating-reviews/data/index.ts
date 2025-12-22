import { Rating, Review } from '../types';

export const ratings: Rating[] = [
  { stars: 5, percentage: 67 },
  { stars: 4, percentage: 15 },
  { stars: 3, percentage: 6 },
  { stars: 2, percentage: 3 },
  { stars: 1, percentage: 9 }
];

export const allReviews: Review[] = [
  { name: "Alex Daewn", time: "4 months ago", rating: 5 },
  { name: "Sarah Johnson", time: "3 months ago", rating: 4 },
  { name: "Mike Chen", time: "2 months ago", rating: 3 },
  { name: "Emma Wilson", time: "1 month ago", rating: 5 },
  { name: "David Brown", time: "3 weeks ago", rating: 2 },
  { name: "Lisa Garcia", time: "2 weeks ago", rating: 4 },
  { name: "Tom Anderson", time: "1 week ago", rating: 5 },
  { name: "Anna Martinez", time: "5 days ago", rating: 3 }
];