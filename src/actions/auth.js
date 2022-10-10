export const CHANGE_LOGIN_FIELD = 'CHANGE_LOGIN_FIELD';
export const LOG_IN = 'LOG_IN';
export const SAVE_USER_DATA = 'SAVE_USER_DATA';
export const CHECK_IS_LOGGED = 'CHECK_IS_LOGGED';
export const SAVE_LOGIN = 'SAVE_LOGIN';
export const SAVE_NEW_USER = 'SAVE_NEW_USER';
export const SIGN_IN = 'SIGN_IN';
export const SET_TOKEN = 'SET_TOKEN';

export const changeLoginField = (newValue, fieldIdentifier) => ({
  type: CHANGE_LOGIN_FIELD,
  value: newValue,
  fieldIdentifier: fieldIdentifier,
});

export const logIn = () => ({
  type: LOG_IN,
});

export const setToken = (token) => ({
  type: SET_TOKEN,
  token: token,
});

export const saveUserData = (token, roles, nickname) => ({
  type: SAVE_USER_DATA,
  token: token,
  nickname: nickname,
  roles: roles,
});

export const checkIsLogged = () => ({
  type: CHECK_IS_LOGGED,
});

export const saveLogin = () => ({
  type: SAVE_LOGIN,
});

// action type from auth middleware, got to auth reducer
export const saveNewUser = () => ({
  type: SAVE_NEW_USER,
});

export const SignIn = () => ({
  type: SIGN_IN,
});
