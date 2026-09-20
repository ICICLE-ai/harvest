import React from 'react';
import { Link } from 'react-router-dom';
import '../../assets/css/Committee.css';

// 🧩 Each entry: [ { name, link, affiliation }, { ... } ]
// link is the member's homepage (verified Sept 2026).
const members = [
  [
    { name: 'Sudhanshu Panda', link: 'https://ung.edu/institute-environmental-spatial-analysis/faculty-staff-bio/sudhanshu-panda.php', affiliation: 'University of North Georgia' },
    { name: 'Paola Pesantez-Cabrera', link: 'https://paolapesantez.github.io/', affiliation: 'Washington State University' }
  ],
  [
    { name: 'Upinder Kaur', link: 'https://engineering.purdue.edu/ABE/people/ptProfile?resource_id=287656', affiliation: 'Purdue University' },
    { name: 'Ashish Pandey', link: 'https://wr.iitr.ac.in/~WR/ashisfwt', affiliation: 'IIT Roorkee' }
  ],
  [
    { name: 'Pabitra Mitra', link: 'https://cse.iitkgp.ac.in/~pabitra/', affiliation: 'IIT Kharagpur' },
    { name: 'Manish K Goyal', link: 'https://sites.google.com/view/mkg1/home', affiliation: 'IIT Indore' }
  ],
  [
    { name: 'Priyanka V', link: 'https://www.linkedin.com/in/dr-priyanka-v-60508113a/', affiliation: 'Indian Institute of Science' },
    { name: 'Manojkumar Patil', link: 'https://gtl.csa.iisc.ac.in/hari/group/research-group/', affiliation: 'Indian Institute of Science' }
  ],
  [
    { name: 'Archana R Sathyan', link: 'https://kau.in/people/archana-raghavan-sathyan-dr', affiliation: 'Kerala Agricultural University' },
    { name: 'Chen Chen', link: 'https://www.crcv.ucf.edu/chenchen/index.html', affiliation: 'University of Central Florida' }
  ],
  [
    { name: 'Sunil Gorantiwar', link: 'https://scholar.google.com/citations?hl=en&user=qiTJTcwAAAAJ', affiliation: 'Mahatma Phule Krishi Vidyapeeth' },
    { name: 'K S Rajan', link: 'https://lsi.iiit.ac.in/ks_rajan/', affiliation: 'IIIT Hyderabad' }
  ],
  [
    { name: 'Srinivasu Pappula', link: 'https://scholar.google.com/citations?user=OD9AdOEAAAAJ&hl=en', affiliation: 'Kalgudi' },
    { name: 'Rabi Narayan Sahoo', link: 'https://scholar.google.co.in/citations?user=o_CTPMkAAAAJ&hl=en', affiliation: 'Indian Council of Agricultural Research' }
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

      <p>
        Additional members: <span className="tbd">TBD</span>. For reference, the{' '}
        <Link to="/past-events/harvest-vision-2026">HARVEST-Vision 2026</Link> committee is preserved
        on the past events page.
      </p>
    </section>
  );
};

export default ProgramCommittee;
