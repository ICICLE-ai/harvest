import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import '../../assets/css/MiniBanner.css'

const MiniBanner = () => {

    return (
        <section className="banner" id="home">
            <Container>
                <Row className="align-items-center">
                    <Col xs={12} md={12} xl={12} className="column">
                        <h2>
                            {`HARVEST-India 2026`}
                        </h2>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}

export default MiniBanner
