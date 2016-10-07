import React from 'react';
import { Link } from 'react-router';

const TrackIndexItem = ({track, url}) => (

<li className="track-list-item">
  <Link to={url}>
    <div className="track-list-item-album-art">
      <img src={ window.prodigyAssets.defaultImage }></img>
    </div>
    <div className="track-list-item-content">
      <h2>{ track.title }</h2>
      <h4>{ track.artist }</h4>
      <p>{ track.description}</p>
    </div>
  </Link>
</li>
);


export default TrackIndexItem;
