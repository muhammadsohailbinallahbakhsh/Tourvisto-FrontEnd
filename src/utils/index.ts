import { UserRole } from '@/types';
import type { TripDetailsType } from '@/types';

export const isValidUserRole = (value: string): value is UserRole => {
  return Object.values(UserRole).includes(value as UserRole);
};

export function generateUsers(count: number) {
  const firstNames = [
    'James',
    'Michael',
    'David',
    'Jason',
    'Mark',
    'Kevin',
    'Brian',
    'Orlando',
    'Emma',
    'Sophia',
    'Liam',
    'Olivia',
    'Noah',
    'Ava',
    'William',
    'Isabella',
    'Benjamin',
    'Mia',
    'Ethan',
    'Charlotte',
    'Alexander',
    'Amelia',
    'Jacob',
    'Harper',
    'Daniel',
    'Evelyn',
    'Matthew',
    'Abigail',
    'Henry',
    'Emily',
  ];
  const lastNames = [
    'Anderson',
    'Johnson',
    'Brown',
    'Wilson',
    'Davis',
    'Taylor',
    'Miller',
    'Diggs',
    'Watson',
    'Smith',
    'Williams',
    'Jones',
    'Garcia',
    'Rodriguez',
    'Martinez',
    'Thomas',
    'Lee',
    'Walker',
    'White',
    'Harris',
  ];
  const statuses = ['User', 'Admin'];
  const months = [
    'Jan',
    'Feb',
    'Mar',
    'Apr',
    'May',
    'Jun',
    'Jul',
    'Aug',
    'Sep',
    'Oct',
    'Nov',
    'Dec',
  ];
  const avatarUrls = [
    'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face',
    'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop&crop=face',
    'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face',
    'https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?w=100&h=100&fit=crop&crop=face',
    'https://images.unsplash.com/photo-1531123897727-8f129e1688ce?w=100&h=100&fit=crop&crop=face',
    'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=100&h=100&fit=crop&crop=face',
    'https://images.unsplash.com/photo-1488426862026-3ee34a7d66df?w=100&h=100&fit=crop&crop=face',
    'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop&crop=face',
    'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&crop=face',
  ];

  const users = [];

  for (let i = 1; i <= count; i++) {
    const firstName = firstNames[Math.floor(Math.random() * firstNames.length)];
    const lastName = lastNames[Math.floor(Math.random() * lastNames.length)];
    const name = `${firstName} ${lastName}`;
    const email = `${firstName.toLowerCase()}.${lastName.toLowerCase()}@tourvisto.com`;
    const month = months[Math.floor(Math.random() * months.length)];
    const day = Math.floor(Math.random() * 28) + 1;
    const dateJoined = `${month} ${day}, 2023`;
    const itineraryCount = Math.floor(Math.random() * 101);
    const status = statuses[Math.floor(Math.random() * statuses.length)];
    const useAvatar = Math.random() > 0.2; // 80% chance of having an avatar
    const avatar = useAvatar
      ? avatarUrls[Math.floor(Math.random() * avatarUrls.length)]
      : null;
    const initials = !useAvatar ? `${firstName[0]}${lastName[0]}` : undefined;

    users.push({
      id: i,
      name,
      email,
      avatar,
      initials,
      dateJoined,
      itineraryCount,
      status,
    });
  }

  return users;
}

// ===== POPULAR TRIPS LOGIC =====

/**
 * Logic for showing popular trips on trip detail page:
 *
 * 1. EXCLUDE the current trip being viewed
 * 2. PRIORITIZE trips with similar characteristics:
 *    - Same category/tags (Cultural, Adventure, Luxury, etc.)
 *    - Similar price range (±30% of current trip price)
 *    - Same region or nearby destinations
 *    - Similar duration (±2 days)
 *
 * 3. RANKING FACTORS (in order of importance):
 *    - Tag similarity score (most important)
 *    - Popularity score/rating
 *    - Price similarity
 *    - Recent bookings/views
 *    - Duration similarity
 *
 * 4. DISPLAY 4-6 trips maximum
 * 5. FALLBACK to highest-rated trips if no similar trips found
 */

// Helper function to calculate trip similarity
export const calculateTripSimilarity = (
  currentTrip: TripDetailsType,
  compareTrip: TripDetailsType
): number => {
  let similarityScore = 0;

  // Tag similarity (40% weight)
  const currentTags = currentTrip.tags.map((tag) => tag.label.toLowerCase());
  const compareTags = compareTrip.tags.map((tag) => tag.label.toLowerCase());
  const commonTags = currentTags.filter((tag) => compareTags.includes(tag));
  const tagSimilarity =
    commonTags.length / Math.max(currentTags.length, compareTags.length);
  similarityScore += tagSimilarity * 0.4;

  // Price similarity (25% weight)
  const currentPrice = parseFloat(currentTrip.price.replace('$', ''));
  const comparePrice = parseFloat(compareTrip.price.replace('$', ''));
  const priceDiff = Math.abs(currentPrice - comparePrice) / currentPrice;
  const priceSimilarity = Math.max(0, 1 - priceDiff);
  similarityScore += priceSimilarity * 0.25;

  // Duration similarity (15% weight) - extract days from durationText
  const currentDays = parseInt(
    currentTrip.durationText.match(/\d+/)?.[0] || '0'
  );
  const compareDays = parseInt(
    compareTrip.durationText.match(/\d+/)?.[0] || '0'
  );
  const daysDiff = Math.abs(currentDays - compareDays);
  const durationSimilarity = Math.max(0, 1 - daysDiff / 7); // Normalize by week
  similarityScore += durationSimilarity * 0.15;

  // Popularity score (20% weight)
  const popularityScore = (compareTrip.popularityScore || 0) / 100;
  similarityScore += popularityScore * 0.2;

  return similarityScore;
};

// Function to get popular trips for display
export const getPopularTripsForDetail = (
  currentTripId: number,
  allTrips: TripDetailsType[],
  maxResults: number = 4
): TripDetailsType[] => {
  const currentTrip = allTrips.find((trip) => trip.id === currentTripId);
  if (!currentTrip) return [];

  // Filter out current trip and calculate similarities
  const otherTrips = allTrips
    .filter((trip) => trip.id !== currentTripId)
    .map((trip) => ({
      ...trip,
      similarityScore: calculateTripSimilarity(currentTrip, trip),
    }))
    .sort((a, b) => b.similarityScore - a.similarityScore)
    .slice(0, maxResults);

  return otherTrips;
};

// Example usage in your component:
/*
const TripDetails = () => {
  const { id } = useParams<{ id: string }>();
  const tripId = parseInt(id || '1');
  
  // Get current trip details
  const currentTrip = mockTripDetails; // or fetch from API/state
  
  // Get popular similar trips
  const popularTrips = getPopularTripsForDetail(
    tripId, 
    [mockTripDetails, ...otherTripsData], // Your complete trips array
    4
  );
  
  // Rest of your component logic...
};
*/
