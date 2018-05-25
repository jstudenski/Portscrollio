import React, { Component } from 'react';
import './Navagation.css';
import ScrollTo from 'react-scroll-into-view';
import { SIGTERM } from 'constants';

class Navagation extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      scrollingLock: false,
      windowHeight: window.innerHeight,
      links: [
        { selector: '#about', text: 'About' },
        { selector: '#skills', text: 'Skills' },
        { selector: '#portfolio', text: 'Portfolio' },
        { selector: '#contact', text: 'Contact' },
      ],
    };
    this.navbar = React.createRef();
    this.handleScroll = this.handleScroll.bind(this);
    this.handleResize = this.handleResize.bind(this);
  }

  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll);
    window.addEventListener('resize', this.handleResize);

    console.log(this.state.links[0].text);

  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
  }

  handleResize() {
    this.setState({ windowHeight: window.innerHeight });
   // console.log('hello');

    console.log(window);
    this.state.links.forEach(function (item, index) {
     console.log(item); // index
    // item.setState({ midPoint: '1' });
    item.midPoint = '1';
   //   console.log(sandwich); // value
    });



  }

  getLinkMidpoint() {
    console.log(this.state.links);
  }

  handleScroll() {
    const vPos = window.innerHeight;
    // console.log(vPos);

    if (window.scrollY > this.state.windowHeight) {
      this.setState({
        scrollingLock: true,
      });
    } else if (window.scrollY < this.state.windowHeight) {
      this.setState({
        scrollingLock: false,
      });
    }
  }

  render() {
    return (
      <nav style={{ position: this.state.scrollingLock ? 'fixed' : 'relative' }}>
        {this.props.children}
        <div id="navbar" ref={this.navbar}>
          <ul>
            {this.state.links.map((link) => (
              <li ref={(node) => this.calcHeight(node)} > 
                <ScrollTo selector={link.selector}>{link.text}</ScrollTo>
              </li>
            ))}
          </ul>
        </div>
      </nav>
    );
  }

  calcHeight(node){
    if (node) {
        console.log("calcHeight", node.getBoundingClientRect());
      }
  }

  
}

// onClick={this.changeContent.bind(this)}

export default Navagation;

