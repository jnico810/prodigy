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
    this.state = {playing: false, videoPercentage:0, seeking:false, videoDuration:0, currentTime:'00:00', currentTimeFnc:()=>("00:00")};
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

  updateDuration(time){
    console.log('updatedur');
    this.setState({videoDuration:time});
  }

  updateCurrentTime(fnc){
    console.log('update');
    this.setState({currentTimeFnc:fnc});
  }

  parseDuration(time){
    let minutes = Math.floor(time / 60);
    let seconds = time - (minutes * 60);

    if (minutes < 10) {
      minutes = "0" + minutes;
    }
    if (seconds < 10){
      seconds = "0" + seconds;
    }
    // debugger
   return minutes + ':' + seconds;
  }

  sliderChange(value){
    console.log('change');
    // this.setState({videoPercentage:value});
    this.setState({videoPercentage:value, currentTime:this.parseDuration(Math.floor(this.state.videoPercentage / 100 * this.state.videoDuration))});
    // console.log(this.state.videoPercentage);
  }

  updateValue(){
    // if (this.playing){
    //   return this.state.currentTimeFnc() / this.videoDuration
    // } else{
    //
    // }
  }

  sliderMouseDown(){

    this.setState({seeking:true});
    console.log('down');
  }

  updateSliderPosition(){

  }

  sliderMouseUp(){
    this.setState({seeking:false});
    console.log('up');
  }

  render(){
    console.log('renderalbum');
    const youtubeConfig = {
      playerVars: {
        autohide:0,
        autoplay:1,
        controls:0,
        modestbranding:1
      }
    };
    if (this.state.playing){
      // const currentTime = this.parseDuration(Math.floor(this.state.videoPercentage / 100 * this.state.videoDuration));
      return(
        <div className = "track-show-header-album">
          <div className='track-show-album-div'>
            <AudioPlayer className= "audio-player"
              url={this.props.track.youtube_url}
              playing={false}
              config={youtubeConfig}
              seeking={this.state.seeking}
              videoPercentage={this.state.videoPercentage}
              updateDuration={this.updateDuration.bind(this)}
              updateCurrentTime={this.updateCurrentTime.bind(this)}/>
            <img onClick={this.handlePlayClick} src = { window.prodigyAssets.playButtonImg} id='play-video-button'/>
              <ReactSlider
                onChange={this.sliderChange}
                onAfterChange={this.sliderMouseUp}
                onBeforeChange={this.sliderMouseDown}
                withBars>
                <div className="handle"></div>
              </ReactSlider>
              <p className='video-time'>{this.state.currentTime}</p>
          </div>
          <span className="track-show-description">
            {this.props.track.description}
          </span>
        </div>
      );
    }else if (this.props.track.youtube_url){
      const currentTime = this.parseDuration(Math.floor(this.videoPercentage / 100 * this.state.videoDuration));
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
              <p className='video-time'>00:00</p>
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
