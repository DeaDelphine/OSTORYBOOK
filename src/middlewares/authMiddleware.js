/* eslint-disable max-len */
import axios from 'axios';
import {
  LOG_IN, SIGN_IN, saveNewUser,
  setToken,
  saveErrorsSignIn,
} from '../actions/auth';
import { fetchUser, saveErrors } from '../actions/user';

const authMiddleware = (store) => (next) => (action) => {
  const state = store.getState();

  switch (action.type) {
    case LOG_IN:

      axios.post(
        'http://0.0.0.0:8000/api/login',
        {
          email: state.auth.emailAuth,
          password: state.auth.passwordAuth,
        },

      )
        .then((response) => {
          store.dispatch(setToken(response.data.token));
          axios.defaults.headers.common.Authorization = `bearer ${response.data.token}`;
          localStorage.setItem('token', response.data.token);
        })
        .then(() => {
          store.dispatch(fetchUser());
        })
        .catch((error) => {
          store.dispatch(saveErrors(error.response.data));
        });
      break;

    case SIGN_IN:

      axios.post(
        'http://0.0.0.0:8000/api/register',
        {
          email: state.auth.email.toLowerCase(),
          nickname: state.auth.nickname,
          password: state.auth.password,
          passwordCheck: state.auth.passwordCheck,

        },
      )
        .then((response) => {
        // console.log(response);
          if (response.status === 201) {
            store.dispatch(saveNewUser());
            store.dispatch(saveErrorsSignIn(response));
          }
        })
        .catch((error) => {
          store.dispatch(saveErrorsSignIn(error.response));
        });

      break;
    default:
  }

  next(action);
};
export default authMiddleware;
