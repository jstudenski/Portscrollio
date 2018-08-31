import React, { Component } from 'react';
import './Section.css';

class Section extends Component {
  render() {
    return (
      <section style={{ backgroundColor: this.props.background }} id={this.props.id} className={this.props.class}>
        <div className="content">
          {this.props.children}
        </div>
      </section>
    );
  }
}

export default Section;
