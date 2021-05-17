import React from "react";
import { Provider } from "react-redux";
import { store } from "./store";
import Header from "./Header";
import "./style.css";

const app = () => {
  return (
    <Provider store={store}>
      Hello 123
      <Header />
    </Provider>
  );
};

export default app;
