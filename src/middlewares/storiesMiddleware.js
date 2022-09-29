import axios from 'axios';

import { FETCH_STORIES, saveStories } from '../actions/stories';

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
          console.log(error);
        });

      break;
    default:
  }

  next(action);
};

export default storiesMiddleware;
