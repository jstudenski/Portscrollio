import React from 'react';
import PropTypes from 'prop-types';
import ScrollTo from 'react-scroll-into-view';

class NavItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      color: 1,
    };
    this.ref = React.createRef();
    this.calcMidline = () => {
      const DOMRect = this.ref.current.getBoundingClientRect();
      this.midline = DOMRect.top + (DOMRect.height / 2) + window.scrollY;
    };
    this.getColor = this.getColor.bind(this);
  }

  componentDidMount() {
    console.log(this.props)
  }

  componentDidUpdate() {
    this.calcMidline();
    this.getColor();
  }

  getColor() {
    let color = '0';

    switch (true) {
      case (this.midline > this.props.windowHeight * 4):
        color = '5';
        break;
      case (this.midline > this.props.windowHeight * 3):
        color = '4';
        break;
      case (this.midline > this.props.windowHeight * 2):
        color = '3';
        break;
      default:
        color = '2';
        break;
    }
    // return color;
    if (this.state.color !== color) {
      this.setState({ color });
    }
  }

  render() {
    return (
      <div>
        <li ref={this.ref} >
          <ScrollTo selector={this.props.selector}>
            {this.props.text}
            {this.state.color}
          </ScrollTo>
        </li>
      </div>
    );
  }
}

NavItem.propTypes = {
  windowHeight: PropTypes.number.isRequired,
  selector: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
};

export default NavItem;
