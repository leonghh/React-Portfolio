import React from 'react';

import "./style.css";

import Jumbotron from 'react-bootstrap/Jumbotron'
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button'

import profilepic from '../../assets/img/profilepic.jpg'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

function Hero() {

    return (
        <Jumbotron fluid className="bg-transparent header m-0">
            <Container>
                <Row className="justify-content-between">
                    <Col xs="12" lg="6">
                        <img className="img-fluid float-left" src={profilepic} alt="Profilepic" />
                        <div className="profile-content float-left">
                            <h1 className="name">Eugene Leong</h1>
                            <h4 className="desc">Learning Full Stack</h4>
                            <h6 className="location">Sydney, Australia</h6>
                                <Card.Link className="list-inline-item linkedinLogo" href="https://linkedin.com/in/eugeneleonghonghao">      
                                    <FontAwesomeIcon icon={['fab', 'linkedin']} />
                                </Card.Link>
                                <Card.Link className="list-inline-item githubLogo" href="https://github.com/leonghh">
                                    <FontAwesomeIcon icon={['fab', 'github']} />
                                </Card.Link>
                                <Card.Link className="list-inline-item pdfLogo" href="">
                                    <FontAwesomeIcon icon="file-pdf" />
                                </Card.Link>
                        </div>
                    </Col>

                    <Col xs="12" lg="6">
                        <Button href="/contact" className="btn float-right" variant="secondary">
                            <FontAwesomeIcon icon="paper-plane" /> Contact Me
                        </Button>{' '}
                    </Col>
                </Row>            
            </Container>
        </Jumbotron>
    );

}

export default Hero;