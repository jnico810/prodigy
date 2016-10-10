export const createAnnotation = (annotation, success, error) => {
  $.ajax({
    method: "POST",
    data: annotation,
    url: `/api/tracks/${annotation.track_id}/annotations`,
    success,
    error
  });
};
