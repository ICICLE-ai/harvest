import React, { useState, useEffect } from 'react'
import data from '../assets/json/chunk-text.json'
import { Container, Row, Col } from 'react-bootstrap'
import { ArrowRightCircle } from 'react-bootstrap-icons'
import headerImg from '../assets/img/lab/stock_image.png'
import '../assets/css/Banner.css'

const Banner = () => {
    

    return (
        <section className="banner" id="home">
            <Container>
                <Row className="align-items-center">
                    <Col xs={12} md={12} xl={12} className="column">
                        <h1>
                            {`HARVEST 2026`}
                        </h1>
                        <h2>
                            {`HARVEST-Vision: Second International Workshop on Applications of CV and HPC in Agriculture`}
                        </h2>
                        <h3>Workshop Date: To be decided | JW Marriott Starpass in Tucson, Arizona</h3>
                        <p>In Cooperation with <a href='https://wacv.thecvf.com/'>The IEEE/CVF Winter Conference on Applications of Computer Vision (WACV), 2026</a></p>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}

export default Banner
