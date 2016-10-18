import { CREATE_COMMENT } from '../actions/comment_actions';
import { receiveTrack } from '../actions/track_actions';
import * as API from '../util/comment_api_util';

const commentMiddleware = ({ getState, dispatch}) => next => action => {
  let success;
  const error = error => {};
  switch (action.type){
    case CREATE_COMMENT:
      success = (track) => {
        dispatch(receiveTrack(track));
        action.callback();
      };
      API.createComment(action.comment, success, error);
      return next(action);
    default:
      return next(action);
  }
};

export default commentMiddleware;
