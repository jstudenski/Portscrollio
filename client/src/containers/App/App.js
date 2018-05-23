import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
// import logo from '../images/logo.svg';
import Hello from '../Hello';
import Section from '../Section';
import Navagation from '../Navagation';
import './App.css';

import ReactDOM from 'react-dom';

{/* <nav>
home
about
skills
portfolio
contact
</nav> */}

class App extends Component {
  constructor(props) {
    super(props);
    this.navbar = React.createRef();
  }

    //...
  componentDidMount() {
    let test = this.navbar = React.createRef();

  //  rect = this.navbar.current.focus();

    var rect = ReactDOM.findDOMNode(this)
      .getBoundingClientRect()

      console.log(rect);
  }



  render() {

    // var domRect = element.getBoundingClientRect();
    console.log(this.navbar.current);

// let navbar = React.createRef();
// navbar = navbar.current;
// console.log(navbar);
// let sticky = navbar.current.offsetTop;

    // When the user scrolls the page, execute myFunction 
  // window.onscroll = function() {myFunction()};

 // let sticky = navbar.current.offsetTop;

// Get the navbar
//const navbar = document.getElementById("navbar");
// let navbar = this.refs.navbar
// Get the offset position of the navbar

// 

// if (this.textInput) this.textInput.focus();

  //let sticky = node.offsetTop;
  console.log("-1-");
  // console.log(focusTextInput);
  console.log("---");
  // let sticky = this.navbar.current.offsetTop;

  // Add the sticky class to the navbar when you reach its scroll position. Remove "sticky" when you leave the scroll position
  // function myFunction() {

  //  let sticky = node;
  //  console.log("-2-");
  //  console.log(node);
  //   console.log("---");
  //   console.log(sticky);
  //  // console.log(node.offsetTop);
  //   console.log(window.pageYOffset);

  //     if (window.pageYOffset >= sticky) {
  //      // node.classList.add("sticky")
  //       console.log("add");
  //     } else {
  //    //   node.classList.remove("sticky");
  //       console.log("remove");
  //     }

  // //   console.log(navbar.current.offsetTop);
  // }


    return (
      <div className="App">
        {/* <header className="App-header">
          <h1 className="App-title">React Starter</h1>
        </header> */}
        {/* <Router>
          <Route path="/hello" component={Hello} />
        </Router> */}

        <Section background="#FF5445"></Section>

        {/* <div id="navbar" ref={this.navbar}>
          <a href="#home">Home</a>
          <a href="#news">News</a>
          <a href="#contact">Contact</a>
        </div> */}
        <Navagation/>

        {/* </Navagation> */}

        <Section background="#F0F0F0"><h1>Hello</h1></Section>
        <Section background="#1C86EA"></Section>
        <Section background="#F9B887"></Section>
      </div>
    );
  }
}

export default App;
