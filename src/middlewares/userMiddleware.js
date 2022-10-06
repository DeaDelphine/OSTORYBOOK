/* eslint-disable max-len */
import axios from 'axios';
import jwtDecode from 'jwt-decode';
import { redirect } from 'react-router-dom';
// import Cookies from 'universal-cookie';
// import { fetchFavorites } from '../actions/stories';
import {
  FETCH_USER, setUser, USER_EDIT, clearEdit,
} from '../actions/user';
import { saveUser } from '../actions/auth';

// const cookies = new Cookies();

const api = axios.create({
  baseURL: 'http://0.0.0.0:8000',
});

const authMiddleware = (store) => (next) => (action) => {
  // console.log('on a intercepté une action dans le middleware: ', action);
  const state = store.getState();

  switch (action.type) {
    case FETCH_USER:

      // console.log('authMiddleware voit passer une action LOG_IN');
      api.get(
        '/api/user',
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem('user')}`,
          },
        },

      )
        .then((response) => {
          store.dispatch(setUser(response.data));
        })
        .catch((error) => {
          console.log(error);
        });
      break;

    case USER_EDIT:
      api.put(
        '/api/user/edit',
        {
          newName: state.user.username.toLowerCase().trim(),
          newMail: state.user.email.toLowerCase().trim(),
          oldPassword: state.user.password.trim(),
          newPassword: state.user.newPassword.trim(),
        },
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem('user')}`,
          },
        },
      )
        .then((response) => {
          console.log(response);
        })
        .catch((error) => {
          console.log(error);
        });
      break;

    default:
  }
  // on passe l'action au suivant (middleware suivant ou reducer)
  next(action);
};
export default authMiddleware;
