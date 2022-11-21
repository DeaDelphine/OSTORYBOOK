import { SAVE_PAGE } from '../actions/pages';

export const initialState = {
  page: [],
};

const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case SAVE_PAGE:
      return {
        ...state,
        page: action.page,

      };
    default:
      return state;
  }
};
export default reducer;
