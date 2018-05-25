import React, { Component } from 'react';
import './Navagation.css';
import ScrollTo from 'react-scroll-into-view';

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
  }

  getLinkMidpoint() {
    console.log(this.state.links);
  }

  handleScroll() {
    // const vPos = window.innerHeight;
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

  calculateMidpoint(node, link) {
    if (node) {
      // console.log("innerHeight", window.innerHeight);
      // console.log("offsetTop", node.offsetTop);
      // console.log("scrollTop", node.scrollTop);
      // console.log("scrollTop", node.scrollTop);

      const mp = node.getBoundingClientRect().top + (node.getBoundingClientRect().height / 2) + window.scrollY;
      link.midPoint = mp;

      const wh = this.state.windowHeight;
      switch (true) {
        case (mp > wh * 4):
          link.color = '#fff';
          break;
        case (mp > wh * 3):
          link.color = '#D027A5';
          break;
        case (mp > wh * 2):
          link.color = 'lime';
          break;
        default:
          link.color = 'orange';
          break;
      }

    }
  }


  render() {
    return (
      <nav style={{ position: this.state.scrollingLock ? 'fixed' : 'relative' }}>
        {this.props.children}
        <div id="navbar" ref={this.navbar}>
          <ul>
            {this.state.links.map(link => (
              <li ref={node => this.calculateMidpoint(node, link)} style={{ color: link.color }}>
                <ScrollTo selector={link.selector}>{link.text}</ScrollTo>
              </li>
            ))}
          </ul>
        </div>
      </nav>
    );
  }
}

// onClick={this.changeContent.bind(this)}

export default Navagation;

