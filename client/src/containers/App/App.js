import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
// import Hello from '../Hello';
import Section from '../Section';
import Navagation from '../Navagation';
import './App.css';

{/* <nav>
home
about
skills
portfolio
contact
</nav> */}

class App extends Component {
  render() {
    return (
      <div className="App">
        <Section background="#FF5445"></Section>
        <Navagation/>
        <Section background="#F0F0F0" ref="one"></Section>
        <Section background="#1C86EA"></Section>
        <Section background="#F9B887"></Section>
      </div>
    );
  }
}

export default App;
