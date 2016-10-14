import { connect } from 'react-redux';
import Header from './header';
import { logout, login } from '../../actions/session_actions';
import { requestSearch } from '../../actions/search_actions';

const mapStateToProps = ({ session, search }) => ({ currentUser: session.currentUser, search: search.results });

const mapDispatchToProps = dispatch => ({
  logout: () => dispatch(logout()),
  login: (user) => dispatch(login(user)),
  requestSearch: (query) => dispatch(requestSearch(query))
});

export default connect(mapStateToProps, mapDispatchToProps)(Header);
