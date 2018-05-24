import React, { Component } from 'react';
import './Section.css';
import API from '../../utils/API';
import ScrollTo from 'react-scroll-into-view'

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

  // <div className="ttt" id={`section${3}`}>
  // </div>

  render() {
      return (
        <section style={{background : this.props.background}} id={this.props.name}>
          {this.props.children}
          <p>{this.props.name}</p>
        </section>
      )
    }
}

export default Section; 
