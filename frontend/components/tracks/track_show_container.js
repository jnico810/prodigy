import { connect } from 'react-redux';
import TrackShow from './track_show';

const mapStateToProps = ({ tracks }) => {
  return {track: tracks.currTrack, errors: tracks.errors};
};

const mapDispatchToProps = (dispatch, ownProps) => ({
});

export default connect(mapStateToProps)(TrackShow);
