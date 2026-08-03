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
                                <b>Workshop Date:</b> March 6, 2026
                            </Col>
                        </Row>
                        <Row>
                            <Col size={12} sm={12} className="column">
                                <b>Paper / Poster Submission Deadline: </b>December 07 2025 11:59PM UTC-0
                            </Col>
                        </Row>
                        <Row>
                            <Col size={12} sm={12} className="column">
                                <b>Camera-ready Deadline:</b> January 9th, 2026 11:59 PM PST
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}

export default ImportantDates
