import React from 'react';
import PropTypes from 'prop-types';
import ScrollTo from 'react-scroll-into-view';

class NavItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      color: 'white',
    };
    this.ref = React.createRef();
  }

  componentDidUpdate() {
    // get the components current size and position
    const DOMRect = this.ref.current.getBoundingClientRect();
    // find the midline
    const midline = DOMRect.top + (DOMRect.height / 2) + window.scrollY;
    // pass the midline to parent function and return link color
    const newColor = this.props.getLinkColor(midline);
    // if the color is different, set it in the state
    if (this.state.color !== newColor) {
      this.setState({ color: newColor });
    }
  }

  render() {
    const style = {
      color: this.state.color,
      margin: 0,
      padding: 0,
    };
    return (
      <div>
        <li ref={this.ref} >
          <ScrollTo selector={this.props.selector}>
            <p style={style}>
              {this.props.text}
            </p>
          </ScrollTo>
        </li>
      </div>
    );
  }
}

NavItem.propTypes = {
  selector: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
};

export default NavItem;
