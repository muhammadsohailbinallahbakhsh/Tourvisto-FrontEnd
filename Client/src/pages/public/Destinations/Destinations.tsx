import React, { useCallback, useMemo, useState, useEffect } from 'react';
import { PageHeader } from '@/pages/admin/components';

import { tripDestinationsData } from '@/mockData';
import {
  PageSizeAndStatsController,
  Pagination,
  DestinationCard,
} from '@/components';

const Destinations = () => {
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
    <main className='w-full flex flex-col gap-6'>
      <PageHeader
        heading='Destinations'
        subHeading='View Destinations to choose travel plans from'
        buttonCaption='Create a destination'
      />
      <PageSizeAndStatsController
        totalRecords={tripDestinationsData.length}
        pageSize={pageSize}
        currentPage={currentPage}
        onPageSizeChange={handlePageSizeChange}
        className='py-1 px-2'
      />
      <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4'>
        {pagedTrips.map((trip, index) => {
          return (
            <React.Fragment key={index}>
              <DestinationCard
                banner={trip.banner}
                id={trip.id}
                name={trip.name}
                country='Pakistan'
                region='Bahawalpur'
                tripsCount={12}
              />
            </React.Fragment>
          );
        })}
      </div>
      <Pagination
        totalRecords={tripDestinationsData.length}
        pageSize={pageSize}
        currentPage={currentPage}
        onPageChange={handlePageChange}
      />
    </main>
  );
};

export default Destinations;
