import React from 'react';
import { Link } from 'react-router-dom';
import '../../assets/css/Committee.css';

// 🧩 Each entry: [ { name, link, email, affiliation }, { ... } ]
// link is the member's homepage (verified Sept 2026); email is shown as plain text.
const members = [
  [
    { name: 'Sudhanshu Panda', link: 'https://ung.edu/institute-environmental-spatial-analysis/faculty-staff-bio/sudhanshu-panda.php', email: 'Sudhanshu.Panda@ung.edu', affiliation: 'University of North Georgia' },
    { name: 'Paola Pesantez-Cabrera', link: 'https://paolapesantez.github.io/', email: 'p.pesantezcabrera@wsu.edu', affiliation: 'Washington State University' }
  ],
  [
    { name: 'Upinder Kaur', link: 'https://engineering.purdue.edu/ABE/people/ptProfile?resource_id=287656', email: 'kauru@purdue.edu', affiliation: 'Purdue University' },
    { name: 'Ashish Pandey', link: 'https://wr.iitr.ac.in/~WR/ashisfwt', email: 'ashish.pandey@wr.iitr.ac.in', affiliation: 'IIT Roorkee' }
  ],
  [
    { name: 'Pabitra Mitra', link: 'https://cse.iitkgp.ac.in/~pabitra/', email: 'pabitra@gmail.com', affiliation: 'IIT Kharagpur' },
    { name: 'Manish K Goyal', link: 'https://sites.google.com/view/mkg1/home', email: 'mkgoyal@iiti.ac.in', affiliation: 'IIT Indore' }
  ],
  [
    { name: 'Priyanka V', link: 'https://gtl.csa.iisc.ac.in/hari/group/research-group/', email: 'priyankav@iisc.ac.in', affiliation: 'Indian Institute of Science' },
    { name: 'Manojkumar Patil', link: 'https://gtl.csa.iisc.ac.in/hari/group/research-group/', email: 'pmanojkumar@iisc.ac.in', affiliation: 'Indian Institute of Science' }
  ],
  [
    { name: 'Archana R Sathyan', link: 'https://kau.in/people/archana-raghavan-sathyan-dr', email: 'archana.rs@kau.in', affiliation: 'Kerala Agricultural University' },
    { name: 'Chen Chen', link: 'https://www.crcv.ucf.edu/chenchen/index.html', email: 'chen.chen@crcv.ucf.edu', affiliation: 'University of Central Florida' }
  ],
  [
    { name: 'Sunil Gorantiwar', link: 'https://scholar.google.com/citations?hl=en&user=qiTJTcwAAAAJ', email: 'sdgorantiwar@gmail.com', affiliation: 'Mahatma Phule Krishi Vidyapeeth' },
    { name: 'K S Rajan', link: 'https://lsi.iiit.ac.in/ks_rajan/', email: 'rajan@iiit.ac.in', affiliation: 'IIIT Hyderabad' }
  ],
  [
    { name: 'Srinivasu Pappula', link: 'https://scholar.google.com/citations?user=OD9AdOEAAAAJ&hl=en', email: 'vasu@kalgudi.com', affiliation: 'Kalgudi' },
    { name: 'Rabi Narayan Sahoo', link: 'https://scholar.google.co.in/citations?user=o_CTPMkAAAAJ&hl=en', email: 'rabi.sahoo@icar.org.in', affiliation: 'Indian Council of Agricultural Research' }
  ],
];

// Committee members' e-mail addresses are shown as plain text, never as
// mailto: hyperlinks — requested so the addresses are not trivially harvested
// by crawlers. A member's own homepage may still be linked.
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
      {member.email ? <> (<span className="committee-email">{member.email}</span>)</> : null}
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
