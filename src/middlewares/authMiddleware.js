/* eslint-disable max-len */
import axios from 'axios';
import jwtDecode from 'jwt-decode';
import Cookies from 'universal-cookie';
// import { fetchFavorites } from '../actions/stories';
import { LOG_IN, saveUserData } from '../actions/auth';
import { SIGN_IN, saveNewUser } from '../actions/user';

const cookies = new Cookies();

const api = axios.create({
  baseURL: 'http://0.0.0.0:8000',
});

const authMiddleware = (store) => (next) => (action) => {
  // console.log('on a intercepté une action dans le middleware: ', action);
  switch (action.type) {
    case LOG_IN:

      // console.log('authMiddleware voit passer une action LOG_IN');
      api.post(
        '/login',
        {
          email: store.getState().user.email,
          password: store.getState().user.password,
        },
      )
        .then((response) => {
          api.defaults.headers.common.Authorization = `bearer ${response.data.token}`;
          console.log(api.defaults.headers.common.Authorization);
          store.dispatch(saveUserData(jwtDecode(response.data.token)));
          cookies.set('cookies', response.data.token);
        })
        .catch((error) => {
          console.log(error);
        });

      break;
      case SIGN_IN:
        api.post(
          '/signin', 
          {
            nickname: state.logout.nickname.toLowerCase().trim(),
            email: state.logout.email.toLowerCase().trim(),
            password: state.logout.password.trim(),
            passwordcheck: state.logout.passwordcheck.trim(),
          })
          .then((response) => {
            store.dispatch(saveNewUser(response.data))
          })
          .catch((error) => {
            console.log(error)
          })
  
        break;

    default:
  }
  // on passe l'action au suivant (middleware suivant ou reducer)
  next(action);
};
export default authMiddleware;
