import React from "react";
import { Provider } from "react-redux";
import Hero from "./components/Hero/Hero";
import { store } from "./store";
import "./style.css";

const Header = React.lazy(() => import("app1/Header"));

const app = () => {
  return (
    <Provider store={store}>
      <div className="main-container">
        <h1>Container App</h1>
        <React.Suspense fallback="Loading header">
          <Header title={"title from container"}>Hello this is App 2</Header>
        </React.Suspense>
        <Hero />
      </div>
    </Provider>
  );
};

export default app;
