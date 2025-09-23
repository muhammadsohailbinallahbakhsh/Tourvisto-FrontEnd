import { Star } from 'lucide-react';

interface RatingProps {
  rating: number;
  maxRating?: number;
  size?: 'sm' | 'md' | 'lg' | 'xl';
}

const DynamicRatingController = ({
  rating,
  maxRating = 5,
  size = 'md',
}: RatingProps) => {
  const getSizeClasses = () => {
    switch (size) {
      case 'sm':
        return 'w-3 h-3';
      case 'md':
        return 'w-4 h-4';
      case 'lg':
        return 'w-5 h-5';
      case 'xl':
        return 'w-6 h-6';
      default:
        return 'w-4 h-4';
    }
  };

  const sizeClasses = getSizeClasses();

  const renderStar = (index: number) => {
    const starValue = index + 1;

    if (rating >= starValue) {
      return (
        <Star
          key={index}
          className={`${sizeClasses} fill-yellow-400 text-yellow-400`}
        />
      );
    } else if (rating > index) {
      const fillPercentage = (rating - index) * 100;
      return (
        <div key={index} className='relative inline-block'>
          <Star className={`${sizeClasses} text-gray-300`} />
          <div
            className='absolute top-0 left-0 overflow-hidden'
            style={{ width: `${fillPercentage}%` }}
          >
            <Star
              className={`${sizeClasses} fill-yellow-400 text-yellow-400`}
            />
          </div>
        </div>
      );
    } else {
      return <Star key={index} className={`${sizeClasses} text-gray-300`} />;
    }
  };

  return (
    <div className='flex items-center space-x-1'>
      {[...Array(maxRating)].map((_, i) => renderStar(i))}
    </div>
  );
};

export default DynamicRatingController;
