import { img } from '../lib/img'
import { VIDEOS } from '../lib/img'

export const videoTestimonials = [
  {
    id: 'demo-resident-nivara-one',
    clientName: 'Demo Resident, Nivara One',
    project: 'Nivara One, Mumbai',
    quote: 'Every detail of our experience felt thoughtfully designed — from the first meeting in the gallery to the day we took the keys.',
    video: VIDEOS.demo1,
    thumbnail: img('photo-1600607687939-ce8a6c25118c', 1200),
    duration: '0:42',
    location: 'Mumbai',
    demo: true
  },
  {
    id: 'demo-homebuyer-arcadia',
    clientName: 'Demo Homebuyer, The Arcadia',
    project: 'The Arcadia, Hyderabad',
    quote: 'They treated our home like their own. The quality of light in our living room is something we still talk about.',
    video: VIDEOS.demo2,
    thumbnail: img('photo-1512917774080-9991f1c4c750', 1200),
    duration: '0:36',
    location: 'Hyderabad',
    demo: true
  },
  {
    id: 'demo-community-veridian',
    clientName: 'Demo Family, Veridian Park',
    project: 'Veridian Park, Bengaluru',
    quote: 'We moved for the community, and the community is exactly what we got. Our children grew up in those gardens.',
    video: VIDEOS.demo3,
    thumbnail: img('photo-1600585154340-be6161a56a0c', 1200),
    duration: '0:51',
    location: 'Bengaluru',
    demo: true
  },
  {
    id: 'demo-tenant-business-park',
    clientName: 'Demo Business Tenant, Business Park',
    project: 'Nivara Business Park, Bengaluru',
    quote: 'As a tenant, the difference is operational — power, air, parking and landscape are simply never a concern.',
    video: VIDEOS.demo4,
    thumbnail: img('photo-1497366811353-6870744d04b2', 1200),
    duration: '0:29',
    location: 'Bengaluru',
    demo: true
  },
  {
    id: 'demo-investor-meridian',
    clientName: 'Demo Investor, Meridian District',
    project: 'Meridian District, Pune',
    quote: 'We invested early and watched the master plan get sharper. The discipline of the team is exceptional.',
    video: VIDEOS.demo5,
    thumbnail: img('photo-1480714378408-67cf0d13bc1b', 1200),
    duration: '0:39',
    location: 'Pune',
    demo: true
  },
  {
    id: 'demo-couple-aurelia',
    clientName: 'Demo Couple, Aurelia Residences',
    project: 'Aurelia Residences, Pune',
    quote: 'Premium means you never have to ask twice. That is the standard of service here — calm and complete.',
    video: VIDEOS.demo6,
    thumbnail: img('photo-1600210492486-724fe5c67fb0', 1200),
    duration: '0:33',
    location: 'Pune',
    demo: true
  }
]

export const writtenTestimonials = [
  {
    id: 'written-01',
    clientName: 'Demo Resident',
    project: 'Nivara One, Mumbai',
    role: 'Homeowner since 2025',
    quote:
      'Nivara never once compromised the specification we were promised. The finished home outdid the brochures — which, in this industry, is saying everything.'
  },
  {
    id: 'written-02',
    clientName: 'Demo Homebuyer',
    project: 'The Arcadia, Hyderabad',
    role: 'Homeowner since 2024',
    quote:
      'Communication was remarkable for a project of its scale. Weekly updates, honest timelines, and a handover quality that felt like a personal build.'
  },
  {
    id: 'written-03',
    clientName: 'Demo Business Partner',
    project: 'Nivara Business Park, Bengaluru',
    role: 'Enterprise tenant since 2023',
    quote:
      'They design for operators, not just for launch photos. Our campus runs beautifully because the engineering backbone is genuinely well thought through.'
  },
  {
    id: 'written-04',
    clientName: 'Demo Family',
    project: 'Veridian Park, Bengaluru',
    role: 'Homeowners since 2023',
    quote:
      'The landscape, the light, the sound of morning birds — our home raised our standard of what everyday life should feel like.'
  }
]