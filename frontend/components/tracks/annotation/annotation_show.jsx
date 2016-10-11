import React from 'react';
class AnnotationShow extends React.Component {

  constructor(props){
    super(props);
  }
  render(){
    return(
    <div className="annotation-show-container">
      <h3> Prodigy Annotation by {this.props.annotation.author}</h3>
      <p> {this.props.annotation.body}</p>
    </div>
  );
  }
}


export default AnnotationShow;
