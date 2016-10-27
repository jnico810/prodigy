import React from 'react';
import ReactPlayer from 'react-player';
import { Link, hashHistory } from 'react-router';

class AudioPlayer extends React.Component{

  constructor(props){
    super(props);
  }
  render(){
    const {url, playing, config} = this.props;
    return (
      <ReactPlayer
        className='audio-player'
        url= {url}
        playing= {playing}
        width={'100%'}
        height={'320px'}
        youtubeConfig={config}/>
    );
  }
}

export default AudioPlayer;
