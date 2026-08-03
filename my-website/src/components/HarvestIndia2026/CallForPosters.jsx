import React from 'react';
import { Row, Col, Container } from 'react-bootstrap';
import '../../assets/css/CallForPosters.css';

const CallForPosters = () => {
  return (
    <section className="call-for-posters" id="call-for-posters">
      <Container>
        <h2>Call for Posters</h2>
        <h3>HARVEST-India 2026 (3rd Edition)</h3>

        <Row className="section-box">
          <Col xs={12} lg={12}>
            <h3>Poster Track <span className="tbd">TBD</span></h3>
            <p>
              HARVEST-India 2026 is a half-day workshop at HiPC 2026. Whether a separate poster track
              will run alongside the paper track is still being decided with the HiPC organizers.
            </p>
            <p>
              If a poster track is held, details on the extended abstract requirements, poster
              dimensions, template, and submission deadline will be posted here.
            </p>
            <p>
              In the meantime, please see the <a href="#/call-for-papers">Call for Papers</a> for the
              main submission track.
            </p>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default CallForPosters;
