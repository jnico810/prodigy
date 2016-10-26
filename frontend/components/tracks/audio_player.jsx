import React from 'react';
import ReactPlayer from 'react-player'
import { Link, hashHistory } from 'react-router';

const AudioPlayer = ({url, playing, youtubeConfig}) => {
    return (
      <ReactPlayer
        url= {url}
        playing= {playing}
        width={340}
        height={340}
        youtubeConfig={youtubeConfig}/>
    );
};

export default AudioPlayer;
