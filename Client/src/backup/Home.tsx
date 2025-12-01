import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import TripCard from '@/components/TripCard';
import images from '@/constants/images'; // your image imports
import { ChevronLeft, ChevronRight } from 'lucide-react';
import icons from '@/constants/icons';

interface FeaturedDestination {
  id: number;
  imageSrc: string;
  title: string;
  activities: number;
  rating: number; // e.g. 3.5
}

interface HomePageProps {
  // If you want to pass data in as props, define them here.
  // For now, we use hardcoded arrays matching your Figma.
}

const featuredDestinations: FeaturedDestination[] = [
  {
    id: 1,
    imageSrc: images.card1Img, // e.g. Barcelona image
    title: 'Barcelona Tour',
    activities: 196,
    rating: 3.5,
  },
  {
    id: 2,
    imageSrc: images.card2Img, // e.g. Australia Tour
    title: 'Australia Tour',
    activities: 196,
    rating: 3.5,
  },
  {
    id: 3,
    imageSrc: images.card3Img, // London
    title: 'London, United State',
    activities: 196,
    rating: 3.5,
  },
  {
    id: 4,
    imageSrc: images.card4Img, // Japan Tour
    title: 'Japan Tour',
    activities: 196,
    rating: 3.5,
  },
  {
    id: 5,
    imageSrc: images.card5Img, // Another Japan Tour?
    title: 'Japan Tour',
    activities: 196,
    rating: 3.5,
  },
];

// Handpicked trips data:
const handpickedTrips = [
  {
    imageSrc: images.card1Img,
    title: 'Thornridge Cir. Shiloh',
    location: 'St George’s Ln, Singapore',
    price: '$300',
    tags: ['Mountains', 'City'],
  },
  {
    imageSrc: images.card2Img,
    title: 'Roraima Tepui',
    location: 'Canaima Park, Venezuela',
    price: '$790',
    tags: ['Solo travel', 'Budget'],
  },
  {
    imageSrc: images.card3Img,
    title: 'Socotra Island',
    location: 'Yemen',
    price: '$870',
    tags: ['Luxury', 'Beach'],
  },
  {
    imageSrc: images.card4Img,
    title: 'San Lake Baikal',
    location: 'Siberia, Russia',
    price: '$604',
    tags: ['Sports', 'Adventurous'],
  },
  {
    imageSrc: images.card5Img,
    title: "Anse Source d'Argent",
    location: 'La Digue, Seychelles',
    price: '$870',
    tags: ['Beach', 'Luxury'],
  },
  {
    imageSrc: images.card6Img,
    title: 'Aysén Region',
    location: 'Patagonia, Chile',
    price: '$604',
    tags: ['Sports', 'Adventurous'],
  },
  {
    imageSrc: images.card6Img,
    title: 'Taman Negara',
    location: 'Peninsular Malaysia',
    price: '$300',
    tags: ['Mountains', 'Budget'],
  },
  {
    imageSrc: images.card4Img,
    title: 'Zhangye Landform',
    location: 'Gansu, China',
    price: '$790',
    tags: ['Solo travel', 'City'],
  },
];

const HomePage: React.FC<HomePageProps> = () => {
  // Pagination state for Handpicked Trips:
  const ITEMS_PER_PAGE = 4;
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = Math.ceil(handpickedTrips.length / ITEMS_PER_PAGE);

  const paginatedTrips = handpickedTrips.slice(
    (currentPage - 1) * ITEMS_PER_PAGE,
    currentPage * ITEMS_PER_PAGE
  );

  const goToPage = (page: number) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
    }
  };

  return (
    <main className='flex-1 overflow-auto'>
      {/* Hero Section */}
      <section className='relative h-[60vh] md:h-[70vh] w-full'>
        <img
          src={images.heroImg} // your hero background image
          alt='Plan Your Trip'
          className='absolute inset-0 w-full h-full object-cover'
        />
        {/* Overlay */}
        <div className='absolute inset-0 bg-black/40' />
        <div className='relative z-10 flex flex-col items-start justify-center h-full max-w-4xl mx-auto px-6'>
          <h1 className='text-4xl md:text-5xl font-bold text-white leading-tight'>
            Plan Your
            <br />
            Trip with Ease
          </h1>
          <p className='mt-4 text-lg text-white/90 max-w-lg'>
            Customize your travel itinerary in minutes—pick your destination,
            set your preferences, and explore with confidence.
          </p>
          <Button className='mt-6' size='lg'>
            Get Started
          </Button>
        </div>
      </section>

      {/* Featured Travel Destinations */}
      <section className='mt-12 px-6'>
        <div className='max-w-4xl mx-auto'>
          <h2 className='text-2xl font-semibold text-gray-900'>
            Featured Travel Destinations
          </h2>
          <p className='mt-1 text-sm text-muted-foreground'>
            Check out some of the best places you can visit around the world.
          </p>

          {/* Grid */}
          <div className='mt-6 grid grid-cols-3 grid-rows-2 gap-4'>
            {featuredDestinations.map((dest, idx) => {
              // First item spans two columns:
              const isLarge = idx === 0;
              return (
                <div
                  key={dest.id}
                  className={`
                    relative overflow-hidden rounded-lg shadow-lg 
                    ${isLarge ? 'col-span-2 row-span-2 h-full' : 'h-48'}
                  `}
                >
                  <img
                    src={dest.imageSrc}
                    alt={dest.title}
                    className='w-full h-full object-cover'
                  />
                  {/* Dark gradient overlay at bottom for text legibility */}
                  <div className='absolute inset-0 bg-gradient-to-t from-black/60 to-transparent' />
                  {/* Rating badge */}
                  <div className='absolute top-2 left-2 bg-white text-black text-xs font-semibold px-2 py-0.5 rounded'>
                    {dest.rating.toFixed(1)}
                  </div>
                  {/* Title & activities at bottom */}
                  <div className='absolute bottom-2 left-2 text-white'>
                    <h3 className='text-lg font-semibold'>{dest.title}</h3>
                    <div className='mt-1 flex items-center text-sm'>
                      {/* Activities icon – a simple list icon */}
                      <svg
                        className='w-4 h-4 mr-1 text-white/80'
                        fill='currentColor'
                        viewBox='0 0 20 20'
                      >
                        <path d='M4 6h12v2H4V6zm0 4h12v2H4v-2zm0 4h12v2H4v-2z' />
                      </svg>
                      <span>{dest.activities} Activities</span>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Handpicked Trips */}
      <section className='mt-12 px-6'>
        <div className='max-w-4xl mx-auto'>
          <h2 className='text-2xl font-semibold text-gray-900'>
            Handpicked Trips
          </h2>
          <p className='mt-1 text-sm text-muted-foreground'>
            Browse well-planned trips designed for different travel styles and
            interests
          </p>

          {/* Grid of TripCard */}
          <div className='mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6'>
            {paginatedTrips.map((trip, idx) => (
              <TripCard key={idx} {...trip} />
            ))}
          </div>

          {/* Pagination */}
          <div className='mt-6 flex items-center justify-center space-x-2'>
            <button
              onClick={() => goToPage(currentPage - 1)}
              disabled={currentPage === 1}
              className={`
                flex items-center px-3 py-1 rounded 
                ${
                  currentPage === 1
                    ? 'text-gray-400 cursor-not-allowed'
                    : 'text-gray-700 hover:bg-gray-100'
                }
              `}
            >
              <ChevronLeft className='w-4 h-4 mr-1' />
              Previous
            </button>

            {/* Page numbers 1..totalPages */}
            {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
              <button
                key={page}
                onClick={() => goToPage(page)}
                className={`
                  px-3 py-1 rounded 
                  ${
                    page === currentPage
                      ? 'bg-blue-600 text-white'
                      : 'text-gray-700 hover:bg-gray-100'
                  }
                `}
              >
                {page}
              </button>
            ))}

            <button
              onClick={() => goToPage(currentPage + 1)}
              disabled={currentPage === totalPages}
              className={`
                flex items-center px-3 py-1 rounded 
                ${
                  currentPage === totalPages
                    ? 'text-gray-400 cursor-not-allowed'
                    : 'text-gray-700 hover:bg-gray-100'
                }
              `}
            >
              Next
              <ChevronRight className='w-4 h-4 ml-1' />
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className='mt-12 border-t'>
        <div className='max-w-4xl mx-auto flex flex-col md:flex-row items-center justify-between py-6 px-6'>
          {/* Logo */}
          <div className='flex items-center space-x-2'>
            <img src={icons.logoIcon} alt='Tourvisto' className='h-8 w-auto' />
            <span className='text-lg font-semibold text-gray-900'>
              Tourvisto
            </span>
          </div>
          {/* Links */}
          <div className='flex space-x-6 mt-4 md:mt-0'>
            <a
              href='/terms'
              className='text-sm text-gray-600 hover:text-gray-800'
            >
              Terms & Condition
            </a>
            <a
              href='/privacy'
              className='text-sm text-gray-600 hover:text-gray-800'
            >
              Privacy Policy
            </a>
          </div>
        </div>
      </footer>
    </main>
  );
};

export default HomePage;
