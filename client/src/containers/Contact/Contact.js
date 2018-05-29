import React, { Component } from 'react';
import styles from './Contact.css';

class Contact extends Component {
  // state = {
  //   getSamples: [{
  //     "name":"hello"},{"name":"world"}],
  // }
  render() {
      return (
        <div className="container">
          <form id="contact" method="POST" action="https://formspree.io/jstudenski@gmail.com">
            <h3>Let's Work Togther</h3>
            <input type="hidden" name="_next" value="google.com" />
            <input type="email" name="email" placeholder="Your email" />
            <textarea name="message" placeholder="Your message" />
            <button type="submit">Send</button>
          </form>
        </div>


      // <div className="container">  
      //   <form id="contact" action="" method="post">
      //     <h3>Let's Work Togther</h3>
      //     <h4>Contact us today, and get reply with in 24 hours!</h4>
      //     <div>
      //       <input placeholder="Your name" type="text" tabindex="1" required autofocus />
      //     </div>
      //     <div>
      //       <input placeholder="Your Email Address" type="email" tabindex="2" required />
      //     </div>
      //     <div>
      //       <input placeholder="Your Phone Number" type="tel" tabindex="3" required />
      //     </div>
      //     <div>
      //       <input placeholder="Your Web Site starts with http://" type="url" tabindex="4" required />
      //     </div>
      //     <div>
      //       <textarea placeholder="Type your Message Here...." tabindex="5" required></textarea>
      //     </div>
      //     <div>
      //       <button name="submit" type="submit" id="contact-submit" data-submit="...Sending">Submit</button>
      //     </div>
      //   </form>
      // </div>



      )
    }
}

export default Contact; 
