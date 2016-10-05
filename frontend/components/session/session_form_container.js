import { connect } from 'react-redux';
import SessionForm from './session_form';
import { login, signup } from '../../actions/session_actions';

const mapStateToProps = ({ session }) => {
  const loggedIn = session.currentUser ? true : false;
  return {loggedIn: loggedIn, errors: session.errors};
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    formType: ownProps.location.pathname,
    processForm: (user) => {
      if (ownProps.location.pathname === '/login'){
        dispatch(login(user));
      }else if (ownProps.location.pathname === '/signup'){
        dispatch(signup(user));
      }
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SessionForm);
