import React from 'react';

import Card from 'react-bootstrap/Card'
import ListGroup from 'react-bootstrap/ListGroup'

import './style.css'

function MyProjectsCard() {

    return (
        <Card fluid>
            <Card.Body>

                <ListGroup className="justify-content-between" horizontal>
                    <h5>My Projects</h5>
                    <Card.Link href="/portfolio" className="float-right">
                        more details...
                    </Card.Link>
                </ListGroup>

                <ListGroup variant="flush">
                    <ListGroup.Item>
                        <Card.Link href="https://secret-wave-57938.herokuapp.com/">Traffic Tracker</Card.Link>
                    </ListGroup.Item>
                    <ListGroup.Item>
                        <Card.Link href="https://leonghh.github.io/Bootcamp-Project-1/index.html">Santa's Sack</Card.Link>
                    </ListGroup.Item>
                    <ListGroup.Item>
                        <Card.Link href="https://leonghh.github.io/Week-5-HW/.">Day Planner</Card.Link>
                    </ListGroup.Item>
                    <ListGroup.Item>
                        <Card.Link href="https://leonghh.github.io/Week-6-HW/.">Weather Dashboard</Card.Link>
                    </ListGroup.Item>
                </ListGroup>
            </Card.Body>
        </Card>
    );

}

export default MyProjectsCard;