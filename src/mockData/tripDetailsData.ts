import type { TripDetailsType } from '@/types';
import images from '@/constants/images';

const mockTripDetails: TripDetailsType = {
  // Base trip info (compatible with TripCard)
  id: 1,
  name: '5-Day Japan Adventure',
  location: 'Tokyo, Kyoto, Osaka',
  banner: '/images/card1Img', // Replace with actual image import
  price: '$604',
  tags: [
    {
      label: 'Luxury',
      background: 'bg-purple-100',
      textColor: 'text-purple-800',
    },
    { label: 'Beach', background: 'bg-blue-100', textColor: 'text-blue-800' },
    {
      label: 'Mountains',
      background: 'bg-green-100',
      textColor: 'text-green-800',
    },
    {
      label: 'Budget',
      background: 'bg-orange-100',
      textColor: 'text-orange-800',
    },
  ],

  // Detailed trip information
  title: '5-Day Japan Highlights: Culture, Food and Adventure',
  durationText: '5 day plan',
  locationsText: 'Tokyo, Kyoto, Osaka',
  mainImageSrc: images.card4Img, // Replace with actual image import
  smallImageSrcs: [images.card2Img, images.card3Img], // Replace with actual imports
  ratingValue: 4.9,
  maxRating: 5.0,
  tripTagline: 'Luxury, Diversity, and Harmony',

  descriptionParagraphs: [
    'Experience the best of Japan in 5 unforgettable days, traveling through Tokyo, Kyoto, and Osaka. From the bustling streets of Shibuya to the historic temples of Kyoto and the vibrant food scene in Osaka, this itinerary blends culture, sightseeing, and local flavors.',
    'Relax in a Hakone onsen, explore ancient shrines, and indulge in authentic Japanese cuisine—all while enjoying seamless travel on the Shinkansen. ✨',
  ],

  itinerary: [
    {
      dayLabel: 'Day 1: Arrival in Tokyo & Shibuya Exploration',
      activities: [
        'Arrive at Narita/Haneda Airport & check-in at hotel',
        'Visit Shibuya Crossing & Hachiko Statue',
        'Explore Shinjuku for city views at Tokyo Metropolitan Govt. Building',
        'Dinner at an Izakaya in Golden Gai',
      ],
    },
    {
      dayLabel: 'Day 2: Tokyo Sightseeing & Culture',
      activities: [
        'Morning: Senso-ji Temple in Asakusa',
        'Afternoon: Akihabara (tech & anime district)',
        'Evening: Walk around Tokyo Tower & Roppongi',
      ],
    },
    {
      dayLabel: 'Day 3: Day Trip to Hakone (Mt. Fuji Views)',
      activities: [
        'Take the Hakone Ropeway for a scenic view',
        'Relax in an onsen (hot spring)',
        'Visit Lake Ashi & see Fuji in the distance',
      ],
    },
    {
      dayLabel: 'Day 4: Kyoto – Temples & History',
      activities: [
        'Travel to Kyoto via Shinkansen (bullet train)',
        'Visit Fushimi Inari Shrine (red torii gates)',
        'Explore Gion (Geisha district) in the evening',
      ],
    },
    {
      dayLabel: 'Day 5: Shopping & Departure',
      activities: [
        'Last-minute shopping in Shinsaibashi',
        'Head to Kansai/Narita Airport for departure',
      ],
    },
  ],

  bestTimes: [
    {
      emoji: '🌸',
      season: 'Spring (March–May)',
      desc: 'Cherry blossoms in full bloom, mild temperatures.',
    },
    {
      emoji: '🍂',
      season: 'Autumn (September–November)',
      desc: 'Beautiful fall foliage, comfortable weather.',
    },
    {
      emoji: '❄️',
      season: 'Winter (December–February)',
      desc: 'Quieter, with snow-covered temples creating a magical scene.',
    },
    {
      emoji: '☀️',
      season: 'Summer (June–August)',
      desc: 'Hot & humid but lively with festivals like Gion Matsuri.',
    },
  ],

  weatherInfo: [
    { season: 'Spring', range: '10°C – 20°C (50°F – 68°F)' },
    { season: 'Summer', range: '22°C – 33°C (72°F – 91°F)' },
    { season: 'Autumn', range: '12°C – 25°C (54°F – 77°F)' },
    { season: 'Winter', range: '0°C – 10°C (32°F – 50°F)' },
  ],

  // Additional fields for better recommendations
  category: 'Cultural & Adventure',
  difficulty: 'Moderate',
  groupSize: '2-6 people',
  popularityScore: 95,
  createdAt: new Date('2024-01-15'),
};

export default mockTripDetails;
