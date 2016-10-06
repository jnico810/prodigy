export const RECEIVE_ALL_TRACKS = 'RECEIVE_ALL_TRACKS';
export const RECEIVE_TRACK_ERRORS = 'RECEIVE_TRACK_ERRORS';
export const REQUEST_ALL_TRACKS = 'REQUEST_ALL_TRACKS';
export const RECEIVE_TRACK = 'RECEIVE_TRACK';
export const REQUEST_TRACK = 'REQUEST_TRACK';
export const CREATE_TRACK = 'CREATE_TRACK';

export const requestAllTracks = () => ({
  type: REQUEST_ALL_TRACKS
});

export const requestTrack = (track) => ({
  type: REQUEST_TRACK,
  track
});

export const receiveAllTracks = (tracks) => ({
  type: RECEIVE_ALL_TRACKS,
  tracks
});

export const receiveTrack = (track) => ({
  type: RECEIVE_TRACK,
  track
});

export const createTrack = (track) => ({
  type: CREATE_TRACK,
  track
});

export const receiveTrackErrors = (track) => ({
  type: RECEIVE_TRACK_ERRORS,
  track
});
