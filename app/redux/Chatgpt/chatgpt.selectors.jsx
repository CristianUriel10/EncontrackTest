// Selector for lead reducer.

/**
 * Get the status of the login.
 * @param  {Object} state reducer data for update hermes properties..
 */
export const selectStory = (state) => state.ChatgptReducer.story.payload;
export const selectLoading = (state) => state.story.loading;
export const selectError = (state) => state.story.error;
