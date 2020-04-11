import React from 'react';

import "./style.css";

import profilepic from '../profilepic.jpg'

import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

function Header(props) {

    return (
        <Card fluid className="bg-transparent header">
            <Container>
                <Row>
                    <Col>
                        <img className="img-fluid float-left" src={profilepic} alt="Profilepic" />
                        <div className="profile-content float-left">
                            <h1 className="name">Eugene Leong</h1>
                            <h4 className="desc">Learning Full Stack</h4>
                            <h6 className="location">Sydney, Australia</h6>
                                <Card.Link className="list-inline-item" href="https://linkedin.com/in/eugeneleonghonghao">      
                                    <FontAwesomeIcon icon={['fab', 'linkedin']} />
                                </Card.Link>
                                <Card.Link className="list-inline-item" href="https://github.com/leonghh">
                                    <FontAwesomeIcon icon={['fab', 'github']} />
                                </Card.Link>
                                <Card.Link className="list-inline-item" href="">
                                    <FontAwesomeIcon icon="file-pdf" />
                                </Card.Link>
                        </div>
                        <Button className="btn float-right" variant="secondary">
                            <FontAwesomeIcon icon="paper-plane" /> Contact Me
                        </Button>{' '}
                    </Col>
                </Row>
            </Container>
        </Card>
    );

}

export default Header;