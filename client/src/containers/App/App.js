import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Section from '../Section';
import Navagation from '../Navagation';
import Home from '../Home';
import './App.css';

class App extends Component {
  render() {
    const id = `section${2}`;
    return (
      <div className="App">
        <Section background="#e0fff7" name="home">
          <Home />
        </Section>
        <Navagation/>
        <Section background="#ffffff" name="about"></Section>
        <Section background="#ffe8e0" name="skills"></Section>
        <Section background="#D3FFB9" name="portfolio"></Section>
        <Section background="#33373e" name="contact"></Section>
      </div>
    );
  }
}

export default App;
