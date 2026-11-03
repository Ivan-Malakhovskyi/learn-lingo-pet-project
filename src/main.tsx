import React from "react";
import ReactDOM from "react-dom/client";
import App from "./components/App.js";
import "./fonts/Roboto/Roboto-Bold.ttf";
import "./fonts/Roboto/Roboto-Medium.ttf";
import "./fonts/Roboto/Roboto-Regular.ttf";
import "./font.css";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import { PersistGate } from "redux-persist/integration/react";
import { Provider } from "react-redux";
import { CustomThemeProvider } from "./CustomThemeProvider.tsx";
import { persistor, store } from "./redux/store.ts";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <BrowserRouter>
          <CustomThemeProvider>
            <App />
          </CustomThemeProvider>
        </BrowserRouter>
      </PersistGate>
    </Provider>
  </React.StrictMode>,
);
