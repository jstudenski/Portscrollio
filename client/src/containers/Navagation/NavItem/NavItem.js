import React from 'react';
// import PropTypes from 'prop-types';
import ScrollTo from 'react-scroll-into-view';

class NavItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      counter: 0,
      midpoint: 0,
      domRect: '',
    };
  }

  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll);
  //  console.log(this.state.midPoint);
  }

  midpoint(node) {
      if (node) {
        this.setState({

        });
        const domRect = node.getBoundingClientRect();
        this.state.midPoint = domRect.top + (domRect.height / 2) + window.scrollY;

        switch (true) {
          case (this.state.midPoint > this.props.windowHeight * 4):
            //console.log('5');
            this.state.class = '5';
            break;
          case (this.state.midPoint > this.props.windowHeight * 3):
          //  console.log('4');
            this.state.class = '4';
            break;
          case (this.state.midPoint > this.props.windowHeight * 2):
          //  console.log('3');
            this.state.class = '3';
            break;
          default:
          //  console.log('2');
            this.state.class = '2';
            break;
        }

      }
  }


  render() {
    return (
      <div>
          <li
            ref={node => this.midpoint(node)}

            // style={{ color: link.color }}
          >
            <ScrollTo selector={this.props.selector}>
              {this.props.text}{this.state.class}
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
