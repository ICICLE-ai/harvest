import React from 'react';
import { Link } from 'react-router-dom';
import '../../assets/css/Committee.css';

// 🧩 Each entry: [ { name, email, affiliation }, { name, email, affiliation } ]
const members = [
  [
    { name: 'Sudhanshu Panda', email: 'Sudhanshu.Panda@ung.edu', affiliation: 'University of North Georgia' },
    { name: 'Paola Gabriela', email: 'p.pesantezcabrera@wsu.edu', affiliation: 'Washington State University' }
  ],
  [
    { name: 'Upinder Kaur', email: 'kauru@purdue.edu', affiliation: 'Purdue University' },
    { name: 'Ashish Pandey', email: 'ashish.pandey@wr.iitr.ac.in', affiliation: 'IIT Roorkee' }
  ],
];

const ProgramCommittee = () => {
  return (
    <section className="committee" id="committee">
      <h2>Technical Program Committee</h2>

      <table className="committee-table">
        <tbody>
          {members.map((pair, i) => {
            const [left, right] = pair;
            return (
              <tr key={i}>
                <td>
                  <a href={`mailto:${left.email}`}>{left.name}</a>, {left.affiliation}
                </td>
                <td>
                  {right ? (
                    <>
                      <a href={`mailto:${right.email}`}>{right.name}</a>, {right.affiliation}
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

      <p>
        Additional members: <span className="tbd">TBD</span>. For reference, the{' '}
        <Link to="/past-events/harvest-vision-2026">HARVEST-Vision 2026</Link> committee is preserved
        on the past events page.
      </p>
    </section>
  );
};

export default ProgramCommittee;
