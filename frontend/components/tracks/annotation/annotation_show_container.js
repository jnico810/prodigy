import { connect } from 'react-redux';
import AnnotationShow from './annotation_show.jsx';
import { deleteAnnotation } from '../../../actions/annotation_actions.js';
import { createComment } from '../../../actions/comment_actions.js';
const mapStateToProps = ({ session, tracks }) => {
    return {currentUser: session.currentUser, track: tracks.currTrack };
};

const mapDispatchToProps = (dispatch) => ({
  deleteAnnotation: (id, callback) => dispatch(deleteAnnotation(id, callback)),
  createComment: (comment, callback) => dispatch(createComment(comment, callback))
});

export default connect(mapStateToProps, mapDispatchToProps)(AnnotationShow);
