import React from 'react';
import { Link } from 'react-router';

class TrackShow extends React.Component{

  constructor(props){
    super(props);
  }
  render(){

    if (this.props.track.title){
      return(
        <section>
          <header className="track-show-header">
            <img src='/assets/bon_iver.jpg' className="track-show-bg track-show-gradient"></img>
            <div className="track-show-header-content">
              <h1>{this.props.track.title}</h1>
              <h2>{this.props.track.artist}</h2>
            </div>
            <img src='/assets/bon_iver.jpg' className="track-show-header-album"></img>
          </header>
          <main className="track-show-wrapper">
            <section className="track-show-content">
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
            </section>

          </main>
        </section>
    );
    }else{
      return(<h1></h1>);
    }

  }
}


export default TrackShow;
