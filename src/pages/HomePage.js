import React from 'react';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import Hero from '../components/Hero/Index';
import AboutMeCard from '../components/AboutMeCard/Index';
import MyProjectsCard from '../components/MyProjectsCard/Index';

function HomePage() {

    return (
        <Container fluid>
            <Row>
                <Col md="12">
                    <Hero />
                </Col>
            </Row>

            <Row>
                <Col xs="12" lg="6">
                    <AboutMeCard />
                </Col>
                <Col xs="12" lg="6">
                    <MyProjectsCard />
                </Col>
            </Row>
        </Container>



    );

}

export default HomePage;