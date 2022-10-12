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

      if (action.fieldIdentifier === 'oldpassword') {
        return {
          ...state,
          Oldpassword: action.value,
        };
      }

      return {
        ...state,
        Newpassword: action.value,
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
