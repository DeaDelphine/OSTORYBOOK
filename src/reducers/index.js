import { combineReducers } from 'redux';

import storiesReducer from './stories';
import pagesReducer from './pages';
import authReducer from './auth';
import userReducer from './user';

const rootReducer = combineReducers({

  stories: storiesReducer,
  pages: pagesReducer,
  user: userReducer,
  auth: authReducer,
});

export default rootReducer;
