import React from 'react';
import { useNavigate } from 'react-router';
import { Card, CardContent } from '@/components/ui/card';
import icons from '@/constants/icons';
import type { TripDestinationPropsType } from '@/types';

const TripCard = ({
  id,
  name,
  banner,
  tags,
  price,
  location,
}: TripDestinationPropsType) => {
  const navigate = useNavigate();

  return (
    <Card className=' bg-white rounded-[20px] shadow-400 overflow-hidden border-0 py-0 '>
      {/* Card Image Section */}
      <div className='relative' onClick={() => navigate(`/admin/trips/${id}`)}>
        <img
          src={banner}
          alt='Mountain lake under moonlight'
          className='w-full h-48 object-cover'
        />
        <div className='absolute inset-0 bg-transparent hover:bg-black/60 transition-colors duration-300 cursor-pointer '></div>
        <span className='absolute top-4 right-4 bg-white  p-14-semibold px-3 py-1 rounded-[20px] '>
          ${price}
        </span>
      </div>
      {/* Card Content Section */}
      <CardContent className='p-4'>
        <h2 className='p-18-semibold mb-3'>{name}</h2>
        <div className='flex items-center mb-5  gap-2'>
          <img src={icons.locationMarkIcon} alt='location mark icon' />
          <span className='p-14-regular text-gray-100 '>{location}</span>
        </div>
        <div className='flex flex-wrap gap-2'>
          {tags.map((tag, index) => {
            return (
              <React.Fragment key={index}>
                <span
                  className={`${tag.background} ${tag.textColor} p-12-medium px-5 py-2 rounded-full`}
                >
                  {tag.label}
                </span>
              </React.Fragment>
            );
          })}
        </div>
      </CardContent>
    </Card>
  );
};

export default TripCard;
