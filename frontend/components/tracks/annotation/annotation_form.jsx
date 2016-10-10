import React from 'react';
class AnnotationForm extends React.Component {

  constructor(props){
    super(props);
    this.handleAnnotation = this.handleAnnotation.bind(this);
    this.handleAnnotationSubmit = this.handleAnnotationSubmit.bind(this);
    this.state = {showAnnotationForm:false};
  }

  handleAnnotation(e) {
    this.setState({showAnnotationForm: true});
  }

  handleAnnotationSubmit(e){
    e.preventDefault();

    const annotation = {
      startIdx:this.props.indices[0],
      endIdx:this.props.indices[1],
      trackId:this.props.track.id
    };
    this.props.createAnnotation(annotation, ()=>(console.log('created!')));

  }
  render(){

    if (this.state.showAnnotationForm){
      return (
        <div className="annotation-container" onSubmit={ this.handleAnnotationSubmit }>
          <form className="annotation-form">
            <textarea placeholder="Start annotating here!"></textarea>
            <input type="submit" value= "Save"/>
          </form>
        </div>
      );
    } else{
      return (
        <div className="annotation-container">
          <button className="annotation-button" onClick= { this.handleAnnotation }>
            Start the Genius Annotation
          </button>
        </div>
      );
    }

  }

}

export default AnnotationForm;
