import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import '../../assets/css/About.css'

const ImportantDates = () => {
    return (
        <section className="about" id="important-dates">
            <Container>
                <h2>Important Dates</h2>
                <Row className="left-align">
                    <Col size={12} md={12}>
                        <Row>
                            <Col size={12} sm={12} className="column">
                                <b>Submission deadline:</b> October 16, 2026
                            </Col>
                        </Row>
                        <Row>
                            <Col size={12} sm={12} className="column">
                                <b>Author notification deadline (hard deadline):</b> October 30, 2026
                            </Col>
                        </Row>
                        <Row>
                            <Col size={12} sm={12} className="column">
                                <b>Metadata of accepted papers due to IEEE (hard deadline):</b> November 2, 2026
                            </Col>
                        </Row>
                        <Row>
                            <Col size={12} sm={12} className="column">
                                <b>Camera-ready deadline (hard deadline):</b> November 20, 2026
                            </Col>
                        </Row>
                        <Row>
                            <Col size={12} sm={12} className="column">
                                <b>Workshop Date:</b> January 4/5, 2027
                            </Col>
                        </Row>
                        <Row>
                            <Col size={12} sm={12} className="column">
                                <b>Venue:</b> Disney Springs
                            </Col>
                        </Row>
                        <Row>
                            <Col size={12} sm={12} className="column">
                                <p><em>
                                    The submission deadline for camera-ready papers is November 20, 2026, at 11:59 PM
                                    Eastern Time. This deadline applies to all accepted papers. Papers that arrive
                                    after the deadline may not appear in the conference proceedings and in IEEE Xplore.
                                </em></p>
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}

export default ImportantDates
