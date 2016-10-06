import React from 'react';
import { Link, hashHistory } from 'react-router';

class TrackIndex extends React.Component {

  constructor(props){
    super(props);
  }

  render(){

    if (Object.keys(this.props.tracks.tracks).length > 0) {

      const tracks = this.props.tracks.tracks;
      let trackLis = [];
      for (let track in tracks) {
        trackLis.push(
        <li className="track-list-item">
          <div className="track-list-item-album-art">
            <img src='/assets/bon_iver.jpg'></img>
          </div>
        { tracks[track].title }
        </li>);
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
