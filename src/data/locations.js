import { img } from '../lib/img'

export const locations = [
  {
    slug: 'mumbai',
    name: 'Mumbai',
    tagline: 'The Maximum City',
    description:
      'Nivara’s flagship city — a dense, evolving metropolis where our residential and commercial towers are crafted to negotiate skyline, sea and civic scale with equal precision.',
    image: img('photo-1529253355930-ddbe423a2ac7', 1600),
    projects: 7,
    activeProjects: 2,
    featured: ['nivara-one', 'skyline-twenty-one']
  },
  {
    slug: 'hyderabad',
    name: 'Hyderabad',
    tagline: 'The City of Pearls',
    description:
      'From lake-edge communities to low-rise luxury enclaves, our Hyderabad portfolio pairs contemporary living with the city’s warm, tree-lined sensibility.',
    image: img('photo-1444723121867-7a241cacace9', 1600),
    projects: 6,
    activeProjects: 1,
    featured: ['the-arcadia', 'halcyon-gardens']
  },
  {
    slug: 'pune',
    name: 'Pune',
    tagline: 'The Oxford of the East',
    description:
      'A city of intellect and ambition. Our Pune developments are designed around climate, courtyards and community — responding to hills, gardens and a cultured spirit.',
    image: img('photo-1479839672679-a46483c0e7c8', 1600),
    projects: 8,
    activeProjects: 1,
    featured: ['meridian-district', 'aurelia-residences']
  },
  {
    slug: 'bengaluru',
    name: 'Bengaluru',
    tagline: 'The Garden City',
    description:
      'Greener by conviction. Bengaluru’s mixed-use and commercial projects balance growth with landscape, ecology and the world’s most creative workforce.',
    image: img('photo-1517090504586-fde19ea6066f', 1600),
    projects: 7,
    activeProjects: 1,
    featured: ['nivara-business-park', 'veridian-park']
  }
]