import React from 'react';
import { Link, hashHistory } from 'react-router';
import Greeting from './greeting';

class Home extends React.Component {

  constructor(props){
    super(props);
  }

  render() {
    return(
      <section>
        <Greeting/>
      </section>
    );
  }
}

// <TrackIndexContainer/>
export default Home;
