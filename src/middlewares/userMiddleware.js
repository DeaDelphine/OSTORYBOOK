import axios from 'axios';
import { saveUserData, SAVE_USER_DATA } from '../actions/auth';
import { fetchUser, FETCH_USER, setUser } from '../actions/user';

// eslint-disable-next-line camelcase

const headers = { headers: { Authorization: `bearer ${localStorage.getItem('token')}` } };

const user = (store) => (next) => (action) => {
  switch (action.type) {
    case FETCH_USER:
      axios.get(
        'http://0.0.0.0:8000/api/user/me',
        headers,
      )

        .then((response) => {
          store.dispatch(setUser(response.data.token));
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
