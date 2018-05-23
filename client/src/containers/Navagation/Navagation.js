import React, { Component } from 'react';
import './Navagation.css';
import API from '../../utils/API';


class Navagation extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      scrollingLock: false,
    };
    // example how to bind object in React ES6
    this.handleScroll = this.handleScroll.bind(this);
  }

// window.onscroll = function() {myFunction()};

// // Get the navbar
// var navbar = document.getElementById("navbar");

// // Get the offset position of the navbar
// var sticky = navbar.offsetTop;

// // Add the sticky class to the navbar when you reach its scroll position. Remove "sticky" when you leave the scroll position
// function myFunction() {
//   if (window.pageYOffset >= sticky) {
//     navbar.classList.add("sticky")
//   } else {
//     navbar.classList.remove("sticky");
//   }
// }

  componentDidMount(){
    window.addEventListener('scroll', this.handleScroll);
    console.log(window);
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
  }

  handleScroll() {
    console.log(window.scrollY);
    if (window.scrollY > 800) {
      console.log("should lock");
      this.setState({
        scrollingLock: true
      });
    } else if (window.scrollY < 800) {
      console.log("not locked");
      this.setState({
        scrollingLock: false
      });
    }
  }

  render() {
    return (
      <nav style={{ width: "100%", position: this.state.scrollingLock ? "fixed" : "relative"}}>
        {this.props.children}
        <div id="navbar" ref={this.navbar}>
          <a href="#home">Home</a>
          <a href="#news">News</a>
          <a href="#contact">Contact</a>
        </div>
      </nav>
    );
  }
}

export default Navagation;

