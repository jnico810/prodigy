import React from 'react';
import { Link, hashHistory } from 'react-router';
import TrackIndexItem from './track_index_item';

class TrackIndex extends React.Component {

  constructor(props){
    super(props);
  }



  render(){
    if (this.props.tracks.tracks.length > 0) {

      const tracks = this.props.tracks.tracks;
      let trackLis = [];
      tracks.forEach((track, idx) => {
        const url = `/tracks/${track.id}`;
        trackLis.push(
        <TrackIndexItem key={track.id} track={track} url={url} num={idx + 1}/>
        );
      });
      return (
        <section className="track-index-content">
          <ul className="track-index-list cf">{ trackLis }</ul>
        </section>
      );
    } else{
      return(<section> </section>);
    }
  }

}

export default TrackIndex;
