// import React from 'react';
// import '../../assets/css/Committee.css';

// // 🧩 Each entry: [ { name, link, affiliation }, { name, link, affiliation } ]
// // const speakers = [
// //   [
// //     { name: "Christopher Stewart", link: "https://cse.osu.edu/people/stewart.962", affiliation: "Ohio State University" },
// //     { name: "Wei-Lun Chao", link: "https://cse.osu.edu/people/chao.209", affiliation: "Ohio State University" }
// //   ],
// //   [
// //     { name: "Ben Craker", link: "https://www.linkedin.com/in/crakerb/", affiliation: "AgGateway" },
// //     { name: "Chuk Stewart", link: "https://faculty.rpi.edu/chuck-stewart", affiliation: "RPI" }
// //   ],
// //   [
// //     { name: "Ananth Kalyanaraman", link: "https://eecs.wsu.edu/~ananth/", affiliation: "Washington State University" },
// //     { name: "Barney Maccabe", link: "https://infosci.arizona.edu/person/barney-maccabe", affiliation: "The University of Arizona" }
// //   ],
// //   [
// //     { name: "Margaret Burnett", link: "https://engineering.oregonstate.edu/people/margaret-burnett", affiliation: "Oregon State University" },
// //     { name: "Madhav Marathe", link: "https://engineering.virginia.edu/faculty/madhav-marathe", affiliation: "University of Virginia" }
// //   ],
// //   [
// //     { name: "Katie Driggs-Campbell", link: "https://ece.illinois.edu/about/directory/faculty/krdc", affiliation: "UIUC" },
// //     { name: "Girish Chowdhary", link: "https://ece.illinois.edu/about/directory/affiliates/girishc", affiliation: "UIUC" }
// //   ],
// //   [
// //     { name: "Roser Matamala", link: "https://www.anl.gov/profile/roser-matamala", affiliation: "Argonne National Laboratory" },
// //     { name: "George A. Kantor", link: "https://www.ri.cmu.edu/ri-faculty/george-a-kantor/", affiliation: "CMU" }
// //   ],
// //   [
// //     { name: "Nirav Merchant", link: "https://superfund.arizona.edu/person/nirav-c-merchant", affiliation: "University of Arizona" },
// //     { name: "Michelle S. Segovia", link: "https://www.udel.edu/academics/colleges/canr/departments/applied-economics-and-statistics/faculty-staff/michelle-segovia/", affiliation: "University of Delaware" }
// //   ],
// //   [
// //     { name: "Arti Singh", link: "https://www.agron.iastate.edu/people/singh-arti-2/", affiliation: "Iowa State University" },
// //     { name: "Isabella Condotta", link: "https://lemann.illinois.edu/directory/profile/icfsc", affiliation: "UIUC" }
// //   ],
// //   [
// //     { name: "Georgine Yorgey", link: "https://bsyse.wsu.edu/people/faculty/wsu-profile/yorgey/", affiliation: "Washington State University" },
// //     { name: "Sandhya Saisubramanian", link: "https://engineering.oregonstate.edu/people/sandhya-saisubramanian", affiliation: "Oregon State University" }
// //   ],
// //   [
// //     { name: "Bernard Gregory", link: "https://www.tuskegee.edu/academics/colleges-schools/caens/Faculty-Staff/Bernard-Gregory.html", affiliation: "Tuskegee University" },
// //     { name: "Christine Diepenbrock", link: "https://www.plantsciences.ucdavis.edu/people/christine-diepenbrock", affiliation: "UC Davis" }
// //   ],
// //   [
// //     { name: "Stephanie Russo Carroll", link: "https://publichealth.arizona.edu/directory/stephanie-russo-carroll", affiliation: "The University of Arizona" },
// //     { name: "Nicholas Butts", link: "https://www.linkedin.com/in/nicholas-butts-1a456569/", affiliation: "John Deere" }
// //   ],
// //   [
// //     { name: "Aswathnarayan Radhakrishnan", link: "https://www.linkedin.com/in/radhakrishnan97/", affiliation: "The Ohio State University" },
// //     { name: "Anirudh Patlapally", link: "https://www.linkedin.com/in/anirudh-potlapally-30659a1ab/", affiliation: "The Ohio State University" }
// //   ],
// // ];

// const speakers =
// [
//   { 
//     name: "Aswathnarayan Radhakrishnan", 
//     link: "https://www.linkedin.com/in/radhakrishnan97/", 
//     affiliation: "The Ohio State University" 
//   },
//   { 
//     name: "Anirudh Patlapally", 
//     link: "https://www.linkedin.com/in/anirudh-potlapally-30659a1ab/", 
//     affiliation: "The Ohio State University" 
//   },
//   { 
//     name: "Matthew Carroll", 
//     link: "https://www.iasoybeans.com/about/staff-listing/matthew-carroll", 
//     affiliation: "Iowa Soybean Association" 
//   },
//   { 
//     name: "Christopher Dean", 
//     link: "https://fabe.osu.edu/our-people/christopher-dean", 
//     affiliation: "The Ohio State University" 
//   },
//   { 
//     name: "Arpan Jain", 
//     link: "https://www.linkedin.com/in/aj-prime/", 
//     affiliation: "Microsoft" 
//   },
//   { 
//     name: "George A. Kantor", 
//     link: "https://www.cmu.edu/news/experts/georgea.kantor", 
//     affiliation: "Carnegie Mellon University" 
//   },
//   { 
//     name: "Upinder Kaur", 
//     link: "https://ag.purdue.edu/directory/kauru", 
//     affiliation: "Purdue University" 
//   },
//   { 
//     name: "Alfonso Morales", 
//     link: "https://dpla.wisc.edu/staff/alfonso-morales/", 
//     affiliation: "University of Wisconsin-Madison" 
//   },
//   { 
//     name: "Paola Pesantez-Cabrera",
//     link: "https://paolagpesantezc.wixsite.com/paolapesantezcabrera", 
//     affiliation: "Washington State University" 
//   },
//   { 
//     name: "Christopher C. Stewart", 
//     link: "https://cse.osu.edu/people/stewart.962", 
//     affiliation: "The Ohio State University" 
//   }
// ]


// const Committee = () => {
//   return (
//     <section className="committee" id="committee">
//       <h2>Technical Program Committee</h2>

//       <table className="committee-table">
//         <tbody>
//           {speakers.map((pair, i) => {
//             const [left, right] = pair;
//             return (
//               <tr key={i}>
//                 <td>
//                   <a href={left.link} target="_blank" rel="noopener noreferrer">
//                     {left.name}
//                   </a>, {left.affiliation}
//                 </td>
//                 <td>
//                   <a href={right.link} target="_blank" rel="noopener noreferrer">
//                     {right.name}
//                   </a>, {right.affiliation}
//                 </td>
//               </tr>
//             );
//           })}
//         </tbody>
//       </table>
//     </section>
//   );
// };

// export default Committee;


import React from 'react';
import '../../assets/css/Committee.css';

// Flat list of speakers
const speakers = [
  { 
    name: "Aswathnarayan Radhakrishnan", 
    link: "https://www.linkedin.com/in/radhakrishnan97/", 
    affiliation: "The Ohio State University" 
  },
  { 
    name: "Anirudh Potlapally", 
    link: "https://www.linkedin.com/in/anirudh-potlapally-30659a1ab/", 
    affiliation: "The Ohio State University" 
  },
  { 
    name: "Matthew Carroll", 
    link: "https://www.iasoybeans.com/about/staff-listing/matthew-carroll", 
    affiliation: "Iowa Soybean Association" 
  },
  { 
    name: "Christopher Dean", 
    link: "https://fabe.osu.edu/our-people/christopher-dean", 
    affiliation: "The Ohio State University" 
  },
  { 
    name: "Arpan Jain", 
    link: "https://www.linkedin.com/in/aj-prime/", 
    affiliation: "Microsoft" 
  },
  { 
    name: "George A. Kantor", 
    link: "https://www.cmu.edu/news/experts/georgea.kantor", 
    affiliation: "Carnegie Mellon University" 
  },
  { 
    name: "Upinder Kaur", 
    link: "https://ag.purdue.edu/directory/kauru", 
    affiliation: "Purdue University" 
  },
  { 
    name: "Alfonso Morales", 
    link: "https://dpla.wisc.edu/staff/alfonso-morales/", 
    affiliation: "University of Wisconsin-Madison" 
  },
  { 
    name: "Paola Pesantez-Cabrera",
    link: "https://paolagpesantezc.wixsite.com/paolapesantezcabrera",
    affiliation: "Washington State University" 
  },
  { 
    name: "Christopher C. Stewart", 
    link: "https://cse.osu.edu/people/stewart.962", 
    affiliation: "The Ohio State University" 
  }
];

const Committee = () => {
  return (
    <section className="committee" id="committee">
      <h2>Technical Program Committee</h2>

      <table className="committee-table">
        <tbody>
          {Array.from({ length: Math.ceil(speakers.length / 2) }).map((_, rowIdx) => {
            const left = speakers[rowIdx * 2];
            const right = speakers[rowIdx * 2 + 1];

            return (
              <tr key={rowIdx}>
                <td>
                  {left && (
                    <>
                      <a href={left.link} target="_blank" rel="noopener noreferrer">
                        {left.name}
                      </a>, {left.affiliation}
                    </>
                  )}
                </td>

                <td>
                  {right && (
                    <>
                      <a href={right.link} target="_blank" rel="noopener noreferrer">
                        {right.name}
                      </a>, {right.affiliation}
                    </>
                  )}
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </section>
  );
};

export default Committee;


