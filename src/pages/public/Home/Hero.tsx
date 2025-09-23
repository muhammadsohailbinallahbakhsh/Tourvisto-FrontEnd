import { Button } from '@/components/ui/button';
import images from '@/constants/images';

const Hero = () => {
  return (
    <section className='relative h-[60vh] md:h-[70vh] w-full rounded-2xl'>
      <img
        src={images.heroImg}
        alt='Plan Your Trip'
        className='absolute inset-0 w-full h-full object-cover rounded-2xl'
      />
      {/* Overlay */}
      <div className='absolute inset-0 bg-white/40 rounded-2xl' />
      <div className='relative z-10 flex flex-col items-start justify-center h-full max-w-4xl mx-auto px-6'>
        <h1 className='p-72-bold !leading-10 md:!leading-15 lg:!leading-20'>
          Plan your
          <br />
          Trip with ease
        </h1>
        <p className='mt-2 md:mt-4 p-18-regular text-dark-200 max-w-lg'>
          Customize your travel itinerary in minutes—pick your destination, set
          your preferences, and explore with confidence.
        </p>
        <Button className='mt-4 md:mt-6' size='lg'>
          Get Started
        </Button>
      </div>
    </section>
  );
};

export default Hero;
