/* eslint-disable max-len */
import axios from 'axios';

import { USER_DELETE } from '../actions/auth';

import {
  FETCH_AVATAR,
  FETCH_USER, saveErrorsProfilEdit, SetAvatar, setUser, USER_EDIT,
} from '../actions/user';

// eslint-disable-next-line camelcase

const user = (store) => (next) => (action) => {
  const headers = { headers: { Authorization: `bearer ${localStorage.getItem('token') || store.getState().auth.token}` } };

  const state = store.getState();
  switch (action.type) {
    case FETCH_USER:

      axios.get('http://0.0.0.0:8000/api/user/me', headers)

        .then((response) => {
          store.dispatch(setUser(response.data.nickname, response.data.roles, response.data.email, response.data.profilePicture));
        });

      break;

    case USER_EDIT:
      axios.put(
        'http://0.0.0.0:8000/api/user/me/edit',

        {
          nickname: state.user.Newnickname,
          email: state.user.Newemail,
          password: state.user.Newpassword,
          profilePicture: state.user.newProfilePicture,
        },
        headers,
      )

        .then((response) => {
          store.dispatch(saveErrorsProfilEdit(response));
        })
        .catch((error) => {
          store.dispatch(saveErrorsProfilEdit(error.response));
        });
      break;

    case USER_DELETE:
      axios.delete('http://0.0.0.0:8000/api/user/me/delete', headers)

        .then(() => {
          localStorage.clear();
          window.location.href = '/';
        });

      break;
    case FETCH_AVATAR:
      axios.get('http://0.0.0.0:8000/api/personnages', headers)

        .then((response) => {
          store.dispatch(SetAvatar(response.data));
        });

      break;

    default:
  }
  next(action);
};

export default user;
