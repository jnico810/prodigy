import React from 'react';

class AnnotationContainer extends React.Component {

  constructor(props){
    super(props);
    this.handleAnnotation = this.handleAnnotation.bind(this);
    this.state = {showAnnotationForm:false};
  }

  handleAnnotation(e) {
    this.setState({showAnnotationForm: true});
  }
  render(){

    if (this.state.showAnnotationForm){
      return (
        <div className="annotation-container">
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

export default AnnotationContainer;
