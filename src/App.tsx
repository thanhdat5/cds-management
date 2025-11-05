import { PopupProvider } from "@common/context";
import { ConfigProvider, Flex, Spin } from "antd";
import "antd/dist/reset.css";
import viVN from "antd/locale/vi_VN";
import React from "react";
import { Provider } from "react-redux";
import { RouterProvider } from "react-router-dom";
import router from "./routes";
import { cdsTheme } from "./themes";
import "./themes/cds-theme.scss";
import store from "./app/store";

function App() {
  return (
    <Provider store={store}>
      <ConfigProvider theme={cdsTheme} locale={viVN}>
        <PopupProvider>
          <React.Suspense
            fallback={
              <Flex align="center" justify="center" style={{ height: "100vh" }}>
                <Spin size="large" />
              </Flex>
            }
          >
            <RouterProvider router={router} />
          </React.Suspense>
        </PopupProvider>
      </ConfigProvider>
    </Provider>
  );
}

export default App;
