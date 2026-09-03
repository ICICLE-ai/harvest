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
  [
    { name: 'Pabitra Mitra', email: 'pabitra@gmail.com', affiliation: 'IIT Kharagpur' },
    { name: 'Manish K Goyal', email: 'mkgoyal@iiti.ac.in', affiliation: 'IIT Indore' }
  ],
  [
    { name: 'Priyanka V', email: 'priyankav@iisc.ac.in', affiliation: 'Indian Institute of Science' },
    { name: 'Manojkumar Patil', email: 'pmanojkumar@iisc.ac.in', affiliation: 'Indian Institute of Science' }
  ],
  [
    { name: 'Archana R Sathyan', email: 'archana.rs@kau.in', affiliation: 'Kerala Agricultural University' },
    { name: 'Chen Chen', email: 'chen.chen@crcv.ucf.edu', affiliation: 'University of Central Florida' }
  ],
  [
    { name: 'Sunil Gorantiwar', email: 'sdgorantiwar@gmail.com', affiliation: 'Mahatma Phule Krishi Vidyapeeth' },
    { name: 'K S Rajan', link: 'https://lsi.iiit.ac.in/ks_rajan/', affiliation: 'IIIT Hyderabad' }
  ],
  [
    { name: 'Srinivasu Pappula', email: 'vasu@kalgudi.com', affiliation: 'Kalgudi' },
    { name: 'Rabi Narayan Sahoo', email: 'rabi.sahoo@icar.org.in', affiliation: 'Indian Council of Agricultural Research' }
  ],
];

// Members link to an email or, where we only have one, a homepage.
// affiliation is optional — omit the separator when we don't have one.
const Member = ({ member }) => {
  if (!member) return null;

  const isExternal = Boolean(member.link);
  const href = isExternal ? member.link : `mailto:${member.email}`;

  return (
    <>
      <a
        href={href}
        {...(isExternal ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
      >
        {member.name}
      </a>
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
