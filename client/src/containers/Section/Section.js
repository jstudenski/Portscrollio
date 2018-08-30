import React, { Component } from 'react';
import './Section.css';
import API from '../../utils/API';
import ScrollTo from 'react-scroll-into-view';

class Section extends Component {
  render() {
    return (
      <section style={{ backgroundColor: this.props.background }} className={this.props.class}>
        <div className="content">
          {this.props.children}
        </div>
      </section>
    );
  }
}

export default Section;
