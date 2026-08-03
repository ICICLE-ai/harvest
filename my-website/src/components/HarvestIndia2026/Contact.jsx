import React from 'react';
import { Row, Col, Container } from 'react-bootstrap';
import '../../assets/css/CallForPosters.css';

const Contact = () => {
  return (
    <section className="call-for-posters" id="contact">
      <Container>
        <h2>Contact</h2>

        <Row className="section-box">
          <Col xs={12} lg={12}>
            <h3>Workshop Organizers</h3>
            <p>
              For questions about the workshop, the call for papers, or the review process, please
              contact either organizer:
            </p>
            <ul>
              <li>
                <a href="https://cse.osu.edu/people/subramoni.1" target="_blank" rel="noopener noreferrer">
                  Hari Subramoni
                </a>
                , The Ohio State University &mdash;{' '}
                <a href="mailto:subramoni.1@osu.edu">subramoni.1@osu.edu</a>
              </li>
              <li>
                <a href="https://fabe.osu.edu/our-people/scott-shearer" target="_blank" rel="noopener noreferrer">
                  Scott Shearer
                </a>
                , The Ohio State University &mdash;{' '}
                <a href="mailto:shearer.95@osu.edu">shearer.95@osu.edu</a>
              </li>
            </ul>
          </Col>
        </Row>

        <Row className="section-box">
          <Col xs={12} lg={12}>
            <h3>Related Links</h3>
            <ul>
              <li>
                <a href="https://icicle.osu.edu/" target="_blank" rel="noopener noreferrer">
                  NSF ICICLE AI Institute
                </a>
              </li>
              <li>
                <a href="https://hipc.org/" target="_blank" rel="noopener noreferrer">
                  HiPC 2026
                </a>
              </li>
              <li>
                <a href="#/past-events">Past editions of the HARVEST workshop</a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Contact;
