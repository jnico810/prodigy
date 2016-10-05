export const requestAllTracks = (success, error) => {
  $.ajax({
    method: "GET",
    url: "/api/tracks",
    success,
    error
  });
};

export const requestTrack = (track, success, error) => {
  $.ajax({
    method: "GET",
    url: `/api/tracks/${track.id}`,
    success,
    error
  });
};

export const createTrack = (track, success, error) => {
  $.ajax({
    method: "POST",
    data: track,
    url: "/api/tracks",
    success,
    error
  });
};
