import { combineReducers } from 'redux';

import storiesReducer from './stories';
import pagesReducer from './pages';

const rootReducer = combineReducers({
  // nom du tiroir : reducer qui s'en occupe
  stories: storiesReducer,
  pages: pagesReducer,

});

export default rootReducer;
