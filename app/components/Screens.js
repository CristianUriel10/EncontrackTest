import { Navigation } from "react-native-navigation";

import StoryCreationScreen from "./Main/StoryCreationScreen/StoryCreationScreen";
import StoryDisplayScreen from "./Main/StoryDisplayScreen/StoryDisplayScreen";

export function registerScreens(store, provider) {
  Navigation.registerComponentWithRedux(
    "StoryCreationScreen",
    () => StoryCreationScreen,
    provider,
    store
  );
  Navigation.registerComponentWithRedux(
    "StoryDisplayScreen",
    () => StoryDisplayScreen,
    provider,
    store
  );
}
