import React from 'react';
import { Link } from 'react-router-dom';
import '../../assets/css/Committee.css';

const ProgramCommittee = () => {
  return (
    <section className="committee" id="committee">
      <h2>Technical Program Committee</h2>
      <p>
        The Technical Program Committee for HARVEST-India 2026 is being formed:{' '}
        <span className="tbd">TBD</span>
      </p>
      <p>
        Members will be listed here once confirmed. For reference, the{' '}
        <Link to="/past-events/harvest-vision-2026">HARVEST-Vision 2026</Link> committee is preserved
        on the past events page.
      </p>
    </section>
  );
};

export default ProgramCommittee;
