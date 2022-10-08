import axios from 'axios';

import { FETCH_STORIES, saveStories } from '../actions/stories';
import { FETCH_PAGES, savePage } from '../actions/pages';

const headers = { headers: { Authorization: `bearer ${localStorage.getItem('token')}` } };

const storiesMiddleware = (store) => (next) => (action) => {
  switch (action.type) {
    case FETCH_STORIES:

      axios.get('http://0.0.0.0:8000/api/histoire', headers)

        .then((response) => {
          store.dispatch(saveStories(response.data));
        })
        .catch((error) => {
          // console.log(error);
        });

      // eslint-disable-next-line no-case-declarations
      const reloadCount = localStorage.getItem('reloadCount');
      if (reloadCount < 1) {
        localStorage.setItem('reloadCount', (reloadCount + 1));
        window.location.reload();
      }
      else {
        localStorage.removeItem('reloadCount');
      }

      break;
    case FETCH_PAGES:
      // console.log(action.page_id);
      axios.get(`http://0.0.0.0:8000/api/histoire/${action.story}/page/${action.startPage}`, headers)
        .then((response) => {
          console.log(response.data);

          store.dispatch(savePage(response.data));
        })
        .catch((error) => {
          console.log(error);
        });

      break;

    default:
  }

  next(action);
};

export default storiesMiddleware;
