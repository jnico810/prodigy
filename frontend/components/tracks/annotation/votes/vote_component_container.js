import { connect } from 'react-redux';
import VoteComponent from './vote_component.jsx';
import { updateVote, createVote } from '../../../../actions/vote_actions.js';

const mapDispatchToProps = (dispatch) => ({
  updateVote: (vote, callback) => dispatch(updateVote(vote, callback)),
  createVote: (vote, callback) => dispatch(createVote(vote, callback))
});

export default connect(null, mapDispatchToProps)(VoteComponent);
