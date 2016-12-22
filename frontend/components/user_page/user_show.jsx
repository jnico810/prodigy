import React from 'react';
import { Link } from 'react-router';


class UserShow extends React.Component{

  constructor(props){
    super(props);
    this.state = { imageFile:null, imageUrl:null };
    this.updateFile = this.updateFile.bind(this);
  }

  updateFile(e){
    const file =e.currentTarget.files[0];
    const reader = new FileReader();
    reader.onloadend = () => {
      this.setState({ imageUrl: reader.result, imageFile: file});
      var formData = new FormData();
      formData.append("user[user_picture]", this.state.imageFile);
      formData.append("user[id]", this.props.user.id);
      this.props.updateUserPicture(formData, this.callback.bind(this));
    };
    if (file) {
      reader.readAsDataURL(file);
    } else {
      this.setState({ imageUrl: null, imageFile: null });
    }
  }

  callback(){
    console.log("UPDATED USER PROFILE PICTURE");
  }

  render(){
    const header = (
      <header className="user-show-header">
        <img
          src= { this.props.user.user_picture }
          className="user-show-bg user-show-gradient"/>
      </header>);

    let annotationList = [];
    if (this.props.user.annotations.length > 0){
      this.props.user.annotations.forEach((annotation)=>{
        annotationList.push(
          <li className="user-annotation-item" key={annotation.id}>
              <Link to={"/tracks/" + annotation.trackId}>{ annotation.trackTitle }:</Link>
              <div className="user-annotation-item-div">
                <p>"{annotation.annotationText}" means {annotation.body}</p>
              </div>
          </li>
        );
      });
    }
    return(
      <div>
        { header }
        <main className="user-show-wrapper">
          <section className="user-show-content cf">
            <div className="user-show-left">
              <div className="user-show-header-content-wrapper">
                <div className="user-show-header-content">
                  <div className="user-show-img-wrapper">
                    <img
                      src= { this.props.user.user_picture }
                      className="user-show-header-pic"/>

                    <div className="user-file-wrapper">
                      <input type="file" name="file" id="file" className="inputfile" onChange={ this.updateFile}/>
                      <label htmlFor="file">Update profile picture</label>
                    </div>
                  </div>

                  <h1>@{this.props.user.username }</h1>
                  <h2>STATS</h2>
                  <div className="user-stats">
                    <p>Annotations: {this.props.user.annotations.length}</p>
                    <p>Tracks: {this.props.user.tracks.length}</p>
                    <p>IQ: {this.props.user.score}</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="user-show-right">
              <h1>Recent Annotations:</h1>
              <ul>
                {annotationList}
              </ul>

            </div>
          </section>
        </main>
      </div>
    );
  }

}

export default UserShow;

// <h1>{this.props.track.title}</h1>
// <h2>{this.props.track.artist}</h2>
// {album}
// <h4>Added by <strong>{this.props.track.author}</strong></h4>
