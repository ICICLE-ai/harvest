// Descriptors for the two editions that are currently open. Each one gets a
// top-level navbar tab and its own set of side tabs; the side tabs are the same
// set for every edition, so they live here once.
//
// `date` and `venue` are null while unannounced — EventLayout renders a TBD
// badge in their place rather than the string, so grepping for "tbd" still
// turns up every unresolved item.

export const EVENT_SECTIONS = [
  { label: 'Overview', slug: '' },
  { label: 'Call for Papers', slug: 'call-for-papers' },
  { label: 'Call for Posters', slug: 'call-for-posters' },
  { label: 'Agenda', slug: 'agenda' },
  { label: 'Committees', slug: 'committees' },
  { label: 'Travel Grants', slug: 'travel-grants' },
  { label: 'Contact', slug: 'contact' },
];

export const harvestIndia2026 = {
  id: 'india-2026',
  basePath: '/india-2026',
  navLabel: 'HARVEST-India 2026',
  shortLabel: 'HARVEST-India',
  title: 'HARVEST-India 2026',
  edition: '3rd Edition',
  tagline:
    'HARVEST-India: Third International Workshop on Applications of HPC and AI in Agriculture',
  format: 'Half-Day Workshop',
  date: 'Wednesday, December 16, 2026',
  venue: 'Bengaluru, India',
  host: {
    label:
      'HiPC 2026 — the IEEE International Conference on High Performance Computing, Data, and Analytics',
    short: 'HiPC 2026',
    url: 'https://hipc.org/',
  },
};

export const harvestVision2027 = {
  id: 'vision-2027',
  basePath: '/vision-2027',
  navLabel: 'HARVEST-Vision 2027',
  shortLabel: 'HARVEST-Vision',
  title: 'HARVEST-Vision 2027',
  edition: '4th Edition',
  tagline:
    'HARVEST-Vision: Fourth International Workshop on Applications of Computer Vision and HPC in Agriculture',
  format: 'Workshop',
  date: 'January 4/5, 2027',
  venue: 'Disney Springs',
  host: {
    label:
      'The IEEE/CVF Winter Conference on Applications of Computer Vision (WACV), 2027',
    short: 'WACV 2027',
    url: 'https://wacv.thecvf.com/',
  },
};

export const events = [harvestIndia2026, harvestVision2027];

// Concluded editions, shown in the navbar's "Past Events" dropdown.
export const pastEvents = [
  { label: 'All Past Events', path: '/past-events' },
  { label: 'HARVEST-Vision 2026 (2nd Edition)', path: '/past-events/harvest-vision-2026' },
  { label: 'HARVEST 2025 (1st Edition)', path: '/past-events/2025' },
];
