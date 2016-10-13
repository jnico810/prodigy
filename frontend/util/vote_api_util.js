export const createVote = (vote, success, error) => {
  $.ajax({
    method: "POST",
    data: vote,
    url: '/api/votes',
    success,
    error
  });
};

export const updateVote = (vote, success, error) => {

  $.ajax({
    method: "PATCH",
    data: vote,
    url: `/api/votes/${vote.id}`,
    success,
    error
  });
};
