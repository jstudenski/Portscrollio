import React, { Component } from 'react';
import './Section.css';
import API from '../../utils/API';

class Section extends Component {
  // state = {
  //   getSamples: [{
  //     "name":"hello"},{"name":"world"}],
  // }

  // componentDidMount() {
  //   this.loadSample();
  // }

  // loadSample = () => {
  //   API.getSamples()
  //     .then(res => this.setState({ getSample: res.data }))
  //     .catch(err => console.log(err));
  // };

  render() {
      return (
        <section style={{background : this.props.background}}>
          {this.props.children}
        </section>
      )
    }
}

export default Section; 
