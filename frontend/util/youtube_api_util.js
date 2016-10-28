export const requestYoutubeUrl = (querry, success, error) => {
  $.ajax({
    method: "GET",
    url: `https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=1&order=viewCount&q=${querry}&safeSearch=strict&key=AIzaSyAWHNIuU3OX8s_zphqzrFmJsYvstRkAuxM`,
    success,
    error
  });
};
