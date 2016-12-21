import { connect } from 'react-redux';
import TrackShow from './track_show';

const mapStateToProps = ({ tracks, session}) => {
  return {track: tracks.currTrack, errors: tracks.errors, currentUser: session.currentUser};
};

const mapDispatchToProps = (dispatch, ownProps) => ({
  receiveCurrentUser: (annotation, callback) => dispatch(receiveCurrentUser(annotation, callback))
});

export default connect(mapStateToProps)(TrackShow);
