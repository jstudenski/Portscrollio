import React, { Component } from 'react';
import styles from './Contact.css';

class Contact extends Component {
  // state = {
  //   getSamples: [{
  //     "name":"hello"},{"name":"world"}],
  // }
  render() {
      return (
        <div className={styles.container}>
          <form className={styles.contact} method="POST" action="https://formspree.io/jstudenski@gmail.com">
            <h3>Let's Work Togther</h3>
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
