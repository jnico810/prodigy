import React from 'react';
import { Link } from 'react-router';

class TrackShow extends React.Component{

  constructor(props){
    super(props);
    this.state = {annotating: false, annotationIndices:[]};
    this.handleSelection = this.handleSelection.bind(this);
  }


  handleSelection(e){
    e.preventDefault();
    const selection = window.getSelection().toString();
    if (selection.length > 0){
      console.log(selection);
      const startIdx = this.props.track.lyrics.indexOf(selection);
      const endIdx = startIdx + selection.length - 1;
      this.setState({annotating:true, annotationIndices:[[startIdx, endIdx]]});
    }
  }
  render(){
    if (this.props.track.title){
      const header = (<header className="track-show-header">
        <img src= { window.prodigyAssets.defaultImage } className="track-show-bg track-show-gradient"></img>
        <div className="track-show-header-content">
          <h1>{this.props.track.title}</h1>
          <h2>{this.props.track.artist}</h2>
        </div>
        <img src={ window.prodigyAssets.defaultImage } className="track-show-header-album"></img>
      </header>);
      return(
        <section>
          { header }
          <main className="track-show-wrapper">
            <section className="track-show-content cf">
              <div className="track-show-lyrics" onMouseUp={this.handleSelection}>
                <span >{this.props.track.lyrics}</span>
              </div>
              <div className="track-show-description">
                <span>{this.props.track.description}</span>
              </div>
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



// <form id= "annotation-form" className="annotation-form-hidden">
//   <label>Annotation</label>
//   <textarea></textarea>
//   <input type="submit"></input>
// </form>
