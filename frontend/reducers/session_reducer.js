import { RECEIVE_ERRORS, RECEIVE_CURRENT_USER, LOGOUT } from '../actions/session_actions';
import merge from 'lodash/merge';

const defaultState = {
  currentUser: null,
  errors: []
};

const session = (state = defaultState, action) => {
  switch (action.type){
    case RECEIVE_CURRENT_USER:
      return { currentUser: action.currentUser, errors: []};
    case RECEIVE_ERRORS:
      return { currentUser: null, errors: action.errors};
    case LOGOUT:
      return { currentUser: null, errors: []};
    default:
      return state;
  }
};

export default session;
