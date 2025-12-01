const TravelDestinations = () => {
  const featuredDestinations = [
    {
      id: 1,
      title: 'Barcelona Tour',
      imageSrc:
        'https://images.unsplash.com/photo-1539037116277-4db20889f2d4?w=800&h=600&fit=crop',
      rating: 3.5,
      activities: 196,
    },
    {
      id: 2,
      title: 'London, United State',
      imageSrc:
        'https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?w=400&h=300&fit=crop',
      rating: 3.5,
      activities: 196,
    },
    {
      id: 3,
      title: 'Australia Tour',
      imageSrc:
        'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=300&fit=crop',
      rating: 3.5,
      activities: 196,
    },
    {
      id: 4,
      title: 'Australia Tour',
      imageSrc:
        'https://images.unsplash.com/photo-1506973035872-a4ec16b8e8d9?w=400&h=300&fit=crop',
      rating: 3.5,
      activities: 196,
    },
    {
      id: 5,
      title: 'Japan Tour',
      imageSrc:
        'https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?w=400&h=300&fit=crop',
      rating: 3.5,
      activities: 196,
    },
    {
      id: 6,
      title: 'Japan Tour',
      imageSrc:
        'https://images.unsplash.com/photo-1542640244-7e672d6cef4e?w=400&h=300&fit=crop',
      rating: 3.5,
      activities: 196,
    },
  ];

  const CardContent = ({
    dest,
    isLarge = false,
  }: {
    dest: {
      id: number;
      title: string;
      imageSrc: string;
      rating: number;
      activities: number;
    };
    isLarge?: boolean;
  }) => (
    <>
      <img
        src={dest.imageSrc}
        alt={dest.title}
        className='w-full h-full object-cover'
      />
      <div className='absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent' />

      {/* Rating badge */}
      <div className='absolute top-3 left-3 bg-white text-orange-500 text-sm font-bold px-3 py-1 rounded-full shadow-lg'>
        {dest.rating.toFixed(1)}
      </div>

      {/* Content */}
      <div className='absolute bottom-4 left-4 text-white'>
        <h3
          className={`font-bold text-white drop-shadow-lg ${
            isLarge ? 'text-2xl mb-2' : 'text-lg mb-1'
          }`}
        >
          {dest.title}
        </h3>
        <div className='flex items-center text-white/90'>
          <svg className='w-4 h-4 mr-2' fill='currentColor' viewBox='0 0 20 20'>
            <path d='M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z' />
          </svg>
          <span className='text-sm font-medium'>
            {dest.activities} Activities
          </span>
        </div>
      </div>
    </>
  );

  return (
    <section className=' mt-10'>
      <div>
        <h2 className='text-3xl font-bold text-gray-900 mb-2'>
          Featured Travel Destinations
        </h2>
        <p className='text-gray-600 text-base mb-8'>
          Check out some of the best places you can visit around the world.
        </p>

        {/* Large Screen Layout (lg and above) */}
        <div className='hidden lg:grid lg:grid-cols-3 lg:grid-rows-6 lg:gap-2 lg:h-96'>
          <div className='relative overflow-hidden rounded-xl shadow-lg cursor-pointer transform transition-transform duration-300 hover:scale-105 lg:col-span-2 lg:row-span-3 lg:col-start-1 lg:row-start-1'>
            <CardContent dest={featuredDestinations[0]} isLarge={true} />
          </div>
          <div className='relative overflow-hidden rounded-xl shadow-lg cursor-pointer transform transition-transform duration-300 hover:scale-105 lg:row-span-2 lg:col-start-3 lg:row-start-1'>
            <CardContent dest={featuredDestinations[2]} />
          </div>
          <div className='relative overflow-hidden rounded-xl shadow-lg cursor-pointer transform transition-transform duration-300 hover:scale-105 lg:row-span-2 lg:col-start-3 lg:row-start-3'>
            <CardContent dest={featuredDestinations[4]} />
          </div>
          <div className='relative overflow-hidden rounded-xl shadow-lg cursor-pointer transform transition-transform duration-300 hover:scale-105 lg:row-span-2 lg:col-start-3 lg:row-start-5'>
            <CardContent dest={featuredDestinations[5]} />
          </div>
          <div className='relative overflow-hidden rounded-xl shadow-lg cursor-pointer transform transition-transform duration-300 hover:scale-105 lg:row-span-3 lg:col-start-1 lg:row-start-4'>
            <CardContent dest={featuredDestinations[1]} />
          </div>
          <div className='relative overflow-hidden rounded-xl shadow-lg cursor-pointer transform transition-transform duration-300 hover:scale-105 lg:row-span-3 lg:col-start-2 lg:row-start-4'>
            <CardContent dest={featuredDestinations[3]} />
          </div>
        </div>

        {/* Medium Screen Layout (md to lg) */}
        <div className='hidden md:grid lg:hidden md:grid-cols-4 md:grid-rows-8 md:gap-2 md:h-[600px]'>
          <div className='relative overflow-hidden rounded-xl shadow-lg cursor-pointer transform transition-transform duration-300 hover:scale-105 md:col-span-4 md:row-span-3'>
            <CardContent dest={featuredDestinations[0]} isLarge={true} />
          </div>

          <div className='relative overflow-hidden rounded-xl shadow-lg cursor-pointer transform transition-transform duration-300 hover:scale-105 md:col-span-2 md:row-span-3 md:row-start-4'>
            <CardContent dest={featuredDestinations[1]} />
          </div>

          <div className='relative overflow-hidden rounded-xl shadow-lg cursor-pointer transform transition-transform duration-300 hover:scale-105 md:col-span-2 md:row-span-3 md:col-start-3 md:row-start-4'>
            <CardContent dest={featuredDestinations[2]} />
          </div>

          <div className='relative overflow-hidden rounded-xl shadow-lg cursor-pointer transform transition-transform duration-300 hover:scale-105 md:row-span-2 md:row-start-7'>
            <CardContent dest={featuredDestinations[3]} />
          </div>
          <div className='relative overflow-hidden rounded-xl shadow-lg cursor-pointer transform transition-transform duration-300 hover:scale-105 md:row-span-2 md:row-start-7'>
            <CardContent dest={featuredDestinations[4]} />
          </div>
          <div className='relative overflow-hidden rounded-xl shadow-lg cursor-pointer transform transition-transform duration-300 hover:scale-105 md:row-span-2 md:row-start-7'>
            <CardContent dest={featuredDestinations[5]} />
          </div>
          <div className='relative overflow-hidden rounded-xl shadow-lg cursor-pointer transform transition-transform duration-300 hover:scale-105 md:row-span-2 md:row-start-7'>
            <CardContent dest={featuredDestinations[0]} />
          </div>
        </div>

        {/* Small Screen Layout (sm and below) */}
        <div className='grid md:hidden grid-cols-4 grid-rows-9 gap-2 h-[700px]'>
          <div className='relative overflow-hidden rounded-xl shadow-lg cursor-pointer transform transition-transform duration-300 hover:scale-105 col-span-4 row-span-3'>
            <CardContent dest={featuredDestinations[0]} isLarge={true} />
          </div>
          <div className='relative overflow-hidden rounded-xl shadow-lg cursor-pointer transform transition-transform duration-300 hover:scale-105 col-span-2 row-span-3 row-start-4'>
            <CardContent dest={featuredDestinations[1]} />
          </div>
          <div className='relative overflow-hidden rounded-xl shadow-lg cursor-pointer transform transition-transform duration-300 hover:scale-105 col-span-2 row-span-3 col-start-3 row-start-4'>
            <CardContent dest={featuredDestinations[2]} />
          </div>
          <div className='relative overflow-hidden rounded-xl shadow-lg cursor-pointer transform transition-transform duration-300 hover:scale-105 col-span-2 row-span-3 row-start-7'>
            <CardContent dest={featuredDestinations[4]} />
          </div>
          <div className='relative overflow-hidden rounded-xl shadow-lg cursor-pointer transform transition-transform duration-300 hover:scale-105 col-span-2 row-span-3 col-start-3 row-start-7'>
            <CardContent dest={featuredDestinations[3]} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default TravelDestinations;
