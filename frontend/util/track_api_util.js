export const receiveAllTracks = (user, success, error) => {
  $.ajax({
    method: "POST",
    data: user,
    url: "/api/users",
    success,
    error
  });
};

export const receiveOneTrack = (success, error) => {
  $.ajax({
    method: "DELETE",
    url: "/api/session",
    success,
    error
  });

export const createTrack = (user, success, error) => {
  $.ajax({
    method: "POST",
    data: user,
    url: "/api/session",
    success,
    error
  });
};


};
