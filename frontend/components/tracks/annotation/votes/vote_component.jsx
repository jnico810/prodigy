import React from 'react';

class VoteComponent extends React.Component {

  constructor(props){
    super(props);
    this.handleUpdateVote = this.handleUpdateVote.bind(this);
    this.handleCreateVote = this.handleCreateVote.bind(this);
    this.state = {voted:false, value:0};
  }

  handleUpdateVote(value, e){
    e.preventDefault();
    const vote = {
      value: value,
      author_id: this.props.currentUser.id,
      annotation_id: this.props.annotation.id
    };
    this.props.updateVote({vote}, ()=>console.log('updated'));
  }

  handleCreateVote(value, e){
    e.preventDefault();
    const vote = {
      value: value,
      author_id: this.props.currentUser.id,
      annotation_id: this.props.annotation.id
    };
    this.props.createVote({vote}, ()=>console.log('created'));
  }

  componentDidMount(){
    this.props.annotation.votes.forEach((vote) => {
      if (vote.author_id === this.props.currentUser.id){

        this.setState({voted:true, value:vote.value});
        return;
      }
    });
  }

  render(){
    if (this.state.voted){
      let thumbup, thumbdown;
      if (this.state.value === 1){
        thumbup = "material-icons thumb-up-icon upvote";
        thumbdown = "material-icons thumb-down-icon";
      } else{
        thumbup = "material-icons thumb-up-icon";
        thumbdown = "material-icons thumb-down-icon downvote";
      }
      return(
        <div className="vote-section">
          <div className="upvote" onClick={this.handleUpdateVote.bind(null, 1)}>
            <i className= { thumbup } >thumb_up</i>
            <span>Upvote {this.annotation.score} </span>
          </div>
          <i className={ thumbdown } onClick={this.handleUpdateVote.bind(null, -1)}>thumb_down</i>
        </div>
      );
    } else{
      return(
        <div className="vote-section">
          <div className="upvote">
            <i className= "material-icons thumb-up-icon" onClick={this.handleCreateVote.bind(null, 1)}>thumb_up</i>
            <span>Upvote {this.annotation.score}</span>
          </div>

          <i className="material-icons thumb-down-icon" onClick={this.handleCreateVote.bind(null, -1)}>thumb_down</i>
        </div>);

    }
  }
}


export default VoteComponent;
