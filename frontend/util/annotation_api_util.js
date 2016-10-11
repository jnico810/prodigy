export const createAnnotation = (annotation, success, error) => {
  $.ajax({
    method: "POST",
    data: annotation,
    url: `/api/tracks/${annotation.track_id}/annotations`,
    success,
    error
  });
};


export const deleteAnnotation = (id, success, error) => {
  $.ajax({
    method: "DELETE",
    data: id,
    url: `/api/annotations/${id}`,
    success,
    error
  });
};
