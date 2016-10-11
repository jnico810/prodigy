import { connect } from 'react-redux';
import AnnotationShow from './annotation_show.jsx';

const mapStateToProps = ({ session }) => {
    return {currentUser: session.currentUser };
};

const mapDispatchToProps = (dispatch) => ({
});

export default connect(mapStateToProps)(AnnotationShow);
