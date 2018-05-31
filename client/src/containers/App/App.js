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
        <Section class="section2" name="about">
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla scelerisque, metus in finibus tempus, diam nunc mollis urna, eu pulvinar metus risus ut metus. Donec id diam nisi. Phasellus vitae commodo sem. Mauris libero odio, lacinia posuere viverra sit amet, dictum ac leo. Aliquam justo nisi, aliquet ac suscipit id, congue ut leo. Vestibulum a ipsum velit. Phasellus risus massa, tincidunt at justo vel, interdum lacinia tellus. Sed ac lorem at libero tincidunt pellentesque. Quisque vel nisi vitae erat ullamcorper placerat sed a ipsum. Ut tincidunt imperdiet rutrum. Aenean eu nisl non risus interdum imperdiet posuere vitae eros. Phasellus nec purus ut dolor lacinia mollis. Vivamus porta volutpat arcu, vitae bibendum lectus sollicitudin sed. Vivamus quam enim, placerat egestas augue nec, ultricies vehicula nisl. Suspendisse. </p>
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
