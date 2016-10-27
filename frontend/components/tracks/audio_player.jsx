import React from 'react';
import ReactPlayer from 'react-player';
import { Link, hashHistory } from 'react-router';

class AudioPlayer extends React.Component{

  constructor(props){
    super(props);
    this.state={duration:0};
  }
  render(){
    const {url, playing, config, seeking, videoPercentage} = this.props;
    let player = (
      <ReactPlayer
      className='audio-player'
      ref={player => {this.player = player;}}
      url= {url}
      playing= {playing}
      width={'100%'}
      height={'320px'}
      youtubeConfig={config}
      onDuration={duration => this.setState({ duration })}/>
    );

    if (seeking){
      let newSecs = Math.floor(this.state.duration * videoPercentage / 100);
      // debugger
      this.player.seekTo(parseFloat(newSecs));

      console.log(newSecs);
    } else{
      if (this.player){
        this.player.player.play();
      }
    }
    return (
      player
    );
  }
}

export default AudioPlayer;
