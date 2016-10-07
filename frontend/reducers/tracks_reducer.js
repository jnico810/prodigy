import { RECEIVE_ALL_TRACKS, RECEIVE_TRACK } from '../actions/track_actions';
import { RECEIVE_TRACK_ERRORS } from '../actions/track_actions';
import merge from 'lodash/merge';

const defaultState = {
  tracks: {},
  errors: [],
  currTrack: {}
};

const tracks = (state = defaultState, action) => {
  switch (action.type){
    case RECEIVE_ALL_TRACKS:
      return {tracks: action.tracks, errors: [], currTrack: merge({}, state.currTrack)};
    case RECEIVE_TRACK:
      return {tracks: merge({}, state.tracks), errors:[], currTrack: action.track};
    case RECEIVE_TRACK_ERRORS:
      return {tracks: merge({}, state.tracks), errors:action.errors, currTrack: merge({}, state.currTrack)};
    default:
      return state;
  }
};

export default tracks;
