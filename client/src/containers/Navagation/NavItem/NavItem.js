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
    console.log('mount');
    //this.handleScroll();
  }

  componentDidUpdate(){
      //  console.log('mount');
    console.log('updated');
    //  this.handleScroll();
  //  console.log(this.state.class);
  //  console.log(this.state.class);

  }

handleScroll(){

  console.log('handle');

  const domRect = this.ref.current.getBoundingClientRect();
  const midLine = domRect.top + (domRect.height / 2) + window.scrollY;

  console.log(midLine);
  let color = '0';

  switch (true) {
    case (midLine > this.props.windowHeight * 4):
     color = '5';
      break;
    case (midLine > this.props.windowHeight * 3):
      color = '4';
      break;
    case (midLine > this.props.windowHeight * 2):
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
