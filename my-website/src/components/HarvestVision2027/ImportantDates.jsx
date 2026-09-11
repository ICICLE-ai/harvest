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
                                <b>Full paper submission deadline:</b> <span className="tbd">TBD</span>
                            </Col>
                        </Row>
                        <Row>
                            <Col size={12} sm={12} className="column">
                                <b>Author notifications sent:</b> <span className="tbd">TBD</span>
                            </Col>
                        </Row>
                        <Row>
                            <Col size={12} sm={12} className="column">
                                <b>Camera-ready papers due:</b> <span className="tbd">TBD</span>
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
                                <p><em>The remaining dates will be confirmed once the WACV 2027 schedule is finalized.</em></p>
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}

export default ImportantDates
