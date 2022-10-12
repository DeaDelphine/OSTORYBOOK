import {
  CHANGE_USER_INPUT, SET_USER, CLEAR_EDIT,
  CLEAR_USER_INPUT,
} from '../actions/user';

export const initialState = {
  // le pseudo de l'utilisateur (disponible quand il est connecté)
  nickname: '',
  // contenu du champ email du formulaire de profil
  email: '',
  // contenu du champ password du formulaire de login
  password: '',
  roles: '',
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
        Oldpassword: action.value,
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

    default:
      return state;
  }
};

export default reducer;
