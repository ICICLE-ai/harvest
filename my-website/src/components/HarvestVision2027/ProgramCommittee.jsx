import React from 'react';
import '../../assets/css/Committee.css';

// 🧩 Each entry: [ { name, link, affiliation }, { ... } ]
// link is the member's homepage.
// The committee is still being formed — add members two per row.
const members = [
  [
    { name: 'Sarath Babu', link: 'https://www.engineering.iastate.edu/people/profile/sarath4/', affiliation: 'Iowa State University' },
    { name: 'Gregory Bernard', link: 'https://www.tuskegee.edu/academics/colleges-schools/caens/Faculty-Staff/Bernard-Gregory.html', affiliation: 'Tuskegee University' }
  ],
  [
    { name: 'Rajveer Dhillon', link: 'https://www.centralstate.edu/profiles/rajveer-dhillon', affiliation: 'Central State University' },
    { name: 'Mason Earles', link: 'https://pabgap.ucdavis.edu/people/mason-earles', affiliation: 'University of California, Davis' }
  ],
  [
    { name: 'Arpan Jain', link: 'https://www.linkedin.com/in/aj-prime/', affiliation: 'Microsoft' },
    { name: 'Yu Jiang', link: 'https://cals.cornell.edu/people/yu-jiang', affiliation: 'Cornell University' }
  ],
  [
    { name: 'Barney Maccabe', link: 'https://infosci.arizona.edu/person/barney-maccabe', affiliation: 'University of Arizona' },
    { name: 'Sudhanshu Panda', link: 'https://ung.edu/institute-environmental-spatial-analysis/faculty-staff-bio/sudhanshu-panda.php', affiliation: 'University of North Georgia' }
  ],
  [
    { name: 'Paola Pesantez-Cabrera', link: 'https://paolapesantez.github.io/', affiliation: 'Washington State University' },
    { name: 'Soumik Sarkar', link: 'https://www.engineering.iastate.edu/people/profile/soumiks/', affiliation: 'Iowa State University' }
  ],
  [
    { name: 'Abhisesh Silwal', link: 'https://www.ri.cmu.edu/ri-faculty/abhisesh-silwal/', affiliation: 'Carnegie Mellon University' },
    { name: 'Rich Wolski', link: 'https://sites.cs.ucsb.edu/~rich/', affiliation: 'University of California, Santa Barbara' }
  ],
  [
    { name: 'Sierra Young', link: 'https://www.thedaisylab.com/', affiliation: 'Utah State University' },
    null
  ],
];

// Committee members' e-mail addresses are deliberately not published here, so
// the addresses are not harvested by crawlers. A member's own homepage may
// still be linked.
// affiliation is optional — omit the separator when we don't have one.
const Member = ({ member }) => {
  if (!member) return null;

  return (
    <>
      {member.link ? (
        <a href={member.link} target="_blank" rel="noopener noreferrer">
          {member.name}
        </a>
      ) : (
        <span className="committee-name">{member.name}</span>
      )}
      {member.affiliation ? `, ${member.affiliation}` : ''}
    </>
  );
};

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
                  <Member member={left} />
                </td>
                <td>
                  <Member member={right} />
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </section>
  );
};

export default ProgramCommittee;
