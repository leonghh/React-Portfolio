import React, { Component } from 'react';

import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { faFilePdf, faPaperPlane } from '@fortawesome/free-solid-svg-icons'
import {BrowserRouter as Router, Route, Link } from 'react-router-dom';

import Container from 'react-bootstrap/Container';

import './App.css';

import HomePage from './pages/HomePage';
import ContactPage from './pages/ContactPage';
import PortfolioPage from './pages/PortfolioPage';

import Navbar from './components/Navbar/Index'

library.add(fab, faFilePdf, faPaperPlane)

class App extends Component {


  render() {
    return (
      <Router>
        <Container className="p-0" fluid={true}>
          
          <Navbar />

                <Route exact path="/" component={HomePage} />
                <Route exact path="/portfolio" component={PortfolioPage} />
                <Route exact path="/contact" component={ContactPage} />




        </Container>
      </Router>
    );
  }
}

export default App;
