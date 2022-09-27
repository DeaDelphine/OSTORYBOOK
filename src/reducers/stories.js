import { FETCH_STORIES } from '../actions/stories';

export const initialState = {
  list: [],
};

const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case FETCH_STORIES:
      return {
        ...state,
        list: action.stories,
      };
    default:
      return state;
  }
};
export default reducer;
