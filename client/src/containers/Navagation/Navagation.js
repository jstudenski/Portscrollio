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
    // console.log(this.state.windowHeight)
    // console.log('hello');
    // console.log(window);
    //   this.state.links.forEach(function (item, index) {
    //    console.log(item); // index
    //   // item.setState({ midPoint: '1' });
    //   item.midPoint = '1';
    //  //   console.log(sandwich); // value
    //   });
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

  calcHeight(node, link) {
    if (node) {
      // console.log("innerHeight", window.innerHeight);
      // console.log("offsetTop", node.offsetTop);
      // console.log("scrollTop", node.scrollTop);
      // console.log("scrollTop", node.scrollTop);
      let midPoint =node.getBoundingClientRect().top + (node.getBoundingClientRect().height/2) + window.scrollY // window.scrollY // node.getBoundingClientRect().top + window.scrollY // + (node.getBoundingClientRect().height/2) - window.scrollY
      link.midPoint = midPoint
      // console.log("calcHeight", node.getBoundingClientRect());
    }
  }


  render() {
    return (
      <nav style={{ position: this.state.scrollingLock ? 'fixed' : 'relative' }}>
        {this.props.children}
        <div id="navbar" ref={this.navbar}>
          <ul>
            {this.state.links.map((link) => (
              <li ref={(node) => this.calcHeight(node, link)} > 
                <ScrollTo selector={link.selector}>{link.text} {link.midPoint}</ScrollTo>
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

