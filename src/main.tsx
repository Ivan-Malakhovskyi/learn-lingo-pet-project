import React from "react";
import ReactDOM from "react-dom/client";
import App from "./components/App.js";
import "./fonts/Roboto/Roboto-Bold.ttf";
import "./fonts/Roboto/Roboto-Medium.ttf";
import "./fonts/Roboto/Roboto-Regular.ttf";
import "./font.css";
import "./index.css";
import { ThemeProvider } from "styled-components";
import { theme } from "./GlobalStyle.ts";
import { BrowserRouter } from "react-router-dom";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <App />
      </ThemeProvider>
    </BrowserRouter>
  </React.StrictMode>
);
