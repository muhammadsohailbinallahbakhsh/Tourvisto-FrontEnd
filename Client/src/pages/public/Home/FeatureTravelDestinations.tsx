import CardContent from './CardContent';
import { tripDestinationsData } from '@/mockData';

const TravelDestinations = () => {
  return (
    <section className=' mt-10'>
      <div>
        <h2 className='p-36-bold mb-2'>Featured Travel Destinations</h2>
        <p className='p-18-regular text-gray-100 mb-8'>
          Check out some of the best places you can visit around the world.
        </p>

        {/* Large Screen Layout (lg and above) */}
        <div className='hidden lg:grid lg:grid-cols-3 lg:grid-rows-6 lg:gap-2 lg:h-96'>
          <div className='relative overflow-hidden rounded-xl shadow-lg cursor-pointer transform transition-transform duration-300 hover:scale-105 lg:col-span-2 lg:row-span-3 lg:col-start-1 lg:row-start-1'>
            <CardContent {...tripDestinationsData[0]} isLarge={true} />
          </div>
          <div className='relative overflow-hidden rounded-xl shadow-lg cursor-pointer transform transition-transform duration-300 hover:scale-105 lg:row-span-2 lg:col-start-3 lg:row-start-1'>
            <CardContent {...tripDestinationsData[1]} />
          </div>
          <div className='relative overflow-hidden rounded-xl shadow-lg cursor-pointer transform transition-transform duration-300 hover:scale-105 lg:row-span-2 lg:col-start-3 lg:row-start-3'>
            <CardContent {...tripDestinationsData[3]} />
          </div>
          <div className='relative overflow-hidden rounded-xl shadow-lg cursor-pointer transform transition-transform duration-300 hover:scale-105 lg:row-span-2 lg:col-start-3 lg:row-start-5'>
            <CardContent {...tripDestinationsData[5]} />
          </div>
          <div className='relative overflow-hidden rounded-xl shadow-lg cursor-pointer transform transition-transform duration-300 hover:scale-105 lg:row-span-3 lg:col-start-1 lg:row-start-4'>
            <CardContent {...tripDestinationsData[7]} />
          </div>
          <div className='relative overflow-hidden rounded-xl shadow-lg cursor-pointer transform transition-transform duration-300 hover:scale-105 lg:row-span-3 lg:col-start-2 lg:row-start-4'>
            <CardContent {...tripDestinationsData[8]} />
          </div>
        </div>

        {/* Medium Screen Layout (md to lg) */}
        <div className='hidden md:grid lg:hidden md:grid-cols-4 md:grid-rows-8 md:gap-2 md:h-[600px]'>
          <div className='relative overflow-hidden rounded-xl shadow-lg cursor-pointer transform transition-transform duration-300 hover:scale-105 md:col-span-4 md:row-span-3'>
            <CardContent {...tripDestinationsData[0]} isLarge={true} />
          </div>

          <div className='relative overflow-hidden rounded-xl shadow-lg cursor-pointer transform transition-transform duration-300 hover:scale-105 md:col-span-2 md:row-span-3 md:row-start-4'>
            <CardContent {...tripDestinationsData[3]} />
          </div>

          <div className='relative overflow-hidden rounded-xl shadow-lg cursor-pointer transform transition-transform duration-300 hover:scale-105 md:col-span-2 md:row-span-3 md:col-start-3 md:row-start-4'>
            <CardContent {...tripDestinationsData[5]} />
          </div>

          <div className='relative overflow-hidden rounded-xl shadow-lg cursor-pointer transform transition-transform duration-300 hover:scale-105 md:row-span-2 md:row-start-7'>
            <CardContent {...tripDestinationsData[7]} />
          </div>
          <div className='relative overflow-hidden rounded-xl shadow-lg cursor-pointer transform transition-transform duration-300 hover:scale-105 md:row-span-2 md:row-start-7'>
            <CardContent {...tripDestinationsData[3]} />
          </div>
          <div className='relative overflow-hidden rounded-xl shadow-lg cursor-pointer transform transition-transform duration-300 hover:scale-105 md:row-span-2 md:row-start-7'>
            <CardContent {...tripDestinationsData[9]} />
          </div>
          <div className='relative overflow-hidden rounded-xl shadow-lg cursor-pointer transform transition-transform duration-300 hover:scale-105 md:row-span-2 md:row-start-7'>
            <CardContent {...tripDestinationsData[11]} />
          </div>
        </div>

        {/* Small Screen Layout (sm and below) */}
        <div className='grid md:hidden grid-cols-4 grid-rows-9 gap-2 h-[700px]'>
          <div className='relative overflow-hidden rounded-xl shadow-lg cursor-pointer transform transition-transform duration-300 hover:scale-105 col-span-4 row-span-3'>
            <CardContent {...tripDestinationsData[12]} isLarge={true} />
          </div>
          <div className='relative overflow-hidden rounded-xl shadow-lg cursor-pointer transform transition-transform duration-300 hover:scale-105 col-span-2 row-span-3 row-start-4'>
            <CardContent {...tripDestinationsData[13]} />
          </div>
          <div className='relative overflow-hidden rounded-xl shadow-lg cursor-pointer transform transition-transform duration-300 hover:scale-105 col-span-2 row-span-3 col-start-3 row-start-4'>
            <CardContent {...tripDestinationsData[19]} />
          </div>
          <div className='relative overflow-hidden rounded-xl shadow-lg cursor-pointer transform transition-transform duration-300 hover:scale-105 col-span-2 row-span-3 row-start-7'>
            <CardContent {...tripDestinationsData[24]} />
          </div>
          <div className='relative overflow-hidden rounded-xl shadow-lg cursor-pointer transform transition-transform duration-300 hover:scale-105 col-span-2 row-span-3 col-start-3 row-start-7'>
            <CardContent {...tripDestinationsData[23]} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default TravelDestinations;
