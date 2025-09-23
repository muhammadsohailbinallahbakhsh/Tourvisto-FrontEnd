// holds types shared between components and API
type TripDestinationTagType = {
  label: string;
  background: string;
  textColor: string;
};

type BaseTripType = {
  id: number;
  name: string;
  location: string;
  banner: string;
  price: string;
  tags: TripDestinationTagType[];
  activitiesCount?: number;
  isFeatured?: boolean;
  rating?: number;
};

type TripDestinationPropsType = BaseTripType;

type ItineraryDayType = {
  dayLabel: string;
  activities: string[];
};

type BestTimeType = {
  emoji: string;
  season: string;
  desc: string;
};

type WeatherInfoType = {
  season: string;
  range: string;
};

type TripDetailsType = BaseTripType & {
  title: string;
  durationText: string;
  locationsText: string;
  mainImageSrc: string;
  smallImageSrcs: string[];
  ratingValue: number;
  maxRating: number;
  tripTagline: string;
  descriptionParagraphs: string[];
  itinerary: ItineraryDayType[];
  bestTimes: BestTimeType[];
  weatherInfo: WeatherInfoType[];
  category?: string;
  difficulty?: 'Easy' | 'Moderate' | 'Challenging';
  groupSize?: string;
  popularityScore?: number;
  createdAt?: Date;
};

export type {
  TripDestinationTagType,
  BaseTripType,
  TripDestinationPropsType,
  ItineraryDayType,
  BestTimeType,
  WeatherInfoType,
  TripDetailsType,
};
