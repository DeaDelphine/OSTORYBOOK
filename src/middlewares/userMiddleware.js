import axios from 'axios';
import { deleteUser, USER_DELETE } from '../actions/auth';

import {
  CHANGE_USER_INPUT, CLEAR_USER_INPUT, FETCH_USER, setUser, userEdit, USER_EDIT,
} from '../actions/user';

// eslint-disable-next-line camelcase
const user = (store) => (next) => (action) => {
  const headers = { headers: { Authorization: `bearer ${localStorage.getItem('token') || store.getState().auth.token}` } };
  // const headers = { headers: { Authorization: `bearer ${store.getState().auth.token}` } };
  const state = store.getState();
  switch (action.type) {
    case FETCH_USER:

      axios.get('http://0.0.0.0:8000/api/user/me', headers)

        .then((response) => {
          store.dispatch(setUser(response.data.nickname, response.data.roles, response.data.email));
          console.log(response);
        })
        .catch((error) => {
          // console.log(error);
        });
      break;

    case USER_EDIT:
      axios.put(
        'http://0.0.0.0:8000/api/user/me/edit',

        {
          newNickname: state.user.Newnickname,
          newMail: state.user.Newemail,
          oldPassword: state.user.Oldpassword,
          newPassword: state.user.Newpassword,
        },
        headers,
      )

        .then((response) => {
          console.log(response);
        })
        .catch((error) => {
          // console.log(error);
        });
      break;

    case USER_DELETE:
      axios.delete('http://0.0.0.0:8000/api/user/me/delete', headers)

        .then((response) => {
          // store.dispatch(deleteUser());
          // localStorage.removeItem('user');
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
