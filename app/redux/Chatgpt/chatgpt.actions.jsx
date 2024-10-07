// actions/storyActions.js
import {
  GENERATE_STORY_REQUEST,
  GENERATE_STORY_SUCCESS,
  GENERATE_STORY_FAILURE,
} from "./chatgpt.types";

// Api
import { generateStory as apiGenerateStory } from "./chatgpt.api";

export const generateStory =
  (startType, developmentType, endType) => async (dispatch) => {
    dispatch({ type: GENERATE_STORY_REQUEST });

    try {
      const response = await apiGenerateStory(
        startType,
        developmentType,
        endType
      );
      dispatch({
        type: GENERATE_STORY_SUCCESS,
        payload: response.choices[0].message.content,
      });
    } catch (error) {
      dispatch({
        type: GENERATE_STORY_FAILURE,
        payload: error.message || "Error al generar la historia",
      });
    }
  };
