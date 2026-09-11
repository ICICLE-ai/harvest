import React from 'react';
import { Row, Col, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import '../../assets/css/CallForPosters.css';

const CallForPosters = () => {
  return (
    <section className="call-for-posters" id="call-for-posters">
      <Container>
        <h2>Call for Posters</h2>

        <Row className="section-box">
          <Col xs={12} lg={12}>
            <p>
              HARVEST-India 2026 invites poster submissions showcasing emerging, ongoing, or recently
              completed work at the intersection of high-performance computing (HPC), artificial
              intelligence (AI), and agriculture.
            </p>
            <p>
              The poster session is intended to promote discussion, early feedback, collaboration, and
              exchange among researchers, students, practitioners, industry partners, and stakeholders in
              digital agriculture. We particularly encourage submissions describing preliminary results,
              novel datasets, deployed systems, open-source software, research visions, demonstration
              concepts, and work-in-progress that would benefit from interactive discussion with the
              workshop community.
            </p>
          </Col>
        </Row>

        <Row className="section-box">
          <Col xs={12} lg={12}>
            <h3>Important Dates</h3>
            <p>Poster submissions follow the same dates as the paper track:</p>
            <ul>
              <li><b>Poster submission deadline:</b> October 9, 2026</li>
              <li><b>Author notifications sent:</b> November 5, 2026</li>
              <li><b>Workshop Date:</b> Wednesday, December 16, 2026</li>
              <li><b>Venue:</b> Bengaluru, India</li>
            </ul>
            <em>All deadlines are 11:59 PM Anywhere on Earth (AoE).</em>
          </Col>
        </Row>

        <Row className="section-box">
          <Col xs={12} lg={12}>
            <h3>Topics of Interest</h3>
            Poster submissions may address any topic relevant to HPC-, AI-, and data-driven agriculture,
            including:
            <ul>
              <li>HPC-enabled AI training and inference for agricultural applications</li>
              <li>Large-scale agricultural, environmental, geospatial, and remote-sensing analytics</li>
              <li>Edge computing, IoT, sensing systems, and precision agriculture</li>
              <li>Digital agriculture platforms, cyberinfrastructure, and data-sharing ecosystems</li>
              <li>AI robotics, autonomy, and intelligent agricultural machinery</li>
              <li>Climate, soil, crop, hydrological, and ecosystem modeling using HPC</li>
              <li>Federated learning, privacy-aware AI, and secure agricultural data management</li>
              <li>Cloud-to-edge and HPC-to-edge AI workflows</li>
              <li>Agricultural data interoperability, metadata, and FAIR data practices</li>
              <li>Reproducibility, benchmarking, open-source tools, and research infrastructure</li>
              <li>Real-world deployments, usability studies, and lessons learned</li>
              <li>Student research projects, demonstrations, and research visions</li>
            </ul>
          </Col>
        </Row>

        <Row className="section-box">
          <Col xs={12} lg={12}>
            <h3>Submission Guidelines</h3>
            Authors should submit a poster abstract of up to 2 pages, including references, figures, and
            tables. The submission should clearly describe:
            <ul>
              <li>The problem or agricultural challenge being addressed</li>
              <li>The technical approach, system, dataset, model, or methodology</li>
              <li>Preliminary or completed results, where available</li>
              <li>The expected contribution and relevance to the HARVEST-India workshop</li>
              <li>
                The type of feedback, discussion, collaboration, or community engagement sought through
                the poster presentation
              </li>
            </ul>
            <p>
              Submissions should be prepared according to the HiPC 2026 formatting requirements and
              submitted through the same HiPC submission portal used for the paper track:{' '}
              <a href="https://ssl.linklings.net/conferences/HiPC/" target="_blank" rel="noopener noreferrer">
                https://ssl.linklings.net/conferences/HiPC/
              </a>
            </p>
            <p>
              Poster submissions will undergo review by members of the HARVEST-India program committee.
              The review will consider relevance to the workshop, technical merit, clarity, novelty,
              potential impact, and suitability for an interactive poster presentation.
            </p>
          </Col>
        </Row>

        <Row className="section-box">
          <Col xs={12} lg={12}>
            <h3>Presentation Expectations</h3>
            <p>
              At least one author of each accepted poster is expected to register for HiPC 2026 and attend
              the HARVEST-India workshop to present the poster in person.
            </p>
            <p>
              Authors of accepted posters will receive instructions regarding poster dimensions, display
              arrangements, presentation schedule, and any optional electronic-poster or lightning-talk
              requirements closer to the workshop date.
            </p>
          </Col>
        </Row>

        <Row className="section-box">
          <Col xs={12} lg={12}>
            <h3>Poster Publication Policy</h3>
            <p>
              Accepted posters will be presented at HARVEST-India 2026 but will not be included in, or
              published with, the HiPC Workshops (HiPC-W) proceedings.
            </p>
            <p>
              This poster track is therefore appropriate for early-stage research, work in progress,
              demonstrations, new datasets or tools, research visions, and work that authors may wish to
              develop further for subsequent archival publication.
            </p>
            <p>
              Authors remain responsible for ensuring that submission and presentation of their poster are
              consistent with the policies of any future publication venue they may pursue.
            </p>
            <p>
              For the main submission track, please see the{' '}
              <Link to="/india-2026/call-for-papers">Call for Papers</Link>.
            </p>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default CallForPosters;
