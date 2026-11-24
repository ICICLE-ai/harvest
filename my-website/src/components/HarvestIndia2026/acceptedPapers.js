// Accepted papers for HARVEST-India 2026 (HiPC 2026 workshop), in the order
// supplied by the HiPC submission system.

const RRU = 'Rashtriya Raksha University';
const BITS_GOA = 'BITS Pilani Goa';
const VYLOR = 'Vylor';
const CEADAR = 'CeADAR, School of Computer Science, University College Dublin';
const CTU = 'Can Tho University';
const UNG = 'University of North Georgia';

export const acceptedPapers = [
  {
    title:
      'SI3: Spectra-Informed Index Insurance Framework for Agricultural Risk Mitigation: A Hyperspectral Approach',
    authors: [
      { name: 'Aarya Mevcha', affiliation: RRU },
      { name: 'Subhajit Bandopadhyay', affiliation: RRU },
    ],
  },
  {
    title:
      'Rank-Aware Quantile Activation for Motion-Robust Crop Segmentation in UAV Imagery',
    authors: [
      { name: 'Sravan Danda', affiliation: BITS_GOA },
      { name: 'Abinav Kiran', affiliation: BITS_GOA },
      { name: 'Sougata Sen', affiliation: BITS_GOA },
      { name: 'Aditya Challa', affiliation: BITS_GOA },
      { name: 'Daya Sagar B S', affiliation: 'Indian Statistical Institute, Bengaluru' },
    ],
  },
  {
    title: 'Mobile Ear Pile Photometry for High-Throughput Corn Phenotyping',
    authors: [
      { name: 'Mahesh Taparia', affiliation: VYLOR },
      { name: 'Chaitanyam Potnuru', affiliation: VYLOR },
      { name: 'Sara Tirado Tolosa', affiliation: VYLOR },
      { name: 'Eric Whitted', affiliation: VYLOR },
      { name: 'Jeremy Johnson', affiliation: VYLOR },
      { name: 'Nitin Kandpal', affiliation: 'Corteva Agriscience' },
    ],
  },
  {
    title: 'Multi-Photo Rice Variety Recognition from Field Imagery',
    authors: [
      { name: 'Aditi Bhatia', affiliation: CEADAR },
      { name: 'Duong Cao Phan', affiliation: CEADAR },
      { name: 'Thanh Tam Nguyen', affiliation: CTU },
      { name: 'Trung Nguyen Ly', affiliation: CTU },
      { name: 'Quan Le', affiliation: CEADAR },
    ],
  },
  {
    title:
      'Integrating Expert-Driven GeoAI, Historical Landslide Evidence, and Geospatial Digital Twins for Agricultural Vulnerability Assessment in Idukki District, Kerala',
    authors: [
      { name: 'Punyajit Mishra', affiliation: 'Sai International School, Bhubaneswar' },
      { name: 'Darren Mathew Jacob', affiliation: 'Kennesaw State University' },
      { name: 'Kishan Kumar', affiliation: UNG },
      { name: 'Sudhanshu Sekhar Panda', affiliation: UNG },
    ],
  },
];

// Distinct institutions across a paper's authors, in first-appearance order.
export const affiliationsOf = (paper) => [
  ...new Set(paper.authors.map((a) => a.affiliation).filter(Boolean)),
];
