export const DELETE_ANNOTATION = 'DELETE_ANNOTATION';
export const CREATE_ANNOTATION = 'CREATE_ANNOTATION';

export const createAnnotation = (annotation, callback) => ({
  type: CREATE_ANNOTATION,
  annotation,
  callback
});

export const deleteAnnotation = (id, errors) => ({
  type: DELETE_ANNOTATION,
  id,
  errors
});
