import { useNavigate } from 'react-router';
import { Card, CardContent } from './ui/card';
import icons from '@/constants/icons';
import type { DestinationCardPropsType } from '@/types/components';

const DestinationCard = ({
  id,
  name,
  country,
  region,
  tripsCount,
  banner,
}: DestinationCardPropsType) => {
  const navigate = useNavigate();
  return (
    <Card className=' bg-white rounded-[20px] shadow-400 overflow-hidden border-0 py-0 '>
      <div
        className='relative'
        onClick={() => navigate(`/admin/destinations/${id}`)}
      >
        <img
          src={banner}
          alt='Mountain lake under moonlight'
          className='w-full h-48 object-cover'
        />
        <div className='absolute inset-0 bg-transparent hover:bg-black/60 transition-colors duration-300 cursor-pointer '></div>
        <span className='absolute top-4 right-4 bg-white  p-14-semibold px-3 py-1 rounded-[20px] '>
          Total trips ${tripsCount}
        </span>
      </div>
      <CardContent className='p-4'>
        <h2 className='p-18-semibold mb-3'>{name}</h2>
        <div className='flex items-center mb-5  gap-2'>
          <img src={icons.locationMarkIcon} alt='location mark icon' />
          <span className='p-14-regular text-gray-100 '>
            {country}, {region}
          </span>
        </div>
      </CardContent>
    </Card>
  );
};

export default DestinationCard;
