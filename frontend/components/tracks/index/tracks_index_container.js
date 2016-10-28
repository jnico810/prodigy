import { connect } from 'react-redux';
import TrackIndex from './track_index';

const mapStateToProps = ({ tracks }) => ({
  tracks
});
export default connect(mapStateToProps)(TrackIndex);
