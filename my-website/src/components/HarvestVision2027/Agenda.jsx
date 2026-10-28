import React from 'react';
import { Row, Col, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import '../../assets/css/CallForPosters.css';

const Agenda = () => {
  return (
    <section className="call-for-posters" id="program">
      <Container>
        <h2>Agenda</h2>

        <Row className="section-box">
          <Col xs={12} lg={12}>
            <h3>Keynote Talk</h3>
            <ul>
              <li><b>Speaker:</b> Charles, Google</li>
              <li><b>Title:</b> <span className="tbd">TBD</span></li>
              <li><b>When:</b> January 4, 2027 (Afternoon), 1 hour</li>
              <li><b>Where:</b> Edelweiss Room, Hilton Orlando Lake Buena Vista, Disney Springs, Florida</li>
            </ul>
            <p>
              The keynote explores the intersection of high-performance computing, AI, and
              agriculture, drawing on Google&rsquo;s perspective on the opportunities and
              challenges across these fields.
            </p>
          </Col>
        </Row>

        <Row className="section-box">
          <Col xs={12} lg={12}>
            <h3>Program <span className="tbd">TBD</span></h3>
            <p>
              The HARVEST-Vision 2027 schedule &mdash; invited talks, accepted paper
              presentations, and discussion sessions &mdash; will be posted here once the review
              process concludes and the WACV 2027 schedule is finalized.
            </p>
            <p>
              For a sense of what to expect, see the{' '}
              <Link to="/past-events/harvest-vision-2026">HARVEST-Vision 2026 agenda</Link> from
              the previous HARVEST-Vision edition.
            </p>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Agenda;
