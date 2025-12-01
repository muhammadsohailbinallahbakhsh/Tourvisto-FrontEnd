// src/components/PaymentPageDesign.tsx
'use client';

import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from '@/components/ui/select';
import { ArrowLeft } from 'lucide-react';

export interface PaymentPageDesignProps {
  logoSrc: string; // URL or import for your logo
  // callback when back arrow clicked
  tripTitle: string; // e.g. "5-Day Japan Highlights: Culture, Food and Adventure"
  amount: number; // e.g. 604.00 (dollars)
  tripImageSrc: string; // URL or import for trip image
  tripSubtitle?: string; // e.g. "Luxury, Diversity, and Harmony"
}

const PaymentPageDesign: React.FC<PaymentPageDesignProps> = ({
  logoSrc,

  tripTitle,
  amount,
  tripImageSrc,
  tripSubtitle,
}) => {
  // Local state just for controlled inputs; no real submission logic here
  const [email, setEmail] = useState('');
  const [cardNumber, setCardNumber] = useState('');
  const [expiry, setExpiry] = useState('');
  const [cvc, setCvc] = useState('');
  const [nameOnCard, setNameOnCard] = useState('');
  const [country, setCountry] = useState('United States');
  const [zip, setZip] = useState('');

  // Format amount display, e.g. "$604.00"
  const formattedAmount = `$${amount.toFixed(2)}`;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // No real submission here. Later you can integrate Stripe or other logic.
    console.log('Form submitted (design only)', {
      email,
      cardNumber,
      expiry,
      cvc,
      nameOnCard,
      country,
      zip,
    });
  };

  return (
    <div className='min-h-screen flex items-center justify-center bg-gray-50 p-4'>
      <div className='bg-white rounded-lg shadow-lg overflow-hidden flex flex-col md:flex-row max-w-4xl w-full'>
        {/* Left summary */}
        <div className='w-full md:w-1/2 p-6 flex flex-col'>
          <div className='flex items-center mb-6'>
            {/* {onBack && (
              <button
                onClick={onBack}
                className='p-1 rounded hover:bg-gray-100'
                type='button'
              >
                <ArrowLeft className='w-5 h-5 text-gray-700' />
              </button>
            )} */}
            <img src={logoSrc} alt='Logo' className='h-6 ml-2' />
          </div>

          <h2 className='text-xl font-medium text-gray-700 mb-2'>
            Pay {tripTitle}
          </h2>
          <p className='text-3xl font-semibold text-gray-900 mb-6'>
            {formattedAmount}
          </p>

          <img
            src={tripImageSrc}
            alt={tripTitle}
            className='w-full h-40 object-cover rounded-lg mb-4'
          />
          <h3 className='text-lg font-semibold text-gray-900'>{tripTitle}</h3>
          {tripSubtitle && (
            <p className='text-sm text-gray-500 mt-1'>{tripSubtitle}</p>
          )}

          <div className='mt-auto pt-6 text-xs text-gray-500'>
            <div className='flex items-center space-x-1'>
              <span>Powered by</span>
              {/* Replace with your Stripe logo asset or local image */}
              <img
                src='https://stripe.com/img/v3/home/twitter.png'
                alt='Stripe'
                className='h-4'
              />
            </div>
            <div className='flex space-x-4 mt-2'>
              <a href='/terms' className='hover:underline'>
                Terms
              </a>
              <a href='/privacy' className='hover:underline'>
                Privacy
              </a>
            </div>
          </div>
        </div>

        {/* Divider on medium+ screens */}
        <div className='hidden md:block border-l border-gray-200' />

        {/* Right payment form (design only) */}
        <div className='w-full md:w-1/2 p-6'>
          <form onSubmit={handleSubmit} className='space-y-6'>
            {/* Apple Pay style button (design only) */}
            <button
              type='button'
              className='w-full flex items-center justify-center bg-black text-white py-3 rounded-lg'
              onClick={() => {
                // no-op for now
                console.log('Apple Pay button clicked (design only)');
              }}
            >
              <span className='text-lg font-medium'> Pay</span>
            </button>

            {/* Separator: Or pay with card */}
            <div className='flex items-center text-sm text-gray-500'>
              <hr className='flex-grow border-t border-gray-300' />
              <span className='px-2 whitespace-nowrap'>Or pay with card</span>
              <hr className='flex-grow border-t border-gray-300' />
            </div>

            {/* Email */}
            <div>
              <label
                htmlFor='email'
                className='block text-sm font-medium text-gray-700'
              >
                Email
              </label>
              <Input
                id='email'
                type='email'
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className='mt-1'
                placeholder='you@example.com'
              />
            </div>

            {/* Card fields: purely design placeholders */}
            <div>
              <label className='block text-sm font-medium text-gray-700 mb-1'>
                Card details
              </label>
              <div className='grid grid-cols-1 sm:grid-cols-3 gap-2'>
                {/* Card Number */}
                <div className='col-span-1 sm:col-span-2'>
                  <Input
                    type='text'
                    value={cardNumber}
                    onChange={(e) => setCardNumber(e.target.value)}
                    placeholder='1234 1234 1234 1234'
                    className='mt-1'
                  />
                </div>
                {/* Expiry */}
                <div>
                  <Input
                    type='text'
                    value={expiry}
                    onChange={(e) => setExpiry(e.target.value)}
                    placeholder='MM/YY'
                    className='mt-1'
                  />
                </div>
                {/* CVC */}
                <div>
                  <Input
                    type='text'
                    value={cvc}
                    onChange={(e) => setCvc(e.target.value)}
                    placeholder='CVC'
                    className='mt-1'
                  />
                </div>
              </div>
            </div>

            {/* Name on card */}
            <div>
              <label
                htmlFor='nameOnCard'
                className='block text-sm font-medium text-gray-700'
              >
                Name on card
              </label>
              <Input
                id='nameOnCard'
                type='text'
                value={nameOnCard}
                onChange={(e) => setNameOnCard(e.target.value)}
                required
                className='mt-1'
                placeholder='John Doe'
              />
            </div>

            {/* Country/Region and ZIP */}
            <div className='grid grid-cols-1 sm:grid-cols-2 gap-4'>
              <div>
                <label
                  htmlFor='country'
                  className='block text-sm font-medium text-gray-700'
                >
                  Country or region
                </label>
                <Select
                  value={country}
                  onValueChange={(val) => setCountry(val)}
                >
                  <SelectTrigger className='mt-1 w-full'>
                    <SelectValue placeholder='Select country' />
                  </SelectTrigger>
                  <SelectContent>
                    {/* Add or generate full country list later */}
                    <SelectItem value='United States'>United States</SelectItem>
                    <SelectItem value='Canada'>Canada</SelectItem>
                    <SelectItem value='United Kingdom'>
                      United Kingdom
                    </SelectItem>
                    <SelectItem value='Australia'>Australia</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div>
                <label
                  htmlFor='zip'
                  className='block text-sm font-medium text-gray-700'
                >
                  ZIP
                </label>
                <Input
                  id='zip'
                  type='text'
                  value={zip}
                  onChange={(e) => setZip(e.target.value)}
                  required
                  className='mt-1'
                  placeholder='ZIP'
                />
              </div>
            </div>

            {/* Submit button (design only) */}
            <Button type='submit' className='w-full'>
              Pay {formattedAmount}
            </Button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default PaymentPageDesign;
