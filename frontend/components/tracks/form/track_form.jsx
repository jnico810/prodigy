import React from 'react';
import { Link, hashHistory } from 'react-router';

class TrackForm extends React.Component {

  constructor(props){
    super(props);
    this.state = {artist: '', title: '', lyrics: '', description: '', album: '', imageFile:null, imageUrl:null, youtube_url:''};
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleUpdate = this.handleUpdate.bind(this);
    this.updateFile = this.updateFile.bind(this);
    this.youtubeError = false;
  }

  handleSubmit(e){
    if (e){
      e.preventDefault();
    }
    const track = this.state;
    if (!this.youtubeError && this.state.youtube_url === ''){
      this.props.requestYoutubeUrl(this.createQuerry(),this.receiveYoutubeUrl.bind(this), this.receiveErrorsYoutubeUrl.bind(this));
    } else {
      var formData = new FormData();
      formData.append("track[artist]", this.state.artist);
      formData.append("track[title]", this.state.title);
      formData.append("track[lyrics]", this.state.lyrics);
      formData.append("track[description]", this.state.description);
      formData.append("track[album]", this.state.album);
      formData.append("track[youtube_url]", this.state.youtube_url);
      if (this.state.imageFile){
        formData.append("track[album_art]", this.state.imageFile);
      }
      this.props.createTrack(formData, this.pushToHome);
    }
  }

  receiveYoutubeUrl(result){
    if (result.items && result.items[0]){
      this.setState({youtube_url:`https://www.youtube.com/watch?v=${result.items[0].id.videoId}`});
      this.handleSubmit();
    } else{
      this.youtubeError = true;
      this.handleSubmit();
    }
  }

  receiveErrorsYoutubeUrl(error){
    this.youtubeError = true;
    console.log(error);
    this.handleSubmit();
  }

  createQuerry(){
    const artistArr = this.state.artist.split((' '));
    const titleArr = this.state.title.split(' ');
    const querry =  `${artistArr.join('')}+${titleArr.join('')}+-COVER+-Cover+-cover`;
    debugger;
    return querry;
  }

  pushToHome(){
    hashHistory.replace("/");
  }

  handleUpdate(prop) {
    return (e) => {
      this.setState({[prop]: e.currentTarget.value});
    };
  }

  updateFile(e){
    const file =e.currentTarget.files[0];
    const reader = new FileReader();
    reader.onloadend = () => {
      this.setState({ imageUrl: reader.result, imageFile: file});
    };

    if (file) {
      reader.readAsDataURL(file);
    } else {
      this.setState({ imageUrl: null, imageFile: null });
    }
  }

  render(){
    let errors;
    if (this.props.errors.length > 0){
      const errorLi = this.props.errors.map((e) => {
        return <li> { e }.</li>;
      });
      errors = <ul className= "track-form-errors"> { errorLi } </ul>;
    }
    return(
      <div className= "track-form-content-wrapper" >
        <div className= "track-form-content" >
          <h1>Add Track</h1>
          <small>*required</small>
          <h3>Primary Info</h3>
          <form className="track-form cf" onSubmit={ this.handleSubmit }>
            { errors }
            <label>BY*</label>
            <input type="text" onChange={ this.handleUpdate("artist") }/>
            <div className = "album-art-wrapper">
              <label className='album-art-label'>ALBUM ARTWORK</label>
              <img className="album-art-preview" src={this.state.imageUrl}/>
              <div className="album-art-file-wrapper">
                <input type="file" onChange={ this.updateFile}/>
              </div>
            </div>
            <label>TITLE*</label>
            <input type="text" onChange={ this.handleUpdate("title") }/>
            <label>LYRICS*</label>
            <textarea onChange={ this.handleUpdate("lyrics") }></textarea>
            <label>DESCRIPTION*</label>
            <input type="text" onChange={ this.handleUpdate("description") }/>
            <label>ALBUM TITLE</label>
            <input type="text" onChange={ this.handleUpdate("album") }/>
            <label>YOUTUBE URL (If you do not include url, the most relevant youtube link will be used!)</label>
            <input type="text" onChange={ this.handleUpdate("youtube_url") }/>
            <input type='submit' />
          </form>
        </div>
      </div>
    );
  }

}

export default TrackForm;
