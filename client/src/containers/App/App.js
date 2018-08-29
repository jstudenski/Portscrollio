import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Section from '../Section';
import Navagation from '../Navagation';
import Home from '../Home';
import About from '../About';
import Contact from '../Contact';
import './App.css';

class App extends Component {
  render() {
    const PAGES = [
      { key: 0, selector: '#about', text: 'About', linkColor: 'blue' },
      { key: 1, selector: '#skills', text: 'Skills', linkColor: 'red'},
      { key: 2, selector: '#portfolio', text: 'Portfolio', linkColor: 'orange'},
      { key: 3, selector: '#contact', text: 'Contact', linkColor: 'yellow'},
    ]

    return (
      <div className="App">
        <Section class="section1" name="home">
          <Home />
        </Section>
        <Navagation pages={PAGES} />
        <Section class="section2" name="about">
          <About />
       </Section>
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
