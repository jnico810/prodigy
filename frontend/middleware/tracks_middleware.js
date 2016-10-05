import { receiveErrors } from '../actions/session_actions';
import { REQUEST_ALL_TRACKS, REQUEST_TRACK, CREATE_TRACK,
receiveAllTracks, receiveTrack } from '../actions/track_actions';
import * as API from '../util/track_api_util';

const tracksMiddleware = ({ getState, dispatch}) => next => action => {
  let success;
  const error = error => dispatch(receiveErrors(error.responseJSON));
  switch (action.type){
    case REQUEST_ALL_TRACKS:
      success = (tracks) => dispatch(receiveAllTracks(tracks));
      API.requestAllTracks(success, error);
      return next(action);
    case REQUEST_TRACK:
      success = (track) => dispatch(receiveTrack(track));
      API.requestTrack(action.track, success, error);
      return next(action);
    case CREATE_TRACK:
      success = (track) => dispatch(receiveTrack(track));
      API.createTrack(action.track, success, error);
      return next(action);
    default:
      return next(action);
  }
};

export default tracksMiddleware;
