export const CHANGE_USER_INPUT = 'CHANGE_USER_INPUT';
export const USER_EDIT = 'USER_EDIT';
export const CLEAR_EDIT = 'CLEAR_EDIT';
export const SET_USER = 'SET_USER';
export const CLEAR_USER_INPUT = 'CLEAR_USER_INPUT';
export const FETCH_USER = 'FETCH_USER';

export const changeUserInput = (newValue, fieldIdentifier) => ({
  type: CHANGE_USER_INPUT,
  value: newValue,
  fieldIdentifier: fieldIdentifier,
});

export const userEdit = () => ({
  type: USER_EDIT,
});

export const clearEdit = () => ({
  type: CLEAR_EDIT,
});

export const setUser = (userData) => ({
  type: SET_USER,
  name: userData.name,
  mail: userData.mail,
});

export const fetchUser = () => ({
  type: FETCH_USER,
});

export const clearUserInput = (key) => ({
  type: CLEAR_USER_INPUT,
  key,
});
