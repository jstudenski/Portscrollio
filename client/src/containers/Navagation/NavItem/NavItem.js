import React from 'react';
// import PropTypes from 'prop-types';
import ScrollTo from 'react-scroll-into-view';

class NavItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      counter: 0,
      midpoint: 1,
      domRect: '',
    };
    this.handleClick = this.handleClick.bind(this);
    this.handleScroll = this.handleScroll.bind(this);
  }


  refCallback = element => {
    console.log('roll');
    if (element) {
      this.setState({ node: element.getBoundingClientRect() });

    }
  //   this.setState({ midpoint: element.getBoundingClientRect().top });

    this.state.midPoint = 3 // this.state.domRect.top + (this.state.domRect.height / 2) + window.scrollY;

  };

  handleScroll() {
console.log('hi');
  }

  componentDidMount() {
    console.log(this.props);
  //  console.log(this.getBoundingClientRect());
    // console.log(this.state.links[0].midPoint);
    // window.addEventListener('scroll', this.handleScroll);
    // window.addEventListener('resize', this.handleResize);
  }

  // midpoint(node) {
  //  console.log(node)
  //  let tempMidpoint = 3;
  //
  //   if (node) {
  //     const domRect = node.getBoundingClientRect();
  //
  //
  //     // tempMidpoint = domRect.top + (domRect.height / 2) + window.scrollY
  //
  //     // Calculate Link Midpoint
  //     // link.midPoint = domRect.top + (domRect.height / 2) + window.scrollY;
  //
  //   //   console.log()
  //     // // Add class to change link color:
  //     // switch (true) {
  //     //   case (link.midPoint > this.state.windowHeight * 4):
  //     //     link.class = 'sec5 nav-link';
  //     //     break;
  //     //   case (link.midPoint > this.state.windowHeight * 3):
  //     //     link.class = 'sec4 nav-link';
  //     //     break;
  //     //   case (link.midPoint > this.state.windowHeight * 2):
  //     //     link.class = 'sec3 nav-link';
  //     //     break;
  //     //   default:
  //     //     link.class = 'sec2 nav-link';
  //     //     break;
  //     // }
  //   }
  //
  //   if (this.state.midPoint !== tempMidpoint) {
  //     this.setState({ midPoint: tempMidpoint });
  //   }
  //
  // }


  handleClick() {
    console.log(this.state);
  // //   link.midPoint = domRect.top + (domRect.height / 2) + window.scrollY;
  //   const domRect = node.getBoundingClientRect();
  //   console.log(domRect.top);
  //   console.log(domRect.height / 2);
  //   console.log(window.scrollY);

    // this.setState(prevState => ({
    //   counter:
    // }));

  }

  render() {
    return (
      <div>

          <li
            ref={this.refCallback}
            onClick={this.handleClick}
            //ref={node => this.midpoint(node)}
            // key={this.props.key}
           // ref={node => this.calculateMidpoint(node, link)}
          //  className={this.props.class}
           // style={{ backgroundColor: this.testing(this) }}
            // name={() => this.testing()}
            // style={{ color: this.calculateColor(link) }}
            // style={{ color: link.color }}
          >
            <ScrollTo selector={this.props.selector}>{this.props.text}{this.state.midpoint}</ScrollTo>
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
