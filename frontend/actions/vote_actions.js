export const UPDATE_VOTE = 'UPDATE_VOTE';
export const CREATE_VOTE = 'CREATE_VOTE';

export const updateVote = (vote, callback) => ({
  type: UPDATE_VOTE,
  vote,
  callback
});

export const createVote = (vote, callback) => ({
  type: CREATE_VOTE,
  vote,
  callback
});
