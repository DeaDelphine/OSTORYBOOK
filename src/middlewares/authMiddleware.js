/* eslint-disable max-len */
import axios from 'axios';
import { fetchPages } from '../actions/pages';
// import { fetchFavorites } from '../actions/stories';
import { LOG_IN, saveUserData } from '../actions/user';

const authMiddleware = (store) => (next) => (action) => {
  // console.log('on a intercepté une action dans le middleware: ', action);
  switch (action.type) {
    case LOG_IN:
      // console.log('authMiddleware voit passer une action LOG_IN');
      axios.post(
        'http://0.0.0.0:8000/login',
        {
          email: store.getState().user.email,
          password: store.getState().user.password,
        },
      )
        .then((response) => {
          // console.log(response);
          // console.log(`nickname: ${response.data.pseudo}, token: ${response.data.token}, logged: ${response.data.logged}`);
          store.dispatch(
            saveUserData(response.data.nickname, response.data.token, response.data.logged),
          );

          // on dispatch une action pour aller chercher les recettes préférées de l'utilisateur
          store.dispatch(fetchPages());
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
