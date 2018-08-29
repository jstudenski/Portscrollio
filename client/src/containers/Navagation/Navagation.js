import React from 'react';
import ScrollTo from 'react-scroll-into-view';
import './Navagation.css';
import NavItem from './NavItem';

class Navagation extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      midpoint:5,
      scrollingLock: false,
      windowHeight: window.innerHeight,
      // links: [
      //   { key: 0, selector: '#about', text: 'About' },
      //   { key: 1, selector: '#skills', text: 'Skills' },
      //   { key: 2, selector: '#portfolio', text: 'Portfolio' },
      //   { key: 3, selector: '#contact', text: 'Contact' },
      // ],
    };
    this.navbar = React.createRef();
    this.handleScroll = this.handleScroll.bind(this);
    this.handleResize = this.handleResize.bind(this);
  }

  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll);
    window.addEventListener('resize', this.handleResize);
  }

  componentDidUpdate() {
    // console.log('updated');
    // console.log(this.state.links[0].midPoint);
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
  }

  // update window height when resized
  handleResize() {
    this.setState({ windowHeight: window.innerHeight });
  }

  // lock nav links to the window after the user scrolls past the first section
  handleScroll(node) {
    //console.log(node)
    this.setState({
      scrollingLock: (window.scrollY > this.state.windowHeight) !== false,
      timeStamp: node.timeStamp
    });
  }

  newSetMidpoint(){
   //  console.log('new set midpoint')
  }

  calculateMidpoint(node, link) {
    console.log('calculateMidpoint');

    if (node) {
      console.log(node)
    }


  }

  getLinkColor = (midline) => {

    if (midline) {
      let calc = Math.floor(((midline - this.state.windowHeight) /  this.state.windowHeight ));
      console.log(midline)
       return this.props.pages[calc].linkColor
    }

  };

  render() {
    // console.log('render');
    // console.log(this.state.links[0].midPoint);
  //  console.log(this.state.windowHeight);
    return (
      <nav style={{ position: this.state.scrollingLock ? 'fixed' : 'relative' }}>
        {this.props.children}
        <div
          id="navbar"
          ref={this.navbar}
        >

          <ul>
            {this.props.pages.map(page => (

              <NavItem
                windowHeight={this.state.windowHeight}
                {...page}
                getLinkColor={this.getLinkColor}
              />

              // <li
              //   key={link.key}
              //   ref={node => this.calculateMidpoint(node, link)}
              //   className={link.class}
              //  // style={{ backgroundColor: this.testing(this) }}
              //   // name={() => this.testing()}
              //   // style={{ color: this.calculateColor(link) }}
              //   // style={{ color: link.color }}
              // >
              //   <ScrollTo selector={link.selector}>{link.text}</ScrollTo>
              // </li>
            ))}
          </ul>
        </div>
      </nav>
    );
  }
}


export default Navagation;
