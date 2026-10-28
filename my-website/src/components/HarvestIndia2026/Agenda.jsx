import React from 'react';
import { Row, Col, Container } from 'react-bootstrap';
import '../../assets/css/CallForPosters.css';

const schedule = [
  { time: '08:00 - 09:00', title: 'Registration' },
  { time: '09:00 - 09:05', title: 'Opening Remarks' },
  { time: '09:05 - 10:00', title: 'Keynote Talk: Dr. Namboodiri, Google' },
  { time: '10:00 - 10:30', title: 'Session', tbd: true },
  { time: '10:30 - 11:00', title: 'Break' },
  { time: '11:00 - 13:00', title: 'Session', tbd: true },
  { time: '13:00 - 14:00', title: 'Lunch' },
];

const Agenda = () => {
  return (
    <section className="call-for-posters" id="program">
      <Container>
        <h2>Agenda</h2>

        <Row className="section-box">
          <Col xs={12} lg={12}>
            <h3>Program</h3>
            <p>
              <b>Wednesday, December 16, 2026</b> &middot; Bengaluru, India &middot; Room{' '}
              <span className="tbd">TBD</span>
            </p>
            <ul>
              {schedule.map((item) => (
                <li key={item.time}>
                  <b>{item.time}:</b> {item.title}
                  {item.tbd && <> <span className="tbd">TBD</span></>}
                </li>
              ))}
            </ul>
          </Col>
        </Row>

        <Row className="section-box">
          <Col xs={12} lg={12}>
            <h3>Keynote Talk</h3>
            <ul>
              <li><b>Speaker:</b> Dr. Namboodiri, Google</li>
              <li><b>Title:</b> <span className="tbd">TBD</span></li>
              <li><b>When:</b> Wednesday, December 16, 2026, 9:05 AM &ndash; 10:00 AM</li>
              <li><b>Where:</b> Bengaluru, India</li>
            </ul>
            <p>
              The keynote explores the intersection of high-performance computing, AI, and
              agriculture, drawing on Google&rsquo;s perspective on the opportunities and
              challenges across these fields.
            </p>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Agenda;
