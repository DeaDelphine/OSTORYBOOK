import { FETCH_PAGES } from '../actions/pages';

export const initialState = {
  pages: [],
};

const reducer = (state = initialState, action = {}) => {
  console.log(action);
  switch (action.type) {
    case FETCH_PAGES:
      return {
        ...state,
        pages: action.pages,
      };
    default:
      return state;
  }
};
export default reducer;
