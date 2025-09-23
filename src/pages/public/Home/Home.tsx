import React, { useState, useCallback, useMemo, useEffect } from 'react';
import TripCard from '@/components/TripCard';
import { Pagination, PageSizeAndStatsController } from '@/components';
import { tripDestinationsData } from '@/mockData';
import TravelDestinations from './FeatureTravelDestinations';
import Hero from './Hero';

const HomePage = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [pageSize, setPageSize] = useState(10);

  const totalPages = useMemo(() => {
    return Math.ceil(tripDestinationsData.length / pageSize);
  }, [pageSize]);

  useEffect(() => {
    if (currentPage > totalPages && totalPages > 0) {
      setCurrentPage(totalPages);
    }
  }, [totalPages, currentPage]);

  const handlePageChange = useCallback(
    (page: number) => {
      const validPage = Math.min(
        Math.max(page, 1),
        Math.ceil(tripDestinationsData.length / pageSize)
      );
      setCurrentPage(validPage);
    },
    [pageSize]
  );

  const handlePageSizeChange = useCallback((size: number) => {
    setPageSize(size);
    setCurrentPage(1);
  }, []);

  const pagedTrips = useMemo(() => {
    if (!tripDestinationsData || tripDestinationsData.length === 0) {
      return [];
    }
    const startIndex = Math.max(0, (currentPage - 1) * pageSize);
    const endIndex = Math.min(
      startIndex + pageSize,
      tripDestinationsData.length
    );
    return tripDestinationsData.slice(startIndex, endIndex);
  }, [currentPage, pageSize]);

  return (
    <main className='flex-1 overflow-auto'>
      <Hero />
      <TravelDestinations />
      {/* Hand pick destinations */}
      <div className='mt-12'>
        <h2 className='p-36-bold mb-2'>Handpicked Trips</h2>
        <p className='p-18-regular text-gray-100 mb-8'>
          Browse well-planned trips designed for different travel styles and
          interests
        </p>
        <div className='mb-3'>
          <PageSizeAndStatsController
            totalRecords={tripDestinationsData.length}
            pageSize={pageSize}
            currentPage={currentPage}
            onPageSizeChange={handlePageSizeChange}
            className='py-1 px-2'
          />
        </div>
        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4'>
          {pagedTrips.map((trip, index) => {
            return (
              <React.Fragment key={index}>
                <TripCard {...trip} />
              </React.Fragment>
            );
          })}
        </div>
        <div className='py-10'>
          <Pagination
            totalRecords={tripDestinationsData.length}
            pageSize={pageSize}
            currentPage={currentPage}
            onPageChange={handlePageChange}
          />
        </div>
      </div>
    </main>
  );
};

export default HomePage;
