import { connect } from 'react-redux';
import Header from './header';
import { logout, login } from '../../actions/session_actions';

const mapStateToProps = ({ session }) => ({ currentUser: session.currentUser });

const mapDispatchToProps = dispatch => ({
  logout: () => dispatch(logout()),
  login: (user) => dispatch(login(user))
});

export default connect(mapStateToProps, mapDispatchToProps)(Header);
