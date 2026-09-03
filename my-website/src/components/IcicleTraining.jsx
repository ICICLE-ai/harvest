import React from 'react';
import { Row, Col } from 'react-bootstrap';
import '../assets/css/About.css';

//trigger build

const IcicleTraining = () => {
  return (
    <section className="about" id="about">
      <h2>Learn more about ICICLE materials</h2>
      <Row className="align-items-center">
        <Col xs={12} lg={12}>
            <a href='https://icicle-ai.github.io/training-catalog/' target="_blank"
        rel="noopener noreferrer">ICICLE Training Catalog</a>
        </Col>
      </Row>
    </section>
  );
};

export default IcicleTraining;
