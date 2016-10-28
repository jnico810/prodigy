export const requestYoutubeUrl = (querry, success, error) => {
  $.ajax({
    method: "GET",
    // url: `https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=1&order=relevance&q=${querry}&safeSearch=strict&type=video&fields=items%2Fid%2FvideoId&key=AIzaSyAWHNIuU3OX8s_zphqzrFmJsYvstRkAuxM`,
    url: `https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=1&order=relevance&videoEmbeddable=true&q=${querry}+Lyrics+-Remix+-remix+-REMIX+-live+-LIVE+-Live&safeSearch=moderate&type=video&key=AIzaSyAWHNIuU3OX8s_zphqzrFmJsYvstRkAuxM`,
    success,
    error
  });
};
