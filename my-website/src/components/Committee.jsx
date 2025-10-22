import React from 'react';
import '../assets/css/Committee.css';

// 🧩 Each entry: [ { name, link, affiliation }, { name, link, affiliation } ]
const speakers = [
  [
    { name: "Daniel Rubenstein", link: "https://eeb.princeton.edu/people/daniel-rubenstein", affiliation: "Princeton University" },
    { name: "Upinder Kaur", link: "https://engineering.purdue.edu/ABE/people/ptProfile?resource_id=287656", affiliation: "Purdue University" }
  ],
  
  
];

const Committee = () => {
  return (
    <section className="committee" id="committee">
      <h2>Technical Program Committee (TBD)</h2>

      <table className="committee-table">
        <tbody>
          {speakers.map(([left, right], i) => (
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
          ))}
        </tbody>
      </table>
    </section>
  );
};

export default Committee;
