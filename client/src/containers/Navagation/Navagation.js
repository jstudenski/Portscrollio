import React from 'react';
import ScrollTo from 'react-scroll-into-view';
import './Navagation.css';

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
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
  }

  handleResize() {
    this.setState({ windowHeight: window.innerHeight });
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
      //  console.log(link);

      const mp = node.getBoundingClientRect().top +
                (node.getBoundingClientRect().height / 2) +
                window.scrollY;

      link.midPoint = mp;

      const wh = this.state.windowHeight;

      // Add class to change link color:
      switch (true) {
        case (mp > wh * 4):
          link.class = 'sec5 nav-link';
          break;
        case (mp > wh * 3):
          link.class = 'sec4 nav-link';
          break;
        case (mp > wh * 2):
          link.class = 'sec3 nav-link';
          break;
        default:
          link.class = 'sec2 nav-link';
          break;
      }
    }
  }

  // calculateColor(link) {
  //   console.log(link);
  //   // console.log("HELLO WORLD");
  //   switch (true) {
  //     case (mp > wh * 4):
  //     return 'salmon';
  //       break;
  //     case (mp > wh * 3):
  //     return 'yellow';
  //       break;
  //     case (mp > wh * 2):
  //     return 'red';
  //       break;
  //     default:
  //     return 'lime';
  //       break;
  //   }

    
  // }

  render() {
    return (
      <nav style={{ position: this.state.scrollingLock ? 'fixed' : 'relative' }}>
        {this.props.children}
        <div
          id="navbar"
          ref={this.navbar}
        >
          <ul>
            {this.state.links.map(link => (
              <li
                ref={node => this.calculateMidpoint(node, link)}
                className={link.class}
                //style={{ color: this.calculateColor(link) }}
                // style={{ color: link.color }}
              >
                <ScrollTo selector={link.selector}>{link.text}</ScrollTo>
              </li>
            ))}
          </ul>
        </div>
      </nav>
    );
  }
}


export default Navagation;

