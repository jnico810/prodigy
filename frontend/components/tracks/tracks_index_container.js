import { connect } from 'react-redux';
import TrackIndex from './track_index';

const mapStateToProps = ({ tracks }) => ({
  tracks
});

// const mapDispatchToProps = (dispatch, ownProps) => ({
//   requestAllTracks: () => dispatch(requestAllTracks())
// });

export default connect(mapStateToProps)(TrackIndex);
