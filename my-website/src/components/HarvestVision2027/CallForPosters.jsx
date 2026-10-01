import React from 'react';
import { Row, Col, Container } from 'react-bootstrap';
import '../../assets/css/CallForPosters.css';
import topics from './topics.js';

const CallForPosters = () => {
  return (
    <section className="call-for-posters" id="call-for-posters">
      <Container>
        <h2>Call for Posters</h2>

        <Row className="section-box">
          <Col xs={12} lg={12}>
            <h3>Topics</h3>
            HARVEST-Vision 2027 welcomes poster submissions in a range of areas, including but not limited to:
            <ul>
              {topics.map((topic) => (
                <li key={topic}>{topic}</li>
              ))}
            </ul>
            Posters are a great venue for early-stage work, ongoing projects, datasets, tools, and real-world
            deployments that would benefit from discussion with the community.
          </Col>
        </Row>

        <Row className="section-box">
          <Col xs={12} lg={12}>
            <h3>Poster Track</h3>
            A 1&ndash;2 page extended abstract describing the poster, together with a 24&quot; high by 48&quot; wide
            poster prepared using{' '}
            <a href='https://docs.google.com/presentation/d/1CCPhfC5LPnAB2XSyw2CGfJzpDm2HIAjikaxwTwCLw8w/edit?slide=id.p1&pli=1#slide=id.p1' target="_blank" rel="noopener noreferrer">
              this template
            </a>. Poster submissions go through the same review process as the paper track.
            <p className="mt-3">
              <b>Submission site:</b> All submissions are made through OpenReview, the WACV 2027
              submission system, at{' '}
              <a href="https://openreview.net/group?id=thecvf.com/WACV/2027/Workshop/HARVEST-Vision" target="_blank" rel="noopener noreferrer">
                WACV 2027 Workshop HARVEST-Vision
              </a>.
            </p>
          </Col>
        </Row>

        <Row className="section-box">
          <h3>Review and Presentation</h3>
          <Col xs={12} lg={12} className='column-item'>
            Each poster submission is peer-reviewed by the program committee for technical quality and relevance
            to the workshop theme.
          </Col>
          <Col xs={12} lg={12} className='column-item'>
            At least one author of each accepted poster is expected to register for WACV 2027 and present the
            poster <b>in-person</b> at the HARVEST-Vision workshop in Disney Springs.
          </Col>
        </Row>

        <Row className="section-box">
          <Col xs={12} lg={12}>
            <h3>Workshop Registration</h3>
            There is no separate workshop registration. Please register for the workshops on the
            main{" "}
            <a href="https://wacv.thecvf.com/Conferences/2027" target="_blank" rel="noopener noreferrer">WACV 2027 conference registration page</a>.
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default CallForPosters;
