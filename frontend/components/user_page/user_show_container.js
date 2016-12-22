import { connect } from 'react-redux';
import { updateUserPicture } from '../../actions/session_actions';
import UserShow from './user_show';

const mapStateToProps = ({ session }) => {
  return { user: session.currentUser };
};

const mapDispatchToProps = (dispatch, ownProps) => ({
  updateUserPicture: (image, callback) => dispatch(updateUserPicture(image, callback)),
});



export default connect(mapStateToProps, mapDispatchToProps)(UserShow);
