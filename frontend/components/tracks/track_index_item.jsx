import React from 'react';
import { Link } from 'react-router';

const TrackIndexItem = ({track, url}) => (
<Link to={url}>
  <li className="track-list-item">
    <div className="track-list-item-num">
      <span>num</span>
    </div>

      <div className="track-list-item-album-art">
        <img src={ window.prodigyAssets.defaultImage }></img>
      </div>
      <div className="track-list-item-content">
        <h2>{ track.title }</h2>
        <h4>{ track.artist }</h4>
        <p>{ track.description}</p>
      </div>
  </li>
</Link>
);


export default TrackIndexItem;
