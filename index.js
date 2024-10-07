/**
 * @format
 */

import { Navigation } from "react-native-navigation";
import App from "./App";
import firebase from "@react-native-firebase/app";
import "@react-native-firebase/firestore";
import { RNfirebaseConfig } from "./app/redux/Chatgpt/chatgpt.api";

if (firebase.apps.length === 0) {
  app = firebase.initializeApp(RNfirebaseConfig);
} else {
  app = firebase.app();
}

Navigation.registerComponent("Main", () => App);
Navigation.events().registerAppLaunchedListener(() => {
  Navigation.setDefaultOptions({
    topBar: {
      visible: false,
      drawBehind: true,
    },
    layout: {
      orientation: ["portrait"],
    },
  });

  Navigation.setRoot({
    root: {
      stack: {
        children: [
          {
            component: {
              name: "Main",
            },
          },
        ],
      },
    },
  });
});
