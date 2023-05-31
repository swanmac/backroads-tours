import tour1 from './images/tour-1.jpeg';
import tour2 from './images/tour-2.jpeg';
import tour3 from './images/tour-3.jpeg';
import tour4 from './images/tour-4.jpeg';
import tour5 from './images/tour-5.jpeg';
import tour6 from './images/tour-6.jpeg';

export const pageLinks = [
  { id: 1, href: '#home', text: 'home' },
  { id: 2, href: '#about', text: 'about' },
  { id: 3, href: '#services', text: 'services' },
  { id: 4, href: '#tours', text: 'tours' },
];
export const socialLinks = [
  { id: 1, href: 'https://www.facebook.com', icon: 'fab fa-facebook' },
  { id: 2, href: 'https://www.twitter.com', icon: 'fab fa-twitter' },
  { id: 3, href: 'https://www.instagram.com', icon: 'fab fa-instagram' },
];

export const services = [
  {
    id: 1,
    icon: 'fas fa-wallet fa-fw',
    title: 'saving money',
    text: 'Visit far off and exciting destinations afforadably without breaking the bank.',
  },
  {
    id: 2,
    icon: 'fas fa-tree fa-fw',
    title: 'endless hiking',
    text: 'Breath the fresh air and feel the wonder of exploring endless paths & trails.',
  },
  {
    id: 3,
    icon: 'fas fa-socks fa-fw',
    title: 'amazing comfort',
    text: 'Experience the outdoors without truly roughing it, in a comfortable way.',
  },
];

export const tours = [
  {
    id: 1,
    image: tour1,
    date: 'august 10th, 2023',
    title: 'Experience Tibet',
    info: ` Take in the incredible beauty, history and adventure of Tibet. This amazing tour will take you on an experience of a lifetime from the Everest Base Camp to Kathmandu.`,
    location: 'china',
    duration: 7,
    cost: 2200,
  },
  {
    id: 2,
    image: tour2,
    date: 'october 16th, 2024',
    title: 'java bali tour',
    info: ` Visit Java island which is almost completely originated by volcanoes, Mt Semeru being it's highest. The tour is an amazing experience going from Java to Bali.`,
    location: 'indonesia',
    duration: 10,
    cost: 2400,
  },
  {
    id: 3,
    image: tour3,
    date: 'december 10th, 2024',
    title: 'travel hong kong',
    info: ` Experience the culture, architecture, food, hiking, and sightseeing of Hong Kong. With so much to see and do it is a treasure trove of entertainment and activities.`,
    location: 'hong kong',
    duration: 9,
    cost: 4000,
  },
  {
    id: 4,
    image: tour4,
    date: 'may 5th, 2025',
    title: 'kenya wildlife safari',
    info: ` Travel on the outdoor tour of a lifetime. Kenya has everything you would want on an African safari. From towering giraffes to stealth cheetahs, and stunning landscapes.`,
    location: 'kenya',
    duration: 22,
    cost: 4700,
  },
  {
    id: 5,
    image: tour5,
    date: 'october 20th, 2025',
    title: 'tanzania zebra tour',
    info: ` If you are looking for an amazing place to see wildlife, the Serengeti is the place. Each year in Oct-Nov, a large number of zebras migrate through Tanzania, a sight to behold!`,
    location: 'tanzania',
    duration: 20,
    cost: 4800,
  },
  {
    id: 6,
    image: tour6,
    date: 'may 2th, 2026',
    title: 'explore india',
    info: ` Experience the culture, architecture and beauty of India. Explore Dehli, Jaipur, and the Taj Mahal. Interested in the outdoors, check out the wildlife tour from Bangalore.`,
    location: 'india',
    duration: 10,
    cost: 2400,
  },
];
