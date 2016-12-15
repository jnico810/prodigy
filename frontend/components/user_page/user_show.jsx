import React from 'react';



class UserShow extends React.Component{

  constructor(props){
    super(props);
  }

  render(){

    console.log(this.props.user);
    const header = (
      <header className="user-show-header">
        <img
          src= { "https://static.pexels.com/photos/27411/pexels-photo-27411.jpg" }
          className="user-show-bg user-show-gradient"/>
      </header>);


    return(
      <div>
        { header }
        <main className="user-show-wrapper">
          <section className="user-show-content cf">
            <div className="user-show-left">
              <div className="user-show-header-content">
                <img
                  src= { "https://static.pexels.com/photos/27411/pexels-photo-27411.jpg" }
                  className="user-show-header-pic"/>
              </div>
              <div className="user-show-left-column">
                <h1>
                  @{this.props.user.username }
                </h1>
              </div>
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
