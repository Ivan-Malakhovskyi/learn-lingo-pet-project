import React from "react";
import ReactDOM from "react-dom/client";
import App from "./components/App.jsx";
import "./fonts/Roboto/Roboto-Bold.ttf";
import "./fonts/Roboto/Roboto-Medium.ttf";
import "./fonts/Roboto/Roboto-Regular.ttf";
import "./font.css";
import "./index.css";
import { ThemeProvider } from "styled-components";
import { theme } from "./GlobalStyle.ts";
import { BrowserRouter } from "react-router-dom";

//! Поставити ! після ('root')
//! Перейменувати файл

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter basename="/learn-lingo-pet-project">
      <ThemeProvider theme={theme}>
        <App />
      </ThemeProvider>
    </BrowserRouter>
  </React.StrictMode>
);
