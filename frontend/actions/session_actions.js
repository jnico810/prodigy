export const LOGIN = 'LOGIN';
export const LOGOUT = 'LOGOUT';
export const SIGNUP = 'SIGNUP';
export const GET_USER = 'GET_USER';
export const RECEIVE_CURRENT_USER = 'RECEIVE_CURRENT_USER';
export const RECEIVE_ERRORS = 'RECEIVE_ERRORS';
export const UPDATE_USER_PICTURE = 'UPDATE_USER_PICTURE';

export const signup = (user) => ({
  type: SIGNUP,
  user
});

export const login = (user) => ({
  type: LOGIN,
  user
});

export const logout = () => ({
  type: LOGOUT
});

export const getUser = () => ({
  type: GET_USER
});

export const updateUserPicture = (image) => ({
  type: UPDATE_USER_PICTURE,
  image: image
});

export const receiveCurrentUser = (currentUser) => ({
  type: RECEIVE_CURRENT_USER,
  currentUser
});

export const receiveErrors = (errors) => ({
  type: RECEIVE_ERRORS,
  errors
});
