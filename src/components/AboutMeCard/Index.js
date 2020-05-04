import React from 'react';
// import './style.css'

import Card from 'react-bootstrap/Card'

function AboutMeCard() {

    return (
        <Card fluid>
            <Card.Body>
                <Card.Title>About Me</Card.Title>
                <Card.Text className="text-justify">
                    I am Eugene, from Singapore and am currently in Australia. The degree i was undertaking was a Bachelor of Business Degree in International Hotel and Resort Management. I have just graduated and am currently attending a coding bootcamp organised by Trilogy at University of Sydney. I was just working part time after my graduation, but it got boring quick. I wanted to look for something new to learn and that was when i stumbled across coding.
                </Card.Text>
            </Card.Body>
        </Card>
    );

}

export default AboutMeCard;