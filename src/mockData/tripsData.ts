import type { TripDestinationPropsType } from '@/types';

const destinations: TripDestinationPropsType[] = [
  {
    id: 1,
    name: 'Ferries near Island with Castle',
    location: 'Kuşadası, Turkey',
    banner:
      'https://images.pexels.com/photos/13574651/pexels-photo-13574651.jpeg',
    price: '300',
    tags: [
      {
        label: 'Mountains',
        background: 'bg-[#ECFDF3]',
        textColor: 'text-[#027A48]',
      },
      {
        label: 'City',
        background: 'bg-[#ECFDF3]',
        textColor: 'text-[#027A48]',
      },
      {
        label: 'Castle',
        background: 'bg-[#ECFDF3]',
        textColor: 'text-[#027A48]',
      },
    ],
  },
  {
    id: 2,
    name: 'Ancient Colosseum Experience',
    location: 'Rome, Italy',
    banner:
      'https://images.pexels.com/photos/2032123/pexels-photo-2032123.jpeg',
    price: '450',
    tags: [
      {
        label: 'Historical',
        background: 'bg-[#FEF3F2]',
        textColor: 'text-[#B42318]',
      },
      {
        label: 'Architecture',
        background: 'bg-[#FDF2FA]',
        textColor: 'text-[#9E2B95]',
      },
      {
        label: 'City',
        background: 'bg-[#ECFDF3]',
        textColor: 'text-[#027A48]',
      },
    ],
  },
  {
    id: 3,
    name: 'Santorini Sunset Views',
    location: 'Santorini, Greece',
    banner:
      'https://images.pexels.com/photos/1285625/pexels-photo-1285625.jpeg',
    price: '380',
    tags: [
      {
        label: 'Beach',
        background: 'bg-[#F0F9FF]',
        textColor: 'text-[#0369A1]',
      },
      {
        label: 'Romantic',
        background: 'bg-[#FEF7ED]',
        textColor: 'text-[#DC6803]',
      },
      {
        label: 'Island',
        background: 'bg-[#F0F9FF]',
        textColor: 'text-[#0369A1]',
      },
    ],
  },
  {
    id: 4,
    name: 'Cherry Blossom Gardens',
    location: 'Kyoto, Japan',
    banner:
      'https://images.pexels.com/photos/2614818/pexels-photo-2614818.jpeg',
    price: '520',
    tags: [
      {
        label: 'Nature',
        background: 'bg-[#ECFDF3]',
        textColor: 'text-[#027A48]',
      },
      {
        label: 'Cultural',
        background: 'bg-[#FDF2FA]',
        textColor: 'text-[#9E2B95]',
      },
      {
        label: 'Gardens',
        background: 'bg-[#ECFDF3]',
        textColor: 'text-[#027A48]',
      },
    ],
  },
  {
    id: 5,
    name: 'Machu Picchu Trek',
    location: 'Cusco, Peru',
    banner:
      'https://images.pexels.com/photos/2356045/pexels-photo-2356045.jpeg',
    price: '680',
    tags: [
      {
        label: 'Mountains',
        background: 'bg-[#ECFDF3]',
        textColor: 'text-[#027A48]',
      },
      {
        label: 'Adventure',
        background: 'bg-[#FEF7ED]',
        textColor: 'text-[#DC6803]',
      },
      {
        label: 'Historical',
        background: 'bg-[#FEF3F2]',
        textColor: 'text-[#B42318]',
      },
    ],
  },
  {
    id: 6,
    name: 'Northern Lights Experience',
    location: 'Reykjavik, Iceland',
    banner:
      'https://images.pexels.com/photos/1933316/pexels-photo-1933316.jpeg',
    price: '750',
    tags: [
      {
        label: 'Nature',
        background: 'bg-[#ECFDF3]',
        textColor: 'text-[#027A48]',
      },
      {
        label: 'Winter',
        background: 'bg-[#F0F9FF]',
        textColor: 'text-[#0369A1]',
      },
      {
        label: 'Unique',
        background: 'bg-[#FDF2FA]',
        textColor: 'text-[#9E2B95]',
      },
    ],
  },
  {
    id: 7,
    name: 'Dubai Desert Safari',
    location: 'Dubai, UAE',
    banner:
      'https://images.pexels.com/photos/3243027/pexels-photo-3243027.jpeg',
    price: '320',
    tags: [
      {
        label: 'Desert',
        background: 'bg-[#FEF7ED]',
        textColor: 'text-[#DC6803]',
      },
      {
        label: 'Adventure',
        background: 'bg-[#FEF7ED]',
        textColor: 'text-[#DC6803]',
      },
      {
        label: 'Luxury',
        background: 'bg-[#FDF2FA]',
        textColor: 'text-[#9E2B95]',
      },
    ],
  },
  {
    id: 8,
    name: 'Bali Rice Terraces',
    location: 'Ubud, Indonesia',
    banner:
      'https://images.pexels.com/photos/2166553/pexels-photo-2166553.jpeg',
    price: '280',
    tags: [
      {
        label: 'Nature',
        background: 'bg-[#ECFDF3]',
        textColor: 'text-[#027A48]',
      },
      {
        label: 'Cultural',
        background: 'bg-[#FDF2FA]',
        textColor: 'text-[#9E2B95]',
      },
      {
        label: 'Peaceful',
        background: 'bg-[#ECFDF3]',
        textColor: 'text-[#027A48]',
      },
    ],
  },
  {
    id: 9,
    name: 'Eiffel Tower Views',
    location: 'Paris, France',
    banner:
      'https://images.pexels.com/photos/161853/eiffel-tower-paris-france-tower-161853.jpeg',
    price: '420',
    tags: [
      {
        label: 'Romantic',
        background: 'bg-[#FEF7ED]',
        textColor: 'text-[#DC6803]',
      },
      {
        label: 'City',
        background: 'bg-[#ECFDF3]',
        textColor: 'text-[#027A48]',
      },
      {
        label: 'Architecture',
        background: 'bg-[#FDF2FA]',
        textColor: 'text-[#9E2B95]',
      },
    ],
  },
  {
    id: 10,
    name: 'Great Wall Adventure',
    location: 'Beijing, China',
    banner:
      'https://images.pexels.com/photos/1414467/pexels-photo-1414467.jpeg',
    price: '380',
    tags: [
      {
        label: 'Historical',
        background: 'bg-[#FEF3F2]',
        textColor: 'text-[#B42318]',
      },
      {
        label: 'Adventure',
        background: 'bg-[#FEF7ED]',
        textColor: 'text-[#DC6803]',
      },
      {
        label: 'Mountains',
        background: 'bg-[#ECFDF3]',
        textColor: 'text-[#027A48]',
      },
    ],
  },
  {
    id: 11,
    name: 'Maldives Overwater Villas',
    location: 'Malé, Maldives',
    banner:
      'https://images.pexels.com/photos/1518428/pexels-photo-1518428.jpeg',
    price: '850',
    tags: [
      {
        label: 'Beach',
        background: 'bg-[#F0F9FF]',
        textColor: 'text-[#0369A1]',
      },
      {
        label: 'Luxury',
        background: 'bg-[#FDF2FA]',
        textColor: 'text-[#9E2B95]',
      },
      {
        label: 'Romantic',
        background: 'bg-[#FEF7ED]',
        textColor: 'text-[#DC6803]',
      },
    ],
  },
  {
    id: 12,
    name: 'Swiss Alps Skiing',
    location: 'Zermatt, Switzerland',
    banner: 'https://images.pexels.com/photos/773594/pexels-photo-773594.jpeg',
    price: '620',
    tags: [
      {
        label: 'Mountains',
        background: 'bg-[#ECFDF3]',
        textColor: 'text-[#027A48]',
      },
      {
        label: 'Winter',
        background: 'bg-[#F0F9FF]',
        textColor: 'text-[#0369A1]',
      },
      {
        label: 'Adventure',
        background: 'bg-[#FEF7ED]',
        textColor: 'text-[#DC6803]',
      },
    ],
  },
  {
    id: 13,
    name: 'Taj Mahal Sunrise',
    location: 'Agra, India',
    banner:
      'https://images.pexels.com/photos/1583339/pexels-photo-1583339.jpeg',
    price: '250',
    tags: [
      {
        label: 'Historical',
        background: 'bg-[#FEF3F2]',
        textColor: 'text-[#B42318]',
      },
      {
        label: 'Architecture',
        background: 'bg-[#FDF2FA]',
        textColor: 'text-[#9E2B95]',
      },
      {
        label: 'Cultural',
        background: 'bg-[#FDF2FA]',
        textColor: 'text-[#9E2B95]',
      },
    ],
  },
  {
    id: 14,
    name: 'Amazon Rainforest Trek',
    location: 'Manaus, Brazil',
    banner: 'https://images.pexels.com/photos/975771/pexels-photo-975771.jpeg',
    price: '480',
    tags: [
      {
        label: 'Nature',
        background: 'bg-[#ECFDF3]',
        textColor: 'text-[#027A48]',
      },
      {
        label: 'Adventure',
        background: 'bg-[#FEF7ED]',
        textColor: 'text-[#DC6803]',
      },
      {
        label: 'Wildlife',
        background: 'bg-[#ECFDF3]',
        textColor: 'text-[#027A48]',
      },
    ],
  },
  {
    id: 15,
    name: 'Petra Archaeological Wonder',
    location: 'Petra, Jordan',
    banner:
      'https://images.pexels.com/photos/1670732/pexels-photo-1670732.jpeg',
    price: '360',
    tags: [
      {
        label: 'Historical',
        background: 'bg-[#FEF3F2]',
        textColor: 'text-[#B42318]',
      },
      {
        label: 'Desert',
        background: 'bg-[#FEF7ED]',
        textColor: 'text-[#DC6803]',
      },
      {
        label: 'Architecture',
        background: 'bg-[#FDF2FA]',
        textColor: 'text-[#9E2B95]',
      },
    ],
  },
  {
    id: 16,
    name: 'Neuschwanstein Castle',
    location: 'Bavaria, Germany',
    banner:
      'https://images.pexels.com/photos/2440024/pexels-photo-2440024.jpeg',
    price: '340',
    tags: [
      {
        label: 'Castle',
        background: 'bg-[#ECFDF3]',
        textColor: 'text-[#027A48]',
      },
      {
        label: 'Mountains',
        background: 'bg-[#ECFDF3]',
        textColor: 'text-[#027A48]',
      },
      {
        label: 'Architecture',
        background: 'bg-[#FDF2FA]',
        textColor: 'text-[#9E2B95]',
      },
    ],
  },
  {
    id: 17,
    name: 'Bagan Temple Sunrise',
    location: 'Bagan, Myanmar',
    banner:
      'https://images.pexels.com/photos/2739664/pexels-photo-2739664.jpeg',
    price: '290',
    tags: [
      {
        label: 'Historical',
        background: 'bg-[#FEF3F2]',
        textColor: 'text-[#B42318]',
      },
      {
        label: 'Cultural',
        background: 'bg-[#FDF2FA]',
        textColor: 'text-[#9E2B95]',
      },
      {
        label: 'Spiritual',
        background: 'bg-[#FDF2FA]',
        textColor: 'text-[#9E2B95]',
      },
    ],
  },
  {
    id: 18,
    name: 'Banff National Park',
    location: 'Alberta, Canada',
    banner:
      'https://images.pexels.com/photos/1680247/pexels-photo-1680247.jpeg',
    price: '420',
    tags: [
      {
        label: 'Nature',
        background: 'bg-[#ECFDF3]',
        textColor: 'text-[#027A48]',
      },
      {
        label: 'Mountains',
        background: 'bg-[#ECFDF3]',
        textColor: 'text-[#027A48]',
      },
      {
        label: 'Lakes',
        background: 'bg-[#F0F9FF]',
        textColor: 'text-[#0369A1]',
      },
    ],
  },
  {
    id: 19,
    name: 'Victoria Falls Experience',
    location: 'Victoria Falls, Zambia',
    banner:
      'https://images.pexels.com/photos/2166711/pexels-photo-2166711.jpeg',
    price: '380',
    tags: [
      {
        label: 'Waterfalls',
        background: 'bg-[#F0F9FF]',
        textColor: 'text-[#0369A1]',
      },
      {
        label: 'Nature',
        background: 'bg-[#ECFDF3]',
        textColor: 'text-[#027A48]',
      },
      {
        label: 'Adventure',
        background: 'bg-[#FEF7ED]',
        textColor: 'text-[#DC6803]',
      },
    ],
  },
  {
    id: 20,
    name: 'Cappadocia Hot Air Balloons',
    location: 'Cappadocia, Turkey',
    banner:
      'https://images.pexels.com/photos/2139829/pexels-photo-2139829.jpeg',
    price: '320',
    tags: [
      {
        label: 'Unique',
        background: 'bg-[#FDF2FA]',
        textColor: 'text-[#9E2B95]',
      },
      {
        label: 'Adventure',
        background: 'bg-[#FEF7ED]',
        textColor: 'text-[#DC6803]',
      },
      {
        label: 'Desert',
        background: 'bg-[#FEF7ED]',
        textColor: 'text-[#DC6803]',
      },
    ],
  },
  {
    id: 21,
    name: 'Amalfi Coast Drive',
    location: 'Amalfi, Italy',
    banner:
      'https://images.pexels.com/photos/2476039/pexels-photo-2476039.jpeg',
    price: '460',
    tags: [
      {
        label: 'Coastal',
        background: 'bg-[#F0F9FF]',
        textColor: 'text-[#0369A1]',
      },
      {
        label: 'Romantic',
        background: 'bg-[#FEF7ED]',
        textColor: 'text-[#DC6803]',
      },
      {
        label: 'Scenic',
        background: 'bg-[#ECFDF3]',
        textColor: 'text-[#027A48]',
      },
    ],
  },
  {
    id: 22,
    name: 'Angkor Wat Temple Complex',
    location: 'Siem Reap, Cambodia',
    banner:
      'https://images.pexels.com/photos/1659438/pexels-photo-1659438.jpeg',
    price: '180',
    tags: [
      {
        label: 'Historical',
        background: 'bg-[#FEF3F2]',
        textColor: 'text-[#B42318]',
      },
      {
        label: 'Cultural',
        background: 'bg-[#FDF2FA]',
        textColor: 'text-[#9E2B95]',
      },
      {
        label: 'Architecture',
        background: 'bg-[#FDF2FA]',
        textColor: 'text-[#9E2B95]',
      },
    ],
  },
  {
    id: 23,
    name: 'Serengeti Safari',
    location: 'Serengeti, Tanzania',
    banner:
      'https://images.pexels.com/photos/1670732/pexels-photo-1670732.jpeg',
    price: '720',
    tags: [
      {
        label: 'Wildlife',
        background: 'bg-[#ECFDF3]',
        textColor: 'text-[#027A48]',
      },
      {
        label: 'Adventure',
        background: 'bg-[#FEF7ED]',
        textColor: 'text-[#DC6803]',
      },
      {
        label: 'Nature',
        background: 'bg-[#ECFDF3]',
        textColor: 'text-[#027A48]',
      },
    ],
  },
  {
    id: 24,
    name: 'Plitvice Lakes National Park',
    location: 'Plitvice, Croatia',
    banner: 'https://images.pexels.com/photos/547115/pexels-photo-547115.jpeg',
    price: '220',
    tags: [
      {
        label: 'Nature',
        background: 'bg-[#ECFDF3]',
        textColor: 'text-[#027A48]',
      },
      {
        label: 'Lakes',
        background: 'bg-[#F0F9FF]',
        textColor: 'text-[#0369A1]',
      },
      {
        label: 'Waterfalls',
        background: 'bg-[#F0F9FF]',
        textColor: 'text-[#0369A1]',
      },
    ],
  },
  {
    id: 25,
    name: 'Statue of Liberty',
    location: 'New York, USA',
    banner:
      'https://images.pexels.com/photos/64271/queen-of-liberty-statue-of-liberty-new-york-liberty-statue-64271.jpeg',
    price: '280',
    tags: [
      {
        label: 'Historical',
        background: 'bg-[#FEF3F2]',
        textColor: 'text-[#B42318]',
      },
      {
        label: 'City',
        background: 'bg-[#ECFDF3]',
        textColor: 'text-[#027A48]',
      },
      {
        label: 'Monument',
        background: 'bg-[#FDF2FA]',
        textColor: 'text-[#9E2B95]',
      },
    ],
  },
  {
    id: 26,
    name: 'Halong Bay Cruise',
    location: 'Halong Bay, Vietnam',
    banner:
      'https://images.pexels.com/photos/2885320/pexels-photo-2885320.jpeg',
    price: '240',
    tags: [
      { label: 'Bay', background: 'bg-[#F0F9FF]', textColor: 'text-[#0369A1]' },
      {
        label: 'Nature',
        background: 'bg-[#ECFDF3]',
        textColor: 'text-[#027A48]',
      },
      {
        label: 'Cruise',
        background: 'bg-[#F0F9FF]',
        textColor: 'text-[#0369A1]',
      },
    ],
  },
  {
    id: 27,
    name: 'Chichen Itza Ruins',
    location: 'Yucatan, Mexico',
    banner:
      'https://images.pexels.com/photos/2166553/pexels-photo-2166553.jpeg',
    price: '200',
    tags: [
      {
        label: 'Historical',
        background: 'bg-[#FEF3F2]',
        textColor: 'text-[#B42318]',
      },
      {
        label: 'Cultural',
        background: 'bg-[#FDF2FA]',
        textColor: 'text-[#9E2B95]',
      },
      {
        label: 'Architecture',
        background: 'bg-[#FDF2FA]',
        textColor: 'text-[#9E2B95]',
      },
    ],
  },
  {
    id: 28,
    name: 'Milford Sound Fjord',
    location: 'Milford Sound, New Zealand',
    banner: 'https://images.pexels.com/photos/417074/pexels-photo-417074.jpeg',
    price: '380',
    tags: [
      {
        label: 'Fjord',
        background: 'bg-[#F0F9FF]',
        textColor: 'text-[#0369A1]',
      },
      {
        label: 'Nature',
        background: 'bg-[#ECFDF3]',
        textColor: 'text-[#027A48]',
      },
      {
        label: 'Mountains',
        background: 'bg-[#ECFDF3]',
        textColor: 'text-[#027A48]',
      },
    ],
  },
  {
    id: 29,
    name: 'Acropolis of Athens',
    location: 'Athens, Greece',
    banner: 'https://images.pexels.com/photos/164336/pexels-photo-164336.jpeg',
    price: '160',
    tags: [
      {
        label: 'Historical',
        background: 'bg-[#FEF3F2]',
        textColor: 'text-[#B42318]',
      },
      {
        label: 'Architecture',
        background: 'bg-[#FDF2FA]',
        textColor: 'text-[#9E2B95]',
      },
      {
        label: 'Cultural',
        background: 'bg-[#FDF2FA]',
        textColor: 'text-[#9E2B95]',
      },
    ],
  },
  {
    id: 30,
    name: 'Mont Blanc Peak',
    location: 'Chamonix, France',
    banner: 'https://images.pexels.com/photos/773594/pexels-photo-773594.jpeg',
    price: '560',
    tags: [
      {
        label: 'Mountains',
        background: 'bg-[#ECFDF3]',
        textColor: 'text-[#027A48]',
      },
      {
        label: 'Adventure',
        background: 'bg-[#FEF7ED]',
        textColor: 'text-[#DC6803]',
      },
      {
        label: 'Alpine',
        background: 'bg-[#ECFDF3]',
        textColor: 'text-[#027A48]',
      },
    ],
  },
  {
    id: 31,
    name: 'Easter Island Statues',
    location: 'Easter Island, Chile',
    banner:
      'https://images.pexels.com/photos/1659438/pexels-photo-1659438.jpeg',
    price: '680',
    tags: [
      {
        label: 'Historical',
        background: 'bg-[#FEF3F2]',
        textColor: 'text-[#B42318]',
      },
      {
        label: 'Unique',
        background: 'bg-[#FDF2FA]',
        textColor: 'text-[#9E2B95]',
      },
      {
        label: 'Island',
        background: 'bg-[#F0F9FF]',
        textColor: 'text-[#0369A1]',
      },
    ],
  },
  {
    id: 32,
    name: 'Blue Lagoon Geothermal Spa',
    location: 'Reykjavik, Iceland',
    banner:
      'https://images.pexels.com/photos/1933316/pexels-photo-1933316.jpeg',
    price: '320',
    tags: [
      { label: 'Spa', background: 'bg-[#FDF2FA]', textColor: 'text-[#9E2B95]' },
      {
        label: 'Geothermal',
        background: 'bg-[#F0F9FF]',
        textColor: 'text-[#0369A1]',
      },
      {
        label: 'Relaxation',
        background: 'bg-[#ECFDF3]',
        textColor: 'text-[#027A48]',
      },
    ],
  },
  {
    id: 33,
    name: 'Yellowstone Geysers',
    location: 'Wyoming, USA',
    banner:
      'https://images.pexels.com/photos/158063/bellingshausen-island-antarctica-landscape-nature-158063.jpeg',
    price: '340',
    tags: [
      {
        label: 'Nature',
        background: 'bg-[#ECFDF3]',
        textColor: 'text-[#027A48]',
      },
      {
        label: 'Geothermal',
        background: 'bg-[#F0F9FF]',
        textColor: 'text-[#0369A1]',
      },
      {
        label: 'Wildlife',
        background: 'bg-[#ECFDF3]',
        textColor: 'text-[#027A48]',
      },
    ],
  },
  {
    id: 34,
    name: 'Pyramids of Giza',
    location: 'Cairo, Egypt',
    banner:
      'https://images.pexels.com/photos/71241/egypt-pyramid-cairo-ancient-71241.jpeg',
    price: '220',
    tags: [
      {
        label: 'Historical',
        background: 'bg-[#FEF3F2]',
        textColor: 'text-[#B42318]',
      },
      {
        label: 'Ancient',
        background: 'bg-[#FEF3F2]',
        textColor: 'text-[#B42318]',
      },
      {
        label: 'Desert',
        background: 'bg-[#FEF7ED]',
        textColor: 'text-[#DC6803]',
      },
    ],
  },
  {
    id: 35,
    name: 'Big Sur Coastal Drive',
    location: 'California, USA',
    banner: 'https://images.pexels.com/photos/210186/pexels-photo-210186.jpeg',
    price: '380',
    tags: [
      {
        label: 'Coastal',
        background: 'bg-[#F0F9FF]',
        textColor: 'text-[#0369A1]',
      },
      {
        label: 'Scenic',
        background: 'bg-[#ECFDF3]',
        textColor: 'text-[#027A48]',
      },
      {
        label: 'Nature',
        background: 'bg-[#ECFDF3]',
        textColor: 'text-[#027A48]',
      },
    ],
  },
  {
    id: 36,
    name: 'Zhangjiajie National Forest',
    location: 'Hunan, China',
    banner:
      'https://images.pexels.com/photos/2739664/pexels-photo-2739664.jpeg',
    price: '260',
    tags: [
      {
        label: 'Nature',
        background: 'bg-[#ECFDF3]',
        textColor: 'text-[#027A48]',
      },
      {
        label: 'Mountains',
        background: 'bg-[#ECFDF3]',
        textColor: 'text-[#027A48]',
      },
      {
        label: 'Unique',
        background: 'bg-[#FDF2FA]',
        textColor: 'text-[#9E2B95]',
      },
    ],
  },
  {
    id: 37,
    name: 'Sagrada Familia',
    location: 'Barcelona, Spain',
    banner: 'https://images.pexels.com/photos/460740/pexels-photo-460740.jpeg',
    price: '180',
    tags: [
      {
        label: 'Architecture',
        background: 'bg-[#FDF2FA]',
        textColor: 'text-[#9E2B95]',
      },
      {
        label: 'Cultural',
        background: 'bg-[#FDF2FA]',
        textColor: 'text-[#9E2B95]',
      },
      {
        label: 'City',
        background: 'bg-[#ECFDF3]',
        textColor: 'text-[#027A48]',
      },
    ],
  },
  {
    id: 38,
    name: 'Iguazu Falls',
    location: 'Argentina/Brazil Border',
    banner:
      'https://images.pexels.com/photos/2166711/pexels-photo-2166711.jpeg',
    price: '320',
    tags: [
      {
        label: 'Waterfalls',
        background: 'bg-[#F0F9FF]',
        textColor: 'text-[#0369A1]',
      },
      {
        label: 'Nature',
        background: 'bg-[#ECFDF3]',
        textColor: 'text-[#027A48]',
      },
      {
        label: 'Rainforest',
        background: 'bg-[#ECFDF3]',
        textColor: 'text-[#027A48]',
      },
    ],
  },
  {
    id: 39,
    name: 'Niagara Falls',
    location: 'New York/Ontario',
    banner:
      'https://images.pexels.com/photos/1680247/pexels-photo-1680247.jpeg',
    price: '240',
    tags: [
      {
        label: 'Waterfalls',
        background: 'bg-[#F0F9FF]',
        textColor: 'text-[#0369A1]',
      },
      {
        label: 'Nature',
        background: 'bg-[#ECFDF3]',
        textColor: 'text-[#027A48]',
      },
      {
        label: 'Border',
        background: 'bg-[#FDF2FA]',
        textColor: 'text-[#9E2B95]',
      },
    ],
  },
  {
    id: 40,
    name: 'Crater Lake National Park',
    location: 'Oregon, USA',
    banner: 'https://images.pexels.com/photos/547115/pexels-photo-547115.jpeg',
    price: '280',
    tags: [
      {
        label: 'Lakes',
        background: 'bg-[#F0F9FF]',
        textColor: 'text-[#0369A1]',
      },
      {
        label: 'Nature',
        background: 'bg-[#ECFDF3]',
        textColor: 'text-[#027A48]',
      },
      {
        label: 'Volcanic',
        background: 'bg-[#FEF3F2]',
        textColor: 'text-[#B42318]',
      },
    ],
  },
  {
    id: 41,
    name: 'Ha Long Bay Kayaking',
    location: 'Quang Ninh, Vietnam',
    banner:
      'https://images.pexels.com/photos/2885320/pexels-photo-2885320.jpeg',
    price: '200',
    tags: [
      {
        label: 'Kayaking',
        background: 'bg-[#F0F9FF]',
        textColor: 'text-[#0369A1]',
      },
      { label: 'Bay', background: 'bg-[#F0F9FF]', textColor: 'text-[#0369A1]' },
      {
        label: 'Adventure',
        background: 'bg-[#FEF7ED]',
        textColor: 'text-[#DC6803]',
      },
    ],
  },
  {
    id: 42,
    name: 'Torres del Paine',
    location: 'Patagonia, Chile',
    banner: 'https://images.pexels.com/photos/417074/pexels-photo-417074.jpeg',
    price: '520',
    tags: [
      {
        label: 'Mountains',
        background: 'bg-[#ECFDF3]',
        textColor: 'text-[#027A48]',
      },
      {
        label: 'Trekking',
        background: 'bg-[#FEF7ED]',
        textColor: 'text-[#DC6803]',
      },
      {
        label: 'Patagonia',
        background: 'bg-[#ECFDF3]',
        textColor: 'text-[#027A48]',
      },
    ],
  },
  {
    id: 43,
    name: 'Borobudur Temple',
    location: 'Java, Indonesia',
    banner:
      'https://images.pexels.com/photos/1659438/pexels-photo-1659438.jpeg',
    price: '160',
    tags: [
      {
        label: 'Historical',
        background: 'bg-[#FEF3F2]',
        textColor: 'text-[#B42318]',
      },
      {
        label: 'Spiritual',
        background: 'bg-[#FDF2FA]',
        textColor: 'text-[#9E2B95]',
      },
      {
        label: 'Architecture',
        background: 'bg-[#FDF2FA]',
        textColor: 'text-[#9E2B95]',
      },
    ],
  },
  {
    id: 44,
    name: 'Fiordland National Park',
    location: 'South Island, New Zealand',
    banner: 'https://images.pexels.com/photos/417074/pexels-photo-417074.jpeg',
    price: '420',
    tags: [
      {
        label: 'Fjord',
        background: 'bg-[#F0F9FF]',
        textColor: 'text-[#0369A1]',
      },
      {
        label: 'Nature',
        background: 'bg-[#ECFDF3]',
        textColor: 'text-[#027A48]',
      },
      {
        label: 'Hiking',
        background: 'bg-[#FEF7ED]',
        textColor: 'text-[#DC6803]',
      },
    ],
  },
  {
    id: 45,
    name: 'Dolomites Alpine Route',
    location: 'Northern Italy',
    banner: 'https://images.pexels.com/photos/773594/pexels-photo-773594.jpeg',
    price: '480',
    tags: [
      {
        label: 'Mountains',
        background: 'bg-[#ECFDF3]',
        textColor: 'text-[#027A48]',
      },
      {
        label: 'Alpine',
        background: 'bg-[#ECFDF3]',
        textColor: 'text-[#027A48]',
      },
      {
        label: 'Scenic',
        background: 'bg-[#ECFDF3]',
        textColor: 'text-[#027A48]',
      },
    ],
  },
  {
    id: 46,
    name: 'Uluru Rock Formation',
    location: 'Northern Territory, Australia',
    banner:
      'https://images.pexels.com/photos/3243027/pexels-photo-3243027.jpeg',
    price: '360',
    tags: [
      {
        label: 'Unique',
        background: 'bg-[#FDF2FA]',
        textColor: 'text-[#9E2B95]',
      },
      {
        label: 'Cultural',
        background: 'bg-[#FDF2FA]',
        textColor: 'text-[#9E2B95]',
      },
      {
        label: 'Desert',
        background: 'bg-[#FEF7ED]',
        textColor: 'text-[#DC6803]',
      },
    ],
  },
  {
    id: 47,
    name: 'Lake Bled Castle',
    location: 'Bled, Slovenia',
    banner:
      'https://images.pexels.com/photos/2440024/pexels-photo-2440024.jpeg',
    price: '220',
    tags: [
      {
        label: 'Castle',
        background: 'bg-[#ECFDF3]',
        textColor: 'text-[#027A48]',
      },
      {
        label: 'Lakes',
        background: 'bg-[#F0F9FF]',
        textColor: 'text-[#0369A1]',
      },
      {
        label: 'Romantic',
        background: 'bg-[#FEF7ED]',
        textColor: 'text-[#DC6803]',
      },
    ],
  },
  {
    id: 48,
    name: 'Socotra Island',
    location: 'Yemen',
    banner:
      'https://images.pexels.com/photos/3243027/pexels-photo-3243027.jpeg',
    price: '580',
    tags: [
      {
        label: 'Unique',
        background: 'bg-[#FDF2FA]',
        textColor: 'text-[#9E2B95]',
      },
      {
        label: 'Island',
        background: 'bg-[#F0F9FF]',
        textColor: 'text-[#0369A1]',
      },
      {
        label: 'Nature',
        background: 'bg-[#ECFDF3]',
        textColor: 'text-[#027A48]',
      },
    ],
  },
  {
    id: 49,
    name: 'Salar de Uyuni',
    location: 'Bolivia',
    banner:
      'https://images.pexels.com/photos/2139829/pexels-photo-2139829.jpeg',
    price: '420',
    tags: [
      {
        label: 'Unique',
        background: 'bg-[#FDF2FA]',
        textColor: 'text-[#9E2B95]',
      },
      {
        label: 'Desert',
        background: 'bg-[#FEF7ED]',
        textColor: 'text-[#DC6803]',
      },
      {
        label: 'Photography',
        background: 'bg-[#FDF2FA]',
        textColor: 'text-[#9E2B95]',
      },
    ],
  },
  {
    id: 50,
    name: 'Meteora Monasteries',
    location: 'Thessaly, Greece',
    banner:
      'https://images.pexels.com/photos/2739664/pexels-photo-2739664.jpeg',
    price: '280',
    tags: [
      {
        label: 'Spiritual',
        background: 'bg-[#FDF2FA]',
        textColor: 'text-[#9E2B95]',
      },
      {
        label: 'Mountains',
        background: 'bg-[#ECFDF3]',
        textColor: 'text-[#027A48]',
      },
      {
        label: 'Unique',
        background: 'bg-[#FDF2FA]',
        textColor: 'text-[#9E2B95]',
      },
    ],
  },
  {
    id: 51,
    name: 'Lofoten Islands',
    location: 'Norway',
    banner:
      'https://images.pexels.com/photos/1933316/pexels-photo-1933316.jpeg',
    price: '520',
    tags: [
      {
        label: 'Islands',
        background: 'bg-[#F0F9FF]',
        textColor: 'text-[#0369A1]',
      },
      {
        label: 'Nature',
        background: 'bg-[#ECFDF3]',
        textColor: 'text-[#027A48]',
      },
      {
        label: 'Fishing',
        background: 'bg-[#F0F9FF]',
        textColor: 'text-[#0369A1]',
      },
    ],
  },
  {
    id: 52,
    name: 'Antelope Canyon',
    location: 'Arizona, USA',
    banner:
      'https://images.pexels.com/photos/3243027/pexels-photo-3243027.jpeg',
    price: '180',
    tags: [
      {
        label: 'Canyon',
        background: 'bg-[#FEF7ED]',
        textColor: 'text-[#DC6803]',
      },
      {
        label: 'Photography',
        background: 'bg-[#FDF2FA]',
        textColor: 'text-[#9E2B95]',
      },
      {
        label: 'Desert',
        background: 'bg-[#FEF7ED]',
        textColor: 'text-[#DC6803]',
      },
    ],
  },
  {
    id: 53,
    name: 'Faroe Islands',
    location: 'Denmark',
    banner:
      'https://images.pexels.com/photos/1933316/pexels-photo-1933316.jpeg',
    price: '460',
    tags: [
      {
        label: 'Islands',
        background: 'bg-[#F0F9FF]',
        textColor: 'text-[#0369A1]',
      },
      {
        label: 'Nature',
        background: 'bg-[#ECFDF3]',
        textColor: 'text-[#027A48]',
      },
      {
        label: 'Remote',
        background: 'bg-[#FDF2FA]',
        textColor: 'text-[#9E2B95]',
      },
    ],
  },
  {
    id: 54,
    name: 'Phi Phi Islands',
    location: 'Thailand',
    banner:
      'https://images.pexels.com/photos/1518428/pexels-photo-1518428.jpeg',
    price: '320',
    tags: [
      {
        label: 'Beach',
        background: 'bg-[#F0F9FF]',
        textColor: 'text-[#0369A1]',
      },
      {
        label: 'Islands',
        background: 'bg-[#F0F9FF]',
        textColor: 'text-[#0369A1]',
      },
      {
        label: 'Tropical',
        background: 'bg-[#ECFDF3]',
        textColor: 'text-[#027A48]',
      },
    ],
  },
  {
    id: 55,
    name: 'Keukenhof Gardens',
    location: 'Netherlands',
    banner:
      'https://images.pexels.com/photos/2614818/pexels-photo-2614818.jpeg',
    price: '120',
    tags: [
      {
        label: 'Gardens',
        background: 'bg-[#ECFDF3]',
        textColor: 'text-[#027A48]',
      },
      {
        label: 'Flowers',
        background: 'bg-[#ECFDF3]',
        textColor: 'text-[#027A48]',
      },
      {
        label: 'Spring',
        background: 'bg-[#ECFDF3]',
        textColor: 'text-[#027A48]',
      },
    ],
  },
  {
    id: 56,
    name: 'Hallstatt Village',
    location: 'Austria',
    banner: 'https://images.pexels.com/photos/547115/pexels-photo-547115.jpeg',
    price: '340',
    tags: [
      {
        label: 'Village',
        background: 'bg-[#FDF2FA]',
        textColor: 'text-[#9E2B95]',
      },
      {
        label: 'Lakes',
        background: 'bg-[#F0F9FF]',
        textColor: 'text-[#0369A1]',
      },
      {
        label: 'Alps',
        background: 'bg-[#ECFDF3]',
        textColor: 'text-[#027A48]',
      },
    ],
  },
  {
    id: 57,
    name: 'Galapagos Islands',
    location: 'Ecuador',
    banner:
      'https://images.pexels.com/photos/1518428/pexels-photo-1518428.jpeg',
    price: '1200',
    tags: [
      {
        label: 'Wildlife',
        background: 'bg-[#ECFDF3]',
        textColor: 'text-[#027A48]',
      },
      {
        label: 'Islands',
        background: 'bg-[#F0F9FF]',
        textColor: 'text-[#0369A1]',
      },
      {
        label: 'Unique',
        background: 'bg-[#FDF2FA]',
        textColor: 'text-[#9E2B95]',
      },
    ],
  },
  {
    id: 58,
    name: "Giant's Causeway",
    location: 'Northern Ireland',
    banner: 'https://images.pexels.com/photos/210186/pexels-photo-210186.jpeg',
    price: '140',
    tags: [
      {
        label: 'Unique',
        background: 'bg-[#FDF2FA]',
        textColor: 'text-[#9E2B95]',
      },
      {
        label: 'Coastal',
        background: 'bg-[#F0F9FF]',
        textColor: 'text-[#0369A1]',
      },
      {
        label: 'Geological',
        background: 'bg-[#FEF3F2]',
        textColor: 'text-[#B42318]',
      },
    ],
  },
  {
    id: 59,
    name: 'Preikestolen Cliff',
    location: 'Norway',
    banner: 'https://images.pexels.com/photos/417074/pexels-photo-417074.jpeg',
    price: '380',
    tags: [
      {
        label: 'Cliffs',
        background: 'bg-[#FEF3F2]',
        textColor: 'text-[#B42318]',
      },
      {
        label: 'Hiking',
        background: 'bg-[#FEF7ED]',
        textColor: 'text-[#DC6803]',
      },
      {
        label: 'Fjord',
        background: 'bg-[#F0F9FF]',
        textColor: 'text-[#0369A1]',
      },
    ],
  },
  {
    id: 60,
    name: 'Reynisfjara Black Beach',
    location: 'Iceland',
    banner:
      'https://images.pexels.com/photos/1933316/pexels-photo-1933316.jpeg',
    price: '220',
    tags: [
      {
        label: 'Beach',
        background: 'bg-[#F0F9FF]',
        textColor: 'text-[#0369A1]',
      },
      {
        label: 'Unique',
        background: 'bg-[#FDF2FA]',
        textColor: 'text-[#9E2B95]',
      },
      {
        label: 'Volcanic',
        background: 'bg-[#FEF3F2]',
        textColor: 'text-[#B42318]',
      },
    ],
  },
  {
    id: 61,
    name: 'Blue Mosque',
    location: 'Istanbul, Turkey',
    banner:
      'https://images.pexels.com/photos/1659438/pexels-photo-1659438.jpeg',
    price: '100',
    tags: [
      {
        label: 'Architecture',
        background: 'bg-[#FDF2FA]',
        textColor: 'text-[#9E2B95]',
      },
      {
        label: 'Cultural',
        background: 'bg-[#FDF2FA]',
        textColor: 'text-[#9E2B95]',
      },
      {
        label: 'Spiritual',
        background: 'bg-[#FDF2FA]',
        textColor: 'text-[#9E2B95]',
      },
    ],
  },
  {
    id: 62,
    name: 'Redwood National Park',
    location: 'California, USA',
    banner: 'https://images.pexels.com/photos/975771/pexels-photo-975771.jpeg',
    price: '200',
    tags: [
      {
        label: 'Nature',
        background: 'bg-[#ECFDF3]',
        textColor: 'text-[#027A48]',
      },
      {
        label: 'Forest',
        background: 'bg-[#ECFDF3]',
        textColor: 'text-[#027A48]',
      },
      {
        label: 'Giant Trees',
        background: 'bg-[#ECFDF3]',
        textColor: 'text-[#027A48]',
      },
    ],
  },
  {
    id: 63,
    name: 'Sintra Palaces',
    location: 'Portugal',
    banner:
      'https://images.pexels.com/photos/2440024/pexels-photo-2440024.jpeg',
    price: '160',
    tags: [
      {
        label: 'Palaces',
        background: 'bg-[#FDF2FA]',
        textColor: 'text-[#9E2B95]',
      },
      {
        label: 'Architecture',
        background: 'bg-[#FDF2FA]',
        textColor: 'text-[#9E2B95]',
      },
      {
        label: 'Historical',
        background: 'bg-[#FEF3F2]',
        textColor: 'text-[#B42318]',
      },
    ],
  },
  {
    id: 64,
    name: 'Zhangye Danxia',
    location: 'Gansu, China',
    banner:
      'https://images.pexels.com/photos/2739664/pexels-photo-2739664.jpeg',
    price: '280',
    tags: [
      {
        label: 'Colorful',
        background: 'bg-[#FEF7ED]',
        textColor: 'text-[#DC6803]',
      },
      {
        label: 'Mountains',
        background: 'bg-[#ECFDF3]',
        textColor: 'text-[#027A48]',
      },
      {
        label: 'Unique',
        background: 'bg-[#FDF2FA]',
        textColor: 'text-[#9E2B95]',
      },
    ],
  },
  {
    id: 65,
    name: 'Kirkjufell Mountain',
    location: 'Iceland',
    banner:
      'https://images.pexels.com/photos/1933316/pexels-photo-1933316.jpeg',
    price: '320',
    tags: [
      {
        label: 'Mountains',
        background: 'bg-[#ECFDF3]',
        textColor: 'text-[#027A48]',
      },
      {
        label: 'Photography',
        background: 'bg-[#FDF2FA]',
        textColor: 'text-[#9E2B95]',
      },
      {
        label: 'Aurora',
        background: 'bg-[#FDF2FA]',
        textColor: 'text-[#9E2B95]',
      },
    ],
  },
  {
    id: 66,
    name: 'Great Ocean Road',
    location: 'Victoria, Australia',
    banner: 'https://images.pexels.com/photos/210186/pexels-photo-210186.jpeg',
    price: '380',
    tags: [
      {
        label: 'Coastal',
        background: 'bg-[#F0F9FF]',
        textColor: 'text-[#0369A1]',
      },
      {
        label: 'Road Trip',
        background: 'bg-[#FEF7ED]',
        textColor: 'text-[#DC6803]',
      },
      {
        label: 'Scenic',
        background: 'bg-[#ECFDF3]',
        textColor: 'text-[#027A48]',
      },
    ],
  },
  {
    id: 67,
    name: 'Pamukkale Terraces',
    location: 'Turkey',
    banner:
      'https://images.pexels.com/photos/2139829/pexels-photo-2139829.jpeg',
    price: '180',
    tags: [
      {
        label: 'Unique',
        background: 'bg-[#FDF2FA]',
        textColor: 'text-[#9E2B95]',
      },
      {
        label: 'Thermal',
        background: 'bg-[#F0F9FF]',
        textColor: 'text-[#0369A1]',
      },
      {
        label: 'White',
        background: 'bg-[#FDF2FA]',
        textColor: 'text-[#9E2B95]',
      },
    ],
  },
  {
    id: 68,
    name: 'Bryce Canyon',
    location: 'Utah, USA',
    banner:
      'https://images.pexels.com/photos/3243027/pexels-photo-3243027.jpeg',
    price: '220',
    tags: [
      {
        label: 'Canyon',
        background: 'bg-[#FEF7ED]',
        textColor: 'text-[#DC6803]',
      },
      {
        label: 'Red Rocks',
        background: 'bg-[#FEF3F2]',
        textColor: 'text-[#B42318]',
      },
      {
        label: 'Hiking',
        background: 'bg-[#FEF7ED]',
        textColor: 'text-[#DC6803]',
      },
    ],
  },
  {
    id: 69,
    name: 'Geirangerfjord',
    location: 'Norway',
    banner: 'https://images.pexels.com/photos/417074/pexels-photo-417074.jpeg',
    price: '450',
    tags: [
      {
        label: 'Fjord',
        background: 'bg-[#F0F9FF]',
        textColor: 'text-[#0369A1]',
      },
      {
        label: 'Waterfalls',
        background: 'bg-[#F0F9FF]',
        textColor: 'text-[#0369A1]',
      },
      {
        label: 'Cruise',
        background: 'bg-[#F0F9FF]',
        textColor: 'text-[#0369A1]',
      },
    ],
  },
  {
    id: 70,
    name: 'Cliffs of Moher',
    location: 'Ireland',
    banner: 'https://images.pexels.com/photos/210186/pexels-photo-210186.jpeg',
    price: '120',
    tags: [
      {
        label: 'Cliffs',
        background: 'bg-[#FEF3F2]',
        textColor: 'text-[#B42318]',
      },
      {
        label: 'Coastal',
        background: 'bg-[#F0F9FF]',
        textColor: 'text-[#0369A1]',
      },
      {
        label: 'Dramatic',
        background: 'bg-[#FEF3F2]',
        textColor: 'text-[#B42318]',
      },
    ],
  },
  {
    id: 71,
    name: 'Moraine Lake',
    location: 'Alberta, Canada',
    banner: 'https://images.pexels.com/photos/547115/pexels-photo-547115.jpeg',
    price: '280',
    tags: [
      {
        label: 'Lakes',
        background: 'bg-[#F0F9FF]',
        textColor: 'text-[#0369A1]',
      },
      {
        label: 'Mountains',
        background: 'bg-[#ECFDF3]',
        textColor: 'text-[#027A48]',
      },
      {
        label: 'Turquoise',
        background: 'bg-[#F0F9FF]',
        textColor: 'text-[#0369A1]',
      },
    ],
  },
  {
    id: 72,
    name: 'Jokulsarlon Glacier Lagoon',
    location: 'Iceland',
    banner:
      'https://images.pexels.com/photos/1933316/pexels-photo-1933316.jpeg',
    price: '340',
    tags: [
      {
        label: 'Glacier',
        background: 'bg-[#F0F9FF]',
        textColor: 'text-[#0369A1]',
      },
      { label: 'Ice', background: 'bg-[#F0F9FF]', textColor: 'text-[#0369A1]' },
      {
        label: 'Unique',
        background: 'bg-[#FDF2FA]',
        textColor: 'text-[#9E2B95]',
      },
    ],
  },
  {
    id: 73,
    name: 'Lavender Fields',
    location: 'Provence, France',
    banner:
      'https://images.pexels.com/photos/2614818/pexels-photo-2614818.jpeg',
    price: '200',
    tags: [
      {
        label: 'Flowers',
        background: 'bg-[#ECFDF3]',
        textColor: 'text-[#027A48]',
      },
      {
        label: 'Purple',
        background: 'bg-[#FDF2FA]',
        textColor: 'text-[#9E2B95]',
      },
      {
        label: 'Countryside',
        background: 'bg-[#ECFDF3]',
        textColor: 'text-[#027A48]',
      },
    ],
  },
  {
    id: 74,
    name: 'Saguenay Fjord',
    location: 'Quebec, Canada',
    banner: 'https://images.pexels.com/photos/417074/pexels-photo-417074.jpeg',
    price: '320',
    tags: [
      {
        label: 'Fjord',
        background: 'bg-[#F0F9FF]',
        textColor: 'text-[#0369A1]',
      },
      {
        label: 'Whales',
        background: 'bg-[#F0F9FF]',
        textColor: 'text-[#0369A1]',
      },
      {
        label: 'Nature',
        background: 'bg-[#ECFDF3]',
        textColor: 'text-[#027A48]',
      },
    ],
  },
  {
    id: 75,
    name: 'Trolltunga Rock',
    location: 'Norway',
    banner: 'https://images.pexels.com/photos/417074/pexels-photo-417074.jpeg',
    price: '420',
    tags: [
      {
        label: 'Hiking',
        background: 'bg-[#FEF7ED]',
        textColor: 'text-[#DC6803]',
      },
      {
        label: 'Adventure',
        background: 'bg-[#FEF7ED]',
        textColor: 'text-[#DC6803]',
      },
      {
        label: 'Cliff',
        background: 'bg-[#FEF3F2]',
        textColor: 'text-[#B42318]',
      },
    ],
  },
  {
    id: 76,
    name: 'Aogashima Volcano',
    location: 'Japan',
    banner:
      'https://images.pexels.com/photos/2739664/pexels-photo-2739664.jpeg',
    price: '480',
    tags: [
      {
        label: 'Volcano',
        background: 'bg-[#FEF3F2]',
        textColor: 'text-[#B42318]',
      },
      {
        label: 'Island',
        background: 'bg-[#F0F9FF]',
        textColor: 'text-[#0369A1]',
      },
      {
        label: 'Remote',
        background: 'bg-[#FDF2FA]',
        textColor: 'text-[#9E2B95]',
      },
    ],
  },
  {
    id: 77,
    name: 'Tre Cime di Lavaredo',
    location: 'Italy',
    banner: 'https://images.pexels.com/photos/773594/pexels-photo-773594.jpeg',
    price: '360',
    tags: [
      {
        label: 'Mountains',
        background: 'bg-[#ECFDF3]',
        textColor: 'text-[#027A48]',
      },
      {
        label: 'Dolomites',
        background: 'bg-[#ECFDF3]',
        textColor: 'text-[#027A48]',
      },
      {
        label: 'Hiking',
        background: 'bg-[#FEF7ED]',
        textColor: 'text-[#DC6803]',
      },
    ],
  },
  {
    id: 78,
    name: 'Socotra Dragon Trees',
    location: 'Yemen',
    banner:
      'https://images.pexels.com/photos/3243027/pexels-photo-3243027.jpeg',
    price: '620',
    tags: [
      {
        label: 'Unique',
        background: 'bg-[#FDF2FA]',
        textColor: 'text-[#9E2B95]',
      },
      {
        label: 'Trees',
        background: 'bg-[#ECFDF3]',
        textColor: 'text-[#027A48]',
      },
      {
        label: 'Rare',
        background: 'bg-[#FDF2FA]',
        textColor: 'text-[#9E2B95]',
      },
    ],
  },
  {
    id: 79,
    name: "Fingal's Cave",
    location: 'Scotland',
    banner: 'https://images.pexels.com/photos/210186/pexels-photo-210186.jpeg',
    price: '180',
    tags: [
      {
        label: 'Cave',
        background: 'bg-[#FEF3F2]',
        textColor: 'text-[#B42318]',
      },
      {
        label: 'Basalt',
        background: 'bg-[#FEF3F2]',
        textColor: 'text-[#B42318]',
      },
      {
        label: 'Unique',
        background: 'bg-[#FDF2FA]',
        textColor: 'text-[#9E2B95]',
      },
    ],
  },
  {
    id: 80,
    name: 'Kawah Ijen Blue Fire',
    location: 'Java, Indonesia',
    banner:
      'https://images.pexels.com/photos/2739664/pexels-photo-2739664.jpeg',
    price: '220',
    tags: [
      {
        label: 'Volcano',
        background: 'bg-[#FEF3F2]',
        textColor: 'text-[#B42318]',
      },
      {
        label: 'Blue Fire',
        background: 'bg-[#F0F9FF]',
        textColor: 'text-[#0369A1]',
      },
      {
        label: 'Unique',
        background: 'bg-[#FDF2FA]',
        textColor: 'text-[#9E2B95]',
      },
    ],
  },
  {
    id: 81,
    name: 'Socotra Island Beaches',
    location: 'Yemen',
    banner:
      'https://images.pexels.com/photos/1518428/pexels-photo-1518428.jpeg',
    price: '580',
    tags: [
      {
        label: 'Beach',
        background: 'bg-[#F0F9FF]',
        textColor: 'text-[#0369A1]',
      },
      {
        label: 'Pristine',
        background: 'bg-[#ECFDF3]',
        textColor: 'text-[#027A48]',
      },
      {
        label: 'Remote',
        background: 'bg-[#FDF2FA]',
        textColor: 'text-[#9E2B95]',
      },
    ],
  },
  {
    id: 82,
    name: 'Marble Caves',
    location: 'Chile',
    banner: 'https://images.pexels.com/photos/547115/pexels-photo-547115.jpeg',
    price: '420',
    tags: [
      {
        label: 'Caves',
        background: 'bg-[#FEF3F2]',
        textColor: 'text-[#B42318]',
      },
      {
        label: 'Marble',
        background: 'bg-[#FDF2FA]',
        textColor: 'text-[#9E2B95]',
      },
      {
        label: 'Kayaking',
        background: 'bg-[#F0F9FF]',
        textColor: 'text-[#0369A1]',
      },
    ],
  },
  {
    id: 83,
    name: 'Picos de Europa',
    location: 'Spain',
    banner: 'https://images.pexels.com/photos/773594/pexels-photo-773594.jpeg',
    price: '280',
    tags: [
      {
        label: 'Mountains',
        background: 'bg-[#ECFDF3]',
        textColor: 'text-[#027A48]',
      },
      {
        label: 'Hiking',
        background: 'bg-[#FEF7ED]',
        textColor: 'text-[#DC6803]',
      },
      {
        label: 'Green',
        background: 'bg-[#ECFDF3]',
        textColor: 'text-[#027A48]',
      },
    ],
  },
  {
    id: 84,
    name: 'Rila Monastery',
    location: 'Bulgaria',
    banner:
      'https://images.pexels.com/photos/2440024/pexels-photo-2440024.jpeg',
    price: '120',
    tags: [
      {
        label: 'Monastery',
        background: 'bg-[#FDF2FA]',
        textColor: 'text-[#9E2B95]',
      },
      {
        label: 'Mountains',
        background: 'bg-[#ECFDF3]',
        textColor: 'text-[#027A48]',
      },
      {
        label: 'Spiritual',
        background: 'bg-[#FDF2FA]',
        textColor: 'text-[#9E2B95]',
      },
    ],
  },
  {
    id: 85,
    name: 'Huacachina Oasis',
    location: 'Peru',
    banner:
      'https://images.pexels.com/photos/3243027/pexels-photo-3243027.jpeg',
    price: '180',
    tags: [
      {
        label: 'Oasis',
        background: 'bg-[#ECFDF3]',
        textColor: 'text-[#027A48]',
      },
      {
        label: 'Desert',
        background: 'bg-[#FEF7ED]',
        textColor: 'text-[#DC6803]',
      },
      {
        label: 'Unique',
        background: 'bg-[#FDF2FA]',
        textColor: 'text-[#9E2B95]',
      },
    ],
  },
  {
    id: 86,
    name: 'Bagan Hot Air Balloon',
    location: 'Myanmar',
    banner:
      'https://images.pexels.com/photos/2139829/pexels-photo-2139829.jpeg',
    price: '320',
    tags: [
      {
        label: 'Hot Air Balloon',
        background: 'bg-[#FEF7ED]',
        textColor: 'text-[#DC6803]',
      },
      {
        label: 'Temples',
        background: 'bg-[#FEF3F2]',
        textColor: 'text-[#B42318]',
      },
      {
        label: 'Sunrise',
        background: 'bg-[#FEF7ED]',
        textColor: 'text-[#DC6803]',
      },
    ],
  },
  {
    id: 87,
    name: 'Krka National Park',
    location: 'Croatia',
    banner: 'https://images.pexels.com/photos/547115/pexels-photo-547115.jpeg',
    price: '160',
    tags: [
      {
        label: 'Waterfalls',
        background: 'bg-[#F0F9FF]',
        textColor: 'text-[#0369A1]',
      },
      {
        label: 'Swimming',
        background: 'bg-[#F0F9FF]',
        textColor: 'text-[#0369A1]',
      },
      {
        label: 'Nature',
        background: 'bg-[#ECFDF3]',
        textColor: 'text-[#027A48]',
      },
    ],
  },
  {
    id: 88,
    name: 'Tsingy de Bemaraha',
    location: 'Madagascar',
    banner:
      'https://images.pexels.com/photos/2739664/pexels-photo-2739664.jpeg',
    price: '680',
    tags: [
      {
        label: 'Unique',
        background: 'bg-[#FDF2FA]',
        textColor: 'text-[#9E2B95]',
      },
      {
        label: 'Rock Formations',
        background: 'bg-[#FEF3F2]',
        textColor: 'text-[#B42318]',
      },
      {
        label: 'Adventure',
        background: 'bg-[#FEF7ED]',
        textColor: 'text-[#DC6803]',
      },
    ],
  },
  {
    id: 89,
    name: 'Reynisdrangar Sea Stacks',
    location: 'Iceland',
    banner:
      'https://images.pexels.com/photos/1933316/pexels-photo-1933316.jpeg',
    price: '220',
    tags: [
      {
        label: 'Sea Stacks',
        background: 'bg-[#F0F9FF]',
        textColor: 'text-[#0369A1]',
      },
      {
        label: 'Black Sand',
        background: 'bg-[#FEF3F2]',
        textColor: 'text-[#B42318]',
      },
      {
        label: 'Dramatic',
        background: 'bg-[#FEF3F2]',
        textColor: 'text-[#B42318]',
      },
    ],
  },
  {
    id: 90,
    name: 'Huangshan Mountains',
    location: 'Anhui, China',
    banner:
      'https://images.pexels.com/photos/2739664/pexels-photo-2739664.jpeg',
    price: '320',
    tags: [
      {
        label: 'Mountains',
        background: 'bg-[#ECFDF3]',
        textColor: 'text-[#027A48]',
      },
      {
        label: 'Mist',
        background: 'bg-[#F0F9FF]',
        textColor: 'text-[#0369A1]',
      },
      {
        label: 'Pines',
        background: 'bg-[#ECFDF3]',
        textColor: 'text-[#027A48]',
      },
    ],
  },
  {
    id: 91,
    name: 'Tobermory Shipwrecks',
    location: 'Ontario, Canada',
    banner:
      'https://images.pexels.com/photos/1680247/pexels-photo-1680247.jpeg',
    price: '280',
    tags: [
      {
        label: 'Diving',
        background: 'bg-[#F0F9FF]',
        textColor: 'text-[#0369A1]',
      },
      {
        label: 'Shipwrecks',
        background: 'bg-[#FEF3F2]',
        textColor: 'text-[#B42318]',
      },
      {
        label: 'Clear Water',
        background: 'bg-[#F0F9FF]',
        textColor: 'text-[#0369A1]',
      },
    ],
  },
  {
    id: 92,
    name: 'Mount Roraima',
    location: 'Venezuela/Brazil/Guyana',
    banner:
      'https://images.pexels.com/photos/2739664/pexels-photo-2739664.jpeg',
    price: '820',
    tags: [
      {
        label: 'Mountains',
        background: 'bg-[#ECFDF3]',
        textColor: 'text-[#027A48]',
      },
      {
        label: 'Tepui',
        background: 'bg-[#FDF2FA]',
        textColor: 'text-[#9E2B95]',
      },
      {
        label: 'Adventure',
        background: 'bg-[#FEF7ED]',
        textColor: 'text-[#DC6803]',
      },
    ],
  },
  {
    id: 93,
    name: 'Silfra Fissure',
    location: 'Iceland',
    banner:
      'https://images.pexels.com/photos/1933316/pexels-photo-1933316.jpeg',
    price: '380',
    tags: [
      {
        label: 'Diving',
        background: 'bg-[#F0F9FF]',
        textColor: 'text-[#0369A1]',
      },
      {
        label: 'Tectonics',
        background: 'bg-[#FEF3F2]',
        textColor: 'text-[#B42318]',
      },
      {
        label: 'Clear Water',
        background: 'bg-[#F0F9FF]',
        textColor: 'text-[#0369A1]',
      },
    ],
  },
];

export default destinations;
