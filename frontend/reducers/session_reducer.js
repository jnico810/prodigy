import { RECEIVE_ERRORS, RECEIVE_CURRENT_USER, LOGOUT, UPDATE_SCORE } from '../actions/session_actions';
import merge from 'lodash/merge';

const defaultState = {
  currentUser: null,
  errors: []
};

const session = (state = defaultState, action) => {
  switch (action.type){
    case RECEIVE_CURRENT_USER:
      return merge({}, state, {currentUser: action.currentUser});
    case RECEIVE_ERRORS:
      return merge({}, state, {errors: action.errors});
    case UPDATE_SCORE:
      return merge({}, state, {currentUser: {score: action.score}});
    case LOGOUT:
      return defaultState;
    default:
      return state;
  }
};

export default session;
