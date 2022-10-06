/* eslint-disable max-len */
import axios from 'axios';
import jwtDecode from 'jwt-decode';
import { redirect } from 'react-router-dom';
// import Cookies from 'universal-cookie';
// import { fetchFavorites } from '../actions/stories';
import {
  LOG_IN, RedirectLogin, REDIRECT_LOGIN, saveUserData,
} from '../actions/user';

// const cookies = new Cookies();

const api = axios.create({
  baseURL: 'http://0.0.0.0:8000',
});

const authMiddleware = (store) => (next) => (action) => {
  // console.log('on a intercepté une action dans le middleware: ', action);
  const state = store.getState();

  switch (action.type) {
    case LOG_IN:

      // console.log('authMiddleware voit passer une action LOG_IN');
      api.post(
        '/api/login',
        {
          email: state.user.email,
          password: state.user.password,
        },

      )
        .then((response) => {
          api.defaults.headers.common.Authorization = `bearer ${response.data.token}`;
          localStorage.setItem('token', response.data.token);

          api.get('/api/user/me')
            .then((response) => console.log(response.data));
          store.dispatch(saveUserData(jwtDecode(response.data.token)));
          store.dispatch(RedirectLogin());
          // return redirect('/histoires');
        })
        .catch((error) => {
          console.log(error);
        });
      break;
    case REDIRECT_LOGIN:
      redirect('/histoires');
      break;
    default:
  }
  // on passe l'action au suivant (middleware suivant ou reducer)
  next(action);
};
export default authMiddleware;
