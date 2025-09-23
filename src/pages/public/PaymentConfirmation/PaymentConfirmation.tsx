import { Button } from '@/components/ui/button';
import icons from '@/constants/icons';

const PaymentConfirmation = () => {
  return (
    <main
      className={`relative 
       w-full bg-confitte bg-no-repeat bg-cover bg-center`}
    >
      <div className='absolute inset-0 bg-light-200/60 z-10' />
      <div className='relative z-20 flex items-center justify-center h-fit px-4 py-6 sm:py-10'>
        <div className='flex flex-col gap-6 items-center justify-start max-w-[500px]'>
          <img
            src={icons.checkIcon}
            alt='check icon'
            className='h-16 w-16 md:h-24 md:w-24'
          />
          <h1 className='p-30-semibold text-dark-100'>
            Thank You & Welcome Aboard!
          </h1>
          <p className='text-dark-400 p-18-regular '>
            Your trip’s booked — can’t wait to have you on this adventure! 🌍️
            Get ready to explore & make memories.✨
          </p>
          <Button className='w-full !shadow-500 p-16-regular py-6'>
            View trip details
          </Button>
          <Button className='w-full text-dark-100 !shadow-500 p-16-regular py-6 bg-white hover:bg-white/80'>
            Return to homepage
          </Button>
        </div>
      </div>
    </main>
  );
};

export default PaymentConfirmation;
