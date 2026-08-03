import React from 'react';
import { Row, Col, Container } from 'react-bootstrap';
import '../../assets/css/CallForPosters.css';

const CallForPapers = () => {
  return (
    <section className="call-for-posters" id="call-for-papers">
      <Container>
        <h2>Call for Papers and Posters</h2>
        <p><em>Submissions for this edition are closed. This call is preserved for reference.</em></p>

        <Row className="section-box">
          <Col xs={12} lg={12}>
            <h3>Topics</h3>
            HARVEST-Vision 2026 welcomed original submissions in a range of areas, including but not limited to:
            <ul>
              <li>Domain adaptation and generalization for agricultural vision tasks (across geographies, crops, seasons, and sensing modalities)</li>
              <li>Vision-language alignment, multimodal and low-resource learning for agricultural datasets</li>
              <li>Experiences in collecting and curating data large scale data for agriculture.</li>
              <li>Explainable and interpretable AI for field robotics and decision support in agriculture</li>
              <li>Spatiotemporal analytics and edge/in-situ deployment for precision agriculture</li>
              <li>Novel dataset creation, benchmarking, and evaluation methodologies in real-world or remote sensing agricultural settings</li>
              <li> Robust perception and prediction methods for quality control, phenotyping, livestock, or resource management</li>
            </ul>
            Papers were expected to present original research and to provide sufficient background material to make them accessible to the broader community.
          </Col>
        </Row>

        <Row className="section-box">
          <Col xs={12} lg={12}>
            <h3>Paper Track</h3>
            Full-length papers of 5&ndash;8 pages using the official WACV template, intended for publication in
            WACV&rsquo;s workshop proceedings. Accepted contributions were presented as orals or posters, and all
            submissions were peer-reviewed by the program committee for technical quality and relevance.
            Submissions were handled through{' '}
            <a href='https://openreview.net/group?id=thecvf.com/WACV/2026/Workshop/HARVEST-Vision#tab-recent-activity' target="_blank" rel="noopener noreferrer">
              OpenReview
            </a>.
          </Col>
        </Row>

        <Row className="section-box">
          <Col xs={12} lg={12}>
            <h3>Poster Track</h3>
            A 1&ndash;2 page extended abstract describing the poster, together with a 24&quot; high by 48&quot; wide
            poster prepared using{' '}
            <a href='https://docs.google.com/presentation/d/1CCPhfC5LPnAB2XSyw2CGfJzpDm2HIAjikaxwTwCLw8w/edit?slide=id.p1&pli=1#slide=id.p1' target="_blank" rel="noopener noreferrer">
              this template
            </a>. Poster submissions used the same OpenReview site and review process as the paper track.
          </Col>
        </Row>

        <Row className="section-box">
          <h3>Proceedings</h3>
          <Col xs={12} lg={12} className='column-item'>
            <b>The accepted papers were published in the WACV 2026 proceedings.</b>
          </Col>
          <Col xs={12} lg={12} className='column-item'>
            Each research paper was taken through a comprehensive peer review process by an internationally recognized group of experts in the field. Papers were evaluated along the metrics of a) Quality of Presentation; b) Novelty / Originality; c) Relation to State of the Art; d) Technical Strength; e) Significance of Work; f) Relevance to Workshop; and g) Availability and quality of the &quot;Artifact Description Appendix&quot;. Every effort was made to ensure that each paper received multiple reviews.
          </Col>
          <Col xs={12} lg={12} className='column-item'>
            At least one author of each accepted paper was required to register as a participant of the workshop and present the paper <b>in-person</b>, in order to have the paper published in the proceedings.
          </Col>
        </Row>

        <Row className="section-box">
          <Col xs={12} lg={12}>
            <h3>Workshop Registration</h3>
            There was no separate workshop registration. Attendees registered through the main WACV 2026 conference registration page.
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default CallForPapers;
