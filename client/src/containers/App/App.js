import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Section from '../Section';
import Navagation from '../Navagation';
import Home from '../Home';
import Contact from '../Contact';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Section class="section1" name="home">
          <Home />
        </Section>
        <Navagation />
        <Section class="section2" name="about" />
        <Section class="section3" name="skills" />
        <Section class="section4" name="portfolio" />
        <Section class="section5" name="contact">
          <Contact />
        </Section>
      </div>
    );
  }
}

export default App;
