import axios from 'axios';

import { FETCH_STORIES, saveStories } from '../actions/stories';
import { FETCH_PAGES, savePage } from '../actions/pages';

const storiesMiddleware = (store) => (next) => (action) => {
  const headers = { headers: { Authorization: `bearer ${localStorage.getItem('token') || store.getState().auth.token}` } };

  switch (action.type) {
    case FETCH_STORIES:

      axios.get('http://0.0.0.0:8000/api/histoire', headers)

        .then((response) => {
          store.dispatch(saveStories(response.data));
        });

      break;
    case FETCH_PAGES:

      axios.get(`http://0.0.0.0:8000/api/histoire/${action.story}/page/${action.startPage}`, headers)
        .then((response) => {
          store.dispatch(savePage(response.data));
        });

      break;

    default:
  }

  next(action);
};

export default storiesMiddleware;
