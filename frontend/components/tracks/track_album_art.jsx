import React from 'react';
import AudioPlayer from './audio_player.jsx';

class AlbumArt extends React.Component {

  constructor(props){
    super(props);
    this.handlePlayClick = this.handlePlayClick.bind(this);
    this.state = {playing: false};
  }


  handlePlayClick(e){
    console.log('clicked');

    if (this.props.track.youtube_url){
      if (this.state.playing === true){
        this.setState({playing: false});
      } else{
        this.setState({playing: true});
      }
    }
  }

  render(){
    const youtubeConfig = {
      playerVars: {
        autohide:0,
        autoplay:1,
        controls:0,
        modestbranding:1
      }
    };
    if (this.state.playing){
      return(
        <div className = "track-show-header-album">
          <div className='track-show-album-div'>
            <AudioPlayer className= "audio-player"
              url={this.props.track.youtube_url}
              playing={false}
              config={youtubeConfig}/>
            <img onClick={this.handlePlayClick} src = { window.prodigyAssets.playButtonImg} id='play-video-button'/>
          </div>
          <span className="track-show-description">
            {this.props.track.description}
          </span>
        </div>
      );
    }else if (this.props.track.youtube_url){
      return(
        <div className = "track-show-header-album">
          <div className = 'track-show-album-div'>
            <img src = { this.props.track.album_art_url }/>
            <img onClick={this.handlePlayClick} src = { window.prodigyAssets.playButtonImg} id='play-video-button'/>
          </div>
          <span className="track-show-description">
            {this.props.track.description}
          </span>
        </div>
      );
    } else {
      return(
        <div className = "track-show-header-album">
          <div className = 'track-show-album-div'>
            <img src = { this.props.track.album_art_url }/>
          </div>
          <span className="track-show-description">
            {this.props.track.description}
          </span>
        </div>
      );

    }
  }
}

export default AlbumArt;
