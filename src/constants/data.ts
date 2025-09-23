import icons from './icons';
import type { DashboardStatsType, NavLinkType } from '@/types';

const dashboardStats: DashboardStatsType[] = [
  {
    caption: 'Total Users',
    count: 12450,
    percentage: 12,
    icon: icons.incrementIcon,
    arrow: icons.arrowUpGreenIcon,
  },
  {
    caption: 'Total Trips',
    count: 3210,
    percentage: 2,
    icon: icons.decrementIcon,
    arrow: icons.arrowDownRedIcon,
  },
  {
    caption: 'Active Users Today',
    count: 520,
    percentage: 2,
    icon: icons.incrementIcon,
    arrow: icons.arrowUpGreenIcon,
  },
];

const navLinksAdmin: NavLinkType[] = [
  { lable: 'Dashboard', icon: icons.homeIcon, link: 'admin/dashboard' },
  { lable: 'Trips', icon: icons.itineraryIcon, link: 'admin/trips' },
  {
    lable: 'Destinations',
    icon: icons.destinationIcon,
    link: 'admin/destinations',
  },
  { lable: 'Users', icon: icons.usersIcon, link: 'admin/users' },
];

const navLinksUser: NavLinkType[] = [
  { lable: 'Home', icon: icons.homeIcon, link: '' },
  { lable: 'Trips', icon: icons.itineraryIcon, link: 'trips' },
  {
    lable: 'Destinations',
    icon: icons.destinationIcon,
    link: 'destinations',
  },
];

export { navLinksAdmin, navLinksUser, dashboardStats };
