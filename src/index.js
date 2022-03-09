import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { Provider } from "react-redux";
import { store } from "./store";
import { BrowserRouter } from "react-router-dom";
import { ConfigProvider } from "antd";
import ru_RU from "antd/lib/locale/ru_RU";

// initialization axios baseUrl
import "./utils";

// styles
import "./antd.config.less";
import "./fonts/inter.css";

ReactDOM.render(
  <BrowserRouter>
    <ConfigProvider locale={ru_RU}>
      <Provider store={store}>
        <App />
      </Provider>
    </ConfigProvider>
  </BrowserRouter>,
  document.getElementById("root")
);
