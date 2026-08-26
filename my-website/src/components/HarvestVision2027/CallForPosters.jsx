import React from 'react';
import { Row, Col, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import '../../assets/css/CallForPosters.css';

const CallForPosters = () => {
  return (
    <section className="call-for-posters" id="call-for-posters">
      <Container>
        <h2>Call for Posters</h2>

        <Row className="section-box">
          <Col xs={12} lg={12}>
            <h3>Poster Track <span className="tbd">TBD</span></h3>
            <p>
              Whether a separate poster track will run alongside the paper track at
              HARVEST-Vision 2027 is still being decided with the WACV organizers.
            </p>
            <p>
              If a poster track is held, details on the extended abstract requirements, poster
              dimensions, template, and submission deadline will be posted here.
            </p>
            <p>
              In the meantime, please see the{' '}
              <Link to="/vision-2027/call-for-papers">Call for Papers</Link> for the main
              submission track.
            </p>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default CallForPosters;
