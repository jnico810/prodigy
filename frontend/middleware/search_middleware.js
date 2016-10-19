import { receiveResults, REQUEST_SEARCH } from '../actions/search_actions';
import * as API from '../util/search_api_util';

const searchMiddleware = ({ getState, dispatch}) => next => action => {
  let success;
  const error = error =>{};
  switch (action.type){
    case REQUEST_SEARCH:
      success = (results) => {
        dispatch(receiveResults(results));
      };
      API.searchTracks(action.query, success, error);
      return next(action);
    default:
      return next(action);
  }
};

export default searchMiddleware;
