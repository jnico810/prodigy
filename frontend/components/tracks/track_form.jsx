import React from 'react';
import { Link, hashHistory } from 'react-router';

class TrackForm extends React.Component {

  constructor(props){
    super(props);
    this.state = {artist: '', title: '', lyrics: '', description: '', album: ''};
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleUpdate = this.handleUpdate.bind(this);
    window.tracks= this;
  }

  handleSubmit(e){
    e.preventDefault();
    const track = this.state;
    this.props.createTrack({ track }, this.pushToHome);
  }

  pushToHome(){
    hashHistory.push("/");
  }

  handleUpdate(prop) {
    return (e) => {
      this.setState({[prop]: e.currentTarget.value});
    };
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
          <form className="track-form" onSubmit={ this.handleSubmit }>
            { errors }
            <label>BY*</label>
            <input type="text" onChange={ this.handleUpdate("artist") }/>
            <label>TITLE*</label>
            <input type="text" onChange={ this.handleUpdate("title") }/>
            <label>LYRICS*</label>
            <textarea onChange={ this.handleUpdate("lyrics") }></textarea>
            <label>DESCRIPTION*</label>
            <input type="text" onChange={ this.handleUpdate("description") }/>
            <label>ALBUM</label>
            <input type="text" onChange={ this.handleUpdate("album") }/>
            <input type='submit' />
          </form>
        </div>
      </div>
    );
  }

}

export default TrackForm;
