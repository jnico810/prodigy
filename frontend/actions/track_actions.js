export const RECEIVE_ALL_TRACKS = 'RECEIVE_ALL_TRACKS';
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

export const creatTrack = (track) => ({
  type: CREATE_TRACK,
  track
});
