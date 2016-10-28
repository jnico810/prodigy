import { connect } from 'react-redux';
import AnnotationForm from './annotation_form.jsx';
import { createAnnotation } from '../../../actions/annotation_actions';

const mapStateToProps = ({ tracks }) => {
    return {track: tracks.currTrack};
};

const mapDispatchToProps = (dispatch) => ({
  createAnnotation: (annotation, callback) => dispatch(createAnnotation(annotation, callback))
});

export default connect(mapStateToProps, mapDispatchToProps)(AnnotationForm);
