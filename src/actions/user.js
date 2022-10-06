export const CHANGE_SIGNIN_FIELD = 'CHANGE_SIGNIN_FIELD';
export const SIGN_IN = 'SIGN_IN';
export const SAVE_NEW_USER = 'SAVE_NEW_USER';


export const changeSigninField = (newValue, fieldIdentifier) => ({
  type: CHANGE_SIGNIN_FIELD,
  value: newValue,
  fieldIdentifier: fieldIdentifier,
});

export const signIn = () => ({
  type: SIGN_IN,
});

export const saveNewUser = () => ({
  type: SAVE_NEW_USER,
});
