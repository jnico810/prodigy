import React from 'react';
class AnnotationForm extends React.Component {

  constructor(props){
    super(props);
    this.handleAnnotation = this.handleAnnotation.bind(this);
    this.handleUpdateForm = this.handleUpdateForm.bind(this);
    this.handleAnnotationSubmit = this.handleAnnotationSubmit.bind(this);
    this.state = {showAnnotationForm:false, body:""};
  }

  handleAnnotation(e) {
    this.setState({showAnnotationForm: true});
  }

  handleUpdateForm(e) {
    this.setState({body:e.currentTarget.value});
  }

  handleAnnotationSubmit(e){
    e.preventDefault();

    const annotation = {
      start_idx:this.props.indices[0],
      end_idx:this.props.indices[1],
      track_id:this.props.track.id,
      body: this.state.body
    };
    this.props.createAnnotation({ annotation }, ()=>(console.log('created!')));

  }
  render(){

    if (this.state.showAnnotationForm){
      return (
        <div className="annotation-container" onSubmit={ this.handleAnnotationSubmit }>
          <form className="annotation-form">
            <textarea placeholder="Start annotating here!" onChange= {this.handleUpdateForm}></textarea>
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
