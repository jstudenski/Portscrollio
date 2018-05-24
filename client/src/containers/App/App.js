import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
// import Hello from '../Hello';
import Section from '../Section';
import Navagation from '../Navagation';
import './App.css';
import ScrollTo from 'react-scroll-into-view'

{/* <nav>
home
about
skills
portfolio
contact
</nav> */}

class App extends Component {

//   componentDidMount() {
//     console.log(this.refs["item"])
//    // this.refs.scrollIntoView();    //this['item-1'].scrollIntoView();
//  //  this.refs["item"].scrollIntoView({block: 'end', behavior: 'smooth'});

//    //  this.refs[1].scrollIntoView({block: 'end', behavior: 'smooth'});
//   }
//   handleShow(i) {
//     this.setState({index: i});
//     console.log(i)
//   }

  render() {

    const id = `section${2}`;
    return (
      <div className="App">
        <ScrollTo selector={`#section${3}`}>
          TEST
        </ScrollTo>
        <Section background="#FF5445"></Section>
        <Navagation/>
        <Section background="#F0F0F0">
        <div class="ttt" id={`section${3}`}>
        </div>
        </Section>
        <Section background="#1C86EA"></Section>
        <Section background="#F9B887"></Section>
      </div>
    );
  }
}

export default App;
