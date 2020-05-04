import React, { Component } from "react";
import Card from 'react-bootstrap/Card'

import NoteTaker from '../../assets/img/NoteTaker.PNG'
import PasswordGenerator from '../../assets/img/PasswordGenerator.PNG'
import SantasList from '../../assets/img/SantasList.PNG'
import TrafficApp from '../../assets/img/TrafficApp.PNG'
import WeatherDashboard from '../../assets/img/WeatherDashboard.PNG'
import WorkDaySchedular from '../../assets/img/WorkDaySchedular.PNG'

class ProjectCard extends Component {
    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="text-sm-center col-sm-12 col-md-6 mb-4">
                        <Card.Link href="https://leonghh.github.io/Bootcamp-Project-1/index.html">
                            <img className="img-fluid" src={SantasList} alt="" />
                        </Card.Link>
                        <div>
                            <h4>Santa's Sack</h4>
                            <Card.Link href="https://github.com/leonghh/Bootcamp-Project-1">Go to GitHub Repo</Card.Link>
                        </div>
                    </div>
                    <div className="text-sm-center col-sm-12 col-md-6 mb-4">
                        <Card.Link href="https://secret-wave-57938.herokuapp.com/">
                            <img className="img-fluid" src={TrafficApp} alt="" />
                        </Card.Link>
                        <div>
                            <h4>Traffic Tracker</h4>
                            <Card.Link href="https://github.com/leonghh/Bootcamp-Project-2">Go to GitHub Repo</Card.Link>
                        </div>
                    </div>
                </div>

                <div className="row">
                    <div className="text-sm-center col-6 mb-4">
                        <Card.Link href="https://leonghh.github.io/Week-5-HW/.">
                            <img className="img-fluid" src={WorkDaySchedular} alt="" />
                        </Card.Link>
                        <div>
                            <h4>Day Schedular</h4>
                            <Card.Link href="https://github.com/leonghh/Week-5-HW">Go to GitHub Repo</Card.Link>
                        </div>
                    </div>
                    <div className="text-sm-center col-6 mb-4">
                        <Card.Link href="https://leonghh.github.io/Week-3-HW/.">
                            <img className="img-fluid" src={PasswordGenerator} alt="" />
                        </Card.Link>
                        <div>
                            <h4>Password Generator</h4>
                            <Card.Link href="https://github.com/leonghh/Week-3-HW">Go to GitHub Repo</Card.Link>
                        </div>
                    </div>
                </div>

                <div className="row">
                    <div className="text-sm-center col-6 mb-4">
                        <Card.Link href="https://eugenebootcamp-notetaker.herokuapp.com/">
                            <img className="img-fluid" src={NoteTaker} alt="" />
                        </Card.Link>
                        <div>
                            <h4>Note Taker</h4>
                            <Card.Link href="https://github.com/leonghh/Week-11-HW">Go to GitHub Repo</Card.Link>
                        </div>
                    </div>
                    <div className="text-sm-center col-6 mb-4">
                        <Card.Link href="https://leonghh.github.io/Week-6-HW/.">
                            <img className="img-fluid" src={WeatherDashboard} alt="" />
                        </Card.Link>
                        <div>
                            <h4>Weather Dashboard</h4>
                            <Card.Link href="https://github.com/leonghh/Week-6-HW">Go to GitHub Repo</Card.Link>
                        </div>
                    </div>
                </div>
            </div>

        )
    }
}

export default ProjectCard;