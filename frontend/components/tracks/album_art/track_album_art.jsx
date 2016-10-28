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
    this.state = {playing: false, videoPercentage:0, seekVal:0, seeking:false, videoDuration:0, currentTime:'00:00', currentTimeFnc:()=>("00:00")};

  }

  handlePlayClick(e){
    if (this.props.track.youtube_url){
      if (this.state.playing === true){
        this.setState({playing: false});
      } else{
        clearInterval(this.timeInterval);
        this.setState({playing: true});
      }
    }
  }

  updateDuration(time){
    this.setState({videoDuration:time});
  }

  updateCurrentTime(fnc){
    this.setState({currentTimeFnc:fnc});
    this.timeInterval = setInterval(this.currentTimeInterval.bind(this, fnc), 1000);
  }

  currentTimeInterval(fnc){
    this.setState({currentTime:this.parseDuration(fnc()), seekVal: Math.floor(100 *fnc()/this.state.videoDuration)});
  }

  parseDuration(time){

    let minutes = Math.floor(time / 60);
    let seconds = Math.floor(time - (minutes * 60));

    if (minutes < 10) {
      minutes = "0" + minutes;
    }
    if (seconds < 10){
      seconds = "0" + seconds;
    }
   return minutes + ':' + seconds;
  }

  sliderChange(value){
    this.setState({seekVal:value, videoPercentage:value, currentTime:this.parseDuration(Math.floor(this.state.videoPercentage / 100 * this.state.videoDuration))});
  }

  sliderMouseDown(){
    this.setState({seeking:true});
  }

  sliderMouseUp(e){
    this.setState({seeking:false});
  }



  render(){
    let sliderKlass = '';
    if (this.props.hidden && this.props.hidden.length > 0){
      sliderKlass = 'anchored_play_bar';
    }

    let playButtonSrc = window.prodigyAssets.playButtonImg;


    const youtubeConfig = {
      playerVars: {
        autohide:0,
        autoplay:1,
        controls:0,
        modestbranding:1
      }
    };
    if (this.state.playing){
      playButtonSrc = window.prodigyAssets.pauseButtonImg;
      return(
        <div className = "track-show-header-album">
          <div className={`track-show-album-div`}>
            <div className = {this.props.hidden}>
              <AudioPlayer hidden={`audio-player`}
                url={this.props.track.youtube_url}
                playing={false}
                config={youtubeConfig}
                seeking={this.state.seeking}
                videoPercentage={this.state.videoPercentage}
                updateDuration={this.updateDuration.bind(this)}
                updateCurrentTime={this.updateCurrentTime.bind(this)}/>
            </div>
            <div className={`controlls ${sliderKlass}`}>
              <img onClick={this.handlePlayClick} src = { playButtonSrc} id='play-video-button'/>
              <ReactSlider
                onChange={this.sliderChange}
                onAfterChange={this.sliderMouseUp}
                onBeforeChange={this.sliderMouseDown}
                value={this.state.seekVal}
                withBars>
                <div className="handle"></div>
              </ReactSlider>
              <p className='video-time'>{this.state.currentTime}</p>
            </div>
          </div>
          <span className={`track-show-description ${this.props.hidden}`}>
            {this.props.track.description}
          </span>
        </div>
      );
    }else if (this.props.track.youtube_url){
      const currentTime = this.parseDuration(Math.floor(this.videoPercentage / 100 * this.state.videoDuration));
      return(
        <div className = "track-show-header-album">
          <div className = {`track-show-album-div`}>
            <img src = { this.props.track.album_art_url } className={`${this.props.hidden}`}/>
            <div className={`controlls ${sliderKlass}`}>
              <img onClick={this.handlePlayClick} src = { playButtonSrc} id='play-video-button'/>
              <ReactSlider
                onChange={this.sliderChange}
                onAfterChange={this.sliderMouseUp}
                onBeforeChange={this.sliderMouseDown}
                value={this.state.seekVal}
                withBars >
                <div className="handle"></div>
              </ReactSlider>
              <p className='video-time'>00:00</p>
            </div>
        </div>
          <span className={`track-show-description ${this.props.hidden}`}>
            {this.props.track.description}
          </span>
        </div>
      );
    } else {
      return(
        <div className = {`track-show-header-album ${this.props.hidden}`}>
          <div className = {`track-show-album-div`}>
            <img src = { this.props.track.album_art_url }/>
          </div>
          <span className={`track-show-description ${this.props.hidden}`}>
            {this.props.track.description}
          </span>
        </div>
      );
    }
  }
}

export default AlbumArt;
