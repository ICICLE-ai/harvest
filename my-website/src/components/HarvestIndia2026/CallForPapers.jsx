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
            <em>All deadlines are 11:59 PM Anywhere on Earth (AoE).</em>
          </Col>
        </Row>

        <Row className="section-box">
          <Col xs={12} lg={12}>
            <h3>Topics of Interest</h3>
            Topics include, but are not limited to:
            <ul>
              <li>HPC-enabled AI training and inference for agricultural applications</li>
              <li>Large-scale agricultural data analytics and scientific workflows</li>
              <li>Edge computing, Internet of Things (IoT), and precision agriculture</li>
              <li>Digital agriculture platforms, data hubs, and cyberinfrastructure</li>
              <li>AI-enabled robotics and autonomous agricultural systems</li>
              <li>Climate, soil, hydrological, and crop modeling using HPC</li>
              <li>Geospatial, remote-sensing, and multimodal agricultural AI</li>
              <li>Federated learning, privacy-aware AI, and secure agricultural data sharing</li>
              <li>Resource-efficient and sustainable computing for agricultural workloads</li>
              <li>AI pipelines across cloud, HPC, edge, and far-edge computing environments</li>
              <li>Data management, interoperability, metadata, and FAIR agricultural data practices</li>
              <li>Reproducibility, benchmarking, open science, and evaluation methodologies</li>
              <li>Decision-support systems for producers, extension professionals, researchers, and policymakers</li>
              <li>Real-world deployments, lessons learned, and community-engaged agricultural computing</li>
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
              Submit your paper through the HiPC 2026 submission portal:{' '}
              <a href="https://ssl.linklings.net/conferences/HiPC/" target="_blank" rel="noopener noreferrer">
                https://ssl.linklings.net/conferences/HiPC/
              </a>
            </p>
            Submissions must:
            <ul>
              <li>Present original work that has not been previously published or is not under review elsewhere.</li>
              <li>Be submitted through the HiPC submission portal.</li>
              <li>Follow the formatting and submission requirements specified by HiPC 2026.</li>
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
              Accepted papers are planned for inclusion in the HiPC 2026 Workshops proceedings volume,
              subject to the conference&rsquo;s publication policies and final approval processes.
            </p>
            <p>
              At least one author of each accepted paper is expected to register for HiPC 2026 and present
              the work at the HARVEST-India workshop in Bengaluru.
            </p>
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
