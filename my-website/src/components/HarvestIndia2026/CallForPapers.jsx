import React from 'react';
import { Row, Col, Container } from 'react-bootstrap';
import '../../assets/css/CallForPosters.css';
import Organizers from './Organizers.jsx';

const CallForPapers = () => {
  return (
    <section className="call-for-posters" id="call-for-papers">
      <Container>
        <h2>Call for Papers</h2>

        <Row className="section-box">
          <Col xs={12} lg={12}>
            <h3>Important Dates</h3>
            <ul>
              <li><b>Full paper submission deadline:</b> October 9, 2026</li>
              <li><b>Author notifications sent:</b> November 5, 2026</li>
              <li><b>Camera-ready papers due:</b> November 13, 2026</li>
              <li><b>Workshop Date:</b> Wednesday, December 16, 2026</li>
              <li><b>Venue:</b> Bengaluru, India</li>
            </ul>
          </Col>
        </Row>

        <Row className="section-box">
          <Col xs={12} lg={12}>
            <h3>Topics</h3>
            <p>
              <em>
                Draft topic list carried over from the previous edition and re-scoped for an HPC audience.
                Final topics <span className="tbd">TBD</span>.
              </em>
            </p>
            HARVEST-India 2026 welcomes original submissions in a range of areas, including but not limited to:
            <ul>
              <li>HPC-powered training and inference pipelines for agricultural AI</li>
              <li>Edge-to-HPC data movement, storage, and management for field-collected agricultural data</li>
              <li>Experiences in collecting, curating, and labeling large-scale agricultural datasets</li>
              <li>Domain adaptation and generalization across geographies, crops, seasons, and sensing modalities</li>
              <li>Spatiotemporal analytics and edge/in-situ deployment for precision agriculture</li>
              <li>Explainable and interpretable AI for field robotics and decision support in agriculture</li>
              <li>Novel dataset creation, benchmarking, and evaluation methodologies in real-world or remote sensing agricultural settings</li>
              <li>Robust perception and prediction methods for quality control, phenotyping, livestock, or resource management</li>
            </ul>
            Papers should present original research and should provide sufficient background material to make them accessible to the broader community.
          </Col>
        </Row>

        <Row className="section-box">
          <Col xs={12} lg={12}>
            <h3>Submission Instructions</h3>
            <p><span className="tbd">TBD</span></p>
            <p>
              Submissions will follow the HiPC 2026 workshop guidelines. Page limits, formatting
              template, and the submission site will be announced here once confirmed with the HiPC
              organizers. All submissions will be peer-reviewed by the program committee for technical
              quality and relevance to the workshop.
            </p>
          </Col>
        </Row>

        <Row className="section-box">
          <Col xs={12} lg={12}>
            <h3>Proceedings</h3>
            <p><span className="tbd">TBD</span></p>
            <p>Publication venue and proceedings arrangements for this edition are being finalized with HiPC 2026.</p>
          </Col>
        </Row>

        <Row className="section-box">
          <Col xs={12} lg={12}>
            <h3>Workshop Registration</h3>
            There is no separate workshop registration. Please register for the workshops on the
            main HiPC 2026 conference registration page.
          </Col>
        </Row>

        <Organizers />
      </Container>
    </section>
  );
};

export default CallForPapers;
