import React from 'react';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import ProjectCard from "../components/ProjectCard/Index"

function PortfolioPage(props) {

    return (
        <Container className="mt-5">
            <Row>
                <Col>
                    <div class="col-md-12 vertical-center">
                        <h2 class="mt-1 float-left">Portfolio</h2>
                    </div>
                </Col>
            </Row>
            <hr></hr>
            <ProjectCard />
        </Container>


    );

}

export default PortfolioPage;