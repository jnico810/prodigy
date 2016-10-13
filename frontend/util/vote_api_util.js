export const createVote = (vote, success, error) => {
  $.ajax({
    method: "POST",
    data: vote,
    url: '/api/votes',
    success,
    error
  });
};


export const deleteVote = (id, success, error) => {
  $.ajax({
    method: "DELETE",
    data: id,
    url: `/api/votes/${id}`,
    success,
    error
  });
};

export const updateVote = (vote, success, error) => {
  $.ajax({
    method: "DELETE",
    data: vote,
    url: `/api/votes/${id}`,
    success,
    error
  });
};
