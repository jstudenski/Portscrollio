import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Section from '../Section';
import Navagation from '../Navagation';
import './App.css';

class App extends Component {
  render() {
    const id = `section${2}`;
    return (
      <div className="App">
        <Section background="pink" name="home"></Section>
        <Navagation/>
        <Section background="#FF5445" name="about"></Section>
        <Section background="#F0F0F0" name="skills"></Section>
        <Section background="#1C86EA" name="portfolio"></Section>
        <Section background="#F9B887" name="contact"></Section>
      </div>
    );
  }
}

export default App;
