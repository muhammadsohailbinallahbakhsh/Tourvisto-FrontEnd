import { Button } from '@/components/ui/button';
import { Dialog, DialogOverlay, DialogContent } from '@/components/ui/dialog';
import { MoveRight, MoveLeft, Download, CircleXIcon } from 'lucide-react';
import type { DestinationProps } from './Destination';

interface DialogCarouselProps {
  isDialogOpen: boolean;
  carouselIndex: number;
  destination: DestinationProps;
  showPrev: () => void;
  showNext: () => void;
  handleDownload: () => void;
  setIsDialogOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const DialogCarousel = ({
  isDialogOpen,
  carouselIndex,
  destination,
  showPrev,
  showNext,
  handleDownload,
  setIsDialogOpen,
}: DialogCarouselProps) => {
  return (
    <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
      <DialogOverlay className='fixed inset-0 bg-black/80 backdrop-blur-sm' />
      <DialogContent className="w-full h-[90%] max-w-6xl p-0 bg-transparent border-none [&>button[data-slot='dialog-close']]:hidden">
        <div className='relative w-full h-full flex items-center justify-center'>
          <img
            src={destination.images[carouselIndex]}
            alt={`Lightbox ${carouselIndex + 1}`}
            className='max-h-[520px] h-full w-full object-cover rounded-lg'
          />
          <Button
            onClick={showPrev}
            className='absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/90 rounded-full px-4 py-6 hover:bg-white text-gray-800'
            size='lg'
          >
            <MoveLeft />
          </Button>
          <Button
            onClick={showNext}
            className='absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/90 rounded-full px-4 py-6 hover:bg-white text-gray-800'
            size='lg'
          >
            <MoveRight />
          </Button>
          <div className='absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-black/70 text-white px-6 py-3 rounded-full flex items-center gap-4'>
            <span className='text-sm'>
              {carouselIndex + 1} of {destination.images.length}
            </span>
            <div className='h-4 w-px bg-white/30'></div>
            <Button
              size='sm'
              variant='ghost'
              onClick={handleDownload}
              className='text-white hover:text-white hover:bg-white/20 h-auto p-2'
            >
              <Download className='w-4 h-4' />
            </Button>
          </div>

          <Button
            onClick={() => setIsDialogOpen(false)}
            className='absolute top-8 right-6 bg-black/50 hover:bg-black/70 text-white rounded-full'
            size='sm'
          >
            <CircleXIcon className='w-5 h-5' />
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default DialogCarousel;
