import { createStore, applyMiddleware, compose } from "redux";
import thunkMiddleware from "redux-thunk";
import logger from "redux-logger";
import reducer from "./app/redux/Reducers";
import { registerScreens } from "./app/components/Screens";
import { Provider } from "react-redux";
import { Text, View } from "react-native";
import "@react-native-firebase/firestore";

function configureStore(initialState) {
  const enhancer = compose(applyMiddleware(thunkMiddleware, logger));
  return createStore(reducer, initialState, enhancer);
}

const store = configureStore({});

registerScreens(store, Provider);

const App = () => {
  return (
    <View>
      <Text>Holiii</Text>
    </View>
  );
};

export default App;
