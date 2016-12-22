export const signup = (user, success, error) => {
  $.ajax({
    method: "POST",
    data: user,
    url: "/api/users",
    success,
    error
  });
};

export const login = (user, success, error) => {
  $.ajax({
    method: "POST",
    data: user,
    url: "/api/session",
    success,
    error
  });
};

export const logout = (success, error) => {
  $.ajax({
    method: "DELETE",
    url: "/api/session",
    success,
    error
  });
};


export const getUser = (success, error) => {
  $.ajax({
    method: "GET",
    url: "/api/session",
    success,
    error
  });
};

export const updateUserPicture = (user, success, error) => {
  $.ajax({
    method: "PATCH",
    url: `/api/users/${user.get("user[id]")}`,
    data: user,
    processData: false,
    contentType: false,
    success,
    error
  });
};
