import React from 'react';
import { Link } from 'react-router';

const TrackIndexItem = ({track, url, num}) => {
  return(
  <Link to={url}>
    <li className="track-list-item">
      <span className="track-list-item-num">{ num }</span>
      <div className="track-list-item-album-art">
        <img src= { track.album_art_url } ></img>
      </div>
      <div className="track-list-item-content">
        <h2>{ track.title }</h2>
        <h4>{ track.artist }</h4>
        <div className= "description-wrapper">
          <p>{ track.description}</p>
        </div>
      </div>
    </li>
  </Link>
);
}


export default TrackIndexItem;
