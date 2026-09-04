import React from 'react';
import '../../assets/css/Committee.css';
// comment
// 🧩 Each entry: [ { name, link, affiliation }, { name, link, affiliation } ]
const speakers = [
  [
    { name: "Daniel Rubenstein", link: "https://eeb.princeton.edu/people/daniel-rubenstein", affiliation: "Princeton University" },
    { name: "Upinder Kaur", link: "https://engineering.purdue.edu/ABE/people/ptProfile?resource_id=287656", affiliation: "Purdue University" }
  ],
  [
    { name: "Gregory C Bernard", link: "https://www.linkedin.com/in/gregory-c-bernard-958879a2/", affiliation: "Tuskegee University" },
    { name: "Paola Pesantez-Cabrera", link: "https://paolapesantez.github.io/", affiliation: "AgAID Institute" }
  ],
  [
    { name: "Rajveer Dhillon", link: "https://www.centralstate.edu/profiles/rajveer-dhillon", affiliation: "Central State University" },
    { name: "Rich Wolski", link: "https://cs.ucsb.edu/people/faculty/rich-wolski", affiliation: "University of California, Santa Barbara" }
  ],
  [
    { name: "Arpan Jain", link: "https://www.linkedin.com/in/aj-prime/", affiliation: "Microsoft" },
    { name: "Anirudh Potlapally", link: "https://www.linkedin.com/in/anirudh-potlapally-30659a1ab/", affiliation: "The Ohio State University" }
  ],
  [
    { name: "Jianyang Gu", link: "https://vimar-gu.github.io/", affiliation: "The Ohio State University" },
    { name: "Remi Megret", link: "https://cahsi.utep.edu/expert/remi-megret/", affiliation: "University of Puerto Rico, Río Piedras" }
  ],
  [
    { name: "Aswathnarayan Radhakrishnan", link: "https://www.linkedin.com/in/radhakrishnan97/", affiliation: "The Ohio State University" },
    { name: "Rodrigo Verschae", link: "https://rodrigo.verschae.org/", affiliation: "Universidad de O’Higgins" }
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
                  {right ? (
                    <>
                      <a href={right.link} target="_blank" rel="noopener noreferrer">
                        {right.name}
                      </a>, {right.affiliation}
                    </>
                  ) : (
                    ''
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
