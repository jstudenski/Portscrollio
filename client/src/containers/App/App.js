import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
// import logo from '../images/logo.svg';
import Hello from '../Hello';
import Section from '../Section';
import './App.css';


class App extends Component {
  render() {
    return (
      <div className="App">
        {/* <header className="App-header">
          <h1 className="App-title">React Starter</h1>
        </header> */}
        {/* <Router>
          <Route path="/hello" component={Hello} />
        </Router> */}

        <nav>
          home
          about
          skills
          portfolio
          contact
        </nav>


        <Section background="black"></Section>
        <Section background="red"><h1>Hello</h1></Section>
        <Section background="orange"></Section>
        <Section background="yellow"></Section>
      </div>
    );
  }
}

export default App;
