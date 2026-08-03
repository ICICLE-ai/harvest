import React from 'react';
import { Row, Col } from 'react-bootstrap';
import '../../assets/css/About.css';

const Organizers = () => {
  return (
    <section className="about" id="organizers">
      <h2>Organizing Committee</h2>
      <Row className="align-items-center">
        <Col xs={12} lg={6}>
          <p>
            <a href="https://cse.osu.edu/people/subramoni.1" target="_blank" rel="noopener noreferrer"><strong>Hari Subramoni</strong></a>
            , The Ohio State University. <code>subramoni.1@osu.edu</code>
          </p>
        </Col>
        <Col xs={12} lg={6}>
          <p>
            <a href="https://fabe.osu.edu/our-people/scott-shearer" target="_blank" rel="noopener noreferrer"><strong>Scott Shearer</strong></a>
            , The Ohio State University. <code>shearer.95@osu.edu</code>
          </p>
        </Col>
      </Row>
      <Row>
        <Col xs={12} lg={12}>
          <p>Additional organizers for this edition: <span className="tbd">TBD</span></p>
        </Col>
      </Row>
    </section>
  );
};

export default Organizers;
