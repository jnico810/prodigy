import { LOGIN, LOGOUT, SIGNUP, GET_USER, receiveErrors,
receiveCurrentUser } from '../actions/session_actions';
import { hashHistory } from 'react-router';
import { login, logout, signup, getUser } from '../util/session_api_util';

const sessionMiddleware = ({ getState, dispatch}) => next => action => {
  const success = user => dispatch(receiveCurrentUser(user));
  const error = error => dispatch(receiveErrors(error.responseJSON));
  switch (action.type){
    case LOGIN:
      login(action.user, success, error);
      return next(action);
    case LOGOUT:
      logout(() => {
        hashHistory.replace("/");
        next(action);
      });
      break;
    case GET_USER:
      getUser(success, error);
      return next(action);
    case SIGNUP:
      signup(action.user, success, error);
      return next(action);
    default:
      return next(action);
  }
};

export default sessionMiddleware;
