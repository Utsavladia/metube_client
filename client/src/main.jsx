import { render } from "preact";
import { App } from "./app.jsx";
import { GoogleOAuthProvider } from "@react-oauth/google";
import store from "./store/store.js";
import { Provider } from "react-redux";
import "./index.css";

render(
  <Provider store={store}>
    <GoogleOAuthProvider clientId="521209109581-sgv944c36o7uo5vt1k1b70ge7a9s5te1.apps.googleusercontent.com">
      <App />
    </GoogleOAuthProvider>
  </Provider>,
  document.getElementById("app")
);
