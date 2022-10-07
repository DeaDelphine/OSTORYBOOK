/* eslint-disable max-len */
import axios from 'axios';
import { LOG_IN, saveUserData, SAVE_LOGIN } from '../actions/auth';

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
          const dataUser = response.data;
          store.dispatch(saveUserData(dataUser.nickname, localStorage.getItem('token'), true));
          // store.dispatch(RedirectLogin());
        // return redirect('/histoires');
        })
        .catch((error) => {
          console.log(error);
        });
      break;

    case SAVE_LOGIN:
      api.get(
        '/api/user/me',
      )
        .then(
          (response) => console.log(response.data),
        )
        .catch((error) => {
          console.log(error);
        });
      break;

    // case REDIRECT_LOGIN:
    //   redirect('/histoires');
    //   break;
    default:
  }
  // on passe l'action au suivant (middleware suivant ou reducer)
  next(action);
};
export default authMiddleware;
