import React from 'react';
import { Link } from 'react-router';
import AnnotationFormContainer from './annotation/annotation_form_container';

class TrackShow extends React.Component{

  constructor(props){
    super(props);
    this.state = {annotating: false, annotationIndices:[], body:""};
    this.handleSelection = this.handleSelection.bind(this);
    this.generateLyricsAnnotations = this.generateLyricsAnnotations.bind(this);
  }


  handleSelection(e){
    e.preventDefault();
    const selection = window.getSelection().toString();
    if (selection.length > 0 && this.props.currentUser){
      console.log(selection);
      const startIdx = this.props.track.lyrics.indexOf(selection);
      const endIdx = startIdx + selection.length - 1;
      this.setState({annotating:true, annotationIndices:[startIdx, endIdx]});
    } else {
      this.setState({annotating:false, annotationIndices:[]});
    }
  }

  generateLyricsAnnotations() {

    let lyrics =(<span>{this.props.track.lyrics}</span>);

    let lyricsDiv = [];
    let startIdx = 0;
    // debugger
    let endIdx = 0;
    this.props.track.annotations.forEach((annotation) => {

      lyricsDiv.push(<span className="non-annotated-lyric">
        { this.props.track.lyrics.slice(startIdx, annotation.start_idx) }
      </span>);
      lyricsDiv.push(<span className="annotated-lyric">
        { this.props.track.lyrics.slice(annotation.start_idx, annotation.end_idx) }
      </span>);
      startIdx = annotation.end_idx;
    });

    lyricsDiv.push(<span className="non-annotated-lyric">
      { this.props.track.lyrics.slice(startIdx, this.props.track.lyrics.length) }
    </span>);
//
    // debugger

    return lyricsDiv;
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
                { this.generateLyricsAnnotations() }
              </div>
              <div className="track-show-description">
                <span>{this.props.track.description}</span>
                { this.state.annotating ?
                  <AnnotationFormContainer indices={this.state.annotationIndices}/> : <p></p>}
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
