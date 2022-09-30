import { SAVE_PAGE } from '../actions/pages';

export const initialState = {
  pages: [],
};

const reducer = (state = initialState, action = {}) => {
  // console.log(action);
  switch (action.type) {
    case SAVE_PAGE:
      return {
        ...state,
        pages: action.page,
      };
    default:
      return state;
  }
};
export default reducer;
