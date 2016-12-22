import { connect } from 'react-redux';
import AnnotationForm from './annotation_form.jsx';
import { createAnnotation } from '../../../actions/annotation_actions';
import { getUser } from '../../../actions/session_actions';

const mapStateToProps = ({ tracks }) => {
    return {track: tracks.currTrack};
};

const mapDispatchToProps = (dispatch) => ({
  createAnnotation: (annotation, callback) => dispatch(createAnnotation(annotation, callback)),
  getUser: () => dispatch(getUser())
});

export default connect(mapStateToProps, mapDispatchToProps)(AnnotationForm);
