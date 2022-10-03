import { CHANGE_LOGIN_FIELD, SAVE_USER_DATA } from '../actions/user';

export const initialState = {
  logged: false,
  // contenu du champ email du formulaire de login
  email: '',
  // contenu du champ password du formulaire de login
  password: '',
  // le pseudo de l'utilisateur (disponible quand il est connecté)
  nickname: '',
  token: '',
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
      // else implicite : si on arrive à cette ligne c'est que forcément on n'est pas
      // passé dans le if
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
        // pour la sécurité, on en profite pour effacer email
        // et password (ils ne sont plus nécessaires)
        email: '',
        password: '',
      };

    default:
      return state;
  }
};

export default reducer;
