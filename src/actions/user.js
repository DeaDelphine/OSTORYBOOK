export const CHANGE_USER_INPUT = 'CHANGE_USER_INPUT';
export const USER_EDIT = 'USER_EDIT';
export const CLEAR_EDIT = 'CLEAR_EDIT';
export const SET_USER = 'SET_USER';
export const CLEAR_USER_INPUT = 'CLEAR_USER_INPUT';
export const FETCH_USER = 'FETCH_USER';
export const FETCH_AVATAR = 'FETCH_AVATAR';
export const SET_AVATAR = 'SET_AVATAR';
export const SAVE_AVATAR = 'SAVE_AVATAR';

export const SAVE_ERROR_DATA = 'SAVE_ERROR_DATA';
export const SAVE_ERROR_PROFIL_EDIT = 'SAVE_ERROR_PROFIL_EDIT';
export const SAVE_ERROR_PROFIL_DELETE = 'SAVE_ERROR_PROFIL_DELETE';
export const CHANGE_CONTACT_INPUT = 'CHANGE_CONTACT_INPUT';

// action type for user middleware
// eslint-disable-next-line camelcase
export const setUser = (nickname, roles, email, profilePicture) => ({
  type: SET_USER,
  nickname: nickname,
  roles: roles,
  email: email,
  profilePicture: profilePicture,
});

// action type for user middleware
export const fetchUser = () => ({
  type: FETCH_USER,

});

// action type for user middleware
export const changeUserInput = (newValue, fieldIdentifier) => ({
  type: CHANGE_USER_INPUT,
  value: newValue,
  fieldIdentifier: fieldIdentifier,
});
export const changeContactInput = (value) => ({
  type: CHANGE_CONTACT_INPUT,
  value: value,
});

export const userEdit = () => ({
  type: USER_EDIT,
});

export const clearEdit = () => ({
  type: CLEAR_EDIT,
});
export const fetchAvatar = () => ({
  type: FETCH_AVATAR,

});
export const SaveAvatar = () => ({
  type: SAVE_AVATAR,

});
export const SetAvatar = (image) => ({
  type: SET_AVATAR,
  image: image,
});
export const clearUserInput = (key) => ({
  type: CLEAR_USER_INPUT,
  key,
});

export const saveErrors = (errors) => ({
  type: SAVE_ERROR_DATA,
  errors: errors,
});

export const saveErrorsProfilEdit = (errors) => ({
  type: SAVE_ERROR_PROFIL_EDIT,
  errors: errors,
});
