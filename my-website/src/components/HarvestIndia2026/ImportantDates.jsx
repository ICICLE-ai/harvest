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
                                <b>Workshop Date:</b> <span className="tbd">TBD</span>
                            </Col>
                        </Row>
                        <Row>
                            <Col size={12} sm={12} className="column">
                                <b>Paper Submission Deadline:</b> <span className="tbd">TBD</span>
                            </Col>
                        </Row>
                        <Row>
                            <Col size={12} sm={12} className="column">
                                <b>Author Notification:</b> <span className="tbd">TBD</span>
                            </Col>
                        </Row>
                        <Row>
                            <Col size={12} sm={12} className="column">
                                <b>Camera-ready Deadline:</b> <span className="tbd">TBD</span>
                            </Col>
                        </Row>
                        <Row>
                            <Col size={12} sm={12} className="column">
                                <p><em>Dates will be confirmed once the HiPC 2026 workshop schedule is finalized.</em></p>
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}

export default ImportantDates
