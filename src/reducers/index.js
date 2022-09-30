import { combineReducers } from 'redux';

import storiesReducer from './stories';

const rootReducer = combineReducers({
  // nom du tiroir : reducer qui s'en occupe
  stories: storiesReducer,

});

export default rootReducer;
