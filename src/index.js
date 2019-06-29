import React from "react";
import ReactDOM from "react-dom";

import { IntlWrapper } from "./components/IntlWrapper";
import App from "./App";
import { Provider } from "react-redux";
import store from "./store";

ReactDOM.render(
  <Provider store={store}>
    <IntlWrapper>
      <App country="India" />
    </IntlWrapper>
  </Provider>,
  document.getElementById("app-without-cli")
);
