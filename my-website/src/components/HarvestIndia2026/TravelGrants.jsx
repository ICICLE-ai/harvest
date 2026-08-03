import React from 'react';
import '../../assets/css/CallForPosters.css';
import { Row, Col } from 'react-bootstrap';

const TravelGrants = () => {
  return (
    <section className="call-for-posters" id="travel-grants">
      <Row className="section-box">
        <Col>
          <div className="centered-container">
            <div className="workshop-container">
              <div className="workshop-section">
                <h3 className="section-title">
                  Travel Grant Support <span className="tbd">TBD</span>
                </h3>
                <p>
                  <em>
                    Travel grant funding for HARVEST-India 2026 is not yet confirmed. The structure
                    below reflects the support offered at previous editions and is subject to change.
                  </em>
                </p>
                <p>
                  Previous editions offered travel grant support for students (Undergraduates, M.S.,
                  and Ph.D.), Early Career Researchers (Post Doctoral Scholars, Research Associates,
                  and Research Scientists), and Research Software Engineers from U.S. academic
                  institutions, through a funding grant from{' '}
                  <a href="https://aiinstitutes.org/" target="_blank" rel="noreferrer">
                    AIVO
                  </a>
                  .
                </p>
              </div>

              <div className="workshop-section">
                <h3 className="section-title">Eligibility and Award Amount</h3>
                <p><span className="tbd">TBD</span></p>
              </div>

              <div className="workshop-section">
                <h3 className="section-title">Submission Procedure</h3>
                <p><span className="tbd">TBD</span></p>
                <p>
                  If travel support is confirmed, applicants will be asked to submit the following as
                  a single PDF to{' '}
                  <a href="mailto:subramoni.1@osu.edu">subramoni.1@osu.edu</a>:
                </p>
                <ol>
                  <li>
                    <strong>A short (1&ndash;2 page) document describing the following:</strong>
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
                      <li>What you would like to learn from attending HARVEST-India 2026</li>
                      <li>
                        Title and short abstract of the poster you would like to present
                      </li>
                    </ul>
                  </li>
                  <li><strong>A copy of your CV</strong></li>
                  <li>
                    <strong>Requested travel cost</strong> (including hotel and registration) with
                    justification
                  </li>
                  <li>
                    <strong>An e-mail approval from your advisor</strong> supporting the travel and
                    indicating that the travel cost will not be reimbursed from any other sources.
                  </li>
                </ol>
              </div>

              <div className="workshop-section">
                <h3 className="section-title">Application Deadline</h3>
                <p><span className="tbd">TBD</span></p>
              </div>
            </div>
          </div>
        </Col>
      </Row>
    </section>
  );
};

export default TravelGrants;
