import {
  CHANGE_USER_INPUT, SET_USER,
  SAVE_ERROR_DATA,
  SAVE_ERROR_PROFIL_EDIT,
  CHANGE_CONTACT_INPUT,
  SET_AVATAR,
} from '../actions/user';

export const initialState = {
  nickname: '',
  email: '',
  password: '',
  roles: '',
  logged: false,
  passwordcheck: '',
  image: [],
  profilePicture: '',
  newProfilePicture: '',
};

const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case CHANGE_USER_INPUT:
      if (action.fieldIdentifier === 'newemail') {
        return {
          ...state,
          Newemail: action.value,
        };
      }

      if (action.fieldIdentifier === 'newnickname') {
        return {
          ...state,
          Newnickname: action.value,
        };
      }

      if (action.fieldIdentifier === 'passwordcheck') {
        return {
          ...state,
          passwordcheck: action.value,
        };
      }
      if (action.fieldIdentifier === 'image') {
        return {
          ...state,
          newProfilePicture: action.value,
        };
      }

      return {
        ...state,
        Newpassword: action.value,
      };
    case CHANGE_CONTACT_INPUT:
      return {
        ...state,
        email: '',
        subject: '',
        message: '',
      };
    case SET_AVATAR:
      return {
        ...state,
        image: action.image,
      };

    case SET_USER: {
      return {
        ...state,
        nickname: action.nickname,
        email: action.email,
        roles: action.roles,
        profilePicture: action.profilePicture,
        logged: true,
      };
    }

    case SAVE_ERROR_DATA:
      return {
        ...state,
        errors: action.errors,
      };
    case SAVE_ERROR_PROFIL_EDIT:
      return {
        ...state,
        errors: action.errors,
      };

    default:
      return state;
  }
};

export default reducer;
