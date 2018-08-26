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
      this.setState({ node: this.props.timeStamp});
    }

  };



  componentDidMount() {
    console.log(this.props);
  //  console.log(this.getBoundingClientRect());
    // console.log(this.state.links[0].midPoint);
    window.addEventListener('scroll', this.handleScroll);
    // window.addEventListener('resize', this.handleResize);
  }


handleScroll(){
  console.log('*');
}

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
            onScroll={this.handleScroll}
            ref={this.refCallback}
            // onClick={this.handleClick}
            //ref={node => this.midpoint(node)}
            // key={this.props.key}
           // ref={node => this.calculateMidpoint(node, link)}
          //  className={this.props.class}
           // style={{ backgroundColor: this.testing(this) }}
            // name={() => this.testing()}
            // style={{ color: this.calculateColor(link) }}
            // style={{ color: link.color }}
          >
            <ScrollTo selector={this.props.selector}>
              {this.props.node}{this.props.text}{this.props.windowHeight}{this.state.node}
            </ScrollTo>
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
