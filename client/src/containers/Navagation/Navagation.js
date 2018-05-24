import React, { Component } from 'react';
import './Navagation.css';
import ScrollTo from 'react-scroll-into-view'

class Navagation extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      scrollingLock: false,
      windowHeight: window.innerHeight,
    };
    this.handleScroll = this.handleScroll.bind(this);
    this.handleResize = this.handleResize.bind(this);
  }

  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll);
    window.addEventListener('resize', this.handleResize);
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
  }

  handleResize() {
    this.setState({ windowHeight: window.innerHeight });
  }

  handleScroll() {
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
      <nav style={{position: this.state.scrollingLock ? 'fixed' : 'relative' }}>
        {this.props.children}
        <div id="navbar" ref={this.navbar}>
          <ul>
            <li><ScrollTo selector={`#about`}>About</ScrollTo></li>
            <li><ScrollTo selector={`#skills`}>Skills</ScrollTo></li>
            <li><ScrollTo selector={`#portfolio`}>Portfolio</ScrollTo></li>
            <li><ScrollTo selector={`#contact`}>Contact</ScrollTo></li>
          </ul>
        </div>
      </nav>
    );
  }
}

export default Navagation;

