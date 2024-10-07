// reducers/storyReducer.js
import {
  GENERATE_STORY_REQUEST,
  GENERATE_STORY_SUCCESS,
  GENERATE_STORY_FAILURE,
} from "./chatgpt.types";

const initialState = {
  story: "",
  loading: false,
  error: null,
};

const ChatgptReducer = (state = initialState, action) => {
  switch (action.type) {
    case GENERATE_STORY_REQUEST:
      return { ...state, loading: true, error: null };
    case GENERATE_STORY_SUCCESS:
      return { ...state, loading: false, story: action };
    case GENERATE_STORY_FAILURE:
      return { ...state, loading: false, error: action };
    default:
      return state;
  }
};

export default ChatgptReducer;
