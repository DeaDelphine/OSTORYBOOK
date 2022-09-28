import { FETCH_STORIES, SAVE_STORIES } from '../actions/stories';

export const initialState = {
  list: [],
  storiesLoaded: false,
  story: [],

};

const reducer = (state = initialState, action = {}) => {
  console.log(action);
  switch (action.type) {
    case SAVE_STORIES:
      return {
        ...state,
        list: action.stories,
        storiesLoaded: true,
        story: action.stories,
      };
    default:
      return state;
  }
};
export default reducer;
