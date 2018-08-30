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
      borderLeft: (this.state.color === this.props.linkColor) ? '3px solid' : null,
      paddingLeft: (this.state.color === this.props.linkColor) ? '10px' : null,
    };

    // if (this.state.color === this.props.linkColor) {
    //   style.borderBottom = '2px solid red';
    //   style.display = 'inline-block';
    //   style.lineHeight = 1;
    // }

    // this.state.color === this.props.linkColor)
    // borderBottom: '2px solid red',
    // display: 'inline-block',
    // lineHeight: 1,


    return (
      <div>
        <li ref={this.ref} style={style}>
          <ScrollTo selector={`#${this.props.id}`}>
            {this.props.text}
          </ScrollTo>
        </li>
      </div>
    );
  }
}

NavItem.propTypes = {
  id: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
};

export default NavItem;
