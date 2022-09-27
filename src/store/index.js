import { legacy_createStore as createStore } from 'redux';

import reducer from 'src/reducers';

const store = createStore(reducer);

export default store;
