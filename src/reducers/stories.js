import { SAVE_STORIES } from '../actions/stories';

export const initialState = {
  stories: [],
};

const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case SAVE_STORIES:
      return {
        ...state,
        stories: action.stories,
      };
    default:
      return state;
  }
};
export default reducer;
