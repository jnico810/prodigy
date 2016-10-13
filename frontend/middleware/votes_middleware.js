import { UPDATE_VOTE, CREATE_VOTE} from '../actions/vote_actions';
import { receiveAnnotations } from '../actions/annotation_actions';
import { receiveTrack  } from '../actions/track_actions';
import * as API from '../util/vote_api_util';

const annotationMiddleware = ({ getState, dispatch}) => next => action => {
  let success;
  const error = error => console.log(error);
  switch (action.type){
    case UPDATE_VOTE:
      success = (track) => {
        dispatch(receiveTrack(track));
        action.callback();
      };
      API.updateVote(action.vote, success, error);
      return next(action);
    case CREATE_VOTE:
      success = (track) => {
        dispatch(receiveTrack(track));
        action.callback();
      };
      API.createVote(action.vote, success, error);
      return next(action);
    default:
      return next(action);
  }
};

export default annotationMiddleware;
