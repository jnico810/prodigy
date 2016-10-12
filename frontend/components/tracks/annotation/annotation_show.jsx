import React from 'react';
class AnnotationShow extends React.Component {

  constructor(props){
    super(props);
    this.handleCommentForm = this.handleCommentForm.bind(this);
    this.updateComment = this.updateComment.bind(this);
    this.state = {body:''};
    this.updateForm = this.updateForm.bind(this);
  }

  handleCommentForm(e){
    e.preventDefault();
    const comment = {
      body: this.state.body,
      annotation_id: this.props.annotation.id,
      author_id: this.props.currentUser.id
    };
    this.props.createComment({ comment }, this.updateForm);
  }

  updateForm() {
    this.setState({body:''});
  }

  updateComment(e){
    e.preventDefault();
    this.setState({body:e.currentTarget.value});
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
    if (this.props.currentUser && this.props.annotation.author_id === this.props.currentUser.id){
      deleteButton = <button
        className="annotation-delete-button"
        onClick={this.props.deleteAnnotation.bind(null, this.props.annotation.id)}>Delete</button>;
    }

    let commentList = [];

    this.props.annotation.comments.forEach((comment)=> {
      commentList.push(
        <li>
          <h3>{comment.author}</h3>
          <p>{comment.body}</p>
        </li>);

    });

    let form;

    if (this.props.currentUser){
      form = (<form className="comment-form" onSubmit={this.handleCommentForm}>
        <textarea placeholder="Suggest an improvement" onChange={this.updateComment}></textarea>
          <button className="comment-button" onClick= { this.handleCommentForm }>
            Submit
          </button>
      </form>);
    }
    return(
    <div style= { style } className="annotation-show-container">
      <h3> Prodigy Annotation by {this.props.annotation.author}</h3>
      <p> {this.props.annotation.body}</p>
      { deleteButton }
      { form }
      <ul>
        { commentList }
      </ul>
    </div>
  );
  }
}


export default AnnotationShow;
