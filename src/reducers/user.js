import { CHANGE_SIGNIN_FIELD, SAVE_NEW_USER } from '../actions/user';

export const initialState = {
  email: '',
  nickname: '',
  password: '',
  passwordcheck: '',
};

const reducer = (state = initialState, action = {}) => {
  switch (action.type) {

    case CHANGE_SIGNIN_FIELD:
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
    

    case SAVE_NEW_USER:
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
