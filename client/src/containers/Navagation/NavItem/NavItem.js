import React from 'react';
// import PropTypes from 'prop-types';
import ScrollTo from 'react-scroll-into-view';

class NavItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      domRect: '',
      color: '',
    };
    this.ref = React.createRef();
    this.handleScroll = this.handleScroll.bind(this);
  }

  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll);
  }

  componentDidUpdate(){

  }

handleScroll(){

  console.log('handle');



  const domRect = this.ref.current.getBoundingClientRect();
  //const midLine =
  this.setState ({
    midline: domRect.top + (domRect.height / 2) + window.scrollY
  })
    // console.log(domRect);
  console.log(this.state.midline);
  let color = '0';

  switch (true) {
    case (this.state.midline > this.props.windowHeight * 4):
     color = '5';
      break;
    case (this.state.midline > this.props.windowHeight * 3):
      color = '4';
      break;
    case (this.state.midline > this.props.windowHeight * 2):
      color = '3';
      break;
    default:
      color = '2';
      break;
  }
  this.setState({ color: color });
}

  render() {
    return (
      <li ref={this.ref} >
        <ScrollTo selector={this.props.selector}>
          {this.props.text}{this.state.color}
        </ScrollTo>
      </li>
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
