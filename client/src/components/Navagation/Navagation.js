import React from 'react';
import './Navagation.css';
import NavItem from './nav-item';
import PropTypes from 'prop-types';

class Navagation extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      midpoint:5,
      scrollingLock: false,
      windowHeight: window.innerHeight,
    };
    this.handleScroll = this.handleScroll.bind(this);
    this.handleResize = this.handleResize.bind(this);
  }

  componentDidMount() {
    window.addEventListener('resize', this.handleResize);
    window.addEventListener('scroll', this.handleScroll);
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
    const { windowHeight } = this.state
    this.setState({
      scrollingLock: (window.scrollY > windowHeight) !== false,
    });
  }

  getLinkColor = (midline) => {
    const { windowHeight } = this.state
    if (midline) {
      let calc = Math.floor(((midline - windowHeight) / windowHeight ));
      // return the link color
      return this.props.pages[calc].linkColor
    }
  };

  render() {
    const { children } = this.props
    const { scrollingLock, windowHeight } = this.state

    return (
      <nav style={{ position: scrollingLock ? 'fixed' : 'relative' }}>
        {children}
        <div id="navbar">
          <ul>
            {this.props.pages.map(page => (
              <NavItem
                getLinkColor={this.getLinkColor}
                windowHeight={windowHeight}
                {...page}
              />
            ))}
          </ul>
        </div>
      </nav>
    );
  }
}

// Navagation.propTypes = {
//   props: PropTypes.object
// };


export default Navagation;
