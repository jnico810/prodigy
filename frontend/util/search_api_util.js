export const searchTracks = (query, success, error) => {
  $.ajax({
    method: "POST",
    data: query,
    url: `/api/search/${query}`,
    success,
    error
  });
};
