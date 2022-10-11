/* eslint-disable max-len */
import axios from 'axios';
import {
  LOG_IN, SAVE_LOGIN, SIGN_IN, saveNewUser,
  setToken,
} from '../actions/auth';
import { fetchUser } from '../actions/user';

const authMiddleware = (store) => (next) => (action) => {
  // console.log('on a intercepté une action dans le middleware: ', action);
  const state = store.getState();

  switch (action.type) {
    case LOG_IN:

      // console.log('authMiddleware voit passer une action LOG_IN');
      axios.post(
        'http://0.0.0.0:8000/api/login',
        {
          email: state.auth.email,
          password: state.auth.password,
        },

      )
        .then((response) => {
          store.dispatch(setToken(response.data.token));
          // api.defaults.headers.common.Authorization = `bearer ${response.data.token}`;
          // localStorage.setItem('token', response.data.token);
          store.dispatch(fetchUser());

          // const dataUser = response.data;
          // store.dispatch(saveUserData(dataUser.nickname, localStorage.getItem('token'), true));
        })
        .catch((error) => {
          console.log(error);
        });
      break;

    case SAVE_LOGIN:
      axios.get(
        'http://0.0.0.0:8000/api/user/me',
      )
        .then(
          (response) => console.log(response.data),
        )
        .catch((error) => {
          console.log(error);
        });
      break;

    case SIGN_IN:
      // console.log('authMiddleware voit passer une action LOG_IN');
      axios.post(
        'http://0.0.0.0:8000/api/register',
        {
          email: state.user.email.trim().toLowerCase(),
          password: state.user.password.trim(),
          nickname: state.user.nickname.trim(),
          // eslint-disable-next-line no-dupe-keys
          password: state.user.password,
          passwordCheck: state.user.passwordCheck,

        },
      )
        .then((response) => {
          console.log(response);
          if (response.status === 201) {
            store.dispatch(saveNewUser());
          }
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
