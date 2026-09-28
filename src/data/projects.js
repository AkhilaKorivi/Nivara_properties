import { img } from '../lib/img'
import { VIDEOS } from '../lib/img'

const residentialAmenities = [
  'Private theatre & screening lounge',
  'Infinity-edge swimming pool & deck',
  'Sky lounge & clubhouse on the top floor',
  'Fully-equipped fitness & yoga studio',
  'Children’s playroom & learning commons',
  'Gardens, walking trails & outdoor gym',
  'Concierge, valet & round-the-clock security',
  'EV charging & smart parking systems'
]

const residentialSpecs = [
  'Designer Italian-style porcelain flooring',
  'Floor-to-ceiling, low-E double-glazed glazing',
  'Bespoke modular kitchens with premium fittings',
  'German fittings in all wet areas',
  'Smart-home automation with app control',
  'Video door security & intercom',
  'Weather-adaptive HVAC-ready provisions',
  'RCC frame with seismic detailing'
]

const commercialAmenities = [
  'LEED-ready green building envelope',
  'High-speed destination-grouped elevators',
  'Daylight-optimised floor plates',
  'Multi-level automated parking',
  'Business lounges & conference suites',
  'Food district with curated retail',
  'District-level smart energy management',
  'Landscape plazas & public art'
]

export const projects = [
  {
    slug: 'nivara-one',
    name: 'NIVARA ONE',
    location: 'Worli Sea Face, Mumbai, Maharashtra',
    city: 'Mumbai',
    category: 'Luxury Residential',
    status: 'Ongoing',
    year: '2027',
    progress: 72,
    expectedCompletion: 'Q4 2027',
    description:
      'A sculptural 62-storey residential tower on Mumbai’s iconic sea face — a landmark of light, water and sky, engineered for the city’s most discerning homeowners.',
    longDescription: [
      'Nivara One rises along the Worli Sea Face where the Arabian Sea meets the city skyline. The tower’s aerodynamic form is carved by engineers and architects working in a single practice — a gesture of sculpture that also steers wind, opens views and shades its own terraces.',
      'Inside, each residence is planned around light and the horizon. Living spaces open to the sea through floor-to-ceiling glazing, while deep terraces blur the boundary between home and skyline. Every apartment is delivered with a complete specification — kitchens, wardrobes, finishes and intelligent home systems — so owners can move from gallery to gathering without compromise.'
    ],
    heroImage: img('photo-1531973576160-7125cd663d86', 1920),
    poster: img('photo-1531973576160-7125cd663d86', 1920),
    video: VIDEOS.walkthrough1,
    gallery: [
      img('photo-1486406146926-c627a92ad1ab', 1400),
      img('photo-1600607687939-ce8a6c25118c', 1400),
      img('photo-1600210492486-724fe5c67fb0', 1400),
      img('photo-1502672260266-1c1ef2d93688', 1400),
      img('photo-1522708323590-d24dbb6b0267', 1400),
      img('photo-1600607687920-4e2a09cf159d', 1400)
    ],
    area: '18.5 Lakh Sq. Ft.',
    units: 312,
    configuration: [
      { type: 'Sky Villa', size: '4 Bedroom + Study', area: '5,400 Sq. Ft.' },
      { type: 'Grand Residence', size: '4 Bedroom', area: '4,300 Sq. Ft.' },
      { type: 'Signature Residence', size: '3 Bedroom', area: '3,200 Sq. Ft.' },
      { type: 'Garden Residence', size: '3 Bedroom', area: '2,900 Sq. Ft.' }
    ],
    amenities: residentialAmenities,
    specifications: residentialSpecs,
    architecture: [
      {
        title: 'A Tower Carved by Wind',
        text: 'Wind-tunnel studies sculpted the tapering silhouette of Nivara One, reducing lateral loads while opening each corner to the sea. The result is a tower that reads differently from every quarter of the city.'
      },
      {
        title: 'The Vertical Garden',
        text: 'Sky gardens climb the facade in a double-height rhythm, carrying trees into the sky and shading the glass behind them. Public at the podium, private in the residences, the gardens give the tower its living skin.'
      },
      {
        title: 'Light as Material',
        text: 'Orientation studies tuned every opening to the coastal light — deep reveals by day, a curtain of gold against the sea at dusk. Interiors are specified in warm stone and quiet timber to let that light do the talking.'
      }
    ],
    connectivity: [
      'Facing the Worli Sea Face promenade',
      '8 min to Bandra–Worli Sea Link',
      '10 min to the Western Express Highway',
      '15 min to the business districts of Lower Parel & BKC',
      'International schools and hospitals within a 15-min radius',
      'Scheduled coastal metro station at walking distance'
    ],
    testimonials: {
      video: ['demo-resident-nivara-one'],
      written: ['written-01']
    },
    demo: true
  },
  {
    slug: 'the-arcadia',
    name: 'THE ARCADIA',
    location: 'Gachibowli, Hyderabad, Telangana',
    city: 'Hyderabad',
    category: 'Premium Residential',
    status: 'Completed',
    year: '2026',
    delivered: '2026',
    description:
      'A low-rise luxury enclave woven around water, courtyard and canopy — 18 garden residences and a community that has already become Hyderabad’s benchmark for calm living.',
    longDescription: [
      'The Arcadia was conceived less as a building and more as a landscape with rooms in it. On a tranquil site in Gachibowli, the community arranges itself around a central water court and mature trees, with low-rise wings stepping down to preserve light and warmth.',
      'Handover completed in 2026 with a 100% specification match to the sales gallery. Residents arrived to find the promised finishes, the engineered acoustics and the gardens already established — a handover culture Nivara has since made its signature.'
    ],
    heroImage: img('photo-1600585154340-be6161a56a0c', 1920),
    poster: img('photo-1600585154340-be6161a56a0c', 1920),
    video: VIDEOS.walkthrough2,
    gallery: [
      img('photo-1512917774080-9991f1c4c750', 1400),
      img('photo-1600566753086-00f18fb6b3ea', 1400),
      img('photo-1493809842364-78817add7ffb', 1400),
      img('photo-1600047509807-ba8f99d2cdde', 1400),
      img('photo-1580587771525-78b9dba3b914', 1400)
    ],
    area: '3.1 Lakh Sq. Ft.',
    units: 184,
    configuration: [
      { type: 'Courtyard Villa', size: '4 Bedroom', area: '4,800 Sq. Ft.' },
      { type: 'Arcadia Apartment', size: '3 Bedroom + Study', area: '3,400 Sq. Ft.' },
      { type: 'Garden Apartment', size: '3 Bedroom', area: '2,850 Sq. Ft.' },
      { type: 'Sky Retreat', size: '2 Bedroom', area: '2,100 Sq. Ft.' }
    ],
    amenities: [
      'Reflecting water court & central lawns',
      'Clubhouse with tea lounge & reading rooms',
      'Climate-controlled pool & spa pavilion',
      'Tennis court, jogging track & gym',
      'Community kitchen & celebration lawns',
      'Butterfly garden & organic allotments',
      '24×7 security with biometric access',
      'Solar-assisted common areas'
    ],
    specifications: [
      'Stone-clad podium & teak-trimmed facades',
      'Low-E glazing with argon fill',
      'Italian porcelain & virgin teak flooring',
      'Modular kitchens with quartz worktops',
      'Premium sanitaryware with concealed fittings',
      'Per-unit surge protection & backup power',
      'Rainwater harvesting & grey-water reuse',
      'RCC frame with advanced seismic detailing'
    ],
    architecture: [
      {
        title: 'Architecture Landed in Landscape',
        text: 'Wings step down toward the water court, spreading the mass of the community across the land and letting every residence borrow the gardens as its extended floor.'
      },
      {
        title: 'The Courtyard Discipline',
        text: 'A disciplined geometry of courts and channels carries breeze through the development, keeping public spaces cool in Hyderabad’s long summers and shaded in its winters.'
      },
      {
        title: 'Material Honesty',
        text: 'Stone, lime plaster and teak compose the palette — materials chosen to age into dignity rather than lean on coatings that must be renewed every decade.'
      }
    ],
    connectivity: [
      '7 min to Financial District, Gachibowli',
      '10 min to HITEC City & IT corridors',
      '20 min to Hyderabad International Airport',
      'Schools, universities & supermalls within 10 min',
      'Metro connectivity planned within 2 km',
      'Hospitals and wellness centres in immediate vicinity'
    ],
    testimonials: {
      video: ['demo-homebuyer-arcadia'],
      written: ['written-02']
    },
    demo: true
  },
  {
    slug: 'meridian-district',
    name: 'MERIDIAN DISTRICT',
    location: 'Kharadi, Pune, Maharashtra',
    city: 'Pune',
    category: 'Mixed-Use Development',
    status: 'Upcoming',
    year: '2028',
    expectedLaunch: 'Q1 2028',
    launch: '2028',
    description:
      'A 35-acre live-work-play district for Pune — residences, office towers, retail streets and 12 acres of public ground, master-planned around the fifteen-minute life.',
    longDescription: [
      'Meridian District is Nivara’s most ambitious master plan: 35 acres in the heart of Kharadi, imagined as a small city rather than a project. Half the land is given to public ground, gardens and streets; the rest is a disciplined mix of homes, workplaces and retail woven around a central civic spine.',
      'The district is planned on the fifteen-minute logic — school, office, gym, market and café all within walking distance of every front door. Its commercial towers anchor the city’s IT corridor, while its residential villages close quietly around courtyards. Launch is scheduled for Q1 2028. Imagery on this page is conceptual.'
    ],
    heroImage: img('photo-1480714378408-67cf0d13bc1b', 1920),
    poster: img('photo-1480714378408-67cf0d13bc1b', 1920),
    video: VIDEOS.walkthrough3,
    concept: true,
    gallery: [
      img('photo-1449824913935-59a10b8d2000', 1400),
      img('photo-1444723121867-7a241cacace9', 1400),
      img('photo-1479839672679-a46483c0e7c8', 1400),
      img('photo-1431576901776-e539bd916ba2', 1400),
      img('photo-1497366811353-6870744d04b2', 1400)
    ],
    area: '4.2M Sq. Ft. GFA',
    units: 1200,
    configuration: [
      { type: 'District Residences', size: '3 & 4 Bedroom', area: '1,900–4,500 Sq. Ft.' },
      { type: 'Loft Apartments', size: '2 Bedroom', area: '1,500 Sq. Ft.' },
      { type: 'Office Campus Towers', size: 'Grade-A Workspace', area: 'Per floor 45,000 Sq. Ft.' },
      { type: 'Retail & Retail Streets', size: 'High Street Units', area: 'Flexible formats' }
    ],
    amenities: [
      '12 acres of parks, plazas & promenades',
      'Central civic spine with retail streets',
      'Sports campus, lake edge & running trails',
      'Schools, creche & community libraries',
      'District energy & water centre',
      'Dedicated metro-facing transit node',
      'Smart district operations centre',
      'Public art & event lawns'
    ],
    specifications: [
      'Master plan with 50% open ground',
      'Climate-responsive high-performance facades',
      '100% water recycling within the district',
      'Solar-ready buildings with district storage',
      'Grade-A commercial specifications',
      'Sensor-based smart lighting & mobility',
      'Rainwater net-positive design',
      'Wired for 5G & district-level IoT'
    ],
    architecture: [
      {
        title: 'The Civic Spine',
        text: 'A broad tree-lined avenue organises the district, aligning towers along its edge while councils, cafes and galleries occupy its ground plane. Everything the city needs sits on this street.'
      },
      {
        title: 'Villages in the City',
        text: 'Residential programmes gather into village-like clusters around shared courtyards, giving an intensely urban district the calm psychology of the neighbourhood.'
      },
      {
        title: 'The Skyline Agreement',
        text: 'Massing studies choreograph tower silhouettes to protect daylight, corridors of breeze and views to Pune’s hills — an unwritten agreement between buildings and their city.'
      }
    ],
    connectivity: [
      'Fronting the Kharadi IT & business corridor',
      '3 min to the East Pune ring road',
      'Metro interchange proposed at the district edge',
      '15 min to Pune airport & Magarpatta',
      'Emsat & eastern expressway within 5 min',
      'Hospital, schools and universities in 10 min'
    ],
    testimonials: {
      video: ['demo-investor-meridian'],
      written: []
    },
    demo: true
  },
  {
    slug: 'nivara-business-park',
    name: 'NIVARA BUSINESS PARK',
    location: 'Outer Ring Road, Bengaluru, Karnataka',
    city: 'Bengaluru',
    category: 'Commercial',
    status: 'Ongoing',
    year: '2027',
    progress: 45,
    expectedCompletion: 'Mid 2027',
    description:
      'A 2.8M sq. ft. Grade-A commercial campus on Bengaluru’s Outer Ring Road — LEED-ready towers, landscaped plazas and workspace engineered for the world’s most ambitious companies.',
    longDescription: [
      'Nivara Business Park is being built for the future of work. Three interconnected towers rise from a landscaped podium on the Outer Ring Road, delivering column-free floor plates, daylight-optimised facades and district cooling that cuts energy use near a third below convention.',
      'The campus is more than offices. A curated food district, business lounges, wellness studios and a public plaza turn the development into a destination where companies and their people genuinely want to be.'
    ],
    heroImage: img('photo-1486406146926-c627a92ad1ab', 1920),
    poster: img('photo-1486406146926-c627a92ad1ab', 1920),
    video: VIDEOS.walkthrough4,
    gallery: [
      img('photo-1497366811353-6870744d04b2', 1400),
      img('photo-1497366754035-f200968a6e72', 1400),
      img('photo-1462826303086-329426d1aef5', 1400),
      img('photo-1524758631624-e2822e304c36', 1400),
      img('photo-1497366216548-37526070297c', 1400)
    ],
    area: '2.8M Sq. Ft.',
    units: 8,
    configuration: [
      { type: 'Tower One', size: 'Office', area: '1.1M Sq. Ft., 28 floors' },
      { type: 'Tower Two', size: 'Office', area: '0.9M Sq. Ft., 24 floors' },
      { type: 'Tower Three', size: 'Flex Stronghold', area: '0.8M Sq. Ft., 20 floors' }
    ],
    amenities: commercialAmenities,
    specifications: [
      'LEED Platinum-targeted certification',
      'District cooling with chilled beam systems',
      'Column-free plates of up to 45,000 sq. ft.',
      'Destination-grouped lift systems',
      '5+ MVA power with N+1 redundancy',
      'Smart building management & analytics',
      'High-speed fibre & 5G infrastructure',
      'Bicycle racks, showers & end-of-trip facilities'
    ],
    architecture: [
      {
        title: 'Facade as Climate System',
        text: 'Perforated aluminium fins wrap the towers, cutting solar gain by 30% while preserving the transparency that makes workplaces feel connected to the skyline.'
      },
      {
        title: 'The Campus, Not the Building',
        text: 'Cafés facing the plaza, retail on the street, wellness tucked into the podium — the park is planned as an ecosystem where work spills generously into life.'
      },
      {
        title: 'Engineering the Quiet',
        text: 'Acoustic and vibration engineering run through slabs, risers and setbacks, so that the most precious workplace commodity — concentration — is designed in, not hoped for.'
      }
    ],
    connectivity: [
      'Direct to Bengaluru’s Outer Ring Road',
      'Forum & Central Business District at 15 min',
      'Kempegowda International Airport at 40 min',
      'Namma Metro corridor within 1.5 km',
      'Tech parks & campuses on an immediate loop',
      'Ample access roads with planned grade separators'
    ],
    testimonials: {
      video: ['demo-tenant-business-park'],
      written: ['written-03']
    },
    demo: true
  },
  {
    slug: 'aurelia-residences',
    name: 'AURELIA RESIDENCES',
    location: 'Baner, Pune, Maharashtra',
    city: 'Pune',
    category: 'Luxury Residential',
    status: 'Completed',
    year: '2024',
    delivered: '2024',
    description:
      'Nivara’s origin project and first delivered landmark — 126 sun-soaked residences in Baner, and the home where the company’s quality-first culture was proven.',
    longDescription: [
      'Aurelia Residences is the project that established Nivara. Completed in 2024, the development introduced Pune to a different standard of specification — radial cooling layouts, double-height entrance courts and a handover experience remembered long after moving day.',
      'Today Aurelia is a fully-settled community. Its gardens have matured, its clubhouse hums in the evenings, and its resale performance continues to confirm what its designs promised.'
    ],
    heroImage: img('photo-1600566753190-17f0baa2a6c3', 1920),
    poster: img('photo-1600566753190-17f0baa2a6c3', 1920),
    video: VIDEOS.walkthrough1,
    gallery: [
      img('photo-1600585154526-990dced4db0d', 1400),
      img('photo-1600573472592-401b489a3cdc', 1400),
      img('photo-1512918728675-ed5a9ecdebfd', 1400),
      img('photo-1570129477492-45c003edd2be', 1400),
      img('photo-1600210492486-724fe5c67fb0', 1400)
    ],
    area: '2.2 Lakh Sq. Ft.',
    units: 126,
    configuration: [
      { type: 'Aurelia Villa', size: '4 Bedroom', area: '4,200 Sq. Ft.' },
      { type: 'Grand Apartment', size: '3 Bedroom', area: '3,100 Sq. Ft.' },
      { type: 'Classic Apartment', size: '2 Bedroom + Study', area: '2,400 Sq. Ft.' }
    ],
    amenities: [
      'Warm-themed lounge & library',
      'Temperature-controlled pool',
      'Gym, spa room & squash court',
      'Amphitheatre & celebration lawn',
      'Children’s play & toddler zones',
      'Community organic garden',
      'Solar-assisted power backup',
      'Secure gated single-access entry'
    ],
    specifications: [
      'Solid core doors & teak joinery',
      'Italian marble-trimmed lobby floors',
      'Floor-to-ceiling double-glazed windows',
      'Premium modular kitchens',
      'German sanitaryware & fittings',
      '24×7 power backup with surge protection',
      'Rainwater harvesting at 110% runoff',
      'Fire-rated doors & sprinkler system'
    ],
    architecture: [
      {
        title: 'South Light, Baner Hills',
        text: 'Every home is planned so its primary living spaces face the sun’s southern arc, borrowing warmth in winter and cool morning light all year.'
      },
      {
        title: 'Warm Minimalism',
        text: 'A palette of ivory render, stone and timber creates calm, light-filled surfaces that let interiors — and their people — be the decoration.'
      },
      {
        title: 'Design for Handover',
        text: 'The pilot project for Nivara’s handover culture: mock-units, documented specifications and walk-throughs that turned moving day into an event.'
      }
    ],
    connectivity: [
      'Heart of Baner’s growth corridor',
      '5 min to Hinjewadi IT Park',
      '10 min to the Mumbai–Pune expressway',
      'International schools within 8 min',
      'Baner High Street retail in 5 min',
      'Pune airport at 25 min'
    ],
    testimonials: {
      video: ['demo-couple-aurelia'],
      written: ['written-04']
    },
    demo: true
  },
  {
    slug: 'skyline-twenty-one',
    name: 'SKYLINE 21',
    location: 'Bandra Kurla Complex, Mumbai, Maharashtra',
    city: 'Mumbai',
    category: 'Commercial',
    status: 'Ongoing',
    year: '2029',
    progress: 18,
    expectedCompletion: 'Q2 2029',
    description:
      'A 55-storey glass office tower at Bandra Kurla Complex — the most significant commercial landmark yet in Nivara’s portfolio, rising at the exact centre of Mumbai’s business gravity.',
    longDescription: [
      'Skyline 21 has been years in the making: a 55-storey headquarters-grade tower in the middle of Bandra Kurla Complex, the financial heart of India’s commercial capital. Its double-skin glass facade and sky-lobby strategy are engineered for the largest occupiers in the country.',
      'Foundation works are underway, with a target completion of Q2 2029. The building will deliver India’s largest clear-span commercial floor plates in its class, alongside a public forecourt and landscape design commissioned expressly for the BKC district.'
    ],
    heroImage: img('photo-1503387762-592deb58ef4e', 1920),
    poster: img('photo-1503387762-592deb58ef4e', 1920),
    video: VIDEOS.walkthrough2,
    gallery: [
      img('photo-1416331108676-a22ccb276e35', 1400),
      img('photo-1502672260266-1c1ef2d93688', 1400),
      img('photo-1522708323590-d24dbb6b0267', 1400),
      img('photo-1497366811353-6870744d04b2', 1400),
      img('photo-1449824913935-59a10b8d2000', 1400)
    ],
    area: '3.4M Sq. Ft.',
    units: 6,
    configuration: [
      { type: 'Core Tower', size: 'Headquarters Office', area: '2.4M Sq. Ft., 55 floors' },
      { type: 'Podium Wing', size: 'Flex Office', area: '0.6M Sq. Ft., 8 floors' },
      { type: 'Retail Podium', size: 'Luxury Retail', area: '0.3M Sq. Ft.' }
    ],
    amenities: commercialAmenities,
    specifications: [
      'Double-skin unitised facade',
      'FVFR air-system with district-grade chillers',
      'Sky lobbies with double-height atriums',
      'BIG-scale 60,000 sq. ft. floor plates',
      'Tier-IV data-rooms ready',
      'Interconnected power with dual feeders',
      'Green-certification targeted',
      'Helipad-compliant roof clearance'
    ],
    architecture: [
      {
        title: 'The Double Skin',
        text: 'An outer veil of high-performance glass wraps the working walls, creating a thermal buffer that cuts cooling load and gives the tower its luminous, engineered rhythm.'
      },
      {
        title: 'Sky Lobby Civicness',
        text: 'Mixed communities of tenants rise to sky lobbies with cafés, lounges and views — workplaces that negotiate scale through shared, human-scaled common ground.'
      },
      {
        title: 'BKC’s New Forecourt',
        text: 'A landscaped public forecourt and streetscape give the tower a generous address on BKC’s grand avenue, contributing scale and shade to Mumbai’s central district.'
      }
    ],
    connectivity: [
      'Heart of Bandra Kurla Complex',
      'Adjacent to MMRDA ground & transit hub',
      'Western & Harbour lines at 10 min',
      'Airport at 20 min via expressway',
      'Dharavi–BKC metro at the doorstep',
      '5 min to the Bandra–Worli Sea Link'
    ],
    testimonials: {
      video: [],
      written: []
    },
    demo: true
  },
  {
    slug: 'halcyon-gardens',
    name: 'HALCYON GARDENS',
    location: 'Kondapur, Hyderabad, Telangana',
    city: 'Hyderabad',
    category: 'Premium Residential',
    status: 'Upcoming',
    year: '2029',
    expectedLaunch: 'Q3 2029',
    launch: '2029',
    description:
      'A garden-first living enclave in Kondapur — 22 acres of homes organised around ponds, lanes and a preserved tree line, planned as Hyderabad’s calmest address yet.',
    longDescription: [
      'Halcyon Gardens begins with the land’s own story. Surveyors mapped every mature tree before architects drew a line, and the resulting plan wraps homes around a chain of water gardens and shaded lanes rather than around garages.',
      'The scheme pairs low-rise garden homes with a central wellbeing pavilion, all within walking distance of Kondapur’s schools and tech corridors. Launch is planned for Q3 2029; the imagery here is conceptual design intent.'
    ],
    heroImage: img('photo-1600585153490-76fb20a32601', 1920),
    poster: img('photo-1600585153490-76fb20a32601', 1920),
    video: VIDEOS.walkthrough3,
    concept: true,
    gallery: [
      img('photo-1600585154526-990dced4db0d', 1400),
      img('photo-1600566753086-00f18fb6b3ea', 1400),
      img('photo-1470770841072-f978cf4d019e', 1400),
      img('photo-1600047509807-ba8f99d2cdde', 1400),
      img('photo-1522708323590-d24dbb6b0267', 1400)
    ],
    area: '2.9 Lakh Sq. Ft.',
    units: 396,
    configuration: [
      { type: 'Pondside Villa', size: '4 Bedroom', area: '4,400 Sq. Ft.' },
      { type: 'Garden Home', size: '3 Bedroom + Study', area: '3,200 Sq. Ft.' },
      { type: 'Lane Apartment', size: '3 Bedroom', area: '2,700 Sq. Ft.' }
    ],
    amenities: [
      'Pond chain & boardwalk',
      'Wellness pavilion with pool, spa & gym',
      'Preserved heritage tree walk',
      'Community farms & orchards',
      'Amphitheatre & wedding lawn',
      'Kids’ adventure garden & splash court',
      'Smart district-wide security',
      'Electric buggy service along the lanes'
    ],
    specifications: [
      'Climate-responsive lime-render facades',
      'Double-glazed, low-E fenestration',
      'Premium timber & stone interiors',
      'Modular kitchens with concealed hobs',
      'Smart-home systems standard',
      'Rainwater net-positive water design',
      'Solar-assisted common utilities',
      'RCC frame, seismic Zone 2 compliant'
    ],
    architecture: [
      {
        title: 'The Preserved Canopy',
        text: 'Mature trees set the geometry of lanes and homes, so that opening a window is to enter the canopy — landscape composed before architecture.'
      },
      {
        title: 'Water in the Middle',
        text: 'A chain of shallow reflecting ponds cools the air, collects winter rain and gives the community its calm, reflective centrepiece.'
      },
      {
        title: 'The Lane, Not the Drive',
        text: 'Shared garden lanes, not car courts, organise the plan — slowing the street to walking pace and turning every journey into a short walk under trees.'
      }
    ],
    connectivity: [
      'Kondapur at the inland tech edge',
      '5 min to Gachibowli & Financial District',
      '8 min to HITEC City',
      'International schools within 10 min',
      'Medicare & hospitals within 5 min',
      'Outer Ring Road access in 8 min'
    ],
    testimonials: {
      video: [],
      written: []
    },
    demo: true
  },
  {
    slug: 'veridian-park',
    name: 'VERIDIAN PARK',
    location: 'Whitefield, Bengaluru, Karnataka',
    city: 'Bengaluru',
    category: 'Mixed-Use Development',
    status: 'Completed',
    year: '2023',
    delivered: '2023',
    description:
      'A 24-acre completed mixed-use community in Whitefield — homes, offices, a high street and the verdant open spaces that give Bengaluru its garden-city soul.',
    longDescription: [
      'Veridian Park is Nivara’s first completed mixed-use development — and a working argument that density and greenery are allies. Twenty-four acres host residences, Grade-A offices, a cheery high street and a muscular green spine of parks that threads the entire community.',
      'Delivered in 2023, Veridian is a fully operational city within the city. Its energy centre, water loops and public art programme have been studied by planners across the country; its residents simply call it home.'
    ],
    heroImage: img('photo-1449824913935-59a10b8d2000', 1920),
    poster: img('photo-1449824913935-59a10b8d2000', 1920),
    video: VIDEOS.walkthrough4,
    gallery: [
      img('photo-1480714378408-67cf0d13bc1b', 1400),
      img('photo-1444723121867-7a241cacace9', 1400),
      img('photo-1479839672679-a46483c0e7c8', 1400),
      img('photo-1460317442991-0ec209397118', 1400),
      img('photo-1497366811353-6870744d04b2', 1400)
    ],
    area: '3.1M Sq. Ft.',
    units: 640,
    configuration: [
      { type: 'Park Residences', size: '3 & 4 Bedroom', area: '1,800–3,900 Sq. Ft.' },
      { type: 'Office Campus', size: 'Grade-A', area: '1.4M Sq. Ft.' },
      { type: 'High Street Retail', size: 'Street Units', area: '450,000 Sq. Ft.' }
    ],
    amenities: [
      'Linear park of 8 acres',
      'Community lake & cycling corridors',
      'Kid-friendly streets & safe crossings',
      'Clubhouse, pools & sports hub',
      'Performing arts theatre',
      'Boutique retail high street',
      'District energy & water centre',
      'Public art & sculpture gardens'
    ],
    specifications: [
      'Green-certified buildings',
      'Climate-responsive facades throughout',
      '5-star rated water fixtures',
      '100% treated grey-water reuse',
      'Solar rooftops on all commodity blocks',
      'Smart parking with EV readiness',
      'Fibre + 5G district backbone',
      'Fire-engineered high-rise systems'
    ],
    architecture: [
      {
        title: 'The Green Spine',
        text: 'Eight acres of linear park organise the plan — homes step toward it, the high street fronts it, and employees eat lunch on it. Landscape is not a leftover; it is the ordering idea.'
      },
      {
        title: 'Streets for People',
        text: 'Car speeds are engineered down, crossings are raised and café terraces claim the pavement. Streets feel like living rooms, because in the plan, they are.'
      },
      {
        title: 'One District, One Systems Table',
        text: 'Energy, water, waste and mobility are managed at district scale from a single operations room — the quiet infrastructure that makes mixed-use life seamless.'
      }
    ],
    connectivity: [
      'Whitefield at the airport belt',
      'ITPB main road direct access',
      '10 min to the ITPL tech campus',
      'Whitefield metro within 3 km',
      'Kempegowda airport at 35 min',
      'Schools & hospitals within 10 min'
    ],
    testimonials: {
      video: ['demo-community-veridian'],
      written: ['written-04']
    },
    demo: true
  }
]

export const getProject = (slug) => projects.find((p) => p.slug === slug)
export const ongoingProjects = () => projects.filter((p) => p.status === 'Ongoing')
export const upcomingProjects = () => projects.filter((p) => p.status === 'Upcoming')
export const completedProjects = () => projects.filter((p) => p.status === 'Completed')