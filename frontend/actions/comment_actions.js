export const DELETE_COMMENT = 'DELETE_COMMENT';
export const CREATE_COMMENT = 'CREATE_COMMENT';

export const createComment = (comment, callback) => ({
  type: CREATE_COMMENT,
  comment,
  callback
});

export const deleteComment = (id, errors) => ({
  type: DELETE_COMMENT,
  id,
  errors
});
