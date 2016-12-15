import { connect } from 'react-redux';
import UserShow from './user_show';

const mapStateToProps = ({ session }) => {
  return { user: session.currentUser };
};

export default connect(mapStateToProps)(UserShow);
