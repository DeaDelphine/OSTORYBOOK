import axios from 'axios';

import { FETCH_USER, setUser } from '../actions/user';

// eslint-disable-next-line camelcase

const user = (store) => (next) => (action) => {
  const headers = { headers: { Authorization: `bearer ${store.getState().auth.token}` } };
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

    default:
  }
  next(action);
};

export default user;
