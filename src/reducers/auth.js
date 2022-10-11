import {
  CHANGE_LOGIN_FIELD,
  SIGN_IN, SET_TOKEN, SAVE_NEW_USER, LOGOUT,
  USER_DELETE,
} from '../actions/auth';

export const initialState = {
  email: '',
  nickname: '',
  password: '',
  passwordcheck: '',
  token: '',
  logged: false,
  loggedMessage: 'Vous êtes bien connectés !',
};

const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case CHANGE_LOGIN_FIELD:
      // si le champ concerné par le changement est celui de l'e-mail
      if (action.fieldIdentifier === 'email') {
        return {
          ...state,
          email: action.value,
        };
      }
      return {
        ...state,
        password: action.value,
      };

    case SET_TOKEN: {
      return {
        ...state,
        token: action.token,
        logged: true,
      };
    }

    case SIGN_IN:
      return {
        ...state,
        email: action.value,
        nickname: action.value,
        password: action.value,
        passwordcheck: action.value,
      };
    case SAVE_NEW_USER:
      return {
        ...state,
        email: '',
        nickname: '',
        password: '',
        passwordcheck: '',
      };
    case LOGOUT: {
      return {
        ...state,
        username: '',
        isLogged: false,
      };
    }
    case USER_DELETE: {
      return {
        ...state,
        isLogged: false,
        connectedId: 0,
      };
    }

    default:
      return state;
  }
};

export default reducer;
