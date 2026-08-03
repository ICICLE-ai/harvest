import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import '../../assets/css/Banner.css'

const Banner = () => {

    return (
        <section className="banner" id="home">
            <Container>
                <Row className="align-items-center">
                    <Col xs={12} md={12} xl={12} className="column">
                        <h1>
                            {`HARVEST-India 2026`}
                        </h1>
                        <h2>
                            {`HARVEST-India: Third International Workshop on Applications of HPC and AI in Agriculture`}
                        </h2>
                        <h3>Half-Day Workshop | Date: <span className="tbd">TBD</span> | Venue: <span className="tbd">TBD</span></h3>
                        <p>In Cooperation with <a href='https://hipc.org/' target="_blank" rel="noopener noreferrer">HiPC 2026 &mdash; the IEEE International Conference on High Performance Computing, Data, and Analytics</a></p>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}

export default Banner
