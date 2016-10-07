import React from 'react';
import { Link, hashHistory } from 'react-router';
import TrackIndexItem from './track_index_item';

class TrackIndex extends React.Component {

  constructor(props){
    super(props);
  }

  render(){

    if (Object.keys(this.props.tracks.tracks).length > 0) {

      const tracks = this.props.tracks.tracks;
      let trackLis = [];
      for (let track in tracks) {
        const url = `/tracks/${track}`;
        trackLis.push(
        <TrackIndexItem track={tracks[track]} url={url}/>
        );
      }

      return (
        <section className="track-index-content">
          <ul className="track-index-list cf">{ trackLis }</ul>
        </section>
      );
    } else{
      return(<section> NOPE </section>);
    }
  }

}

export default TrackIndex;
