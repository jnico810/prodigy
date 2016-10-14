import { RECEIVE_RESULTS } from '../actions/search_actions';
import merge from 'lodash/merge';

const defaultState = {
  results:[]
};

const session = (state = defaultState, action) => {
  switch (action.type){
    case RECEIVE_RESULTS:
      return {results:action.results};
    default:
      return state;
  }
};

export default session;
