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
    this.props.createAnnotation({ annotation }, this.props.callback);

  }
  render(){

    const location = this.props.location - 400;

    let style =
    { position: 'absolute',
      borderLeft: '5px solid #99a7ee',
      paddingLeft: '15px',
      width: '100%',
      top: location,
      marginRight: '20px'
    };
    window.location2 = this.props.location;
    if (this.state.showAnnotationForm){
      const form = (
        <div style = { style } className="annotation-container" onSubmit={ this.handleAnnotationSubmit }>
          <form className="annotation-form">
            <textarea className = "annotation-form-text-area" placeholder="Start annotating here!" onChange= {this.handleUpdateForm}></textarea>
            <input type="submit" value= "Save"/>
          </form>
        </div>
      );
      return form;
    } else{
        const button = (
        <div style = { style } className="annotation-container">
          <button className="annotation-button" onClick={ this.handleAnnotation }>
            Start the Genius Annotation
          </button>
        </div>);
      return button;
    }
  }
}
export default AnnotationForm;
