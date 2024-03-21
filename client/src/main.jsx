import { render } from "preact";
import { App } from "./app.jsx";
import { Provider } from "react-redux";
import { applyMiddleware, compose } from "redux";
import { createStore } from "redux";
import thunk from "redux-thunk";
import { Reducers } from "./Reducers";
import "./index.css";

const store = createStore(Reducers, compose(applyMiddleware(thunk)));

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("app")
);
