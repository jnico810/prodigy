import React from 'react';
import { Link, hashHistory } from 'react-router';

class TrackIndex extends React.Component {

  constructor(props){
    super(props);
  }

  render(){

    if (Object.keys(this.props.tracks.tracks).length > 0) {
      return (
        <section className="track-index-content"> INDEX </section>
      );
    } else{
      return(<section> NOPE </section>);
    }
  }

}

export default TrackIndex;
