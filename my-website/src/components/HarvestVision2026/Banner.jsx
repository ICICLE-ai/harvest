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
                            {`HARVEST-Vision 2026 (2nd Edition)`}
                        </h1>
                        <h2>
                            {`HARVEST-Vision: Second International Workshop on Applications of CV and HPC in Agriculture`}
                        </h2>
                        <h3>March 6, 2026 | Arizona Ballroom 7, JW Marriott Starpass, Tucson, Arizona</h3>
                        <p>In Cooperation with <a href='https://wacv.thecvf.com/'>The IEEE/CVF Winter Conference on Applications of Computer Vision (WACV), 2026</a></p>
                        <p><em>This workshop has concluded. The material below is preserved as a record of the event.</em></p>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}

export default Banner
