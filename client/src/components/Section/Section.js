import React from 'react';
import PropTypes from 'prop-types';
import './Section.css';

const Section = props => (
  <section
    className={props.class}
    id={props.id}
    style={{ backgroundColor: props.background }}
  >
    <div className="container">
      {props.children}
    </div>
  </section>
);

Section.propTypes = {
  class: PropTypes.string,
  id: PropTypes.string,
  background: PropTypes.string,
  children: PropTypes.node,
};

export default Section;
