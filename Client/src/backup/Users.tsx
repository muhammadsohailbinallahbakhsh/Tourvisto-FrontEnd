import { PageHeader } from '../components';

import { Trash2, ChevronLeft, ChevronRight } from 'lucide-react';

// Sample user data - replace with your actual data structure
const users = [
  {
    id: 1,
    name: 'James Anderson',
    email: 'olivia@jsmastery.pro',
    avatar:
      'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face',
    dateJoined: 'Jan 6, 2022',
    itineraryCount: 12,
    status: 'User',
  },
  {
    id: 2,
    name: 'Michael Johnson',
    email: 'phoenix@jsmastery.pro',
    avatar:
      'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop&crop=face',
    dateJoined: 'Jan 6, 2022',
    itineraryCount: 21,
    status: 'User',
  },
  {
    id: 3,
    name: 'David Brown',
    email: 'lana@jsmastery.pro',
    avatar:
      'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face',
    dateJoined: 'Jan 6, 2022',
    itineraryCount: 15,
    status: 'Admin',
  },
  {
    id: 4,
    name: 'Jason Wilson',
    email: 'demi@jsmastery.pro',
    avatar:
      'https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?w=100&h=100&fit=crop&crop=face',
    dateJoined: 'Jan 5, 2022',
    itineraryCount: 3,
    status: 'User',
  },
  {
    id: 5,
    name: 'Mark Davis',
    email: 'candice@jsmastery.pro',
    avatar: null, // This will show initials
    initials: 'MD',
    dateJoined: 'Jan 5, 2022',
    itineraryCount: 6,
    status: 'Admin',
  },
  {
    id: 6,
    name: 'Kevin Taylor',
    email: 'natali@jsmastery.pro',
    avatar:
      'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face',
    dateJoined: 'Jan 5, 2022',
    itineraryCount: 31,
    status: 'User',
  },
  {
    id: 7,
    name: 'Brian Miller',
    email: 'drew@jsmastery.pro',
    avatar:
      'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop&crop=face',
    dateJoined: 'Jan 4, 2022',
    itineraryCount: 17,
    status: 'User',
  },
  {
    id: 8,
    name: 'Orlando Diggs',
    email: 'orlando@jsmastery.pro',
    avatar:
      'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face',
    dateJoined: 'Jan 5, 2022',
    itineraryCount: 26,
    status: 'Admin',
  },
];

const ManageUsersTable = () => {
  const handleDeleteUser = (userId: any) => {
    console.log('Delete user:', userId);
  };

  const handlePageChange = (page: any) => {
    console.log('Change to page:', page);
  };

  return (
    <main className='w-full flex flex-col gap-6 items-start justify-start'>
      <PageHeader
        heading='Manage Users'
        subHeading='Filter, sort, and access detailed user profiles'
        buttonCaption='Add new user'
      />
      <div className='w-full bg-white overflow-x-auto md:overflow-x-visible'>
        {/* Main Table */}
        <div
          className='bg-white rounded-lg overflow-hidden'
          style={{ boxShadow: 'var(--shadow-100)' }}
        >
          <table className='w-full'>
            <thead className='bg-white border-b border-border'>
              <tr>
                <th className='text-left px-6 py-4 p-12-medium text-gray-500 uppercase tracking-wide font-medium'>
                  NAME
                </th>
                <th className='text-left px-6 py-4 p-12-medium text-gray-500 uppercase tracking-wide font-medium'>
                  EMAIL ADDRESS
                </th>
                <th className='text-left px-6 py-4 p-12-medium text-gray-500 uppercase tracking-wide font-medium'>
                  DATE JOINED
                </th>
                <th className='text-left px-6 py-4 p-12-medium text-gray-500 uppercase tracking-wide font-medium'>
                  ITINERARY CREATED
                </th>
                <th className='text-left px-6 py-4 p-12-medium text-gray-500 uppercase tracking-wide font-medium'>
                  STATUS
                </th>
                <th className='w-12 px-6 py-4'></th>
              </tr>
            </thead>
            <tbody className='bg-white'>
              {users.map((user) => (
                <tr
                  key={user.id}
                  className='border-b border-border hover:bg-light-200 transition-colors'
                >
                  <td className='px-6 py-4'>
                    <div className='flex items-center gap-3'>
                      {user.avatar ? (
                        <div className='w-10 h-10 rounded-full overflow-hidden flex-shrink-0'>
                          <img
                            src={user.avatar}
                            alt={user.name}
                            className='w-full h-full object-cover'
                          />
                        </div>
                      ) : (
                        <div className='w-10 h-10 rounded-full bg-primary-100 flex items-center justify-center flex-shrink-0'>
                          <span className='p-14-semibold text-white'>
                            {user.initials}
                          </span>
                        </div>
                      )}
                      <span className='p-16-medium text-dark-100'>
                        {user.name}
                      </span>
                    </div>
                  </td>
                  <td className='px-6 py-4'>
                    <span className='p-16-regular text-gray-700'>
                      {user.email}
                    </span>
                  </td>
                  <td className='px-6 py-4'>
                    <span className='p-16-regular text-gray-700'>
                      {user.dateJoined}
                    </span>
                  </td>
                  <td className='px-6 py-4'>
                    <span className='p-16-regular text-gray-700'>
                      {user.itineraryCount}
                    </span>
                  </td>
                  <td className='px-6 py-4'>
                    <span
                      className={`inline-flex items-center px-2.5 py-0.5 rounded-full p-12-medium ${
                        user.status === 'Admin'
                          ? 'bg-light-300 text-gray-700'
                          : 'bg-success-50 text-success-700'
                      }`}
                    >
                      {user.status}
                    </span>
                  </td>
                  <td className='px-6 py-4'>
                    <button
                      onClick={() => handleDeleteUser(user.id)}
                      className='h-8 w-8 flex items-center justify-center rounded-md hover:bg-red-50 hover:text-red-500 transition-colors'
                    >
                      <Trash2 className='h-4 w-4 text-gray-400' />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Pagination */}
        <div className='flex items-center justify-between py-4 px-5'>
          <button className='flex items-center gap-2 px-4 py-2 p-16-medium text-gray-700 border border-border rounded-md hover:bg-light-200 transition-colors'>
            <ChevronLeft className='h-4 w-4' />
            Previous
          </button>

          <div className='flex items-center gap-2'>
            {[1, 2, 3, 4, 5, 6].map((page) => (
              <button
                key={page}
                onClick={() => handlePageChange(page)}
                className={`h-10 w-10 rounded-md p-16-medium transition-colors ${
                  page === 1
                    ? 'bg-primary-100 text-white hover:bg-primary-500'
                    : 'text-gray-700 border border-border hover:bg-light-200'
                }`}
              >
                {page}
              </button>
            ))}
          </div>

          <button className='flex items-center gap-2 px-4 py-2 p-16-medium text-gray-700 border border-border rounded-md hover:bg-light-200 transition-colors'>
            Next
            <ChevronRight className='h-4 w-4' />
          </button>
        </div>
      </div>
    </main>
  );
};

export default ManageUsersTable;
