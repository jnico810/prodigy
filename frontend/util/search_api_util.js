export const searchTracks = (query, success, error) => {
  $.ajax({
    method: "GET",
    url: `/api/search/${query}`,
    success,
    error
  });
};
