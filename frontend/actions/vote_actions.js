export const CREATE_VOTE = 'CREATE_VOTE';
export const DELETE_VOTE = 'DELETE_VOTE';
export const UPDATE_VOTE = 'UPDATE_VOTE';

const createVote = (vote, callback) => ({
  type: CREATE_VOTE,
  vote,
  callback
});

const deleteVote = (id, callback) => ({
  type: DELETE_VOTE,
  id,
  callback
});

const updateVote = (vote, callback) => ({
  type: DELETE_VOTE,
  vote,
  callback
});
