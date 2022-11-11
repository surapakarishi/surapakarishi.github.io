import { StrictMode } from "react";
import ReactDOM from "react-dom";
import fontawesome from "./fontawesome";
import App from "./App";
import Store from "./Store";
import { Provider } from "react-redux";
const rootElement = document.getElementById("root");
ReactDOM.render(
  <StrictMode>
    <Provider store={Store} >
    <App />
    </Provider>
  </StrictMode>,
  rootElement
);
