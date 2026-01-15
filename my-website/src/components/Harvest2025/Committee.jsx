import React from 'react';
import '../../assets/css/Committee.css';

// 🧩 Each entry: [ { name, link, affiliation }, { name, link, affiliation } ]
const speakers = [
  [
    { name: "Christopher Stewart", link: "https://cse.osu.edu/people/stewart.962", affiliation: "Ohio State University" },
    { name: "Wei-Lun Chao", link: "https://cse.osu.edu/people/chao.209", affiliation: "Ohio State University" }
  ],
  [
    { name: "Ben Craker", link: "https://www.linkedin.com/in/crakerb/", affiliation: "AgGateway" },
    { name: "Chuk Stewart", link: "https://faculty.rpi.edu/chuck-stewart", affiliation: "RPI" }
  ],
  [
    { name: "Ananth Kalyanaraman", link: "https://eecs.wsu.edu/~ananth/", affiliation: "Washington State University" },
    { name: "Barney Maccabe", link: "https://infosci.arizona.edu/person/barney-maccabe", affiliation: "The University of Arizona" }
  ],
  [
    { name: "Margaret Burnett", link: "https://engineering.oregonstate.edu/people/margaret-burnett", affiliation: "Oregon State University" },
    { name: "Madhav Marathe", link: "https://engineering.virginia.edu/faculty/madhav-marathe", affiliation: "University of Virginia" }
  ],
  [
    { name: "Katie Driggs-Campbell", link: "https://ece.illinois.edu/about/directory/faculty/krdc", affiliation: "UIUC" },
    { name: "Girish Chowdhary", link: "https://ece.illinois.edu/about/directory/affiliates/girishc", affiliation: "UIUC" }
  ],
  [
    { name: "Roser Matamala", link: "https://www.anl.gov/profile/roser-matamala", affiliation: "Argonne National Laboratory" },
    { name: "George A. Kantor", link: "https://www.ri.cmu.edu/ri-faculty/george-a-kantor/", affiliation: "CMU" }
  ],
  [
    { name: "Nirav Merchant", link: "https://superfund.arizona.edu/person/nirav-c-merchant", affiliation: "University of Arizona" },
    { name: "Michelle S. Segovia", link: "https://www.udel.edu/academics/colleges/canr/departments/applied-economics-and-statistics/faculty-staff/michelle-segovia/", affiliation: "University of Delaware" }
  ],
  [
    { name: "Arti Singh", link: "https://www.agron.iastate.edu/people/singh-arti-2/", affiliation: "Iowa State University" },
    { name: "Isabella Condotta", link: "https://lemann.illinois.edu/directory/profile/icfsc", affiliation: "UIUC" }
  ],
  [
    { name: "Georgine Yorgey", link: "https://bsyse.wsu.edu/people/faculty/wsu-profile/yorgey/", affiliation: "Washington State University" },
    { name: "Sandhya Saisubramanian", link: "https://engineering.oregonstate.edu/people/sandhya-saisubramanian", affiliation: "Oregon State University" }
  ],
  [
    { name: "Bernard Gregory", link: "https://www.tuskegee.edu/academics/colleges-schools/caens/Faculty-Staff/Bernard-Gregory.html", affiliation: "Tuskegee University" },
    { name: "Christine Diepenbrock", link: "https://www.plantsciences.ucdavis.edu/people/christine-diepenbrock", affiliation: "UC Davis" }
  ],
  [
    { name: "Stephanie Russo Carroll", link: "https://publichealth.arizona.edu/directory/stephanie-russo-carroll", affiliation: "The University of Arizona" },
    { name: "Nicholas Butts", link: "https://www.linkedin.com/in/nicholas-butts-1a456569/", affiliation: "John Deere" }
  ],
  [
    { name: "Aswathnarayan Radhakrishnan", link: "https://www.linkedin.com/in/radhakrishnan97/", affiliation: "The Ohio State University" },
    { name: "Anirudh Patlapally", link: "https://www.linkedin.com/in/anirudh-potlapally-30659a1ab/", affiliation: "The Ohio State University" }
  ],
];

const Committee = () => {
  return (
    <section className="committee" id="committee">
      <h2>Technical Program Committee</h2>

      <table className="committee-table">
        <tbody>
          {speakers.map((pair, i) => {
            const [left, right] = pair;
            return (
              <tr key={i}>
                <td>
                  <a href={left.link} target="_blank" rel="noopener noreferrer">
                    {left.name}
                  </a>, {left.affiliation}
                </td>
                <td>
                  <a href={right.link} target="_blank" rel="noopener noreferrer">
                    {right.name}
                  </a>, {right.affiliation}
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
