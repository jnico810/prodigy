import { connect } from 'react-redux';
import AnnotationShow from './annotation_show.jsx';
import { deleteAnnotation } from '../../../actions/annotation_actions.js';
const mapStateToProps = ({ session }) => {
    return {currentUser: session.currentUser };
};

const mapDispatchToProps = (dispatch) => ({
  deleteAnnotation: (annotation) => dispatch(deleteAnnotation())
});

export default connect(mapStateToProps)(AnnotationShow);
