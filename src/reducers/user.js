import {
  CHANGE_USER_INPUT, SET_USER, CLEAR_EDIT,
  CLEAR_USER_INPUT,
} from '../actions/user';
import { SIGN_IN } from '../actions/auth';

export const initialState = {
  email: '',
  nickname: '',
  password: '',
  passwordcheck: '',
  roles: '',
  token: '',
  logged: false,
};

const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case CHANGE_USER_INPUT:
      // si le champ concerné par le changement est celui de l'e-mail
      if (action.fieldIdentifier === 'email') {
        return {
          ...state,
          email: action.value,
        };
      }

      if (action.fieldIdentifier === 'nickname') {
        return {
          ...state,
          nickname: action.value,
        };
      }

      if (action.fieldIdentifier === 'password') {
        return {
          ...state,
          password: action.value,
        };
      }

      return {
        ...state,
        passwordcheck: action.value,
      };

    case SET_USER: {
      return {
        ...state,
        nickname: action.nickname,
        email: action.email,
        roles: action.roles,
        logged: true,
      };
    }
    case CLEAR_EDIT: {
      return {
        ...state,
        password: '',
      };
    }
    case CLEAR_USER_INPUT: {
      return {
        ...state,
        [action.key]: '',
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
