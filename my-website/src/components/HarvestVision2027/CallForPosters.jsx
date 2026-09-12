import React from 'react';
import { Row, Col, Container } from 'react-bootstrap';
import '../../assets/css/CallForPosters.css';

const CallForPosters = () => {
  return (
    <section className="call-for-posters" id="call-for-posters">
      <Container>
        <h2>Call for Posters</h2>

        <Row className="section-box">
          <Col xs={12} lg={12}>
            <p>Details coming soon.</p>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default CallForPosters;
