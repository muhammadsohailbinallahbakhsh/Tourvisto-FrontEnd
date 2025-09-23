import React, {
  useState,
  useEffect,
  useRef,
  useCallback,
  useMemo,
} from 'react';
import { Button } from '@/components/ui/button';
import { Dialog, DialogOverlay, DialogContent } from '@/components/ui/dialog';
import {
  MoveRight,
  MoveLeft,
  ZoomIn,
  Download,
  Share2,
  Heart,
  MapPin,
  Calendar,
  Users,
  DollarSign,
  CircleXIcon,
} from 'lucide-react';
import TripCard from '@/components/TripCard';
import { Pagination, PageSizeAndStatsController } from '@/components';
import { tripDestinationsData } from '@/mockData';
import DestinationRelatedTrips from './DestinationRelatedTrips';
import DialogCarousel from './DialogCarousel';

export interface DestinationProps {
  id: string;
  name: string;
  region: string;
  country: string;
  population: number;
  tripsCount: number;
  priceRange: [number, number];
  images: string[];
  overview: string;
}

const mockDestination: DestinationProps = {
  id: 'dest1',
  name: 'Barcelona',
  region: 'Catalonia',
  country: 'Spain',
  population: 5500000,
  tripsCount: 12,
  priceRange: [299, 1299],
  images: [
    'https://images.unsplash.com/photo-1499696010180-025ef6e1a8f9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80',
    'https://images.unsplash.com/photo-1432462770865-65b70566d673?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80',
    'https://images.unsplash.com/photo-1493246507139-91e8fad9978e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2940&q=80',
    'https://images.unsplash.com/photo-1518623489648-a173ef7824f3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2762&q=80',
    'https://images.unsplash.com/photo-1682407186023-12c70a4a35e0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2832&q=80',
    'https://images.unsplash.com/photo-1552960562-daf630e9278b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80',
    'https://images.unsplash.com/photo-1540553016722-983e48a2cd10?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80',
    'https://images.unsplash.com/photo-1629367494173-c78a56567877?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=927&q=80',
  ],
  overview: `Barcelona is a vibrant coastal city known for its art, architecture, and Mediterranean atmosphere. From Gaudí's masterpieces to bustling markets, there's something for every traveler.`,
};

const DestinationDetailsPage = () => {
  const destination = mockDestination;
  const [carouselIndex, setCarouselIndex] = useState<number>(0);
  const [isDialogOpen, setIsDialogOpen] = useState<boolean>(false);
  const [isFavorite, setIsFavorite] = useState<boolean>(false);

  const [thumbnailScrollPosition, setThumbnailScrollPosition] =
    useState<number>(0);
  const thumbnailContainerRef = useRef<HTMLDivElement>(null);
  const thumbnailWidth = 88; // 80px width + 8px gap
  const visibleThumbnails = 5;

  // Auto-play functionality (pauses on hover)
  const [isAutoPlaying, setIsAutoPlaying] = useState<boolean>(true);

  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      setCarouselIndex((prev) => (prev + 1) % destination.images.length);
    }, 4000);

    return () => clearInterval(interval);
  }, [isAutoPlaying, destination.images.length]);

  // Auto-scroll thumbnails to keep current image visible
  useEffect(() => {
    const container = thumbnailContainerRef.current;
    if (!container) return;

    const currentImagePosition = carouselIndex * thumbnailWidth;
    const containerWidth = visibleThumbnails * thumbnailWidth;
    const maxScrollPosition = Math.max(
      0,
      destination.images.length * thumbnailWidth - containerWidth
    );

    // Calculate ideal scroll position to center the current image
    let idealScrollPosition =
      currentImagePosition - containerWidth / 2 + thumbnailWidth / 2;
    idealScrollPosition = Math.max(
      0,
      Math.min(idealScrollPosition, maxScrollPosition)
    );

    setThumbnailScrollPosition(idealScrollPosition);
  }, [carouselIndex, destination.images.length]);

  const openImage = (idx: number) => {
    setCarouselIndex(idx);
    setIsDialogOpen(true);
  };

  const showNext = () => {
    setCarouselIndex((prev) => (prev + 1) % destination.images.length);
  };

  const showPrev = () => {
    setCarouselIndex(
      (prev) =>
        (prev - 1 + destination.images.length) % destination.images.length
    );
  };

  const selectMainImage = (idx: number) => {
    setCarouselIndex(idx);
  };

  // Enhanced thumbnail navigation functions
  const scrollThumbnailsLeft = () => {
    const newPosition = Math.max(
      0,
      thumbnailScrollPosition - thumbnailWidth * 2
    );
    setThumbnailScrollPosition(newPosition);
  };

  const scrollThumbnailsRight = () => {
    const maxScrollPosition = Math.max(
      0,
      destination.images.length * thumbnailWidth -
        visibleThumbnails * thumbnailWidth
    );
    const newPosition = Math.min(
      maxScrollPosition,
      thumbnailScrollPosition + thumbnailWidth * 2
    );
    setThumbnailScrollPosition(newPosition);
  };

  const canScrollLeft = thumbnailScrollPosition > 0;
  const canScrollRight =
    thumbnailScrollPosition <
    Math.max(
      0,
      destination.images.length * thumbnailWidth -
        visibleThumbnails * thumbnailWidth
    );

  const handleShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: destination.name,
          text: destination.overview,
          url: window.location.href,
        });
      } catch (error) {
        console.log('Error sharing:', error);
      }
    } else {
      navigator.clipboard.writeText(window.location.href);
      alert('Link copied to clipboard!');
    }
  };

  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = destination.images[carouselIndex];
    link.download = `${destination.name}-image-${carouselIndex + 1}.jpg`;
    link.target = '_blank';
    link.click();
  };

  const createImageGroups = () => {
    const groups: Array<Array<{ src: string; index: number }>> = [
      [],
      [],
      [],
      [],
    ];
    destination.images.forEach((image, index) => {
      groups[index % 4].push({ src: image, index });
    });
    return groups;
  };

  const imageGroups = createImageGroups();

  const handleGalleryImageClick = (imageIndex: number) => {
    openImage(imageIndex);
  };

  return (
    <main className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12'>
      {/* Header Section */}
      <section className='pt-8'>
        <div className='flex items-center justify-between'>
          <div>
            <h1 className='p-40-semibold text-dark-100'>{destination.name}</h1>
            <div className='flex items-center mt-2 text-muted-foreground'>
              <MapPin className='w-4 h-4 mr-1' />
              <span>
                {destination.region}, {destination.country}
              </span>
            </div>
          </div>
          <div className='flex gap-2'>
            <Button
              variant='outline'
              size='sm'
              onClick={() => setIsFavorite(!isFavorite)}
              className={isFavorite ? 'text-red-500' : ''}
            >
              <Heart
                className={`w-4 h-4 ${isFavorite ? 'fill-current' : ''}`}
              />
            </Button>
            <Button variant='outline' size='sm' onClick={handleShare}>
              <Share2 className='w-4 h-4' />
            </Button>
          </div>
        </div>

        <div className='mt-6 grid grid-cols-1 md:grid-cols-3 gap-4'>
          <div className='bg-secondary p-4 rounded-lg flex items-center'>
            <Users className='w-5 h-5 mr-3 text-primary' />
            <div>
              <span className='p-14-regular text-gray-100'>Population</span>
              <p className='p-18-semibold '>
                {destination.population.toLocaleString()}
              </p>
            </div>
          </div>
          <div className='bg-secondary p-4 rounded-lg flex items-center'>
            <Calendar className='w-5 h-5 mr-3 text-primary' />
            <div>
              <span className='text-sm text-muted-foreground'>Total Trips</span>
              <p className='text-lg font-semibold text-foreground'>
                {destination.tripsCount}
              </p>
            </div>
          </div>
          <div className='bg-secondary p-4 rounded-lg flex items-center'>
            <DollarSign className='w-5 h-5 mr-3 text-primary' />
            <div>
              <span className='text-sm text-muted-foreground'>Price Range</span>
              <p className='text-lg font-semibold text-foreground'>
                ${destination.priceRange[0]} - ${destination.priceRange[1]}
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className='relative'>
        <div className='grid gap-4'>
          <div
            className='relative rounded-2xl overflow-hidden cursor-pointer group'
            onMouseEnter={() => setIsAutoPlaying(false)}
            onMouseLeave={() => setIsAutoPlaying(true)}
            onClick={() => openImage(carouselIndex)}
          >
            <img
              src={destination.images[carouselIndex]}
              alt={`${destination.name} image ${carouselIndex + 1}`}
              className='h-auto w-full max-w-full rounded-lg object-cover object-center md:h-[480px] transition-transform duration-300 group-hover:scale-105'
            />
            <div className='absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors' />

            <button
              onClick={(e) => {
                e.stopPropagation();
                showPrev();
              }}
              className='absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/80 rounded-full p-3 hover:bg-white transition-all opacity-0 group-hover:opacity-100'
            >
              <MoveLeft className='w-5 h-5 text-gray-800' />
            </button>
            <button
              onClick={(e) => {
                e.stopPropagation();
                showNext();
              }}
              className='absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/80 rounded-full p-3 hover:bg-white transition-all opacity-0 group-hover:opacity-100'
            >
              <MoveRight className='w-5 h-5 text-gray-800' />
            </button>

            <div className='absolute top-4 right-4 bg-black/60 text-white px-3 py-1 rounded-full text-sm'>
              {carouselIndex + 1} / {destination.images.length}
            </div>

            <div className='absolute bottom-4 right-4 flex gap-2'>
              <Button
                size='sm'
                variant='secondary'
                onClick={(e) => {
                  e.stopPropagation();
                  handleDownload();
                }}
                className='opacity-0 group-hover:opacity-100 transition-opacity'
              >
                <Download className='w-4 h-4' />
              </Button>
              <Button
                onClick={(e) => {
                  e.stopPropagation();
                  setIsDialogOpen(true);
                }}
                className='opacity-0 group-hover:opacity-100 transition-opacity'
              >
                <ZoomIn className='w-4 h-4 mr-2' />
                View Photos
              </Button>
            </div>
          </div>

          <div className='flex flex-row items-center justify-center gap-4'>
            <button
              onClick={scrollThumbnailsLeft}
              disabled={!canScrollLeft}
              className='bg-white shadow-lg rounded-full p-2 hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:bg-white transition-all flex-shrink-0'
            >
              <MoveLeft className='w-4 h-4' />
            </button>

            <div
              ref={thumbnailContainerRef}
              className='relative overflow-hidden'
              style={{ width: `${visibleThumbnails * thumbnailWidth - 16}px` }}
            >
              <div
                className='flex gap-4 p-2 transition-transform duration-300 ease-out'
                style={{
                  transform: `translateX(-${thumbnailScrollPosition}px)`,
                  width: `${destination.images.length * thumbnailWidth}px`,
                }}
              >
                {destination.images.map((src, index) => (
                  <div key={index} className='relative flex-shrink-0'>
                    <img
                      src={src}
                      onClick={() => selectMainImage(index)}
                      className={`object-cover object-center h-20 w-20 rounded-lg cursor-pointer transition-all duration-200 ${
                        index === carouselIndex
                          ? 'ring-2 ring-primary ring-offset-2 opacity-100 scale-105'
                          : 'opacity-70 hover:opacity-100 hover:scale-105'
                      }`}
                      alt={`${destination.name} thumbnail ${index + 1}`}
                    />

                    {index === carouselIndex && (
                      <div className='absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-2 h-2 bg-primary rounded-full'></div>
                    )}
                  </div>
                ))}
              </div>
            </div>

            <button
              onClick={scrollThumbnailsRight}
              disabled={!canScrollRight}
              className='bg-white shadow-lg rounded-full p-2 hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:bg-white transition-all flex-shrink-0'
            >
              <MoveRight className='w-4 h-4' />
            </button>
          </div>
        </div>
      </section>

      {/* Overview Section */}
      <section>
        <h2 className='p-36-bold mb-4'>Overview</h2>
        <p className='p-18-regular text-gray-100 max-w-4xl leading-relaxed'>
          {destination.overview}
        </p>
      </section>

      <section>
        <h2 className='p-36-bold mb-6'>Gallery</h2>
        <div className='grid grid-cols-2 gap-4 md:grid-cols-4'>
          {imageGroups.map((group, groupIndex) => (
            <div key={groupIndex} className='grid gap-4'>
              {group.map(({ src, index }) => (
                <div
                  key={index}
                  className='relative group cursor-pointer aspect-[4/3] rounded-lg overflow-hidden'
                  onClick={() => handleGalleryImageClick(index)}
                >
                  <img
                    className='w-full h-full object-cover object-center transition-transform duration-300 group-hover:scale-105'
                    src={src}
                    alt={`${destination.name} gallery photo ${index + 1}`}
                  />
                  <div className='absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300 flex items-center justify-center'>
                    <ZoomIn className='w-8 h-8 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300' />
                  </div>
                </div>
              ))}
            </div>
          ))}
        </div>
      </section>

      <DestinationRelatedTrips
        destinationName={destination.name}
        tripDestinationsData={tripDestinationsData}
      />

      <DialogCarousel
        isDialogOpen={isDialogOpen}
        setIsDialogOpen={setIsDialogOpen}
        destination={destination}
        carouselIndex={carouselIndex}
        showPrev={showPrev}
        showNext={showNext}
        handleDownload={handleDownload}
      />
    </main>
  );
};

export default DestinationDetailsPage;
