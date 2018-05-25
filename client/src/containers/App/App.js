import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Section from '../Section';
import Navagation from '../Navagation';
import Home from '../Home';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Section class="section1" name="home">
          <Home />
        </Section>
        <Navagation/>
        <Section class="section2" name="about"></Section>
        <Section class="section3" name="skills"></Section>
        <Section class="section4" name="portfolio"></Section>
        <Section class="section5" name="contact"></Section>
      </div>
    );
  }
}

export default App;
