export const DELETE_ANNOTATION = 'DELETE_ANNOTATION';
export const CREATE_ANNOTATION = 'CREATE_ANNOTATION';
export const RECEIVE_ANNOTATIONS = 'RECEIEVE_ANNOTATION';

export const createAnnotation = (annotation, callback) => ({
  type: CREATE_ANNOTATION,
  annotation,
  callback
});

export const deleteAnnotation = (id, callback) => ({
  type: DELETE_ANNOTATION,
  id,
  callback
});

export const receiveAnnotations = (annotations) => ({
  type: RECEIVE_ANNOTATIONS,
  annotations
});
