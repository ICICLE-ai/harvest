import React from 'react';
import '../assets/css/CallForPosters.css';
import { Row, Col } from 'react-bootstrap';

const TravelGrants = () => {
  return (
    <section className="call-for-posters" id="about">
      <Row className="section-box">
        <Col>
          <div className="centered-container">
            <div className="workshop-container">
              {/* Header Section */}
              <div className="workshop-section">
                <h3 className="section-title">Travel Grant Support</h3>
                <p>
                  Travel grant support is available for students (Undergraduates, M.S., and Ph.D.),
                  Early Career Researchers (Post Doctoral Scholars, Research Associates, and Research
                  Scientists), and Research Software Engineers from U.S. academic institutions to
                  attend ICICLE Harvest Workshop 2026 through funding grant from{' '}
                  <a href="https://aiinstitutes.org/" target="_blank" rel="noreferrer">
                    AIVO.
                  </a>
                </p>
              </div>

              <div className="workshop-section">
                <h3 className="section-title">Submission Procedure</h3>
                <p>
                  Interested parties are requested to submit the following materials (items 1, 2,
                  and 3 included in a single .pdf file) to{' '}
                  <a href="mailto:subramoni.1@osu.edu">subramoni.1@osu.edu</a> via email.
                </p>

                <ol>
                  <li>
                    <strong>
                      A short (1-2 page) document describing the following:
                    </strong>
                    <ul>
                      <li>
                        Contact details (University, Department, Institutional E-mail address, Phone
                        Number, and Address)
                      </li>
                      <li>Brief overview of current research</li>
                      <li>
                        Experience with HPC systems (hardware, software, and applications),
                        high-performance virtualization, MPI/PGAS, and Deep Learning middleware
                      </li>
                      <li>What you would like to learn from attending Harvest '26?</li>
                      <li>
                        Each awardee is expected to present a poster about his/her work. Include a
                        title and short abstract of the poster you would like to present.
                        <ul>
                          <li>Please plan on a 3&apos;x4&apos; poster that is oriented vertically.</li>
                        </ul>
                      </li>
                    </ul>
                  </li>

                  <li>
                    <strong>A copy of your CV</strong>
                  </li>

                  <li>
                    <strong>Requested travel cost</strong> (including hotel and registration) with
                    justification
                  </li>

                  <li>
                    <strong>An e-mail approval from the advisor</strong> supporting the travel and
                    indicating that the travel cost will not be reimbursed from any other sources.
                    Please send this email to{' '}
                    <a href="mailto:subramoni.1@osu.edu">subramoni.1@osu.edu</a>.
                  </li>
                </ol>
              </div>

              {/* Submission Deadline */}
              <div className="workshop-section">
                <h3 className="section-title">Submission Deadline</h3>
                <p>
                  The applications will be evaluated as they get received and until the amount in
                  the travel grant is completely committed. Thus, please submit your application as
                  early as possible.
                </p>
              </div>
            </div>
          </div>
        </Col>
      </Row>
    </section>
  );
};

export default TravelGrants;




// import React, { useState, useEffect } from 'react';
// import { Row, Col } from 'react-bootstrap';
// import '../assets/css/About.css';
// import data from '../assets/json/chunk-text.json';

// const images = import.meta.glob('../assets/img/lab/*.{png,jpg,jpeg,svg,avif}', { eager: true });

// const TravelGrants = () => {

//   return (
//     <section className="about" id="about">
//       <h3>Travel Grant Support</h3>
//       <p>Travel grant support is available for students (Undergraduates, M.S., and Ph.D.), Early Career Researchers (Post Doctoral Scholars, Research Associates, and Research Scientists), and Research Software Engineers from U.S. academic institutions to attend ICICLE Harvest Workshop 2026 through funding grant from AIVO.</p>
//       <h3>Submission Procedure</h3>
//       <p>Interested parties are requested to submit the following materials (items 1, 2, and 3 included in a single .pdf file) to 
//   <a href="mailto:subramoni.1@osu.edu">subramoni.1@osu.edu</a> via email.</p>

// <p><strong>1. A short (1–2 page) document describing the following:</strong></p>
// <ul>
//   <li>Contact details (University, Department, Institutional E-mail address, Phone Number, and Address)</li>
//   <li>Brief overview of current research</li>
//   <li>What you would like to learn from attending Harvest ’26?</li>
//   <li>Each awardee is expected to present a poster about his/her work. Include a title and short abstract of the poster you would like to present.
//     <ul>
//       <li>Please plan on a 3’x4’ poster that is oriented vertically.</li>
//     </ul>
//   </li>
// </ul>

// <p><strong>2. A copy of your CV</strong></p>

// <p><strong>3. Requested travel cost</strong> (including hotel and registration) with justification</p>

// <p><strong>4. An e-mail approval from the advisor</strong> supporting the travel and indicating that the travel cost will not be reimbursed from any other sources. Please send this email to 
//   <a href="mailto:subramoni.1@osu.edu">subramoni.1@osu.edu</a>.
// </p>



//      <h3>Submission Deadline</h3>
//       <p>Travel grant support is available for students (Undergraduates, M.S., and Ph.D.), Early Career Researchers (Post Doctoral Scholars, Research Associates, and Research Scientists), and Research Software Engineers from U.S. academic institutions to attend ICICLE Harvest Workshop 2026 through funding grant from AIVO.</p>
      


//     </section>
//   );
// };

// export default TravelGrants;




