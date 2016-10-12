export const requestAllTracks = (success, error) => {
  $.ajax({
    method: "GET",
    url: "/api/tracks",
    success,
    error
  });
};

export const requestTrack = (track_id, success, error) => {
  $.ajax({
    method: "GET",
    url: `/api/tracks/${track_id}`,
    success,
    error
  });
};

export const createTrack = (track, success, error) => {
  $.ajax({
    method: "POST",
    data: track,
    processData: false,
    contentType: false,
    url: "/api/tracks",
    success,
    error
  });
};
