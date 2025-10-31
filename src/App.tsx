import router from "@/routes";
import { ConfigProvider, Spin } from "antd";
import "antd/dist/reset.css";
import "./App.scss";
import viVN from "antd/locale/vi_VN";
import React from "react";
import { Provider } from "react-redux";
import { RouterProvider } from "react-router-dom";
import store from "@/app/store";
import { PopupProvider } from "@/common/context";
import { defaultTheme } from "./themes/default-theme";

function App() {
  return (
    <Provider store={store}>
      <ConfigProvider theme={defaultTheme} locale={viVN}>
        <PopupProvider>
          <React.Suspense
            fallback={
              <div
                style={{
                  height: "100vh",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <Spin size="large" />
              </div>
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
