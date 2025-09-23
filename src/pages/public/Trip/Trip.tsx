import { useAppSelector } from '@/hooks/useAppSelector';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import { CalendarDays, MapPin } from 'lucide-react';
import { TripCard, DynamicRatingController } from '@/components';
import {
  tripDetailsData as tripDetails,
  tripDestinationsData,
} from '@/mockData';
import { UserRole } from '@/types';

const TripDetails = () => {
  const { role } = useAppSelector((state) => state.userSlice);
  const isAdmin = [UserRole.Admin, UserRole.DemoAdmin].includes(role);

  return (
    <main className='flex flex-col gap-4 items-center justify-start'>
      <div className='max-w-4xl mx-auto space-y-8 p-6'>
        {/* Title + plan & location */}
        <div className='space-y-6'>
          <h1 className='p-40-semibold text-dark-100'>{tripDetails.title}</h1>
          <div className='flex flex-wrap items-center text-sm text-muted-foreground space-x-4'>
            <div className='flex items-center space-x-1'>
              <CalendarDays className='w-4 h-4' />
              <span>{tripDetails.durationText}</span>
            </div>
            <div className='flex items-center space-x-1'>
              <MapPin className='w-4 h-4' />
              <span>{tripDetails.locationsText}</span>
            </div>
          </div>
        </div>

        {/* Image gallery */}
        <div className='grid grid-cols-3 grid-rows-2 gap-2 max-h-[300px]'>
          {/* Main image spans two rows */}
          <div className='col-span-2 row-span-2 '>
            <img
              src={tripDetails.mainImageSrc}
              alt='Main trip'
              className='w-full h-full object-cover rounded-2xl'
            />
          </div>
          {/* Two smaller images stacked */}
          {tripDetails.smallImageSrcs.map((src, idx) => (
            <img
              key={idx}
              src={src}
              alt={`Trip image ${idx + 1}`}
              className='w-full h-full object-cover rounded-2xl max-w-[220px] max-h-[150px]'
            />
          ))}
        </div>

        {/* Tags + rating + price */}
        <div className='flex flex-wrap items-center justify-start gap-3'>
          {/* Tags */}
          <div className='flex flex-wrap gap-5'>
            {tripDetails.tags.map((tag) => (
              <Badge
                key={tag.label}
                className={` ${tag.background} ${tag.textColor} rounded-[40px] py-1 px-3 md:py-2 md:px-5 p-14-medium`}
              >
                {tag.label}
              </Badge>
            ))}
          </div>

          <DynamicRatingController
            rating={tripDetails.ratingValue}
            maxRating={tripDetails.maxRating}
          />

          <Badge className='bg-white text-dark-100 rounded-[40px] py-1 px-3 md:py-2 md:px-5 p-14-medium'>
            {tripDetails.ratingValue} / {tripDetails.maxRating}
          </Badge>
        </div>

        <Separator />

        {/* Trip title, tagline, description */}
        <div className='space-y-9'>
          <div className='flex w-full justify-between items-start'>
            <div>
              <h2 className='p-30-semibold text-dark-100 mb-5'>
                {tripDetails.name}
              </h2>
              <p className='p-24-regular text-gray-100'>
                {tripDetails.tripTagline}
              </p>
            </div>
            <span className='inline-block bg-white text-dark-100 p-20-semibold px-3 py-1 rounded-full'>
              {tripDetails.price}
            </span>
          </div>
          <div className='space-y-4'>
            {tripDetails.descriptionParagraphs.map((para, idx) => (
              <p
                key={idx}
                className='p-18-regular text-dark-400 leading-relaxed'
              >
                {para}
              </p>
            ))}
          </div>
        </div>

        <Separator />

        {/* Itinerary days */}
        <div className='space-y-6'>
          {tripDetails.itinerary.map((item, idx) => (
            <div key={idx} className='space-y-4'>
              <h3 className='p-20-semibold text-dark-400'>{item.dayLabel}</h3>
              <ul className='list-disc list-inside space-y-2 p-18-regular text-dark-400'>
                {item.activities.map((act, j) => (
                  <li key={j}>{act}</li>
                ))}
              </ul>
              {/* Separator between days, except after last */}
              {idx < tripDetails.itinerary.length - 1 && (
                <Separator className='my-4' />
              )}
            </div>
          ))}
        </div>

        <Separator />

        {/* Best Time to Visit */}
        <div className='space-y-4'>
          <h3 className='p-20-semibold text-dark-400'>Best Time to Visit:</h3>
          <ul className='list-disc list-inside space-y-2 p-18-regular text-dark-400'>
            {tripDetails.bestTimes.map((bt, idx) => (
              <li key={idx}>
                <span className='mr-1'>{bt.emoji}</span>
                <span className='font-medium'>{bt.season}:</span> {bt.desc}
              </li>
            ))}
          </ul>
        </div>

        <Separator />

        {/* Weather Info */}
        <div className='space-y-4'>
          <h3 className='p-20-semibold text-dark-400'>Weather Info:</h3>
          <ul className='list-disc list-inside space-y-2 p-18-regular text-dark-400'>
            {tripDetails.weatherInfo.map((w, idx) => (
              <li key={idx}>
                <span className='font-medium'>{w.season}:</span> {w.range}
              </li>
            ))}
          </ul>
        </div>

        {/* Map placeholder */}
        <div className='w-full h-64 bg-gray-200 rounded-[10px] flex items-center justify-center text-gray-500'>
          Map Placeholder
        </div>
        {/* Pay & join button */}
        <div className='mt-4'>
          <Button className='w-full p-6 p-16-regular'>
            Pay and join trip
            <span className='inline-block bg-white text-dark-100 p-14-semibold px-3 py-1 rounded-full'>
              {tripDetails.price}
            </span>
          </Button>
        </div>

        <Separator />
        {/* Popular Itineraries - Now using intelligent recommendation logic */}
        <div className='space-y-8'>
          <h3 className='p-24-semibold text-dark-100'>Popular Itineraries</h3>
          <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4'>
            <TripCard {...tripDestinationsData[2]} />
            <TripCard {...tripDestinationsData[3]} />
            <TripCard {...tripDestinationsData[4]} />
          </div>
        </div>
      </div>
    </main>
  );
};

export default TripDetails;
