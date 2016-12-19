import React from 'react';
import { Link } from 'react-router';


class UserShow extends React.Component{

  constructor(props){
    super(props);
  }

  render(){
    const header = (
      <header className="user-show-header">
        <img
          src= { "https://static.pexels.com/photos/27411/pexels-photo-27411.jpg" }
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
                  <img
                    src= { "https://static.pexels.com/photos/27411/pexels-photo-27411.jpg" }
                    className="user-show-header-pic"/>
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
