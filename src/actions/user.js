export const CHANGE_LOGIN_FIELD = 'CHANGE_LOGIN_FIELD';
export const LOG_IN = 'LOG_IN';
export const SAVE_USER_DATA = 'SAVE_USER_DATA';

export const changeLoginField = (newValue, fieldIdentifier) => ({
  type: CHANGE_LOGIN_FIELD,
  value: newValue,
  fieldIdentifier: fieldIdentifier,
});

export const logIn = () => ({
  type: LOG_IN,
});

export const saveUserData = (nickname, token, logged) => ({
  type: SAVE_USER_DATA,
  nickname: nickname,
  token: token,
  logged: logged,
});