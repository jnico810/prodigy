import { RECEIVE_ALL_TRACKS, RECEIVE_TRACK } from '../actions/track_actions';
import { RECEIVE_TRACK_ERRORS } from '../actions/track_actions';
import { RECEIVE_ANNOTATIONS } from '../actions/annotation_actions';
import merge from 'lodash/merge';

const defaultState = {
  tracks: {},
  errors: [],
  currTrack: {}
};

const tracks = (state = defaultState, action) => {
  switch (action.type){
    case RECEIVE_ALL_TRACKS:
      return merge({}, state, { tracks:action.tracks });
    case RECEIVE_TRACK:
      return merge({}, state, { currTrack:action.track });
    case RECEIVE_ANNOTATIONS:
      const newCurrentTrack = merge({}, state.currTrack, action.annotations);
      return merge({}, state, {currTrack: newCurrentTrack} );
    case RECEIVE_TRACK_ERRORS:
      return merge({}, state, { errors: action.errors});
    default:
      return state;
  }
};

export default tracks;
