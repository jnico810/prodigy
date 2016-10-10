export const createAnnotation = (annotation, success, error) => {
  debugger
  $.ajax({
    method: "POST",
    data: annotation,
    url: `/api/tracks/${annotation.trackId}/annotations`,
    success,
    error
  });
};
