import { SAVE_PAGE } from '../actions/pages';

export const initialState = {
  // pageLoaded: false,
  pages: [],
};

const reducer = (state = initialState, action = {}) => {
  // console.log(action);
  switch (action.type) {
    case SAVE_PAGE:
      return {
        ...state,
        // pageLoaded: true,
        pages: action.page,
      };
    default:
      return state;
  }
};
export default reducer;
