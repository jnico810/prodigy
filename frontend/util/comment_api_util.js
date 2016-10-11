export const createComment = (comment, success, error) => {
  $.ajax({
    method: "POST",
    data: comment,
    url: `/api/comments/`,
    success,
    error
  });
};


export const destroyComment = (id, success, error) => {
  $.ajax({
    method: "DELETE",
    data: comment,
    url: `/api/comments/${id}`,
    success,
    error
  });
};
