import React from "react";
import { Provider } from "react-redux";
import store from "./store";
import "./style/global.scss";
import Routes from "./routes";

const App: React.FC = () => {
  return (
    <Provider store={store}>
      <Routes />
    </Provider>
  );
};

export default App;
