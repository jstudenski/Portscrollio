import React, { Component } from 'react';
import './About.css';
import signature from '../../images/signature.svg';

class About extends Component {
  render() {
      return (
        <div className={'about'}>
          <div className={'bio'}>
            <p class="mini">Hello</p>
            <br /><br /><br />
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla scelerisque, metus in finibus tempus, diam nunc mollis urna, eu pulvinar metus risus ut metus. Donec id diam nisi. Phasellus vitae commodo sem. Mauris libero odio, lacinia posuere viverra sit amet, dictum ac leo. Aliquam justo nisi, aliquet ac suscipit id, congue ut leo. Vestibulum a ipsum velit. Phasellus risus massa, tincidunt at justo vel, interdum lacinia tellus. Sed ac lorem at libero tincidunt pellentesque. Quisque vel nisi vitae erat ullamcorper placerat sed a ipsum. Ut tincidunt imperdiet rutrum. Aenean eu nisl non risus interdum imperdiet posuere vitae eros. Phasellus nec purus ut dolor lacinia mollis. Vivamus porta volutpat arcu, vitae bibendum lectus sollicitudin sed. Vivamus quam enim, placerat egestas augue nec, ultricies vehicula nisl. Suspendisse. </p>
            <img src={signature} alt={"signature"}/>
          </div>
        </div>
      )
    }
}

export default About;
