export const DELETE_ANNOTATION = 'DELETE_ANNOTATION';
export const CREATE_ANNOTATION = 'CREATE_ANNOTATION';

export const createAnnotation = (annotation, callback) => ({
  type: CREATE_ANNOTATION,
  annotation,
  callback
});

export const deleteAnnotation = (errors) => ({
  type: RECEIVE_TRACK_ERRORS,
  errors
});
