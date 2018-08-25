import React from 'react';
// import PropTypes from 'prop-types';
import ScrollTo from 'react-scroll-into-view';

class NavItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      counter: 0,
      // midPoint: 0,
    };
    //this.handleClick = this.handleClick.bind(this);
  }


  componentDidMount() {
    console.log(this.props);
    // console.log(this.state.links[0].midPoint);
    // window.addEventListener('scroll', this.handleScroll);
    // window.addEventListener('resize', this.handleResize);
  }

  handleClick() {
    this.setState(prevState => ({
      counter: prevState.counter + 1
    }));
  }

  render() {
    return (
      <div>
        {/* <h1 onClick={this.handleClick}>Hello Navitem: {this.state.counter}</h1> */}
              <li
                // key={this.props.key}
               // ref={node => this.calculateMidpoint(node, link)}
                className={this.props.class}
               // style={{ backgroundColor: this.testing(this) }}
                // name={() => this.testing()}
                // style={{ color: this.calculateColor(link) }}
                // style={{ color: link.color }}
              >
                <ScrollTo selector={this.props.selector}>{this.props.text}</ScrollTo>
              </li>

      </div>
    )
  }
}

// NavItem.propTypes = {
//   // title: PropTypes.string.isRequired,
// };

// NavItem.defaultProps = {
//   // title: 'Hello World',
// };

export default NavItem;
