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
                <h3 className="section-title">Travel Grant Support</h3>
                <p>
                  <em>Applications for this edition are closed. This section is preserved for reference.</em>
                </p>
                <p>
                  Travel grant support was available for students (Undergraduates, M.S., and Ph.D.),
                  Early Career Researchers (Post Doctoral Scholars, Research Associates, and Research
                  Scientists), and Research Software Engineers from U.S. academic institutions to
                  attend HARVEST-Vision 2026, through a funding grant from{' '}
                  <a href="https://aiinstitutes.org/" target="_blank" rel="noreferrer">
                    AIVO
                  </a>
                  . Awardees each presented a poster on their work.
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
