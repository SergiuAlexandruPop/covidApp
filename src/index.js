import React, { Suspense } from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";

import Spinner from "./components/spinner/spinner.component";

import "./index.css";

import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import logger from "redux-logger";

import App from "./App";
import reducers from "./reducers";

const store = createStore(reducers, applyMiddleware(logger, thunk));

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <Suspense fallback={<Spinner />}>
        <App />
      </Suspense>
    </BrowserRouter>
  </Provider>,
  document.querySelector("#root")
);
