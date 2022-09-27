import { combineReducers } from 'redux';

import historiesReducer from './histories';

const rootReducer = combineReducers({
  // nom du tiroir : reducer qui s'en occupe
  histories: historiesReducer,
});

export default rootReducer;
