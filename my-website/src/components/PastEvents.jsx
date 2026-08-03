import React from 'react';
import { Row, Col, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import '../assets/css/CallForPosters.css';

const editions = [
  {
    path: '/past-events/harvest-vision-2026',
    title: 'HARVEST-Vision 2026 (2nd Edition)',
    subtitle: 'Second International Workshop on Applications of CV and HPC in Agriculture',
    venue: 'In cooperation with WACV 2026',
    when: 'March 6, 2026 | JW Marriott Starpass, Tucson, Arizona',
    blurb:
      'Two invited talks, six peer-reviewed papers published in the WACV 2026 proceedings, a poster lightning round, and a tour of the Biosphere 2 research facility. Slides, agenda, committees, and photo galleries are archived.',
  },
  {
    path: '/past-events/2025',
    title: 'HARVEST 2025 (1st Edition)',
    subtitle: 'First International Workshop on Applications of HPC and AI in Agriculture',
    venue: 'In cooperation with ICPP 2025',
    when: 'September 9–10, 2025 | The Catamaran Resort Hotel, San Diego, CA',
    blurb:
      'The inaugural edition: a two-day program of keynotes, technical talks, and demonstrations with ~30 participants from academia, national labs, and industry, plus AIVO-funded travel awards for 12 researchers. Presentation slides and photo galleries are archived.',
  },
];

const PastEvents = () => {
  return (
    <section className="call-for-posters" id="past-events">
      <Container>
        <h2>Past Events</h2>
        <p>
          The HARVEST workshop series builds community and cyberinfrastructure at the intersection
          of AI, HPC, and agriculture. Previous editions are archived below.
        </p>

        {editions.map((edition) => (
          <Row className="section-box" key={edition.path}>
            <Col xs={12} lg={12}>
              <h3>
                <Link to={edition.path}>{edition.title}</Link>
              </h3>
              <p><b>{edition.subtitle}</b></p>
              <p>
                {edition.when}
                <br />
                {edition.venue}
              </p>
              <p>{edition.blurb}</p>
              <p>
                <Link to={edition.path}>View the {edition.title} archive &rarr;</Link>
              </p>
            </Col>
          </Row>
        ))}

        <Row className="section-box">
          <Col xs={12} lg={12}>
            <h3>Current Edition</h3>
            <p>
              The next workshop is <Link to="/">HARVEST-India 2026 (3rd Edition)</Link>, a half-day
              workshop at HiPC 2026.
            </p>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default PastEvents;
