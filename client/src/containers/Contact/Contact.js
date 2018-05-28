import React, { Component } from 'react';
import './Contact.css';

class Contact extends Component {
  // state = {
  //   getSamples: [{
  //     "name":"hello"},{"name":"world"}],
  // }
  render() {
      return (
        <div>
          <p>Let's Work Togther</p>
          <form method="POST" action="https://formspree.io/jstudenski@gmail.com">
            <input type="hidden" name="_next" value="google.com" />
            <input type="email" name="email" placeholder="Your email" />
            <textarea name="message" placeholder="Your message" />
            <button type="submit">Send</button>
          </form>
        </div>
      )
    }
}

export default Contact; 
