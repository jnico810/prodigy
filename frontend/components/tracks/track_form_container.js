import { connect } from 'react-redux';
import TrackForm from './track_form';
import { createTrack } from '../../actions/track_actions';

const mapStateToProps = ({ tracks }) => {
    return {errors: tracks.errors};
};

const mapDispatchToProps = (dispatch, ownProps) => ({
  createTrack: (track, callback) => dispatch(createTrack(track, callback))
});

export default connect(mapStateToProps, mapDispatchToProps)(TrackForm);
