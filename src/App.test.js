import React from "react";
import ReactDOM from "react-dom";
import App from "./App";

import CssBaseline from "@material-ui/core/CssBaseline";

import "./index.scss";
import * as serviceWorker from "./serviceWorker";

import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";

import reducers from "./reducers";

const createStoreWithMiddleware = applyMiddleware()(createStore);

it("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(
    <Provider
      store={createStoreWithMiddleware(reducers, composeWithDevTools())}
    >
      <CssBaseline>
        <App />
      </CssBaseline>
    </Provider>,
    div
  );
  ReactDOM.unmountComponentAtNode(div);
});
