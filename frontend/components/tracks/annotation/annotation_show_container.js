import { connect } from 'react-redux';
import AnnotationShow from './annotation_show.jsx';

const mapStateToProps = ({ tracks }) => {
    return {track: tracks.currTrack};
};

const mapDispatchToProps = (dispatch) => ({
});

export default connect(mapStateToProps, mapDispatchToProps)(AnnotationShow);
