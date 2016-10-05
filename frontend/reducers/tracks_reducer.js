import { RECEIVE_ALL_TRACKS, RECEIVE_TRACK } from '../actions/track_actions';
import { RECEIVE_ERRORS } from '../actions/session_actions';
import merge from 'lodash/merge';

const defaultState = {
  tracks: {},
  errors: []
};

const tracks = (state = defaultState, action) => {
  switch (action.type){
    case RECEIVE_ALL_TRACKS:
      return {tracks: action.tracks, error: []};
    case RECEIVE_TRACK:
      return {tracks: action.track, errors:[]};
    case RECEIVE_ERRORS:
      return {tracks: {}, errors:action.errors};
    default:
      return state;
  }
};

export default tracks;
