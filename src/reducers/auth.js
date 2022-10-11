import {
  CHANGE_LOGIN_FIELD,
  SIGN_IN, SET_TOKEN,
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
        nickname: action.nickname,
        email: '',
        password: '',
        passwordcheck: '',
      };

    default:
      return state;
  }
};

export default reducer;
