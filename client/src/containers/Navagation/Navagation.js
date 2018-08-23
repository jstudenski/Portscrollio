import React from 'react';
import ScrollTo from 'react-scroll-into-view';
import './Navagation.css';
import NavItem from './NavItem';

class Navagation extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      scrollingLock: false,
      windowHeight: window.innerHeight,
      links: [
        { key: 0, selector: '#about', text: 'About', test:'0' },
        { key: 1, selector: '#skills', text: 'Skills' },
        { key: 2, selector: '#portfolio', text: 'Portfolio' },
        { key: 3, selector: '#contact', text: 'Contact' },
      ],
    };
    this.navbar = React.createRef();
    this.handleScroll = this.handleScroll.bind(this);
    this.handleResize = this.handleResize.bind(this);
  //  this.testing = this.testing.bind(this);
  }

  componentDidMount() {
    // console.log('mount');
    // console.log(this.state.links[0].midPoint);
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
  handleScroll() {
    // console.log('handleScroll')
    this.setState({
      scrollingLock: (window.scrollY > this.state.windowHeight) !== false,
    });
  }

  newSetMidpoint(){
   //  console.log('new set midpoint')
  }

  calculateMidpoint(node, link) {


    // console.log('calculateMidpoint');


    if (node) {
      const domRect = node.getBoundingClientRect();
      // Calculate Link Midpoint
      link.midPoint = domRect.top + (domRect.height / 2) + window.scrollY;

      // Add class to change link color:
      switch (true) {
        case (link.midPoint > this.state.windowHeight * 4):
          link.class = 'sec5 nav-link';
          break;
        case (link.midPoint > this.state.windowHeight * 3):
          link.class = 'sec4 nav-link';
          break;
        case (link.midPoint > this.state.windowHeight * 2):
          link.class = 'sec3 nav-link';
          break;
        default:
          link.class = 'sec2 nav-link';
          break;
      }
    }

    // this.setState(prevState => ({
    //   links: [...prevState.links.class,'sec3 nav-link']
    // }));

  }

  // testing(node) {
  //   console.log(node)
  //   return 'yellow' // console.log(node);
  // }

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
        {/* <NavItem></NavItem> */}
          <ul>
            {this.state.links.map(link => (
              <NavItem windowHeight={this.state.windowHeight} {...link} />
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

