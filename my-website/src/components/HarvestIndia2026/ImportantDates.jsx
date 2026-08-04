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
                                <b>Full paper submission deadline:</b> October 9, 2026
                            </Col>
                        </Row>
                        <Row>
                            <Col size={12} sm={12} className="column">
                                <b>Author notifications sent:</b> November 5, 2026
                            </Col>
                        </Row>
                        <Row>
                            <Col size={12} sm={12} className="column">
                                <b>Camera-ready papers due:</b> November 13, 2026
                            </Col>
                        </Row>
                        <Row>
                            <Col size={12} sm={12} className="column">
                                <b>Workshop Date:</b> <span className="tbd">TBD</span>
                            </Col>
                        </Row>
                        <Row>
                            <Col size={12} sm={12} className="column">
                                <p><em>The workshop date will be confirmed once the HiPC 2026 schedule is finalized.</em></p>
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}

export default ImportantDates
