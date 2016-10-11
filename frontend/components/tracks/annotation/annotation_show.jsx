import React from 'react';
class AnnotationShow extends React.Component {

  constructor(props){
    super(props);
  }
  render(){

    const location = this.props.location - 400;

    let style =
    { position: 'absolute',
      borderLeft: '5px solid #99a7ee',
      paddingLeft: '15px',
      width: '100%',
      top: location,
      marginRight: '20px',
      fontSize: '16px'
    };
    let deleteButton;

    if (this.props.annotation.author_id === this.props.currentUser.id){
      deleteButton = <button className="annoation-delete-button">Delete</button>;
    }
    return(
    <div style= { style } className="annotation-show-container">
      <h3> Prodigy Annotation by {this.props.annotation.author}</h3>
      <p> {this.props.annotation.body}</p>
      { deleteButton }
    </div>
  );
  }
}


export default AnnotationShow;
