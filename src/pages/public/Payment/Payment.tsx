import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from '@/components/ui/select';
import { Button } from '@/components/ui/button';
import { Logo } from '@/components';
import icons from '@/constants/icons';
import images from '@/constants/images';
import { Apple } from 'lucide-react';
import { CountrySelect } from '@/components';

const PaymentPage = () => {
  return (
    <div className='flex flex-col lg:flex-row min-h-screen bg-gray-50 '>
      {/* Left Section */}
      <section className='w-full lg:w-1/2 flex flex-col justify-start items-start px-8 py-8 bg-gray-50'>
        <div className='w-full h-full max-w-md flex flex-col justify-between'>
          <div className='mb-4'>
            <div className='flex items-center gap-2 mb-10'>
              <img src={icons.arrowLeftIcon} className='' alt='' />
              <Logo
                wrapperClasses='flex-center gap-2'
                textClasses='p-24-semibold'
              />
            </div>
            <h2 className='p-18-regular text-dark-400 mb-2'>
              Pay 5-Day Japan Highlights: Culture, Food and Adventure
            </h2>
            <p className='p-40-semibold text-dark-100 mb-8'>$604.00</p>
            <img
              src={images.card6Img}
              alt='Tropical beach with palm trees'
              className='w-full md:w-1/2 lg:w-3/4 h-48 object-cover rounded-[10px] mb-4'
            />
            <h3 className='p-20-semibold text-dark-100 mb-3'>
              5-Day Japan Adventure
            </h3>
            <p className='p-16-regular text-gray-100'>
              Luxury, Diversity, and Harmony
            </p>
          </div>
          <div className='flex items-center gap-8 p-14-regular text-[#8792A2]'>
            <div className='flex gap-4'>
              <span>Powered by</span>
              <img src={icons.stripeIcon} alt='stripe' className='w-10 h-4' />
            </div>
            <span>|</span>
            <div className='flex gap-4'>
              <a href='#' className='hover:text-gray-600'>
                Terms
              </a>
              <a href='#' className='hover:text-gray-600'>
                Privacy
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Right Section */}
      <div className='w-full lg:w-1/2 flex flex-col justify-start items-center px-8 py-8 bg-white rounded-xl'>
        <div className='w-full max-w-md space-y-6'>
          <Button className='w-full h-12 flex items-center justify-center  text-white cursor-pointer'>
            <Apple className='w-4 h-4' />
            <span className='p-16-semibold'>Pay</span>
          </Button>
          <div className='relative text-center'>
            <hr className='border-gray-200' />
            <span className='absolute -top-2.5 left-1/2 -translate-x-1/2 bg-white px-3 text-xs text-gray-400'>
              Or pay with card
            </span>
          </div>

          {/* Email Field */}
          <div className='flex flex-col gap-2'>
            <Label className='p-14-regular text-gray-100' htmlFor='duration'>
              Email
            </Label>
            <Input
              id='duration'
              className='py-6 px-4 border rounded-lg'
              placeholder='Enter number of days (e.g., 5, 12)'
              style={{
                background: 'var(--card)',
                fontSize: '16px',
                fontWeight: 400,
                color: '#7f7e83',
              }}
            />
          </div>

          {/* Card Details */}
          <div className='space-y-2'>
            <Label className='text-sm text-gray-600 font-medium'>
              Card information
            </Label>
            <div className='border border-gray-300 rounded-md overflow-hidden'>
              {/* Card Number Row */}
              <div className='flex items-center px-3 py-3 border-b  border-gray-300 bg-[var(--card)]'>
                <input
                  placeholder='1234 1234 1234 1234'
                  className='flex-1 focus:outline-none text-sm text-gray-700 placeholder-gray-400'
                />
                <div className='flex gap-1 ml-2'>
                  <img
                    src={icons.visaCardIcon}
                    alt='Visa'
                    className='h-4 w-6'
                  />
                  <img
                    src={icons.masterCardIcon}
                    alt='Mastercard'
                    className='h-4 w-6'
                  />
                  <img
                    src={icons.groupIcon}
                    alt='American Express'
                    className='h-4 w-6'
                  />
                  <img
                    src={icons.group2con}
                    alt='Discover'
                    className='h-4 w-6'
                  />
                </div>
              </div>
              {/* Expiry and CVC Row */}
              <div className='flex'>
                <input
                  placeholder='MM / YY'
                  className='flex-1 px-3 py-3 focus:outline-none text-sm text-gray-700 placeholder-gray-400 border-r border-gray-200'
                />
                <input
                  placeholder='CVC'
                  className='flex-1 px-3 py-3 focus:outline-none text-sm text-gray-700 placeholder-gray-400'
                />
              </div>
            </div>
          </div>

          <div className='flex flex-col gap-2'>
            <Label className='p-14-regular text-gray-100' htmlFor='duration'>
              Name on Card
            </Label>
            <Input
              id='duration'
              className='py-6 px-4 border rounded-lg'
              placeholder='Enter number of days (e.g., 5, 12)'
              style={{
                background: 'var(--card)',
                fontSize: '16px',
                fontWeight: 400,
                color: '#7f7e83',
              }}
            />
          </div>

          {/* Country and ZIP */}
          <div className='space-y-2'>
            <div className='flex flex-col gap-2'>
              <CountrySelect isPaymentPage={true} />
            </div>
            <Input
              id='duration'
              className='py-6 px-4 border rounded-lg'
              placeholder='ZIP'
              style={{
                background: 'var(--card)',
                fontSize: '16px',
                fontWeight: 400,
                color: '#7f7e83',
              }}
            />
          </div>

          {/* Pay Button */}
          <Button className='w-full h-12 flex items-center justify-center  text-white cursor-pointer'>
            Pay $600
          </Button>
        </div>
      </div>
    </div>
  );
};

export default PaymentPage;
