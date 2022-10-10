import {
  CHANGE_LOGIN_FIELD, LOG_IN, SAVE_USER_DATA, SET_TOKEN,
} from '../actions/auth';

export const initialState = {
  logged: false,
  // contenu du champ email du formulaire de login
  email: '',
  // contenu du champ password du formulaire de login
  password: '',
  // le pseudo de l'utilisateur (disponible quand il est connecté)
  nickname: '',
  loggedMessage: 'Vous êtes bien connectés !',
  roles: '',
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
    // case LOG_IN:
    //   return {
    //     ...state,
    //     token: action.token,
    //     logged: true,
    //   };

    // case SAVE_USER_DATA:
    //   return {
    //     ...state,
    //     nickname: action.nickname,
    //     // token: action.token,
    //     logged: true,
    //     email: '',
    //     password: '',
    //     roles: action.roles,
    //   };

    default:
      return state;
  }
};

export default reducer;
