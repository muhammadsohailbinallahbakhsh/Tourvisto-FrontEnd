import type { TripDestinationPropsType } from '@/types';
import { Watch } from 'lucide-react';

type CardContentPropsType = TripDestinationPropsType & { isLarge?: boolean };

const CardContent = ({
  banner,
  rating,
  name,
  activitiesCount,
  isLarge = false,
}: CardContentPropsType) => (
  <>
    <img src={banner} alt={name} className='w-full h-full object-cover' />
    <div className='absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent' />
    <div className='absolute top-3 left-3 bg-white text-orange-500 p-14-bold px-3 py-1 rounded-full shadow-lg'>
      {rating ? rating.toFixed(1) : 4.5}
    </div>
    <div className='absolute bottom-4 left-4 text-white'>
      <h3
        className={` text-white drop-shadow-lg 
          ${isLarge ? 'p-24-bold mb-2' : 'p-18-bold mb-1'}`}
      >
        {name}
      </h3>
      <div className='flex items-center text-white/90'>
        <Watch />
        <span className='p-14-regular'>
          {activitiesCount || 102} Activities
        </span>
      </div>
    </div>
  </>
);

export default CardContent;
