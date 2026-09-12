import React from 'react';
import { Link } from 'react-router-dom';
import '../../assets/css/Committee.css';

// 🧩 Each entry: [ { name, link, email, affiliation }, { ... } ]
// link is the member's homepage; email is shown as plain text.
// The committee is still being formed — add members two per row.
const members = [
  [
    { name: 'Sarath Babu', link: 'https://www.engineering.iastate.edu/people/profile/sarath4/', email: 'sarath4@iastate.edu', affiliation: 'Iowa State University' },
    null
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
        <Link to="/past-events/harvest-vision-2026">HARVEST-Vision 2026</Link> committee is
        preserved on the past events page.
      </p>
    </section>
  );
};

export default ProgramCommittee;
