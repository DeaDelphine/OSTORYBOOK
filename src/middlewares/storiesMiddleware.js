import axios from 'axios';

import { FETCH_STORIES, saveStories } from '../actions/stories';
import { FETCH_PAGES, savePage } from '../actions/pages';

const storiesMiddleware = (store) => (next) => (action) => {
  switch (action.type) {
    case FETCH_STORIES:

      axios.get('http://0.0.0.0:8000/api/histoire')
        .then((response) => {
          // console.log(response);

          // conseil : vérifier qu'on cible bien les infos dans la réponse
          // avec un console.log avant d'écrire le dispatch
          // console.log(response.data);

          store.dispatch(saveStories(response.data));
        })
        .catch((error) => {
          // console.log(error);
        });

      break;
    case FETCH_PAGES:
      // console.log(action.page_id);
      axios.get(`http://0.0.0.0:8000/api/histoire/${action.story}/page/${action.startPage}`)
        .then((response) => {
          // console.log(response.data);

          store.dispatch(savePage(response.data));
        })
        .catch((error) => {
          // console.log(error);
        });

      break;

    default:
  }

  next(action);
};

export default storiesMiddleware;
