import React, { Component } from "react";
import Form from 'react-bootstrap/Form'
import Col from 'react-bootstrap/Col'

class ContactSection extends Component {
    render() {
        return (
            <div className="container p-4 mt-4 mb-4 bg-white text-dark text-justify">
                <div className="row">
                    <div className="col-md-12">
                        <h2 className="mt-1">Contact Me</h2>
                    </div>
                </div>
                <hr></hr>
                <Form className="mb-2">
                <Form.Label>Name:</Form.Label>
                    <Form.Row>
                        <Col>
                            <Form.Control placeholder="First name" />
                        </Col>
                        <Col>
                            <Form.Control placeholder="Last name" />
                        </Col>
                    </Form.Row>
                </Form>
                <Form.Group controlId="exampleForm.ControlInput1">
                    <Form.Label>Email:</Form.Label>
                    <Form.Control type="email" placeholder="name@example.com" />
                </Form.Group>
                <Form.Group controlId="exampleForm.ControlTextarea1">
                    <Form.Label>Message</Form.Label>
                    <Form.Control as="textarea" rows="5" />
                </Form.Group>
                <button type="submit" class="btn btn-secondary" data-toggle="modal" data-target="#contactModal">Submit</button>
            </div>
        )
    }
}

export default ContactSection;
