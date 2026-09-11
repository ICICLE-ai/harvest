import React from 'react';
import { Link } from 'react-router-dom';
import '../../assets/css/Committee.css';

// The technical program committee for this edition has not been formed yet.
// When members are confirmed, mirror the structure used by
// components/HarvestIndia2026/ProgramCommittee.jsx: an array of two-member
// rows, each { name, email | link, affiliation }.
const ProgramCommittee = () => {
  return (
    <section className="committee" id="committee">
      <h2>Technical Program Committee</h2>

      <p>
        The technical program committee for HARVEST-Vision 2027 is{' '}
        <span className="tbd">TBD</span>. Members will be listed here once the committee is
        formed.
      </p>

      <p>
        For reference, the{' '}
        <Link to="/past-events/harvest-vision-2026">HARVEST-Vision 2026</Link> committee is
        preserved on the past events page.
      </p>
    </section>
  );
};

export default ProgramCommittee;
