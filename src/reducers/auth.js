import { CHANGE_LOGIN_FIELD, SAVE_USER_DATA } from '../actions/auth';

export const initialState = {
  logged: false,
  // contenu du champ email du formulaire de login
  email: '',
  // contenu du champ password du formulaire de login
  password: '',
  // le pseudo de l'utilisateur (disponible quand il est connecté)
  nickname: '',
  token: '',
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

    case SAVE_USER_DATA:
      return {
        ...state,
        nickname: action.nickname,
        token: action.token,
        logged: action.logged,
        email: '',
        password: '',
      };

    default:
      return state;
  }
};

export default reducer;
