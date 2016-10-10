import React from 'react';
class AnnotationShow extends React.Component {

  constructor(props){
    super(props);
  }
  render(){
    return(<div className="annotation-container">
      <p> this.props.annotation.body</p>
    </div>
  );
}

export default AnnotationShow;
