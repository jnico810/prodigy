import { connect } from 'react-redux';
import TrackForm from './track_form';
import { createTrack, requestYoutubeUrl } from '../../../actions/track_actions';

const mapStateToProps = ({ tracks }) => {
    return {errors: tracks.errors};
};

const mapDispatchToProps = (dispatch, ownProps) => ({
  createTrack: (track, callback) => dispatch(createTrack(track, callback)),
  requestYoutubeUrl: (querry, success, error) => dispatch(requestYoutubeUrl(querry, success, error))
});

export default connect(mapStateToProps, mapDispatchToProps)(TrackForm);
