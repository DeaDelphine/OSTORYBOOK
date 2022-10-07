import { CHANGE_USER_INPUT, SIGN_IN } from '../actions/user';

export const initialState = {
  email: '',
  nickname: '',
  password: '',
  passwordcheck: '',
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
