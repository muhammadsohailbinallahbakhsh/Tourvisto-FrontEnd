import images from '@/constants/images';

const userGrowthChartData = [
  { month: 'Jan', users: 2200, growth: 2200 },
  { month: 'Feb', users: 1800, growth: 1800 },
  { month: 'Mar', users: 3000, growth: 2900 },
  { month: 'Apr', users: 1700, growth: 1600 },
  { month: 'May', users: 2000, growth: 2100 },
  { month: 'Jun', users: 2100, growth: 2150 },
];

const tripTrendsChartData = [
  { category: 'Beach', value: 100 },
  { category: 'Cultural', value: 15 },
  { category: 'City', value: 28 },
  { category: 'Nature', value: 22 },
  { category: 'Culinary', value: 40 },
  { category: 'Relax', value: 18 },
  { category: 'Adventure', value: 32 },
];

const latestSingupUsers = [
  {
    id: 1,
    name: 'James Anderson',
    avatar: images.jamesImg,
    itineraryCount: 12,
  },
  {
    id: 2,
    name: 'Michael Johnson',
    avatar: images.michaelImg,
    itineraryCount: 21,
  },
  {
    id: 3,
    name: 'David Brown',
    avatar: images.davidImg,
    itineraryCount: 15,
  },
  {
    id: 4,
    name: 'Orlando Diggs',
    avatar: images.jamesImg,
    itineraryCount: 26,
  },
];

const usersPageData = [
  {
    id: 1,
    name: 'James Anderson',
    email: 'james.anderson@tourvisto.com',
    avatar:
      'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face',
    dateJoined: 'Jan 6, 2023',
    itineraryCount: 12,
    status: 'User',
  },
  {
    id: 2,
    name: 'Michael Johnson',
    email: 'michael.johnson@tourvisto.com',
    avatar:
      'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop&crop=face',
    dateJoined: 'Jan 6, 2023',
    itineraryCount: 21,
    status: 'User',
  },
  {
    id: 3,
    name: 'David Brown',
    email: 'david.brown@tourvisto.com',
    avatar:
      'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face',
    dateJoined: 'Jan 6, 2023',
    itineraryCount: 15,
    status: 'Admin',
  },
  {
    id: 4,
    name: 'Jason Wilson',
    email: 'jason.wilson@tourvisto.com',
    avatar:
      'https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?w=100&h=100&fit=crop&crop=face',
    dateJoined: 'Jan 5, 2023',
    itineraryCount: 3,
    status: 'User',
  },
  {
    id: 5,
    name: 'Mark Davis',
    email: 'mark.davis@tourvisto.com',
    avatar: null,
    initials: 'MD',
    dateJoined: 'Jan 5, 2023',
    itineraryCount: 6,
    status: 'Admin',
  },
  {
    id: 6,
    name: 'Kevin Taylor',
    email: 'kevin.taylor@tourvisto.com',
    avatar:
      'https://images.unsplash.com/photo-1531123897727-8f129e1688ce?w=100&h=100&fit=crop&crop=face',
    dateJoined: 'Jan 5, 2023',
    itineraryCount: 31,
    status: 'User',
  },
  {
    id: 7,
    name: 'Brian Miller',
    email: 'brian.miller@tourvisto.com',
    avatar:
      'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=100&h=100&fit=crop&crop=face',
    dateJoined: 'Jan 4, 2023',
    itineraryCount: 17,
    status: 'User',
  },
  {
    id: 8,
    name: 'Orlando Diggs',
    email: 'orlando.diggs@tourvisto.com',
    avatar:
      'https://images.unsplash.com/photo-1488426862026-3ee34a7d66df?w=100&h=100&fit=crop&crop=face',
    dateJoined: 'Jan 5, 2023',
    itineraryCount: 26,
    status: 'Admin',
  },
  {
    id: 9,
    name: 'Emma Watson',
    email: 'emma.watson@tourvisto.com',
    avatar:
      'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop&crop=face',
    dateJoined: 'Feb 12, 2023',
    itineraryCount: 8,
    status: 'User',
  },
  {
    id: 10,
    name: 'Sophia Johnson',
    email: 'sophia.johnson@tourvisto.com',
    avatar:
      'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&crop=face',
    dateJoined: 'Mar 3, 2023',
    itineraryCount: 42,
    status: 'User',
  },

  {
    id: 11,
    name: 'Liam Smith',
    email: 'liam.smith@tourvisto.com',
    avatar:
      'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=100&h=100&fit=crop&crop=face',
    dateJoined: 'Jan 15, 2023',
    itineraryCount: 18,
    status: 'User',
  },
  {
    id: 12,
    name: 'Olivia Brown',
    email: 'olivia.brown@tourvisto.com',
    avatar:
      'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=100&h=100&fit=crop&crop=face',
    dateJoined: 'Feb 5, 2023',
    itineraryCount: 7,
    status: 'Admin',
  },
  {
    id: 13,
    name: 'Noah Williams',
    email: 'noah.williams@tourvisto.com',
    avatar:
      'https://images.unsplash.com/photo-1542190891-2093d38760f2?w=100&h=100&fit=crop&crop=face',
    dateJoined: 'Mar 10, 2023',
    itineraryCount: 33,
    status: 'User',
  },
  {
    id: 14,
    name: 'Ava Jones',
    email: 'ava.jones@tourvisto.com',
    avatar:
      'https://images.unsplash.com/photo-1554151228-14d9def656e4?w=100&h=100&fit=crop&crop=face',
    dateJoined: 'Apr 2, 2023',
    itineraryCount: 24,
    status: 'User',
  },
  {
    id: 15,
    name: 'William Garcia',
    email: 'william.garcia@tourvisto.com',
    avatar:
      'https://images.unsplash.com/photo-1552058544-f2b08422138a?w=100&h=100&fit=crop&crop=face',
    dateJoined: 'May 18, 2023',
    itineraryCount: 11,
    status: 'User',
  },
  {
    id: 16,
    name: 'Isabella Rodriguez',
    email: 'isabella.rodriguez@tourvisto.com',
    avatar:
      'https://images.unsplash.com/photo-1543610892-0b1f7e6d8ac1?w=100&h=100&fit=crop&crop=face',
    dateJoined: 'Jun 7, 2023',
    itineraryCount: 29,
    status: 'Admin',
  },
  {
    id: 17,
    name: 'James Wilson',
    email: 'james.wilson@tourvisto.com',
    avatar:
      'https://images.unsplash.com/photo-1566492031773-4f4e44671857?w=100&h=100&fit=crop&crop=face',
    dateJoined: 'Jul 22, 2023',
    itineraryCount: 5,
    status: 'User',
  },
  {
    id: 18,
    name: 'Sophia Martinez',
    email: 'sophia.martinez@tourvisto.com',
    avatar:
      'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=100&h=100&fit=crop&crop=face',
    dateJoined: 'Aug 14, 2023',
    itineraryCount: 37,
    status: 'User',
  },
  {
    id: 19,
    name: 'Benjamin Anderson',
    email: 'benjamin.anderson@tourvisto.com',
    avatar:
      'https://images.unsplash.com/photo-1568602471122-7832951cc4c5?w=100&h=100&fit=crop&crop=face',
    dateJoined: 'Sep 9, 2023',
    itineraryCount: 14,
    status: 'User',
  },
  {
    id: 20,
    name: 'Mia Thomas',
    email: 'mia.thomas@tourvisto.com',
    avatar:
      'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=100&h=100&fit=crop&crop=face',
    dateJoined: 'Oct 30, 2023',
    itineraryCount: 22,
    status: 'Admin',
  },
];

import tripDestinationsData from './tripsData';
import tripDetailsData from './tripDetailsData';

export {
  userGrowthChartData,
  tripTrendsChartData,
  latestSingupUsers,
  usersPageData,
  tripDestinationsData,
  tripDetailsData,
};
