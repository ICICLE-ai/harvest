import React from 'react';
import { Row, Col, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import '../../assets/css/CallForPosters.css';

const Agenda = () => {
  return (
    <section className="call-for-posters" id="program">
      <Container>
        <h2>Agenda</h2>
        <h3>HARVEST-India 2026 (3rd Edition)</h3>

        <Row className="section-box">
          <Col xs={12} lg={12}>
            <h3>Program <span className="tbd">TBD</span></h3>
            <p>
              HARVEST-India 2026 is a half-day workshop. The program &mdash; invited talks, accepted
              paper presentations, and discussion sessions &mdash; will be posted here once the review
              process concludes and the HiPC 2026 schedule is finalized.
            </p>
            <p>
              For a sense of what to expect, see the{' '}
              <Link to="/past-events/harvest-vision-2026">HARVEST-Vision 2026 agenda</Link> from the
              previous edition.
            </p>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Agenda;
