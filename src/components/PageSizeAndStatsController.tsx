import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from '@/components/ui/select';

interface PageSizeAndStatsController {
  totalRecords: number;
  pageSize: number;
  currentPage: number;
  onPageSizeChange: (size: number) => void;
  pageSizeOptions?: number[];
  className?: string;
}

const PageSizeAndStatsController = ({
  totalRecords,
  pageSize,
  currentPage,
  onPageSizeChange,
  pageSizeOptions = [5, 10, 20, 50],
  className = '',
}: PageSizeAndStatsController) => {
  const getDisplayRange = () => {
    if (totalRecords === 0) {
      return {
        start: 0,
        end: 0,
        total: 0,
      };
    }
    const start = (currentPage - 1) * pageSize + 1;
    const end = Math.min(start + pageSize - 1, totalRecords);

    return {
      start,
      end,
      total: totalRecords,
    };
  };

  const displayRange = getDisplayRange();

  const getDisplayText = () => {
    const { start, end, total } = displayRange;

    if (total === 0) {
      return 'No records to display';
    }

    if (start === end) {
      return `Showing ${start} of ${total.toLocaleString()} records`;
    }

    return `Showing ${start.toLocaleString()}-${end.toLocaleString()} of ${total.toLocaleString()} records`;
  };

  return (
    <div
      className={`max-w-full flex items-center justify-between gap-4 ${className}`}
    >
      <div className='flex items-center gap-4'>
        <span className='p-14-regular text-gray-600'>{getDisplayText()}</span>
      </div>
      <div className='flex items-center gap-2'>
        <span className='p-14-regular text-gray-700 whitespace-nowrap'>
          Items per page:
        </span>
        <Select
          value={String(pageSize)}
          onValueChange={(val) => onPageSizeChange(Number(val))}
        >
          <SelectTrigger className='w-[80px] min-w-[80px] max-w-[80px] bg-input border-none focus:ring-2 focus:ring-blue-500'>
            <SelectValue />
          </SelectTrigger>
          <SelectContent className='w-[80px] min-w-[80px] max-w-[80px] bg-input border-none'>
            {pageSizeOptions.map((opt) => (
              <SelectItem
                key={opt}
                value={String(opt)}
                className={`justify-center
               ${
                 String(pageSize) === String(opt)
                   ? 'bg-primary-100 text-white hover:bg-primary-100 focus:bg-primary-100 hover:text-white focus:text-white'
                   : 'bg-muted hover:bg-primary-50 focus:bg-primary-50'
               } `}
              >
                {opt}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>
    </div>
  );
};

export default PageSizeAndStatsController;
