import React from 'react';
import { Link, hashHistory } from 'react-router';
import Greeting from './greeting';
import TracksIndexContainer from '../tracks/tracks_index_container.js';

class Home extends React.Component {

  constructor(props){
    super(props);
  }

  render() {
    return(
      <section>
        <Greeting/>
        <TracksIndexContainer/>
      </section>
    );
  }
}

export default Home;
