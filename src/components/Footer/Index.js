import React from 'react';
import './style.css'

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function Footer() {

    return(
        <footer className="mt-5">
            <Container fluid={true}>
                <Row className="footer p-0 border-top fixed-bottom justify-content-center mt-3 pt-2 pb-2">
                    <Col className="text-center">
                        Copyright Ⓒ
                    </Col>
                </Row>
            </Container>
        </footer>
    );

}

export default Footer;