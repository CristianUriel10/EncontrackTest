import { Navigation } from "react-native-navigation";

import Login from "./Main/Login/Login";

export function registerScreens(store, provider) {
  Navigation.registerComponentWithRedux("Login", () => Login, provider, store);
}
