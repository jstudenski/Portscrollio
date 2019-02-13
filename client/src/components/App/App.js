import React, { Component } from 'react';
// import { BrowserRouter as Router, Route } from 'react-router-dom';
import Section from '../Section';
import Navagation from '../Navagation';
import Home from '../Section/sections/Home';
import About from '../Section/sections/About';
import Contact from '../Section/sections/Contact';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }
  render() {
    const PAGES = [
      {
        background: 'salmon',
        component: <About />,
        id: 'about',
        key: 0,
        linkColor: '#0b64c0',
        text: 'About',
      },
      {
        background: '#efe8d8',
        id: 'skills',
        key: 1,
        linkColor: '#ff4552',
        text: 'Skills',
      },
      {
        background: '#76eedf',
        id: 'portfolio',
        key: 2,
        linkColor: '#28292b',
        text: 'Portfolio',
      },
      {
        background: '#ff8fa4',
        component: <Contact />,
        id: 'contact',
        key: 3,
        linkColor: '#e5e8dc',
        text: 'Contact',
      },
    ];

    // http://www.vanschneider.com/colors
    return (
      <div className="App">
        <Section class="section1" name="home">
          <Home />
        </Section>
        <Navagation pages={PAGES} />
        {PAGES.map(page => (
          <Section background={page.background} id={page.id}>
            {page.component}
          </Section>
        ))}
      </div>
    );
  }
}

export default App;
