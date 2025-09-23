import { PageHeader } from '@/pages/admin/components';
import StatCard from '@/pages/admin/Dashboard/StatCard';
import TripCard from '@/components/TripCard';
import { dashboardStats } from '@/constants/data';
import { UserGrowthChart } from '@/pages/admin/Dashboard/UserGrowthChart';
import TripTrendsChart from '@/pages/admin/Dashboard/TripTrendsChart';
import LatestSignupsTable from '@/pages/admin/Dashboard/LatestSignupTable';
import '@/mockData/tripsData';
import { tripDestinationsData } from '@/mockData';

const Dashboard = () => {
  const heading: string = 'Welcome Sohail 👋';
  const subHeading: string =
    'Track activity, trends, and popular destinations in real time';
  const buttonCaption: string = 'Create a trip';

  return (
    <main className='w-full flex flex-col gap-6 items-start justify-start'>
      <PageHeader
        buttonCaption={buttonCaption}
        subHeading={subHeading}
        heading={heading}
      />
      <div className='w-full flex flex-row gap-6 items-center  flex-wrap'>
        {dashboardStats.map((statCard, index) => {
          return (
            <StatCard
              key={index}
              caption={statCard.caption}
              arrow={statCard.arrow}
              icon={statCard.icon}
              count={statCard.count}
              percentage={statCard.percentage}
            />
          );
        })}
      </div>
      <div>
        <h2 className='mb-4 p-20-semibold'>Trips</h2>
        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8'>
          <TripCard {...tripDestinationsData[0]} />
          <TripCard {...tripDestinationsData[1]} />
          <TripCard {...tripDestinationsData[2]} />
          <TripCard {...tripDestinationsData[3]} />
        </div>
      </div>

      {/* <div className='w-full flex flex-row gap-6 items-center justify-start flex-wrap'>
        <UserGrowthChart />
        <TripTrendsChart />
      </div> */}

      <div className='flex flex-row  gap-6 items-center justify-start flex-wrap'>
        <LatestSignupsTable />
        <LatestSignupsTable />
      </div>
    </main>
  );
};

export default Dashboard;
