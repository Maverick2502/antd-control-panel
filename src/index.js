import { ConfigProvider } from "antd";
import ru_RU from "antd/lib/locale/ru_RU";
import React from "react";
import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import { store } from "./store";

// initialization axios baseUrl
import "./utils";

// styles
import "./antd.config.less";
import "./fonts/inter.css";

const container = document.getElementById("root");
const root = createRoot(container);
root.render(
  <BrowserRouter>
    <ConfigProvider locale={ru_RU}>
      <Provider store={store}>
        <App />
      </Provider>
    </ConfigProvider>
  </BrowserRouter>
);
