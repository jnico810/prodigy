import { REQUEST_ALL_TRACKS, REQUEST_TRACK, CREATE_TRACK, REQUEST_YOUTUBE_URL,
  receiveAllTracks, receiveTrack, receiveTrackErrors, requestYoutubeUrl } from '../actions/track_actions';
import * as API from '../util/track_api_util';
import * as YOUTUBE_API from '../util/youtube_api_util';

const tracksMiddleware = ({ getState, dispatch}) => next => action => {
  let success;
  const error = error => dispatch(receiveTrackErrors(error.responseJSON));
  switch (action.type){
    case REQUEST_ALL_TRACKS:
      success = (tracks) => dispatch(receiveAllTracks(tracks));
      API.requestAllTracks(success, error);
      return next(action);
    case REQUEST_TRACK:
      success = (track) => dispatch(receiveTrack(track));
      API.requestTrack(action.track_id, success, error);
      return next(action);
    case CREATE_TRACK:
      success = (track) => {
        dispatch(receiveTrack(track));
        action.callback();
      };
      API.createTrack(action.track, success, error);
      return next(action);
    case REQUEST_YOUTUBE_URL:
      success = (result) => {
        action.success(result);
      };

      const youtube_error = error => action.error(error);
      YOUTUBE_API.requestYoutubeUrl(action.querry, success, youtube_error);
      return next(action);
    default:
      return next(action);
  }
};

export default tracksMiddleware;
