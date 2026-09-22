import React from 'react';
import { Row, Col, Container } from 'react-bootstrap';
import '../../assets/css/CallForPosters.css';
import Organizers from './Organizers.jsx';
import topics from './topics.js';

const CallForPapers = () => {
  return (
    <section className="call-for-posters" id="call-for-papers">
      <Container>
        <h2>Call for Papers</h2>

        <Row className="section-box">
          <Col xs={12} lg={12}>
            <h3>Important Dates</h3>
            <p><b>All deadlines are US Eastern Time.</b></p>
            <ul>
              <li><b>Submission deadline:</b> October 16, 2026</li>
              <li><b>Author notification deadline (hard deadline):</b> October 30, 2026</li>
              <li><b>Metadata of accepted papers due to IEEE (hard deadline):</b> November 2, 2026</li>
              <li><b>Camera-ready deadline (hard deadline):</b> November 20, 2026</li>
              <li><b>Workshop Date:</b> January 4/5, 2027</li>
              <li><b>Venue:</b> Disney Springs</li>
            </ul>
            <em>
              The submission deadline for camera-ready papers is November 20, 2026, at 11:59 PM US Eastern Time.
              This deadline applies to all accepted papers. Papers that arrive after the deadline may not appear
              in the conference proceedings and in IEEE Xplore.
            </em>
          </Col>
        </Row>

        <Row className="section-box">
          <Col xs={12} lg={12}>
            <h3>Topics of Interest</h3>
            Topics include, but are not limited to:
            <ul>
              {topics.map((topic) => (
                <li key={topic}>{topic}</li>
              ))}
            </ul>
            Papers should present original research and should provide sufficient background material to make them accessible to the broader community.
          </Col>
        </Row>

        <Row className="section-box">
          <Col xs={12} lg={12}>
            <h3>Submission Guidelines</h3>
            <p>
              Authors are invited to submit full papers of up to 8 pages, including references, figures,
              tables, and appendices.
            </p>
            <p>
              Submit your paper through{' '}
              <a
                href="https://openreview.net/group?id=thecvf.com/WACV/2027/Workshop/HARVEST-Vision"
                target="_blank"
                rel="noopener noreferrer"
              >
                OpenReview
              </a>.
            </p>
            Submissions must:
            <ul>
              <li>Present original work that has not been previously published or is not under review elsewhere.</li>
              <li>Be submitted through OpenReview.</li>
              <li>Follow the formatting and submission requirements specified by WACV 2027.</li>
              <li>
                Be prepared for a single-blind review process; author names and affiliations should therefore
                appear in the manuscript.
              </li>
              <li>
                Clearly explain the contribution, methodology, experimental design, results, limitations, and
                relevance to agricultural applications.
              </li>
            </ul>
            <p>
              Each submission will receive reviews from at least three expert reviewers. Reviewers will assess
              submissions based on technical quality, novelty, significance, clarity, methodological rigor,
              reproducibility, and relevance to the workshop theme.
            </p>
          </Col>
        </Row>

        <Row className="section-box">
          <Col xs={12} lg={12}>
            <h3>Proceedings</h3>
            <p>
              Accepted papers are planned for inclusion in the WACV 2027 Workshops proceedings volume,
              subject to the conference&rsquo;s publication policies and final approval processes.
            </p>
            <p>
              At least one author of each accepted paper is expected to register for WACV 2027 and present
              the work at the HARVEST-Vision workshop in Disney Springs.
            </p>
          </Col>
        </Row>

        <Row className="section-box">
          <Col xs={12} lg={12}>
            <h3>Workshop Registration</h3>
            There is no separate workshop registration. Please register for the workshops on the
            main WACV 2027 conference registration page.
          </Col>
        </Row>

        <Organizers />
      </Container>
    </section>
  );
};

export default CallForPapers;
