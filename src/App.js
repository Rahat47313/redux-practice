import { Provider } from "react-redux";
import store from "./redux/store";
import CakeContainerNoHook from "./components/CakeContainerNoHook";
import CakeContainer from "./components/CakeContainer";
import IceCreamContainer from "./components/IceCreamContainer";
import PizzaContainer from "./components/PizzaContainer";
import CakeContainerPayload from "./components/CakeContainerPayload";
import ItemContainer from "./components/ItemContainer";
import UserContainer from "./components/UserContainer";

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <UserContainer />
        <ItemContainer cake />
        <ItemContainer />
        <CakeContainerNoHook />
        <CakeContainerPayload />
        <CakeContainer />
        <IceCreamContainer />
        <PizzaContainer />
      </div>
    </Provider>
  );
}

export default App;
