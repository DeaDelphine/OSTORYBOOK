import axios from 'axios';

import {
  CHANGE_USER_INPUT, clearEdit, CLEAR_USER_INPUT, FETCH_USER, setUser, userEdit,
} from '../actions/user';

// eslint-disable-next-line camelcase

const user = (store) => (next) => (action) => {
  const headers = { headers: { Authorization: `bearer ${store.getState().auth.token}` } };
  const state = store.getState();
  switch (action.type) {
    case FETCH_USER:

      axios.get(
        'http://0.0.0.0:8000/api/user/me',
        headers,
      )

        .then((response) => {
          store.dispatch(setUser(response.data.nickname, response.data.roles, response.data.email));
          console.log(response);
        })
        .catch((error) => {
          // console.log(error);
        });
      break;

    case CHANGE_USER_INPUT:
      axios.put(
        'http://0.0.0.0:8000/api/me/edit',
        {
          newNickname: state.user.nickname.toLowerCase().trim(),
          newMail: state.user.email.toLowerCase().trim(),
          oldPassword: state.user.password.trim(),
          newPassword: state.user.newPassword.trim(),
        },

      )

        .then((response) => {
          store.dispatch(userEdit());
          console.log(response);
        })
        .catch((error) => {
          // console.log(error);
        });
      break;

    case CLEAR_USER_INPUT:
      axios.delete(
        'http://0.0.0.0:8000/api/me/delete',

      )

        .then((response) => {
          store.dispatch(clearEdit());
          console.log(response);
        })
        .catch((error) => {
          // console.log(error);
        });
      break;

    default:
  }
  next(action);
};

export default user;
