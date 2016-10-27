import React from 'react';
import AudioPlayer from './audio_player.jsx';
import ReactSlider from 'react-slider';

class AlbumArt extends React.Component {

  constructor(props){
    super(props);
    this.handlePlayClick = this.handlePlayClick.bind(this);
    this.sliderChange = this.sliderChange.bind(this);
    this.sliderMouseDown = this.sliderMouseDown.bind(this);
    this.sliderMouseUp = this.sliderMouseUp.bind(this);
    this.state = {playing: false, videoPercentage:0, seeking:false};
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

  sliderChange(value){
    this.setState({videoPercentage:value});
    // console.log(this.state.videoPercentage);
  }

  sliderMouseDown(){
    this.setState({seeking:true});
    console.log('down');
  }

  sliderMouseUp(){
    this.setState({seeking:false});
    console.log('up');
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
              config={youtubeConfig}
              seeking={this.state.seeking}
              videoPercentage={this.state.videoPercentage}/>
            <img onClick={this.handlePlayClick} src = { window.prodigyAssets.playButtonImg} id='play-video-button'/>
              <ReactSlider
                onChange={this.sliderChange}
                onAfterChange={this.sliderMouseUp}
                onBeforeChange={this.sliderMouseDown}
                withBars >
                <div className="handle"></div>
              </ReactSlider>
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
              <ReactSlider
                onChange={this.sliderChange}
                onAfterChange={this.sliderMouseUp}
                onBeforeChange={this.sliderMouseDown}
                withBars >
                <div className="handle"></div>
              </ReactSlider>
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
